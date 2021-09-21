// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./CoolbeezToken.sol";

contract CustomOwnable
{
	address public owner;

	event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

	constructor(address _owner)
	{
		require (_owner != address(0));
		owner = _owner;
	}

	modifier onlyOwner()
	{
		require(msg.sender == owner);
		_;
	}

	function transferOwnership(address newOwner) public onlyOwner
	{
		require(newOwner != address(0));
		emit OwnershipTransferred(owner, newOwner);
		owner = newOwner;
	}
}

interface IUniswapV2Router {
    function addLiquidity(
        address tokenA,
        address tokenB,
        uint amountADesired,
        uint amountBDesired,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline
    )
        external
        returns (
            uint amountA,
            uint amountB,
            uint liquidity
        );

    function removeLiquidity(
        address tokenA,
        address tokenB,
        uint liquidity,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline
    ) external returns (uint amountA, uint amountB);
}

interface IUniswapV2Factory {
    function getPair(address token0, address token1) external view returns (address);
}

contract Treasurey is CustomOwnable
{
	using SafeMath for uint256;

    address private constant FACTORY = 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f;
    address private constant ROUTER = 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D;
    address private constant WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;

	/* EVENTS  */
	event depositEvent(address from, uint256 amount);
	event withdrawEvent(address to, uint256 amount);

	CoolbeezToken public token;
    ERC20 public eth;

	constructor(address _token, address _admin) CustomOwnable(_admin)
	{
		require(_token != address(0) );
		token = CoolbeezToken(_token);
	}

    function deposit(uint256 amount) external {
        require(token.balanceOf(msg.sender) >= amount, "User does not have enough tokens");
		require(token.transferFrom(msg.sender, address(this), amount), "User did not approve token transfer.");
        emit depositEvent(msg.sender, amount);
    }

    receive() external payable {}

    function withdrawTokens(address to, uint256 amount) onlyOwner external {
        require(token.balanceOf(to) > amount, "not enough balance.");
        require(token.transfer(to, amount));
        emit withdrawEvent(to, amount);
    }
	
    function withdrawEth(address payable to, uint256 amount) onlyOwner external {
        to.transfer(amount);
        emit withdrawEvent(to, amount);
    }

    function getBalanceEth() external view returns(uint256) {
        return address(this).balance;
    }

    function getBalanceToken() external view returns(uint256) {
        return token.balanceOf(address(this));
    }

    function addLiquidity(
        address _tokenA,
        address _tokenB,
        uint _amountA,
        uint _amountB
    ) onlyOwner external {
        IERC20(_tokenA).transferFrom(msg.sender, address(this), _amountA);
        IERC20(_tokenB).transferFrom(msg.sender, address(this), _amountB);

        IERC20(_tokenA).approve(ROUTER, _amountA);
        IERC20(_tokenB).approve(ROUTER, _amountB);

        IUniswapV2Router(ROUTER)
            .addLiquidity(
                _tokenA,
                _tokenB,
                _amountA,
                _amountB,
                1,
                1,
                address(this),
                block.timestamp
            );
    }

    function removeLiquidity(address _tokenA, address _tokenB) onlyOwner external {
        address pair = IUniswapV2Factory(FACTORY).getPair(_tokenA, _tokenB);

        uint liquidity = IERC20(pair).balanceOf(address(this));
        IERC20(pair).approve(ROUTER, liquidity);

        IUniswapV2Router(ROUTER).removeLiquidity(
            _tokenA,
            _tokenB,
            liquidity,
            1,
            1,
            address(this),
            block.timestamp
        );
    }
}

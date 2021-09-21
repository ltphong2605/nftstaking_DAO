import { useReactiveVar } from '@apollo/client'
import React,{useState, useContext, useEffect } from 'react';
import {NavLink} from 'react-router-dom';

import * as RiIcons from 'react-icons/ri';
import { makeStyles } from '@material-ui/core/styles';
import styled, {useTheme} from 'styled-components'
import { WalletButton } from '../../../multi-wallet/WalletButton'
import { accountVar, chainIdVar, wrongNetworkModalVar } from '../../../../variables/WalletVariable'
import { isAllowedChain } from '../../../../services/UtilService'
import WrongNetworkModal from '../../WrongNetworkModal'
import { createPoolOwner } from '../../../../config'
import { AppContext } from "../../../../contexts";

const useStyles = makeStyles(theme => ({
    customHeader: {
        position: 'relative',
        background: 'transparent !important',
        zIndex: 1000,
        justifyContent: 'center',
        boxShadow: 'unset',
        '@media (max-width:767px)': { 
            justifyContent: 'end'
        }

    },
    logo: {
        background: 'url(/logo/logo.png)',
        height: '80px',
        width: '100px',
        backgroundSize: '100% 100%',
        margin: '5px 0 0 15px',
        '@media(max-width:420px)' : {
            width: '200px',
            height: '60px',
            margin: '20px 0px'
        }
    },
    menuItems: {
        background: 'transparent !important',
        
    },

    darkicon: {
        margin: '5px',
        marginTop: '22px',
        fontSize: '50px',
        padding: '12px',
        border: '1px solid rgb(133, 133, 133)',
        borderRadius: '50%',
        cursor: 'pointer',
        width: '100px',
        color: 'black',
        '@media(min-width: 400px)' : {
            margin: '10px',
            marginTop: '22px',
            width: '85px'
          },
        '@media(min-width: 420px)' : {
            width: '55px'
        },
        '@media(min-width: 900px)' : {
            margin: '22px 30px 10px 30px',
            width: '50px'
        }
    },
    sunnyicon: {
        margin: '5px',
        marginTop: '22px',
        fontSize: '50px',
        padding: '12px',
        border: '1px solid rgb(133, 133, 133)',
        borderRadius: '50%',
        cursor: 'pointer',
        width: '100px',
        color: 'white',
        '@media(min-width: 400px)' : {
            margin: '10px',
            marginTop: '22px',
            width: '85px'
          },
        '@media(min-width: 420px)' : {
            width: '55px'
        },
        '@media(min-width: 900px)' : {
            margin: '22px 30px 10px 30px',
            width: '50px'
        }
    },
    menuicon: {
        color: 'rgb(133, 133, 133)',
        border: '1px solid rgb(133, 133, 133)',
        fontSize: '45px',
        width: '120px',
        padding: '5px',
        margin: '5px',
        marginTop: '25px',
        borderRadius: '5px',
        '@media(min-width: 400px)' : {
            margin: '10px',
            marginTop: '25px',
            width: '100px'
          },
        '@media(min-width: 420px)' : {
            width: '50px'
          },
        '@media(min-width: 1280px)' : {
            display: 'none'
          }
    },
    menutitle:  (
        {
            // fontFamily: 'play'
            fontSize: '1rem !important',
            fontFamily: 'montserrat !important',
            fontWeight: '800 !important',
            color: theme.light
        }
    ) 
}));
const Navbarmenu = () => {
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const {theme, setTheme} = useContext(AppContext);
    const themes = useTheme();
    const styles = useStyles();
    const toggleClass = () => {
        // setisMenu(isMenu === false ? true : false);
        setisMenu(!isMenu);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const changeTheme = (e, val) => {
        e.preventDefault()
        localStorage.setItem('theme', val);
        setTheme({theme: val})
    }

    const account = useReactiveVar(accountVar)
    const chainId = useReactiveVar(chainIdVar)
    const rightChain = !!account && isAllowedChain(chainId)

    useEffect(() => {
       ( !account || rightChain ) ? wrongNetworkModalVar(false) : wrongNetworkModalVar(true)
    }, [account, rightChain])

    return (
        <div style={{width: '100%', position: 'absolute'}}>
            <S.Header className={`header__middle ${styles.customHeader}`} >
                <div className="header__middle__menus">
                    <nav className="main-nav " >
                        <S.SubMenu className={boxClass.join(' ')} >
                            <li  className={`menu-item ${styles.menuItems}`} >
                                <NavLink onClick={()=>toggleClass()} to={`/`} exact activeClassName='is-active' className={styles.menutitle} style={{color: themes.gray['4']}}> Home </NavLink> 
                            </li>
                            <li className={`menu-item ${styles.menuItems}`} ><NavLink onClick={()=>toggleClass()} activeClassName='is-active' to={`/stake`} className={styles.menutitle} style={{color: themes.gray['4']}}> NFT Stake </NavLink> </li>
                            <li className={`menu-item ${styles.menuItems}`} ><NavLink onClick={()=>toggleClass()} activeClassName='is-active' to={`/dashboard`} className={styles.menutitle} style={{color: themes.gray['4']}}> Claim </NavLink> </li>
                            <li className={`menu-item ${styles.menuItems}`}><NavLink onClick={()=>toggleClass()} activeClassName='is-active' to={`/vote`} className={styles.menutitle} style={{color: themes.gray['4']}}> Vote </NavLink> </li>
                            <li className={`menu-item ${styles.menuItems}`}><NavLink onClick={()=>toggleClass()} activeClassName='is-active' to={`/treasury`} className={styles.menutitle} style={{color: themes.gray['4']}}> Treasury </NavLink> </li>
                            {account === createPoolOwner.toLowerCase()?
                                <li className={`menu-item ${styles.menuItems}`} ><NavLink onClick={()=>toggleClass()} activeClassName='is-active' to={`/pool`} style={{color: themes.gray['4']}}> Create Pool </NavLink> </li>
                                :
                                <></>
                            }
                        </S.SubMenu>
                    </nav>     
                </div> 
                <WalletButton />
                <RiIcons.RiMenuLine onClick={toggleClass} className={styles.menuicon} />
                <WrongNetworkModal />
            </S.Header>
        </div>
    )
}

export default Navbarmenu

export const S = {
    Header: styled.div `
        background: ${props=>props.theme.light};
    `,
    // SubMenu: styled.ul `
    //     background: ${props=>props.theme.light} !important;
    // `
    SubMenu: styled.ul `
        background: transparent !important;
        left: unset !important;
        @media (max-width: 1280px) {
            background: #000  !important;
            right: 50px !important;
        }
        @media (max-width: 900px) {
            background: #000  !important;
            right: 10px !important;
        }
    `
}
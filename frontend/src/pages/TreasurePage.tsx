import React, {useEffect, useContext, useState} from 'react';
import { DefaultPageTemplate } from './shared/templates/DefaultPageTemplate';
import styled, {useTheme} from 'styled-components';
import { Button, Input,Checkbox, Col, Row, Select} from 'antd';
import {FaCheck} from 'react-icons/fa';
import { useHistory } from 'react-router-dom';


const { Option } = Select;

const handleNewProposal = () => {
}

const handleProposal = () => {

}

const handleChange = () => {

}


const TreasurePage = () => {

  const history = useHistory();
    const [loading, setLoading] = useState(false);

    
  const handleClickedSign = () => {
    history.push('/signature/1')
  }


  const handleCreateTransaction = () => {
    history.push('/signature/2')
} 

    return (
        <DefaultPageTemplate bgGray > 
        <Row  style={{minWidth: '300px'}}>
          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <S.Balance>
                Balance: 218eth
              </S.Balance>
          </Col>
          <Col xs={24} sm={24} md={24} lg={18} xl={18}>
            <S.CreateTransactionBtnDiv>
              <S.CreateTransactionBtn>Create Transaction</S.CreateTransactionBtn>
            </S.CreateTransactionBtnDiv>
            
          </Col>
        </Row>
          
        <Row  style={{minWidth: '300px'}}>
        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
              <S.Card>
                  <div className="title">Signatures</div>
                  <S.SignItem>
                    <span>0x234....1232</span>
                    <span><FaCheck size={24}/></span>
                  </S.SignItem>
                  <S.SignItem>
                    <span>0x234....1232</span>
                    <span><FaCheck size={24}/></span>
                  </S.SignItem>
                  <S.SignItem>
                    <span>0x234....1232</span>
                    <span><FaCheck size={24}/></span>
                  </S.SignItem>
                  <S.SignItem>
                    <span>0x234....1232</span>
                    <span><FaCheck size={24}/></span>
                  </S.SignItem>
                  <S.SignItem>
                    <span>0x234....1232</span>
                    <span></span>
                  </S.SignItem>
                  <S.SignItem>
                    <span>0x234....1232</span>
                    <span></span>
                  </S.SignItem>
              </S.Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={18} xl={18}>
                <Row  justify="center">
                    <S.Proposal onClick={handleProposal}>
                        <Row align='middle'>
                          <Col  xs={24} sm={18} md={18} lg={18} xl={18}>
                            <div style={{display: 'flex'}}>
                            <img src='icons/money-coin.png' style={{width: '30px', height: '30px', marginRight: '10px'}} />
                            <div className="sub-desc">CoolbeezDAO by 0x3452...2345</div>
                            </div>
                            
                          </Col>
                          <Col  xs={24} sm={6} md={6} lg={6} xl={6}>
                          <S.Active>Active</S.Active>
                          </Col>
                            
                            
                        </Row>
                        <div className="transaction-name">12eth to 0x123....2342</div>
                        <Row>
                            <div className="title">How to deal treasurey?</div>
                        </Row>
                        <div className="desc">Summary: This is amendment includes the addition of the following assets to the whitelist: BTRFLY FDT It also provides another motive for adding strate...</div>
                        <div  style={{display: 'flex', justifyContent: 'flex-end'}}>
                          <S.SignBtn onClick={handleClickedSign}>
                            Sign
                          </S.SignBtn>
                        </div>
                        
                    </S.Proposal>
                    <S.Proposal onClick={handleProposal}>
                        <Row align='middle'>
                          <Col  xs={24} sm={18} md={18} lg={18} xl={18}>
                            <div style={{display: 'flex'}}>
                              <img src='icons/money-coin.png' style={{width: '30px', height: '30px', marginRight: '10px'}} />
                              <div className="sub-desc">CoolbeezDAO by 0x3452...2345</div>
                            </div>
                          </Col>
                          <Col  xs={24} sm={6} md={6} lg={6} xl={6}>
                            <S.Passed>Passed</S.Passed>
                          </Col>
                        </Row>
                          
                        <div className="transaction-name">12eth to 0x123....2342</div>
                        <Row>
                            <div className="title">How to deal treasurey?</div>
                        </Row>
                        <div className="desc">Summary: This is amendment includes the addition of the following assets to the whitelist: BTRFLY FDT It also provides another motive for adding strate...</div>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                          <S.SignBtn onClick={handleClickedSign}>
                            Sign
                          </S.SignBtn>
                        </div>
                        
                    </S.Proposal>
                  
                </Row>
            </Col>
        </Row>
    </DefaultPageTemplate>
    )

}

const S = {
  ToolButtonContainer: styled.div`
    display: flex;
    justify-content: flex-end;
  `,
  LeftPane: styled(Col)`

  `,
    Card: styled.div`
    font-family: ${props=>props.theme.fonts.primary};
    width: 90%;
    height: auto;
    min-height: 300px;
    max-width: 400px;
    padding: 30px 0px 30px;
    border: 1px solid ${props=>props.theme.gray[1]};
    box-sizing: border-box;
    border-radius: 8px;
    background: ${props=>props.theme.gray[5]};
    margin: 20px 10px;

    &:hover {
      cursor: pointer;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
      transition: box-shadow ease-in 250ms;
    }

    @media (min-width: 1024px) {
        margin: 20px 10px;
    }

    .ant-spin.ant-spin-spinning {
      width: 100%;
      height: auto;
      max-height: 400px;
      margin: auto;
    }
    .title {
      text-align: center;
      font-size: 30px;
      font-weight: 600;
      color: ${(props)=>props.theme.gray['1']};
      margin-bottom: 20px;
    }
    .desc {
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      color: ${(props)=>props.theme.gray['1']};
    }
    .divider {
        width: 100%;
        border-bottom: 1px solid ${(props)=>props.theme.gray['3']};
    }
    .submenu {
        padding: 10px 20px;
        border-left: 2px solid ${(props)=>props.theme.gray['1']};
        color: ${(props)=>props.theme.gray['1']};
        margin: 20px 0px;
        font-size: 20px;
        font-weight: 600;
        &:hover {
          color: #07a8ff;
        }
    }
    .noborder {
        border-width: 0px !important;
    }
  `,
  SignItem: styled.div`
    width: 100%;
    padding: 5px 20px;
    color: ${props=>props.theme.gray[1]};
    display: flex;
    justify-content: space-between;
  `,
  Balance: styled.div`
    max-width: 400px;
    margin-top: 10px;
    text-align: center;
    color: ${props=>props.theme.gray[5]};
    font-family: ${props=>props.theme.fonts.primary};
    font-size: 24px;
  `,
  CreateTransactionBtnDiv: styled.div`
    max-width: 400px;
    margin-top: 10px;
    
    display: flex;
    justify-content: center;
    color: ${props=>props.theme.gray[5]};
    font-family: ${props=>props.theme.fonts.primary};
    font-size: 24px;
    @media (min-width: 1024px) {
      max-width: unset;
      width: 100%;
      justify-content: flex-end;
    }
  `,
  ImageDiv: styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    min-height: 100px;
  `,
  Img: styled.img`
    width: 80px;
    height: 80px;
    max-height: 400px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    -webkit-user-drag: none;
  `,
  Proposal: styled.div`
    width: 100%;
    height: auto;
    padding: 30px 20px;
    border: 1px solid ${props=>props.theme.gray[1]};
    box-sizing: border-box;
    border-radius: 8px;
    background: ${props=>props.theme.gray[5]};
    margin: 20px 10px;

    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        transition: box-shadow ease-in 250ms;
        border: 1px solid ${props=>props.theme.gray[4]};
    }
    @media (min-width: 1024px) {
        margin: 20px 10px;
    }
    .title {
        margin: 10px 0px;
        font-size: 30px;
        font-weight: 600;
        color: ${(props)=>props.theme.gray['1']};
    }
    .desc {
        font-size: 20px;
        font-weight: 600;
        color: ${(props)=>props.theme.gray['2']};
        margin-bottom: 10px;
    }
    .sub-desc {
        font-size: 16px;
        font-weight: 600;
        color: ${(props)=>props.theme.gray['2']};
    }
    .transaction-name {
        font-size: 20px;
        font-weight: 600;
        margin-left: 10px;
        margin-top: 10px;
        color: ${(props)=>props.theme.gray['2']};
    }
  `,
  Title: styled.div`
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    color: ${(props)=>props.theme.gray['4']};
    margin: 20px 10px 0px;
    @media (min-width: 1024px) {
        margin: 30px 10px 0px;
    }
  `,
  Select: styled(Select)`
    position: absolute;
    right: 10px;
    margin: 30px 10px 0px;
    width: 100px;
    border-radius: 10px;
    @media (min-width: 1024px) {
        margin: 40px 10px 0px;
    }
    .ant-select-selector {
        border-radius: 5px !important;
    }
  `,
  Active: styled.div`
    width: fit-content;
    right: 20px;
    Padding: 3px 20px;
    border-radius: 20px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    background: green;
    margin-top: 10px;
    @media (min-width: 574px) {
      float: right;
      margin-top: 0px;
    }
  `,
  Pending: styled.div`
  width: fit-content;
  right: 20px;
  Padding: 3px 20px;
  border-radius: 20px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  background: green;
  margin-top: 10px;
  @media (min-width: 574px) {
    float: right;
    margin-top: 0px;
  }
  `,
  Passed: styled.div`
    width: fit-content;
    right: 20px;
    Padding: 3px 20px;
    border-radius: 20px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    background: rgb(0,162,232);
    margin-top: 10px;
    @media (min-width: 574px) {
      float: right;
      margin-top: 0px;
    }
  `,
  Rejected: styled.div`
  width: fit-content;
    right: 20px;
    Padding: 3px 20px;
    border-radius: 20px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    background: rgb(163,74,164);
    margin-top: 10px;
    @media (min-width: 574px) {
      float: right;
      margin-top: 0px;
    }`,
  SignBtn: styled(Button)`
        background: #00ccff;
        color: #fff;
        font-family: 'montserrat';
        font-size: 18px;
        font-weight: 400;
        border: 1px solid #00ccff;
        border-radius: 5px;
        box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 50%);
        margin: 10px 10px;
        cursor: pointer !important;
        padding: 0 20px;
        &:hover,
        &:active,
        &:focus {
            background-color: #FFFFFF;
            color: ${props=>props.theme.gray['1']};
            border: 1px solid #FFFFFF;
        }
    `,
    CreateTransactionBtn: styled(Button)`
      
        background: #00ccff;
        color: #fff;
        font-family: 'montserrat';
        font-size: 18px;
        font-weight: 400;
        border: 1px solid #00ccff;
        border-radius: 5px;
        box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 50%);
        margin: 10px 10px;
        cursor: pointer !important;
        padding: 0 20px;
        &:hover,
        &:active,
        &:focus {
            background-color: #FFFFFF;
            color: ${props=>props.theme.gray['1']};
            border: 1px solid #FFFFFF;
        }
        @media (min-width: 980px) {
          float: right;
          margin-left: 40px;
        }
    `,
}
export default TreasurePage;
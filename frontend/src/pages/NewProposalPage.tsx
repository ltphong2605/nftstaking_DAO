import { useReactiveVar } from '@apollo/client'
import { Button, Input, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../styles/variables'
import { DefaultPageTemplate } from './shared/templates/DefaultPageTemplate'
import { validate } from '../services/ValidationService';
import {createPool, isExistPool, removePool} from '../services/CreatePoolService'
import { accountVar, chainIdVar, walletVar } from '../variables/WalletVariable'
import * as FaIcons from 'react-icons/fa';

const { TextArea } = Input;

export default function CreatePoolPage() {
  const history = useHistory()
  const chainId = useReactiveVar(chainIdVar)
  const account = useReactiveVar(accountVar)
  const wallettype = useReactiveVar(walletVar)
  const node = wallettype === 'walletconnect'? true : false

  const [rewardAddr, setRewardAddr] = useState<string>()
  const [tokenAddr, setTokenAddr] = useState<string>()
  const [receiver, setReceiver] = useState<string>()
  const [sendAmount, setSendAmount] = useState<string>()
  const [supply, setSupply] = useState<number>()
  const [commonNFT, setCommonNFT] = useState<number>()
  const [rareNFT, setRareNFT] = useState<number>()
  const [queenNFT, setQueenNFT] = useState<number>()
  const [hyperNFT, setHyperNFT] = useState<number>()
  const [lockedTime, setLockedTime] = useState<number>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isCreated, setIsCreated] = useState<boolean>(false)
  

  const handleKeyPress = (e: any, target: string) => {
    if(e.key === 'Enter'){
      document.getElementById(target).focus();           
    }
  }

  const handleBack = () => {
    history.push('/vote')
  }

  useEffect(()=>{
    const checkExistedPool = async () => {
      let isExist = await isExistPool(chainId, node);
      if (isExist) setIsCreated(true);
      else setIsCreated(false);
    }
    checkExistedPool();
  },[])

  const create = async () => {
    if(!validate('Reward Address', rewardAddr)) return;
    if(!validate('Stake Toke Address', tokenAddr)) return;
    setIsLoading(true)
    let result = await createPool(account, chainId, rewardAddr, tokenAddr, supply, commonNFT, rareNFT, queenNFT, hyperNFT, lockedTime, node);
    if(result) setIsCreated(true)
    setIsLoading(false)
  }

  const remove = async () => {
    setIsLoading(true)
    let result = await removePool(chainId, account, node);
    if(result) setIsCreated(false)
    setIsLoading(false)
  }

  return (
    <DefaultPageTemplate>
      <S.Container>
        <S.SignupBox> 
          <S.TitleDiv>
            New Proposal
          </S.TitleDiv>  
          <div>
            <div className="back-button">
              <FaIcons.FaArrowLeft className='arrow' size={20} onClick={handleBack} />
              <div className="back" onClick={handleBack} >
                  Back
              </div>
            </div>
            
            <div className="desc">
                <div className="content">You need to be an author in order to submit a proposal.</div>
                <div className="content">Learn more...</div>
            </div>
            <div style={{marginTop: '10px'}}>
              <S.Input maxLength={60} id='title' value={tokenAddr} placeholder="Proposal Title" onChange={(e: any) => setTokenAddr(e.target.value)} onKeyPress={(e:any) => handleKeyPress(e, 'proposal')} />
            </div>
            <div>
              <S.Input maxLength={60} id='receiver' value={receiver} placeholder="Receiver" onChange={(e: any) => setReceiver(e.target.value)} onKeyPress={(e:any) => handleKeyPress(e, 'receiver')} />
            </div>
            <div style={{marginBottom: '10px'}}>
              <S.Input maxLength={60} id='send_amount' value={sendAmount} placeholder="Send Amount" onChange={(e: any) => setSendAmount(e.target.value)} onKeyPress={(e:any) => handleKeyPress(e, 'send amount')} />
            </div>
            <div>
                <TextArea className='proposalpan' id='proposal' rows={8} />
            </div>
            <Row justify='center' style={{marginTop: '20px'}}>
                <S.Button >
                  Submit
                </S.Button>
            </Row>
          </div>     
        </S.SignupBox>
      </S.Container>
    </DefaultPageTemplate>
  )
}

const S = {
  TitleDiv: styled.div`
    color: ${(props)=>props.theme.gray['1']};
    text-align: center;
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: bold;
    font-family: ${(props)=>props.theme.fonts.primary};
  `,
  Container: styled.div`
    width: 100%;
    justify-content: center;
    margin-top: 3vh;
    
    @media (min-width: ${props => props.theme.viewport.tablet}) {
      margin-top: 15vh;    
      display: flex;
    }
  `,
  Button: styled(Button)`
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

  Button2: styled(Button)`
    border-radius: 8px;
    background-color: ${colors.red1};
    color: ${colors.white};
    border: none;
    box-shadow: none;
    width: 150px;
    font-size: 16px;
    font-weight: bold;
    height: 40px;
    padding-bottom: 7px;

    &:hover,
    &:active,
    &:focus {
      background-color: ${colors.red2};
      color: ${colors.white};
      opacity: 0.8;
      box-shadow: none;
      border: none;
    }
  `,
  Input: styled(Input)`
    border-radius: 5px;
    border: none;
    box-shadow: 1px 1px 5px hsl(0deg 0% 0% / 5%);
    margin: 5px 0px;
    background: ${(props)=>props.theme.gray['5']};
    color: ${(props)=>props.theme.gray['1']};
    border: 1px solid ${(props)=>props.theme.gray['2']};
  `,
  SignupBox: styled.div`
    width: 100%;
    max-width: 700px;
    display: block !important;
    padding: 20px;    
    border: 1px solid #d0d0d1;
    border-radius: 5px;
    background-color: ${(props)=>props.theme.gray['5']};
    @media (min-width: ${props => props.theme.viewport.tablet}) {
      width: 70%;
      display: inline-block !important;
    }
    @media (min-width: ${props => props.theme.viewport.desktop}) {
      width: 70%;
      display: inline-block !important;
    }
    .back-button {
      font-size: 20px;
      color: ${(props)=>props.theme.gray['2']};
      cursor: pointer;
      &:hover {
        color: #07a8ff;
      }
    }
    .back {
        display: inline-block;
        margin-left: 10px;
        font-size: 20px;
        top: -4px;
        position: relative;
        
    }
    .arrow {
    }
    .proposalpan {
        border-radius: 5px;
        box-shadow: 1px 1px 5px hsl(0deg 0% 0% / 5%);
        background: ${(props)=>props.theme.gray['5']};
        color: ${(props)=>props.theme.gray['1']};
        border: 1px solid ${(props)=>props.theme.gray['2']};
    }
    .desc {
        border: 1px solid ${(props)=>props.theme.gray['3']};
        padding: 10px 20px;
        border-radius: 5px;
        margin-top: 20px;
    }
    .content {
        color: ${(props)=>props.theme.gray['1']};
        font-size: 14px;
    }
  `
}

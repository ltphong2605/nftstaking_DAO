import { useReactiveVar } from '@apollo/client'
import { Col, Row, Select, Skeleton, Spin } from 'antd'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { DefaultPageTemplate } from './shared/templates/DefaultPageTemplate'
import { accountVar, chainIdVar, walletVar } from '../variables/WalletVariable'
import InfiniteScroll from 'react-infinite-scroll-component'
import {paginationLimit} from '../config'

const { Option } = Select;

export default function VotePage() {
  const history = useHistory()
  const chainId = useReactiveVar(chainIdVar)
  const account = useReactiveVar(accountVar)
  const wallettype = useReactiveVar(walletVar)
  const node = wallettype === 'walletconnect'? true : false

  const [balance, setBalance] = useState(0)
  const [stakedAmount, setStakedAmount] = useState(0)
  const [stakeHolders, setStakeHolders] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [offset, setOffset] = useState(0)

  const [loading, setLoading] = useState(false)

  const handleChange = async (e, val) => {
    
  }

  const handleNewProposal = () => {
    history.push('/newproposal')
  }

  const handleProposal = (id) => {
    //history.push({pathname:'/proposal', search:`id:${id}`});
    history.push(`/proposal/${id}`);
  }

  useEffect(()=>{
    if(!chainId) return;
    if(!account) return;

    setLoading(true)

    
    setLoading(false)
  
  },[chainId, account, node])

  return (
    <>    
    <DefaultPageTemplate bgGray > 
        <Row>
            <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <S.Card>
                    <S.ImageDiv>
                    <Spin indicator={<Skeleton.Avatar active size={64} shape='circle' />} spinning={!!loading} />
                    <S.Img
                        src='icons/money-coin.png'
                        hidden={!!loading}
                        loading='lazy'
                    />
                    </S.ImageDiv>
                    <div className="title">Coolbeez DAO</div>
                    <p className="desc">13k members</p>
                    <div className="divider"></div>
                    <div className="submenu">Proposals</div>
                    <div className="submenu noborder" onClick={handleNewProposal}>New proposal</div>
                </S.Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={18} xl={18}>
                <Row>
                  <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                    <S.Title className="title">Proposals</S.Title>
                  </Col>
                  <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                  <S.Select 
                        defaultValue="All"
                        dropdownStyle={{ padding: '0px'}}
                        onChange={handleChange}
                      >
                        <Option value="0">All</Option>
                        <Option value="1">Active</Option>
                        <Option value="2">Passed</Option>
                        <Option value="3">Rejected</Option>
                      </S.Select>
                  </Col>
                  
                    
                </Row>
                <Row  justify="center">
                  
                  <S.Proposal onClick={() => handleProposal(1)}>
                      <Row align='middle'>
                        <Col  xs={24} sm={24} md={18} lg={18} xl={18}>
                          <div style={{display: 'flex', alignItems: 'center'}}>
                            <img src='icons/money-coin.png' style={{width: '30px', height: '30px', marginRight: '10px'}} />
                            <div className="sub-desc">CoolbeezDAO by 0x3452...2345</div>
                          </div>
                          
                        </Col>
                          <Col  xs={24} sm={24} md={6} lg={6} xl={6}>
                          <S.Active>Active</S.Active>
                          </Col>
                          
                      </Row>
                      <Row>
                          <div className="title">How to deal treasurey?</div>
                      </Row>
                      <div className="desc">Summary: This is amendment includes the addition of the following assets to the whitelist: BTRFLY FDT It also provides another motive for adding strate...</div>
                      <div className="sub-desc">end in 2 days</div>
                  </S.Proposal>
                  <S.Proposal onClick={() => handleProposal(2)}>
                      <Row align='middle'>
                        <Col  xs={24} sm={24} md={18} lg={18} xl={18}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                        <img src='icons/money-coin.png' style={{width: '30px', height: '30px', marginRight: '10px'}} />
                          <div className="sub-desc">CoolbeezDAO by 0x3452...2345</div>
                        </div>
                          
                        </Col>
                        <Col  xs={24} sm={24} md={6} lg={6} xl={6}>
                        <S.Passed>Passed</S.Passed>
                        </Col>
                          
                      </Row>
                      <Row>
                          <div className="title">How to deal treasurey?</div>
                      </Row>
                      <div className="desc">Summary: This is amendment includes the addition of the following assets to the whitelist: BTRFLY FDT It also provides another motive for adding strate...</div>
                      <div className="sub-desc">end in 2 days</div>
                  </S.Proposal>
                
              </Row>
                
            </Col>
        </Row>
    </DefaultPageTemplate>
    </>
  )
}

export const S = {
  Card: styled.div`
    width: 90%;
    height: auto;
    max-width: 400px;
    padding: 50px 0px 30px;
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
        margin: 30px 10px;
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
    right: 10px;
    margin: 30px 10px 0px;
    width: 100px;
    border-radius: 10px;
    float: right;
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
    @media (min-width: 768px) {
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
    @media (min-width: 768px) {
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
    @media (min-width: 768px) {
      float: right;
      margin-top: 0px;
    }
  `
}
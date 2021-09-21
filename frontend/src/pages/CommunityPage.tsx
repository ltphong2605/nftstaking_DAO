import { useReactiveVar } from '@apollo/client'
import { Button, Col, Row, Input, Checkbox, Skeleton, Spin, Table } from 'antd'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { DefaultPageTemplate } from './shared/templates/DefaultPageTemplate'
import { accountVar, chainIdVar, walletVar } from '../variables/WalletVariable'
import { notifyError, notifySuccess } from '../services/NotificationService'

export default function CommunityPage() {
  const chainId = useReactiveVar(chainIdVar)
  const account = useReactiveVar(accountVar)
  const wallettype = useReactiveVar(walletVar)
  const node = wallettype === 'walletconnect'? true : false


  const [balance, setBalance] = useState(0)
  const [stakedAmount, setStakedAmount] = useState(0)
  const [stakeHolders, setStakeHolders] = useState(0)

  const [dataSource, setDataSource] = useState([])
  const [columns, setColumns] = useState([])

  const [loading, setLoading] = useState(false)

  const handleFilter = async (e, val) => {
    
  }

  useEffect(()=>{
    if(!chainId) return;
    if(!account) return;

    setLoading(true)

    let w_dataSource = [
        {
          key: '1',
          people: 'Mike',
          votes: 32,
          for: 10,
          against: 22,
          success: 25,
          gover: 2500
        },
        {
          key: '2',
          people: 'Mike',
          votes: 32,
          for: 10,
          against: 22,
          success: 25,
          gover: 2500
        },
        {
            key: '3',
            people: 'Mike',
            votes: 32,
            for: 10,
            against: 22,
            success: 25,
            gover: 2500
          },
          {
            key: '4',
            people: 'Mike',
            votes: 32,
            for: 10,
            against: 22,
            success: 25,
            gover: 2500
          },
          {
            key: '5',
            people: 'Mike',
            votes: 32,
            for: 10,
            against: 22,
            success: 25,
            gover: 2500
          }
      ];
    setDataSource(w_dataSource)
    let w_columns = [
        {
          title: 'People',
          dataIndex: 'people',
          key: 'people'
        },
        {
          title: 'Votes',
          dataIndex: 'votes',
          key: 'votes'
        },
        {
          title: 'For Votes',
          dataIndex: 'for',
          key: 'for'
        },
        {
            title: 'Against Votes',
            dataIndex: 'against',
            key: 'against'
        },
        {
            title: 'Successful Votes',
            dataIndex: 'success',
            key: 'success'
        },
        {
            title: 'Governance Tokens',
            dataIndex: 'gover',
            key: 'gover'
        }
      ];
    setColumns(w_columns)
    setLoading(false)
  
  },[chainId, account, node])

  return (
    <>    
    <DefaultPageTemplate bgGray > 
      <Row justify="center">
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <S.Card>
            <S.ImageDiv>
              <Spin indicator={<Skeleton.Avatar active size={64} shape='circle' />} spinning={!!loading} />
              <S.Img
                src='icons/money-coin.png'
                hidden={!!loading}
                loading='lazy'
              />
            </S.ImageDiv>
            <p className="title">Total Treasury</p>
            <p className="desc">{balance}</p>
          </S.Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <S.Card>
            <S.ImageDiv>
              <Spin indicator={<Skeleton.Avatar active size={64} shape='circle' />} spinning={!!loading} />
              <S.Img
                src='icons/holders.png'
                hidden={!!loading}
                loading='lazy'
              />
            </S.ImageDiv>
            <p className="title">Voters</p>
            <p className="desc">{stakedAmount}</p>
          </S.Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <S.Card>
            <S.ImageDiv>
              <Spin indicator={<Skeleton.Avatar active size={64} shape='circle' />} spinning={!!loading} />
              <S.Img
                src='icons/vote2.png'
                hidden={!!loading}
                loading='lazy'
              />
            </S.ImageDiv>
            <p className="title">Votes</p>
            <p className="desc">{stakeHolders}</p>
          </S.Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <S.Card style={{padding: '50px 20px 30px'}}>
            <Row>
                <p className="title-people">Most active people</p>
            </Row>
            <Row align='middle' style={{marginBottom: '20px'}}>
                <Col span={4}>
                <img alt='' src='icons/user2.png' style={{width: '100%'}}></img>
                </Col>
                <Col span={8}>
                <span className="people-desc">0x8972...</span>
                </Col>
                <Col span={6}>
                <span className="people-desc">votes</span>
                </Col>
                <Col span={6}>
                <span className="people-desc">21</span>
                </Col>
            </Row>
            <Row align='middle' style={{marginBottom: '20px'}}>
                <Col span={4}>
                <img alt='' src='icons/user2.png' style={{width: '100%'}}></img>
                </Col>
                <Col span={8}>
                <span className="people-desc">0x8972...</span>
                </Col>
                <Col span={6}>
                <span className="people-desc">votes</span>
                </Col>
                <Col span={6}>
                <span className="people-desc">21</span>
                </Col>
            </Row>
            <Row align='middle' style={{marginBottom: '20px'}}>
                <Col span={4}>
                <img alt='' src='icons/user2.png' style={{width: '100%'}}></img>
                </Col>
                <Col span={8}>
                <span className="people-desc">0x8972...</span>
                </Col>
                <Col span={6}>
                <span className="people-desc">votes</span>
                </Col>
                <Col span={6}>
                <span className="people-desc">21</span>
                </Col>
            </Row>
          </S.Card>
        </Col>
      </Row>
      <S.Pan>
        <Row>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Row  justify="center" align="middle">
              <span className="mintTitle">
                welcome to the coolbeez dao forum
              </span>
              <img alt='' src='images/dao.png' style={{width: '400px', marginBottom: '20px'}}></img>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Row  justify="center" style={{height: '100%'}} align="middle">
                <Table dataSource={dataSource} columns={columns} pagination={false} scroll={{ x: 800, y: 500 }}/>
            </Row>
          </Col>
        </Row>
      </S.Pan>
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
    border-radius: 18px;
    background: ${props=>props.theme.white};
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
      color: ${(props)=>props.theme.gray['4']};
    }
    .desc {
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      color: ${(props)=>props.theme.gray['4']};
    }
    .title-people {
        font-size: 25px;
        font-weight: 600;
        color: ${(props)=>props.theme.gray['4']};
    }
    .people-desc {
        font-size: 16px;
        font-weight: 600;
        color: ${(props)=>props.theme.gray['4']};
        padding: 0px 10px !important;
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
  Pan: styled.div`
    display: block;
    padding: 5px 5px 3px 5px;
    margin: auto;
    @media (min-width: 300px) {
      margin: 0px 5px;
    }
    @media (min-width: 600px) {
      min-width: 500px;
      max-width: 600px;
    }
    @media (min-width: 760px) {
      min-width: 700px;
    }
    @media (min-width: 900px) {
      min-width: 800px;
    }
    @media (min-width: 1024px) {
      min-width: 900px;
      margin-top: 150px;
    }
    @media (min-width: 1200px) {
      min-width: 1200px;
      max-width: 1300px;
      margin: auto;
    }
    @media (min-width: 1440px) {
      min-width: 1375px;
      max-width: 1375px;
      margin: auto;
    }
    @media (min-width: 1660px) {
      min-width: 1400px;
      max-width: 1400px;
      margin: auto;
    }
    .mintTitle {
      color: #ff9600;
      text-align: center;
      font-size: 25px;
      font-weight: 600;
      font-family: Bungee;
      margin: 5px 5px 10px;
      @media (min-width: 600px) {
        font-size: 30px;
        letter-spacing: 0.07em;
      }
      @media (min-width: 1200px) {
        font-size: 40px;
        letter-spacing: 0.1em;
      }
    }
    .mintDesc {
      color: ${(props)=>props.theme.gray['4']};
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 5px;
    }
    .ant-table {
        color: ${(props)=>props.theme.gray['4']};
        background: transparent;
        border: 1px solid ${(props)=>props.theme.gray['1']};
    }
    .ant-table table {
        text-align: center;
    }
    .ant-table-thead > tr > th {
        background: transparent;
        color: ${(props)=>props.theme.gray['4']};
        text-align: center;
        border-color: ${(props)=>props.theme.gray['1']};
    }
    .ant-table-tbody > tr.ant-table-row-level-0:hover > td {
        background: unset !important;
    }
    .ant-pagination-disabled .ant-pagination-item-link {
        color: ${(props)=>props.theme.gray['4']};
        border-color: ${(props)=>props.theme.gray['1']};
    }
    .ant-pagination-prev .ant-pagination-item-link, .ant-pagination-next .ant-pagination-item-link {
        background: transparent;
    }
    .ant-pagination-item-active {
        background: transparent;
    }
    .ant-table-tbody > tr > td {
        border-color: ${(props)=>props.theme.gray['1']};
    }
  `,
  Input: styled(Input)`
    border-radius: 5px;
    width: 100%;
    box-shadow: 1px 1px 5px hsl(0deg 0% 0% / 5%);
    background: ${(props)=>props.theme.gray['0']};
    color: ${(props)=>props.theme.gray['4']};
    border: 1px solid ${(props)=>props.theme.gray['2']};
    margin: 10px 0px;
    .ant-input-number-handler-wrap {
      background: ${(props)=>props.theme.gray['0']} !important;
    }    
  `,  
  Button: styled(Button)`
    background: ${props=>props.theme.white};
    color: ${props=>props.theme.gray['4']};
    font-weight: 600;
    border: 1px solid ${props=>props.theme.gray['1']};
    border-radius: 10px !important;
    padding: 5px 7px 5px 7px !important;
    cursor: pointer !important;
    height: 40px;
    width: 100%;
    &:hover,
    &:active,
    &:focus {
      background-color: rgb(34, 106, 237);
    }
    @media (min-width: 414px) {
      padding: 5px 13px 5px 13px !important;
    }
    @media (min-width: ${props => props.theme.viewport.tablet}) {
      margin-top: 0px;
      margin-right: 0px !important;
    }
  `,
  Subpan: styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    margin: 50px 0px 0px;
  `,
  Checkbox: styled(Checkbox)`
    .ant-checkbox-inner {
      border-radius: 50%;
      top: -2px;
      border: 1px solid ${props=>props.theme.gray['4']};
    }
  `
}
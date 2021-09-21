import React, {useEffect, useContext, useState} from 'react';
import { DefaultPageTemplate } from './shared/templates/DefaultPageTemplate';
import {BiArrowBack} from 'react-icons/bi';
import { useHistory } from 'react-router-dom'
import { Button, Input,Checkbox, Col, Row } from 'antd';
import styled, {useTheme} from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from "../contexts";
import ShowMore from 'react-show-more-button';

import {
    useParams,
  } from "react-router-dom";
export const Status = ['Active', 'Passed', 'Rejected'];

  export type ProposalData = {
      readonly id: string
      readonly creator: string,
      readonly title: string,
      readonly description: string,
      readonly start_date: Date,
      readonly end_date: Date,
      readonly status: number,
      readonly count_yes: number,
      readonly count_no: number,
  }

export const proposals: {[id: string]:ProposalData} = {
    '1': {
        id: '1', 
        creator: 'CoolbeezDAO by 0x1889...64C3', 
        title: 'A NEW IDEA TO BRING MORE TRAFFIC & LIQUIDITY',
        description: 'Cryptography was the beginning of crypto, well steganography is just as old or even older and is the art of hiding a message or data inside of a image. my idea is to allow users to be able to mint their data (via phone/computer etc. through steganography as a NFT with a attached Royalty fee and implementing a 3-5% transaction fee per minting that can also be added to ohm liquidity or staking pool. This will give everyone the choice of stopping our data from being sold in the shadows or being paid through royalties anytime BIG TECH sells the same data. At the same time it will bring lots of organic traffic to ohm because it will be giving everyone the rights to their information and data',
        start_date: new Date(),
        end_date: new Date(),
        status: 0,
        count_yes: 1,
        count_no: 2,
    },
    '2': {
        id: '2', 
        creator: 'CoolbeezDAO by 0x1889...64C3', 
        title: 'A vote',
        description: 'Cryptography was the beginning of crypto, well steganography is just as old or even older and is the art of hiding a message or data inside of a image. my idea is to allow users to be able to mint their data (via phone/computer etc. through steganography as a NFT with a attached Royalty fee and implementing a 3-5% transaction fee per minting that can also be added to ohm liquidity or staking pool. This will give everyone the choice of stopping our data from being sold in the shadows or being paid through royalties anytime BIG TECH sells the same data. At the same time it will bring lots of organic traffic to ohm because it will be giving everyone the rights to their information and data',
        start_date: new Date(),
        end_date: new Date(),
        status: 1,
        count_yes: 1,
        count_no: 2,
    },
    '3': {
        id: '3', 
        creator: 'CoolbeezDAO by 0x1889...64C3', 
        title: 'A NEW IDEA TO BRING MORE TRAFFIC & LIQUIDITY',
        description: 'Cryptography was the beginning of crypto, well steganography is just as old or even older and is the art of hiding a message or data inside of a image. my idea is to allow users to be able to mint their data (via phone/computer etc. through steganography as a NFT with a attached Royalty fee and implementing a 3-5% transaction fee per minting that can also be added to ohm liquidity or staking pool. This will give everyone the choice of stopping our data from being sold in the shadows or being paid through royalties anytime BIG TECH sells the same data. At the same time it will bring lots of organic traffic to ohm because it will be giving everyone the rights to their information and data',
        start_date: new Date(),
        end_date: new Date(),
        status: 2,
        count_yes: 1,
        count_no: 2,
    }
};




const ShowMoreButton = () => {
    const [isShowMore, setShowMore] = useState(false);
    return(
        <S.RadiusButton onClick={() => setShowMore(!isShowMore)}>
            {isShowMore ? 'Show Less' : 'Show More'}
        </S.RadiusButton>                                
    )
}


const styleShowMoreButton = {
    fontWeight: '600',
    height: '46px',
    fontSize: '18px',
    border: '1px solid #D1D1D2',
    borderRadius: '46px !important',
    cursor: 'pointer !important',
    width: '-webkit-fill-available',
    marginBottom: '8px',
    "&:hover, &:active, &:focus":
    {
        border: '1px solid #808083',
        color: '#232328'
    }
}


const ProposalPage = () => {
    const history = useHistory()
    const {theme, setTheme} = useContext(AppContext);
    console.log(theme);
    const themes = useTheme();
    const {id} = useParams<{id:string}>();
    const [proposal, setProposal] = useState<ProposalData>(proposals[id]);
    useEffect(() => {
        console.log('use efffect id = ' + proposal.id);
    }, [proposal]);

    

    const handleCreateSignature = () => {
        history.push('/signature/2')
    } 

    const handleGoBack = () => {
        history.push('/vote');
    }
    return (
        <>
            <DefaultPageTemplate bgGray> 
            <S.MainRow justify="center">
                <S.Container xs={24} sm={24} md={24} lg={20} xl={18} >
                    <Col xs={24} sm={24} md={24} lg={17} xl={17} >
                        <S.BackButton onClick={handleGoBack}>
                            <BiArrowBack size={18}/>
                            <span >&nbsp;Back</span>
                        </S.BackButton>
                        <div>
                            <S.Title>
                                {proposal.title}
                            </S.Title>
                            <S.Tools>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <S.ActiveMark className={proposal.status === 0 ? 'active' : proposal.status === 1 ? 'passed' : 'rejected'}>
                                        {Status[proposal.status]}
                                    </S.ActiveMark>
                                    <S.Author>
                                        {proposal.creator}
                                    </S.Author>
                                </div>
                                <div>
                                    {proposal.status === 1 &&
                                        <S.CreateTransactionBtn onClick={handleCreateSignature}>
                                            Create Transaction
                                        </S.CreateTransactionBtn>
                                    }
                                
                                </div>
                            </S.Tools>
                            <S.TxtContent>
                                <ShowMore maxHeight={500} classNameButton="showMoreBtn">
                                    {proposal.description}
                                </ShowMore>
                            </S.TxtContent>
                            <S.VoteDiv>
                                <S.VoteTitle>
                                    Cast your vote
                                </S.VoteTitle>
                                <S.ButtonGroups>
                                    <S.VoteButtons>
                                        <S.RadiusButton>
                                            Yes
                                        </S.RadiusButton>                                
                                        <S.RadiusButton>
                                            No
                                        </S.RadiusButton>
                                    </S.VoteButtons>
                                    <S.RadiusButton>
                                        Vote
                                    </S.RadiusButton>
                                </S.ButtonGroups>
                            </S.VoteDiv>
                            <S.VoteListContainer>
                                <S.VoteListTitle>
                                    Votes
                                    <S.CircleNumber>
                                        86
                                    </S.CircleNumber>
                                </S.VoteListTitle>
                                <S.VotesList>
                                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>0x9238038....</Col>
                                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>No</Col>
                                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>80OHM</Col>
                                </S.VotesList>
                                <S.VotesList>
                                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>0x9238038....</Col>
                                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>No</Col>
                                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>80OHM</Col>
                                </S.VotesList>
                                <S.VotesList>
                                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>0x9238038....</Col>
                                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>No</Col>
                                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>80OHM</Col>
                                </S.VotesList>
                                <S.VotesList>
                                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>0x9238038....</Col>
                                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>No</Col>
                                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>80OHM</Col>
                                </S.VotesList>
                            </S.VoteListContainer>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={7} xl={7}>
                        <S.VoteDiv style={{marginTop: '80px'}}>
                            {proposal.status === 0 && 
                                <S.VoteTitle>
                                    Information
                                </S.VoteTitle>
                            }
                            
                            <S.ButtonGroups>
                                <S.VoteButtons>
                                    <S.Datediv>
                                        <b>Start date</b>
                                        <S.DateTimeSpan>
                                            {proposal.start_date.toDateString()}
                                        </S.DateTimeSpan>
                                    </S.Datediv>
                                    <S.Datediv>
                                        <b>End date</b>
                                        <S.DateTimeSpan>
                                            {proposal.end_date.toDateString()}
                                        </S.DateTimeSpan>
                                    </S.Datediv>
                                </S.VoteButtons>
                            </S.ButtonGroups>
                        </S.VoteDiv>
                        <S.VoteDiv>
                            {
                                proposal.status === 0 && 
                                <S.VoteTitle>
                                    Current Results
                                </S.VoteTitle>
                            }
                            <S.ButtonGroups>
                                <S.VoteButtons>
                                    <S.VoteResultdiv>
                                        <b>
                                        Yes
                                        </b>
                                        <S.VoteResultSpan>
                                        {(proposal.count_yes * 100 / (proposal.count_yes + proposal.count_no)).toFixed(2)}%
                                        </S.VoteResultSpan>
                                    </S.VoteResultdiv>
                                    <S.VoteResultdiv>
                                        <b>
                                        No
                                        </b>
                                        <S.VoteResultSpan>
                                        {(proposal.count_no * 100 / (proposal.count_yes + proposal.count_no)).toFixed(2)}%
                                        </S.VoteResultSpan>
                                        
                                    </S.VoteResultdiv>
                                </S.VoteButtons>
                            </S.ButtonGroups>
                        </S.VoteDiv>
                    </Col>
                </S.Container>
            </S.MainRow>
            </DefaultPageTemplate>
        </>

    );
}

const S = {
    MainRow: styled(Row)`
        @media (max-width: 1024px) {
            flex-flow: column;
        }
    `,
    Container: styled(Col)`
        display: flex;
        flex-direction: row;
        background-color: white;
        border-radius: 20px;
        color: ${props=>props.theme.gray['0']};
        font-family: ${props=>props.theme.fonts.primary};
        @media (max-width: 1024px) {
            flex-direction: column;
        }
    `,
    BackButton: styled.div`
        display: flex;
        color: ${props=>props.theme.gray['2']};
        font-size: 18px;
        align-items: center;
        cursor: pointer;
        padding: 20px;
        &:hover {
            color: ${props=>props.theme.gray['0']};
        }
    `,
    Title: styled.div`
        display: flex;
        font-size: 36px;
        font-weight: 600;
        align-items: center;
        padding: 20px;
    `,
    Tools: styled.div`
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media (max-width: 580px) {
            flex-direction: column;
            align-items: flex-start;
        }
    `,
    TxtContent: styled.div`
        padding: 10px 20px;
        font-size: 22px;
        .showMoreBtn {
            font-weight: 600;
            height: 46px;
            font-size: 18px;
            border: 1px solid ${props=>props.theme.gray['3']} !important;
            background-color: ${props=>props.theme.gray['4']} !important;
            color: ${props=>props.theme.gray['1']} !important;
            border-radius: 46px !important;
            cursor: pointer !important;
            width: -webkit-fill-available;
            margin-bottom: 8px;
            &:hover {
                border: 1px solid ${props=>props.theme.gray['2']} !important;
                color: ${props=>props.theme.gray['0']} !important;
            }
            @media (max-width: 500px) {
                font-size: 14px;
            }
            @media (max-width: 350px) {
                overflow: hidden;
            }
        }
    `,
    VoteDiv: styled.div`
        margin: 20px;
        border: solid 1px ${props=>props.theme.gray['3']};
        border-radius: 10px;
    `,
    VoteTitle: styled.div`
        padding: 20px 20px 5px 20px;
        border-bottom: solid 1px ${props=>props.theme.gray['3']};
        font-size: 20px;
        font-weight: 600;
    `,
    ButtonGroups: styled.div`
        padding: 24px;
    `,
    VoteButtons: styled.div`
        margin-bottom: 16px;
    `,

    RadiusButton: styled(Button)`
        font-weight: 600;
        height: 46px;
        font-size: 18px;
        border: 1px solid ${props=>props.theme.gray['3']};
        border-radius: 46px !important;
        cursor: pointer !important;
        width: -webkit-fill-available;
        margin-bottom: 8px;
        &:hover,
        &:active,
        &:focus {
            border: 1px solid ${props=>props.theme.gray['2']};
            color: ${props=>props.theme.gray['0']};
        }
    `,
    VoteListContainer: styled.div`
        margin: 20px;
        border: solid 1px ${props=>props.theme.gray['3']};
        border-radius: 10px;
    `,
    VoteListTitle: styled.div`
        padding: 20px 20px 5px 20px;
        border-bottom: solid 1px ${props=>props.theme.gray['3']};
        font-size: 20px;
        font-weight: 600;
        display: flex;
        align-items: center;

    `,
    CircleNumber: styled.div`
        width: 24px;
        height: 24px;
        font-size: 14px;
        color: white;
        background-color: ${props=>props.theme.gray['2']};
        border-radius: 20px;
        margin-left: 10px;
        padding: 1px;
        text-align: center;
    `,
    VotesList: styled(Row)`
        padding: 16px 24px;
    `,
    ActiveMark: styled.div`
        height: 26px;
        padding: 0 12px;
        font-size: 14px;
        vertical-align: middle;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        margin-right: 5px;
        &.active{
            background-color: #21B66F;
        }
        &.passed{
            background-color: ${props=>props.theme.gray['2']};
        }
        &.rejected{
            background-color: ${props=>props.theme.red.darker};
        }
    `,
    Author: styled.div`
        font-size: 14px;
        margin-left: 5px;
        display: flex;
        align-items: center;
    `,
    Icon: styled.img`
        width: 28px;
        height: 28px;
    `,

    InfoDiv: styled.div`
        border-radius: 20px;
    `,
    
    ResultDiv: styled.div`
        margin: 20px;
        border: solid 1px ${props=>props.theme.gray['3']};
        border-radius: 10px;
    `,

    Datediv: styled.div`
        margin-top: 4px;
        color: ${props=>props.theme.gray['2']};
    `,
    DateTimeSpan: styled.span`
        float: right;
        color: ${props=>props.theme.gray['0']};
    `,

    VoteResultdiv: styled.div`
        margin-top: 4px;
        color: ${props=>props.theme.gray['2']};
    `,
    VoteResultSpan: styled.span`
        float: right;
        color: ${props=>props.theme.gray['0']};
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
    `,
}

export default ProposalPage;
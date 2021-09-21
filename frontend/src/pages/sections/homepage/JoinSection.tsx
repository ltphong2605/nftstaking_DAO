import React from 'react';
import styled from 'styled-components';
import { Button, Row, Col} from 'antd'


const JoinSection = () => {
    return (
        <S.Container justify="center">
            <S.Content xs={24} sm={24} md={24} lg={18} xl={15}>
                {/* <S.TextContent> */}
                
                    <Row style={{width: '100%', padding: '10px'}}>
                        <S.TextContent xs={24} sm={24} md={24} lg={12} xl={12}
                        data-aos="fade-right"
                        data-aos-delay="300"
                        data-aos-duration="1300"
                        >
                            <S.Title>JOIN DISCORD TO BEGIN YOUR JOURNEY</S.Title>
                            <br />
                            <S.Text>
                            The CoolBeez collection is the first of a new generation of NFTs, designed to generate passive income for holders through the staking of NFTs.
                            <br/>
                            <br/>
                            The CoolBeez collection has been created with the goal of developing the largest and most inclusive investment DAO in the world. The CoolBeez DAO is focused on the purchase and development of assets in the metaverse, meaning holders of the CoolBeez NFT and $COOLBEEZ  tokens are on the frontline of investing in the most significant innovation of the 21st century. $COOLBEEZ tokens are earned through NFT staking, so you can sit back and allow your NFT to work for you. In addition to this all holders of a CoolBeez NFT will benefit from free or discounted access to all of our metaverse spaces forever! This means access to games, sports events and more just by holding our NFT!
                            </S.Text>
                            <Row justify="center" style={{width: '100%'}}>
                                <S.JoinButton>Join</S.JoinButton>
                            </Row>
                            <Row justify="center" style={{width: '100%'}}>
                                <S.FooterText>Go ahead, make your day...</S.FooterText>
                            </Row>
                            
                        </S.TextContent>
                        <S.ImageContent  xs={24} sm={24} md={24} lg={12} xl={12}
                        data-aos="fade-left"
                        data-aos-delay="300"
                        data-aos-duration="1300"
                        >
                            <S.Image src="images/nobackground-1.png" alt=""/>
                        </S.ImageContent>
                    </Row>
                    
                {/* </S.TextContent> */}
                
                
            </S.Content>
        </S.Container>
    );
}

export const S = {
    Container: styled(Row)`
        background-color: white;
        height: fit-content;
        width: 100%;
    `,
    Content: styled(Col)`
        display: flex;
        justify-content: center;
        align-items: center;    
        padding-top: 50px;
        padding-bottom: 50px;
        @media (min-width: 980) {
            height: fit-content;
            flex-direction: column;
            
        }
        
        @media (min-width: 1440px) {
            flex-direction: row;
        }
    `,
    TextContent: styled(Col)`
        padding: 10px;
    `,
    Title: styled.div`
        font-size:38px;
        font-family: 'Montserrat',sans-serif;
        color: #54595f;
        font-weight: 800;
        line-height: 1;
    `,
    Text: styled.div`
        font-size: 16px;
        font-family: 'Montserrat',sans-serif;
        font-weight: 400;
        color: #54595f;
        margin-bottom: 20px;
    `,
    JoinButton: styled(Button)`
        background: #00ccff;
        color: #fff;
        font-family: 'montserrat';
        font-size: 20px;
        font-weight: 400;
        border: 1px solid #00ccff;
        box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 50%);
        margin: 10px 10px;
        cursor: pointer !important;
        height: 50px;
        width: 162px;
        &:hover,
        &:active,
        &:focus {
        background-color: #FFFFFF;
        color: #fff;
        border: 1px solid #FFFFFF;
        }
    `,
    FooterText: styled.div`
        font-size: 30px;
        font-family: montserrat;
        color: #54595f;
    `,
    ImageContent: styled(Col)`
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    Image: styled.img`
        width: 100%;
        height: auto;
        margin: -22% 0 0 0;
        
        
    `,
};


export default JoinSection;
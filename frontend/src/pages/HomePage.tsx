import { Button, Row} from 'antd'
import React from 'react'
import styled from 'styled-components'
import { DefaultPageTemplate } from './shared/templates/DefaultPageTemplate'
import bgImage from '../assets/banner/banner.png';
import { SmoothProvider } from 'react-smooth-scrolling';
import BannerSection from './sections/homepage/BannerSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import JoinSection from './sections/homepage/JoinSection';
import IntroSection from './sections/homepage/IntroSection';
import LinkSection from './sections/homepage/LinkSection';
import Roadmap from './sections/homepage/RoadmapSection';
import FaqSection from './sections/homepage/FAQSection';
import TeamSection from './sections/homepage/TeamSection';
export default function HomePage() {
  
  AOS.init({
    once: true,
    delay: 50,
    duration: 500,
    easing: 'ease-in-out',
  });

  return (
    <>    
    <DefaultPageTemplate bgGray fullWidth noMargin> 
      {/* <SmoothProvider skew={true}> */}
        <BannerSection />
        <JoinSection/>
        <IntroSection />
        <LinkSection />
        <Roadmap />
        <FaqSection />
        <TeamSection />      
    </DefaultPageTemplate>
    </>
  )
}

export const S = {


  
  
  Intro: styled.div`
    border-bottom: 1px solid #ff9600;
    padding: 0px 10px;
    .title {
      color: #ff9600;
      font-size: 50px;
      font-weight: 900;
      font-family: Bungee;
      text-align: center;
    }
    .desc {
      color: ${props=>props.theme.gray[4]};
      font-size: 20px;
      text-align: center;
      margin: 20px 0px 10px 0px;
    }
    @media (min-width: 1024px) {
      padding: 0px 25px;
      .title {
        font-size: 60px;
      }
    }
  `,
  Mint: styled.div`
    margin-top: 60px;
    padding: 0px 10px;
    @media (min-width: 1024px) {
      padding: 0px 25px;
    }
    .title {
      color: #ba5a00;
      font-size: 40px;
      font-weight: 900;
      font-family: Bungee;
      text-align: center;
      margin-bottom: 40px;
    }
    .desc {
      color: ${props=>props.theme.gray[4]};
      font-size: 20px;
      text-align: center;
      margin: 20px 0px 30px 0px;
      width: 1100px;
    }
  `,
  PriceChart: styled.div`
    padding: 0px 10px;
    @media (min-width: 1024px) {
      padding: 0px 25px;
    }
    .title {
      color: #ba5a00;
      font-size: 25px;
      font-weight: 900;
      text-align: center;
      margin: 20px 0px;
    }
    .desc-lottery {
      color: ${props=>props.theme.gray[4]};
      font-size: 18px;
      font-weight: 600;
      text-align: center;
    }
    .desc-price {
      color: ${props=>props.theme.gray[4]};
      font-size: 18px;
      font-weight: 600;
      text-align: center;
      margin: 0px 0px 20px 0px;
    }
    @media (min-width: 1600px) {
      padding: 0px 300px;
    }
  `,
  Tokenomic: styled.div`
    margin-top: 80px;
    padding: 0px 10px;
    @media (min-width: 1024px) {
      padding: 0px 25px;
    }
    .title {
      color: #ff9600;
      font-size: 40px;
      font-weight: 900;
      font-family: Bungee;
      text-align: center;
      margin-bottom: 10px;
    }
    .subtitle {
      color: #ba5a00;
      font-size: 25px;
      font-weight: 900;
      text-align: center;
      margin-bottom: 20px;
    }
    .desc {
      color: ${props=>props.theme.gray[4]};
      font-size: 20px;
      text-align: center;
      margin: 20px 0px 30px 0px;
      width: 1100px;
    }
    .token-table {
      overflow: scroll
    }
    .token-table::-webkit-scrollbar-thumb {
      height: 2px !important;
      background: rgba(120,120,120,0.4);
    }
  `,
  Button: styled(Button)`
    background: #ff9600;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    border: 1px solid #ff9600;
    border-radius: 20px !important;
    margin: 10px 10px;
    cursor: pointer !important;
    height: 40px;
    width: 300px;
    &:hover,
    &:active,
    &:focus {
      background-color: #ba5a00;
      color: #fff;
      border: 1px solid #ba5a00;
    }
  `,
  TokenNamePan: styled.div`
    background: #ff9600;
    border: 1px solid #ba5a00;
    border-top-left-radius: 30px;
    div {
      color: white;
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      width: inherit;
      @media (max-width: 1024px) {
        font-size: 16px;
        font-weight: 400;
      }
    }
    width: inherit;
    padding: 10px 0px;
  `,
  TokenSymbolPan: styled.div`
    background: #ff9600;
    border: 1px solid #ba5a00;
    border-top-right-radius: 30px;
    div {
      color: white;
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      width: inherit;
      @media (max-width: 1024px) {
        font-size: 16px;
        font-weight: 400;
      }
    }
    width: inherit;
    padding: 10px 0px;
  `,
  BuyTaxPan: styled.div`
    background: #ff9600;
    border: 1px solid #ba5a00;
    div {
      color: white;
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      width: inherit;
      @media (max-width: 1024px) {
        font-size: 16px;
        font-weight: 400;
      }
    }
    width: inherit;
    padding: 15px 0px 15px;
  `,
  SellTaxPan: styled.div`
    background: #ff9600;
    border: 1px solid #ba5a00;
    div {
      color: white;
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      width: inherit;
      @media (max-width: 1024px) {
        font-size: 16px;
        font-weight: 400;
      }
    }
    width: inherit;
    padding: 15px 0px 15px;
  `,
  BuyTaxNumPan: styled.div`
    border: 1px solid #ba5a00;
    border-top: 0px;
    div {
      color: ${props=>props.theme.gray[4]};;
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      width: inherit;
      @media (max-width: 1024px) {
        font-size: 16px;
        font-weight: 400;
      }
    }
    width: inherit;
    padding: 25px 0px 25px;
  `,
  SellTaxNumPan: styled.div`
    border: 1px solid #ba5a00;
    border-top: 0px;
    div {
      color: ${props=>props.theme.gray[4]};;
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      width: inherit;
      @media (max-width: 1024px) {
        font-size: 16px;
        font-weight: 400;
      }
    }
    width: inherit;
    padding: 25px 0px 25px;
  `,
  
  Whitepaper: styled.div`
    margin-top: 80px;
    padding: 0px 10px;
    @media (min-width: 1024px) {
      padding: 0px 25px;
    }
    .title {
      color: #ff9600;
      font-size: 40px;
      font-weight: 900;
      font-family: Bungee;
      text-align: center;
      margin-bottom: 10px;
    }
  `
}

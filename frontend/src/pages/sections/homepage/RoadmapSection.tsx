import React from 'react';
import styled from 'styled-components';
import { Button, Row, Col, Image} from 'antd'
import { makeStyles } from '@material-ui/core/styles';
import { Parallax } from 'react-parallax';


const RoadmapSection = () => {
    return (
        <Parallax bgImage="images/bee-background_1080x1080_8 (2).jpg" bgImageAlt="the cat" strength={500}>
            <S.Roadmap id='roadmap'
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1500"
            >
                <Row justify='center'>
                    <span className='title'>ROADMAP 2022</span>
                </Row>
                <Row>
                <div className="timeline">
                    <div className="start"></div>

                    <div className="main-content">
                        <div className="container right">
                            <div className="content">
                                <Row justify='start'>
                                <h2 style={{fontFamily: 'montserrat', fontWeight: 800, fontSize: '20px', color: '#00CCFF'}}>Lift off!</h2>
                                </Row>
                                <Row align='middle' style={{marginTop: '20px'}}>
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                        <p style={{fontFamily: 'montserrat', fontSize: '16px'}} > DAO launch</p>
                                        <p style={{fontFamily: 'montserrat', fontSize: '16px'}}> CoolBeez Presale</p>
                                        <p style={{fontFamily: 'montserrat', fontSize: '16px'}}> CoolBeez Public Sale</p>
                                        <p style={{fontFamily: 'montserrat', fontSize: '16px'}}> 100% of all revenue from sales automatically sent to DAO treasury. </p>
                                        <p style={{fontFamily: 'montserrat', fontSize: '16px'}}> Staking LIVE!</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="phase-right">
                            Phase 1
                        </div> 
                    </div>

                    <div className="main-content">
                        <div className="container left">   
                            
                            <div className="content">
                                <Row justify='start'>
                                    <h2 style={{fontFamily: 'montserrat', fontWeight: 800, fontSize: '20px', color: '#00CCFF'}}>Land Grab!</h2>
                                </Row>
                                <Row align='middle' style={{marginTop: '20px'}}>
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                        <p style={{fontFamily: 'montserrat', fontSize: '16px'}}> 50-60% of DAO treasury (CDF) withdrawn to pay for multiple Land-NFT purchases. </p>
                                        <p style={{fontFamily: 'montserrat', fontSize: '16px'}}> Land-NFTs deposited into the DOA treasury (CDF). </p>
                                        <p style={{fontFamily: 'montserrat', fontSize: '16px'}}> Development proposal DAO voting</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="phase-left">
                            Phase 2
                        </div> 
                    </div>

                    <div className="main-content">
                        <div className="container right">
                            <div className="content">
                                <Row justify='start'>
                                <h2 style={{fontFamily: 'montserrat', fontWeight: 800, fontSize: '20px', color: '#00CCFF'}}>Development</h2>
                                </Row>
                                <Row align='middle' style={{marginTop: '20px'}}>
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                        <p style={{fontFamily: 'montserrat', fontSize: '16px'}}> Begin land development</p>
                                        <p style={{fontFamily: 'montserrat', fontSize: '16px'}}> Marketing for Metaverse spaces</p>
                                        <p style={{fontFamily: 'montserrat', fontSize: '16px'}}> List undeveloped land for lease</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="phase-right">
                            Phase 3
                        </div> 
                    </div>

                    <div className="main-content">
                        <div className="container left">   
                            
                            <div className="content">
                                <Row justify='start'>
                                    <h2 style={{fontFamily: 'montserrat', fontWeight: 800, fontSize: '20px', color: '#00CCFF'}}>Building the Community</h2>
                                </Row>
                                <Row align='middle' style={{marginTop: '20px'}}>
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                        <p style={{fontFamily: 'montserrat', fontSize: '16px'}}> Launch developments P2E for CoolBeez holders </p>
                                        <p style={{fontFamily: 'montserrat', fontSize: '16px'}}> Community proposal DAO review and voting </p>
                                        <p style={{fontFamily: 'montserrat', fontSize: '16px'}}> Develop lease and develop project packages</p>
                                        <p style={{fontFamily: 'montserrat', fontSize: '16px'}}> Create Phase 5 Roadmap based on community voting</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="phase-left">
                            Phase 4
                        </div> 
                    </div>
                    
                    
                    
                    
                    <div className="end"></div>
                </div>
                </Row>
            </S.Roadmap>
        </Parallax>
        
    );
}

const S = {
    Roadmap: styled.div`
    margin-top: 80px;
    margin-bottom: 40px;
    padding: 0px 10px;
    @media (min-width: 1024px) {
      padding: 0px 25px;
    }
    .title {
      color: white;
      font-size: 38px;
      font-weight: 900;
      font-family: Montserrat;
      text-align: center;
      margin-bottom: 20px;
    }
    * {
      box-sizing: border-box;
    }
    .timeline {
      position: relative;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
    }
    .timeline::after {
      content: '';
      position: absolute;
      width: 6px;
      background-color: #f2f5f7;
      top: 0;
      bottom: 0;
      left: 50%;
      margin-left: -3px;
    }
    .container {
      padding: 10px 40px;
      position: relative;
      background-color: inherit;
      width: 50%;
    }
    .container::after {
      content: '';
      position: absolute;
      width: 48px;
      height: 48px;
      right: -24px;
      background-color: #00ccff;
      border: 3px solid #f2f5f7;
      top: 24px;
      border-radius: 50%;
      z-index: 1;
    }
    .main-content{
        display:flex;
        flex-direction: row;
    }
    .phase-left{
        margin-left: 48px;
        margin-top: 34px;
        font-size: 20px;
        font-family: 'montserrat';
        font-weight:800;
        color: #fff
    }
    .phase-right
    {
        margin-left: -120px;
        margin-top: 34px;
        font-size: 20px;
        font-family: 'montserrat';
        font-weight:800;
        color: #fff
    }
    .left {
      left: 0;
    }
    .right {
      left: 50%;
    }
    .left::before {
      content: " ";
      height: 0;
      position: absolute;
      top: 36px;
      width: 0;
      z-index: 1;
      right: 30px;
      border: medium solid white;
      border-width: 10px 0 10px 10px;
      border-color: transparent transparent transparent #f2f5f7;
    }
    .right::before {
      content: " ";
      height: 0;
      position: absolute;
      top: 36px;
      width: 0;
      z-index: 1;
      left: 30px;
      border: medium solid white;
      border-width: 10px 10px 10px 0;
      border-color: transparent #f2f5f7 transparent transparent;
    }
    .right::after {
      left: -24px;
    }
    .content {
      padding: 20px 30px;
      background-color: white;
      position: relative;
      border-radius: 6px;
      border: 2px solid #f2f5f7;
    }
    .start {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: #f2f5f7;
      left: 50%;
      border-radius: 50%;
      margin-left: -10px;
      margin-top: -19px;
    }
    .end {
      content: '';
      position: absolute;
      bottom: -10px;
      width: 20px;
      height: 20px;
      background-color: #f2f5f7;
      left: 50%;
      border-radius: 50%;
      margin-left: -10px;
    }
    @media screen and (max-width: 600px) {
      /* Place the timelime to the left */

      .main-content {
          display: flex;
          flex-direction: column-reverse;

      }
      .phase-right
      {
            margin-left: 74px;
            margin-top: 34px;
            font-size: 20px;
            font-family: 'montserrat';
            font-weight:800;
            color: #fff
        }
        .phase-left
        {
              margin-left: 74px;
              margin-top: 34px;
              font-size: 20px;
              font-family: 'montserrat';
              font-weight:800;
              color: #fff
          }
      .timeline::after {
        left: 31px;
      }
      .start {
        left: 31px;
      }
      .end {
        left: 31px;
      }
      /* Full-width containers */
      .container {
        width: 100%;
        padding-left: 70px;
        padding-right: 25px;
      }
      
      /* Make sure that all arrows are pointing leftwards */
      .container::before {
        left: 60px;
        border: medium solid white;
        border-width: 10px 10px 10px 0;
        border-color: transparent #f2f5f7 transparent transparent;
      }
    
      /* Make sure all circles are at the same spot */
      .left::after, .right::after {
        left: 15px;
      }
      
      /* Make all right containers behave like the left ones */
      .right {
        left: 0%;
      }
    }
  `,
}

export default RoadmapSection;
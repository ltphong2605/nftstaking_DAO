import React, {useState} from 'react';
import styled from 'styled-components';
import { Button, Row, Col, Image} from 'antd'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    title: {
        fontSize:'38px',
        fontFamily: 'Montserrat',
        color: '#3a3a3a',
        fontWeight: 800,
        textAlign: 'center',  
    },
    textFont: {
        fontSize: '16px',
        fontFamily: 'sairia',
        color: '#7a7a7a',
        fontWeight: 600,
        marginBottom: '30px',
        textAlign: 'center'
    },
    imgcard: {
        width: '100%',
        height: 'auto',
        marginBottom: '30px',
    }
}));

const TeamSection = () => {
    const classes = useStyles();

    return (
            <S.Container> 
                <Row justify="center" style={{width: '100%'}}
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="1300"
                >
                    <Col xs={24} sm={24} md={24} lg={18} xl={16}>
                        <div className={classes.title}>
                        OUR TEAM
                        </div>
                    </Col>
                </Row>
                <Row justify="center" style={{width: '100%'}}>
                    <Col xs={24} sm={24} md={24} lg={18} xl={14}>
                        <Row justify="space-between" style={{width: '100%'}}>
                            <Col xs={24} sm={24} md={4} lg={4} xl={4}>
                                <Row justify="center" style={{width: '100%'}}>
                                    <img className={classes.imgcard} src="images/Mascots-V3-6-1024x1024.png" alt="Mascots-V3-6-1024x1024.png" />
                                </Row>
                                <Row className={classes.textFont} justify="center" style={{width: '100%'}}>
                                Dan Maguire
                                </Row>
                                <Row className={classes.textFont}  justify="center" style={{width: '100%'}}>
                                Founder & Developer
                                </Row>
                                <Row className={classes.textFont}  justify="center" style={{width: '100%'}}>
                                United Kingdom
                                </Row>
                            </Col>
                            <Col xs={24} sm={24} md={4} lg={4} xl={4}>
                            <Row justify="center" style={{width: '100%'}}>
                                    <img className={classes.imgcard}  src="images/Mascots-V3-5-1024x1024.png" alt="Mascots-V3-5-1024x1024.png" />
                                </Row>
                                <Row className={classes.textFont} justify="center" style={{width: '100%'}}>
                                Bart Vonk
                                </Row>
                                <Row className={classes.textFont}  justify="center" style={{width: '100%'}}>
                                Co-Founder & Marketeer
                                </Row>
                                <Row className={classes.textFont}  justify="center" style={{width: '100%'}}>
                                The Netherlands
                                </Row>
                            </Col>
                            <Col xs={24} sm={24} md={4} lg={4} xl={4}>
                            <Row justify="center" style={{width: '100%'}}>
                                    <img  className={classes.imgcard} src="images/Mascots-V3-1-1024x1024.png" alt="Mascots-V3-1-1024x1024.png" />
                                </Row>
                                <Row className={classes.textFont} justify="center" style={{width: '100%'}}>
                                Ahmed Amhani
                                </Row>
                                <Row className={classes.textFont}  justify="center" style={{width: '100%'}}>
                                Co-Founder & Social Media Marketing
                                </Row>
                                <Row className={classes.textFont}  justify="center" style={{width: '100%'}}>
                                Dubai
                                </Row>
                            </Col>
                            <Col xs={24} sm={24} md={4} lg={4} xl={4}>
                            <Row justify="center" style={{width: '100%'}}>
                                    <img  className={classes.imgcard} src="images/Mascots-V3-7-1024x1024.png" alt="Mascots-V3-7-1024x1024.png" />
                                </Row>
                                <Row className={classes.textFont} justify="center" style={{width: '100%'}}>
                                Fahmi Ilahi
                                </Row>
                                <Row className={classes.textFont}  justify="center" style={{width: '100%'}}>
                                Artist / Illustrator
                                </Row>
                                <Row className={classes.textFont}  justify="center" style={{width: '100%'}}>
                                Indonesia
                                </Row>
                            </Col>
                            <Col xs={24} sm={24} md={4} lg={4} xl={4}>
                            <Row justify="center" style={{width: '100%'}}>
                                    <img  className={classes.imgcard} src="images/Mascots-V3-3-1024x1024.png" alt="Mascots-V3-3-1024x1024.png" />
                                </Row>
                                <Row className={classes.textFont} justify="center" style={{width: '100%'}}>
                                Ella Maguire
                                </Row>
                                <Row className={classes.textFont}  justify="center" style={{width: '100%'}}>
                                Visionary
                                </Row>
                                <Row className={classes.textFont}  justify="center" style={{width: '100%'}}>
                                United Kingdom
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </S.Container>
    );
}

const S = {
    Container: styled(Row)`
        height: fit-content;
        width: 100%;
        padding: 10px;
        background-color: white;
        padding-top: 50px;
        padding-bottom: 50px;
    `,
}
export default TeamSection;
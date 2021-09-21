import React from 'react';
import styled from 'styled-components';
import { Button, Row, Col} from 'antd'
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';

const useStyles = makeStyles(theme => ({
   
    radiusRect:{
        borderRadius: '16px !important',
        '& iframe': {
            borderRadius: '16px !important',
            width: '100%',
            zIndex: 10
        }
    },

    textContent: {
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: '1.75em',
        fontWeight: 400,
        fontSize:'16px',
        fontFamily: 'Montserrat',
        padding: 10,
    },
}));

const LinkSection = () => {
    const classes = useStyles();
    return (
        <S.Container>
            <S.Content justify="center">
                <Col xs={24} sm={24} md={24} lg={16} xl={16}  style={{padding: '20px'}}>
                    <Row justify="center"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1300"
                    >
                        <Col xs={24} sm={18} md={8} lg={8} xl={8}>
                            <S.ImageItem>
                                <S.MainImage src="images/sandbox.png" alt="sandbox.png"/>
                                <S.SubImage src="images/download-1024x310.png" alt="download-1024x310.png" style={{width: '56%', height: 'auto'}} />
                            </S.ImageItem>
                        </Col>
                        <Col xs={24} sm={18} md={8} lg={8} xl={8}>
                        <S.ImageItem>
                                <S.MainImage src="images/decentraland.png" alt="decentraland.png"/>
                                <S.SubImage  src="images/Decentraland-Crypto-Logo-PNG-Images-1024x171.png" alt="Decentraland-Crypto-Logo-PNG-Images-1024x171.png" style={{maxWidth: '100%', height: 'auto'}}/>
                            </S.ImageItem>
                        </Col>
                        <Col xs={24} sm={18} md={8} lg={8} xl={8}>
                        <S.ImageItem>
                                <S.MainImage src="images/somniumspace.png" alt="somniumspace.png"/>
                                <S.SubImage src="images/download-1.png" alt="download-1.png" style={{width: '55%', height: 'auto'}} />
                            </S.ImageItem>
                        </Col>
                    </Row>
                </Col>
            </S.Content>
        </S.Container>
    );
}


const S = {
    Container: styled(Row)`
        position: relative;
        height: fit-content;
        width: 100%;
        background-color: white;
    `,
    Content: styled(Row)`
        width: 100%;
        margin-top: 8rem;
    `,
    ImageItem: styled.div`
        
        padding: 22px;
        margin: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        
    `,
   
    MainImage: styled.img`
    width: 100%;
    height: 80%;
    border-style: solid;
    border-width: 8px 8px 8px 8px;
    border-color: #FFFFFF;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 50%);
    `,
    SubImage: styled.img`
        margin-top: 1rem;
    `,
};
export default LinkSection;
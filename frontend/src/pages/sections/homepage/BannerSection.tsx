import React from 'react';
import styled from 'styled-components';
import YoutubeBackground from 'react-youtube-background';
//import YoutubeBackground from '../../shared/video-background/YoutubeBackground';
import { Button, Row, Col} from 'antd'
//import YouTube from 'react-youtube';
import ReactPlayer from 'react-player';
import { makeStyles } from '@material-ui/core/styles';
import { Parallax } from 'react-parallax';

const useStyles = makeStyles(theme => ({
  videoBackground: {
    background: '#000',
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -99,
    '&::after': {
        display: 'block',
        content: '',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        background: 'rgba(0,0,0,0.75)'
    },
    '& iframe':{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none'    
    }
},
videoForeground : {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none'
},
}));

const videoOptions = {
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    controls: 0,
    rel: 0,
    showinfo: 0
  }
};

const BannerSection = () => {

  const clazz = useStyles();
    const handleEndVideo = (e) => {
        e.target.playVideo();
      }
    const handleReady = () => {

    }

//https://youtu.be/9NDqyU_Y0FM

    return (
        <S.Banner>
          
          <S.BannerImgContainer>
            <div>
              <S.BannerImage 
                src="images/bannerlogo-Recovered-1024x512.png"
                data-aos="fade-down"
                data-aos-delay="300"
                data-aos-duration="1300"
                />
            </div>
            
              <div>
                <S.JoinButton
                data-aos="fade-in"
                data-aos-delay="800"
                data-aos-duration="2300"
                >Mint</S.JoinButton>
              </div>
              
          </S.BannerImgContainer>
            


          
        </S.Banner>
    )
}

export const S = {
    Banner: styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    @media (min-width: 300px) {
      height: 1020px;
    }
    @media (min-width: 768px) {
      height: 800px;
    }
    @media (min-width: 1024px) {
      height: 700px;
    }
    @media (min-width: 1600px) {
      height: 700px;
    }

  `, 

  ParallaxBg: styled(Parallax)`
    position: absolute !important;
        height: 100%;
        width: 100%;
        top: 0;
    `,
  
  BannerVideo: styled(YoutubeBackground)`
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 700px;
    -webkit-transition: opacity 0.5s ease-in-out;
    -moz-transition: opacity 0.5s ease-in-out;
    transition: opacity 0.5s ease-in-out;
    z-index: -1;
    @media (min-width: 300px) {
      height: 1080px;
    }
    @media (min-width: 768px) {
      height: 800px;
    }
    @media (min-width: 1024px) {
      height: 700px;
    }
    @media (min-width: 1600px) {
      height: 700px;
    }
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
  

  BannerImgContainer: styled.div`
    width: '80%';
    height: '512px';
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (min-width: 300px) {
      height: 320px;
    }
    @media (min-width: 768px) {
      height: 410px;
    }
    @media (min-width: 1024px) {
      height: 472px;
    }
    @media (min-width: 1600px) {
      height: 512px;
    }
  `,

  BannerImage: styled.img`
    height: auto;
    max-width: 100%;
    margin-top: auto;
    margin-bottom: auto;
  `,
}

export default BannerSection;
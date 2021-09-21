import React, { ReactNode, useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Footer } from '../../../components/shared/layout/footer/Footer'
import Header from '../../../components/shared/layout/header/Header';
import { Parallax, Background } from "react-parallax";
import { makeStyles } from '@material-ui/core/styles';
const styles = {
  height: "-webkit-fill-available",
  width: "100vw",
  backgroundImage: "url('images/bee-background_1080x1080_8 (1).jpg')",
  backgroundSize: '100vw',
};
export type DefaultTemplatePageProps = {
  alertWallet?: boolean
  alertBscNetwork?: boolean
  children: ReactNode
  bgGray?: boolean
  noMargin?: boolean
  fullWidth?: boolean
  sidebar? : boolean
}

const useStyles = makeStyles(theme => ({
  parallaxBg : {
    width: '100%',
    height: '-webkit-fill-available'
  }
}));

export function DefaultPageTemplate({ alertWallet, alertBscNetwork, children, bgGray, noMargin, fullWidth, sidebar }: DefaultTemplatePageProps) {
  const [isSidebar, setIsSidebar] = useState(false);
  const clazz = useStyles();
  useEffect(()=>{
    if(sidebar !== undefined) setIsSidebar(true);
  },[])
  return (
    <div style={{ position: "relative", minWidth: '290px' }}>
      <S.ParallaxBG strength={500} style={{height: '-webkit-fill-available'}}>
        <Header />
        <S.Main bgGray={!!bgGray} noMargin={!!noMargin} sidebar={sidebar} isSidebar={isSidebar}>
          <S.Container fullWidth={!!fullWidth}>{children}</S.Container>
        </S.Main>
        <Footer />

        <Background className={clazz.parallaxBg}>
          <div style={styles}></div>
        </Background>
      </S.ParallaxBG>
      
    </div>
  )
}
//background: ${props => props.theme.white};


    // ${props =>
    //   props.bgGray &&
    //   css`
    //     background: ${props.theme.black};
    //   `}

export const S = {
  ParallaxBG: styled(Parallax)`
    .react-parallax-background-children {
      height: -webkit-fill-available
    }
  `,
  Main: styled.main<{ bgGray?: boolean; noMargin: boolean; sidebar:boolean; isSidebar: boolean; }>`
    padding-top: 100px !important;
    width: 100%;
    min-height: calc(100vh - 72px);
    
    display: block;
    align-items: center;
    


    ${props =>
      css`
        padding: ${props.noMargin ? 0 : props.theme.margin.small};
      `}
    ${props => (props.isSidebar && !props.sidebar) && 'padding-left: 74px !important;'}
    
    @media (min-width: ${props => props.theme.viewport.mobile}) {
      min-height: calc(100vh - 48.2px);
    }
    @media (min-width: ${props => props.theme.viewport.tablet}) {
      min-height: calc(100vh - 102px);
      padding: ${props => props.theme.margin.small};
      ${props =>
        css`
          padding: ${props.noMargin ? 0 : props.theme.margin.small}};
        `}
      ${props => (props.isSidebar && !props.sidebar) && 'padding-left: 74px !important;'}
    }

    @media (min-width: ${props => props.theme.viewport.desktop}) {
      min-height: calc(100vh - 47px);
      padding: ${props => props.theme.margin.small};
      ${props =>
        css`
          padding: ${props.noMargin ? 0 : props.theme.margin.small};
        `}
      ${props => props.sidebar && 'padding-left: 324px !important;'}
      ${props => (props.isSidebar && !props.sidebar) && 'padding-left: 74px !important;'}
    }
    @media (min-width: ${props => props.theme.viewport.desktopl}) {
      min-height: calc(100vh - 47px);
    }
    .infinite-scroll-component {
      vertical-align: top !important;
    }
  `,
  Container: styled.div<{ fullWidth?: boolean }>`
    width: 100%;
    margin: 0 auto;
    ${props =>
      !props.fullWidth &&
      css`
        max-width: ${props.theme.viewport.desktopXl};
      `}
  `
}

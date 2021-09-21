import React from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-parallax';
export interface FooterProps {
  className?: string
}
 
export const Footer: React.FC<FooterProps> = ({ className }: FooterProps) => {
  return (
    
      <S.Footer className={className}>
        
        <S.ParallaxBg bgImage="images/bee-background_1080x1080_8 (1).jpg" bgImageAlt="the cat" strength={500}>
        </S.ParallaxBg>
        <S.Span>Copyright © 2022 Cool Beez</S.Span>            
      </S.Footer>  
  )
}

const S = {
  Footer: styled.footer`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  

  
`,
Span: styled.span`
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 400;
  text-decoration: none;
  font-size: 16px;
  color: ${props => props.theme.gray[4]};
`,
ParallaxBg: styled(Parallax)`

  position: absolute !important;
  height: 80px !important;
  width: 100%;
  z-index: -1;
    `,
}

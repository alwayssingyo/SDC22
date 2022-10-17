import styled from 'styled-components'

export const YoutubeContainer = styled.div `
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.8);
  z-index: 100;
`;

export const YoutubeInner = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  padding-bottom: 80px;
  @media screen and (max-width: 1024px){
    padding-bottom: 56px;
  }
`;

export const YoutubeBox = styled.div `
  width: 100%;
  border-radius: 14px;
  background-color: #000;
  overflow: hidden;
`;

export const YoutubeWrap = styled.div `
  position: relative;
  overflow: hidden;
  width: 86.666vw;
  max-width: 1200px;
  &:after {
    content: "";
    display: block;
    padding-bottom: 56.25%;
  }
  iframe {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

export const CloseBtn = styled.button `
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  padding: 18px;
  border-radius: 100%;
  background-color: #fff;
	background-image: url(${process.env.PUBLIC_URL + '/images/ico-close.png'});
  background-repeat: no-repeat;
  background-size: 24px 24px;
  background-position: center;
  box-sizing: border-box;
  @media screen and (max-width: 1024px){
    width: 40px;
    height: 40px;
    background-size: 16px 16px;
  }
`;
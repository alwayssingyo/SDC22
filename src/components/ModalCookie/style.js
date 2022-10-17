import styled from "styled-components"

export const ModalContainer = styled.div `
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgb(0,0,0,0.8);
  z-index: 999;
`;

export const ModalInner = styled.div `
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding: 50px 40px 40px 40px;
  box-sizing: border-box;
  @media screen and (max-width: 768px){
    padding: 42px 24px 24px 24px;
  }
`;

export const ModalWrap = styled.div `
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px){
    display: block;
  }
`;

export const ModalText = styled.div `
  width: calc(100% - 180px - 60px);
  @media screen and (max-width: 768px){
    width: 100%;
  }
`;

export const ModalTitle = styled.div `
  font-family: 'SamsungOne-700';
  font-size: 20px;
  font-weight: bold;
  line-height: 1.3;
  letter-spacing: normal;
  color: #fff;
  @media screen and (max-width: 768px){
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const Modaldesc = styled.div `
  margin-top: 10px;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #fff;
  a {
    color: #2088fd;
    &:hover {
      color: #5ba8ff;
      text-decoration: underline;
    }
  }
  @media screen and (max-width: 768px){
    margin-top: 6px;
    max-height: 60px;
    overflow-y: auto;
  }
`;

export const ModalBtn = styled.div `
  .button {
    width: 180px;
    button {
      height: 40px !important;
      font-size: 14px;
    }
    + .button {
      margin-top: 10px;
    }
  }
  @media screen and (max-width: 768px){
    display: flex;
    margin-top: 20px;
    .button {
      display: inline-block;
      width: calc(50% - 4px);
      + .button {
        margin-top: 0;
      }
      &:first-of-type {
        order: 2;
        margin-left: 8px;
      }
      &:last-of-type {
        order: 1;
      }
      button {
        padding: 0 8px;
      }
    }
  }
`;

export const ModalClose = styled.button `
  position: absolute;
  top: 20px;
  right: 40px;
  width: 20px;
  height: 20px;
	background-image: url(${process.env.PUBLIC_URL + '/images/ico-close-white.png'});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 768px){
    top: 14px;
    right: 14px;
  }
`;
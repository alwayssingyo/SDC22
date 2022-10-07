import styled from 'styled-components'

export const PopupContainer = styled.div `
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const PopupInner = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  min-width: 600px;
  max-width: 600px;
  max-height: calc(100vh - 80px);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.08);
  background-color: #fff;
  text-align: center;
  font-size: 0;
  box-sizing: border-box;
  @media screen and (max-width: 768px){
    min-width: calc(100% - 48px);
    padding: 30px;
    border-radius: 14px;
  }
`;

export const PopupTitle = styled.div `
  margin-bottom: 40px;
  font-family: 'SamsungOne-700';
  font-size: 24px;
  font-weight: bold;
  line-height: normal;
  letter-spacing: -0.24px;
  text-align: center;
  color: #000;
  @media screen and (max-width: 768px){
    margin-bottom: 12px;
    font-size: 20px;
    letter-spacing: -0.2px;
  }
`;

export const PopupCont = styled.div `
  max-height: calc(100vh - 228px);
  text-align: left;
  overflow-y: auto;
  @media screen and (max-width: 768px){
    max-height: none;
  }
`;

export const PopupText = styled.div `
  font-family: "SamsungOne-400";
  font-size: 14px;
  font-weight: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #535353;
  a {
    color: #1259aa;
    &:hover {
      color: #2088fd;
      text-decoration: underline;
    }
  }
  @media screen and (max-width: 768px){
    max-height: 206px;
    overflow-y: auto;
  }
`;

export const PopupBottom = styled.div `
  margin-top: 40px;
  text-align: center;
  @media screen and (max-width: 768px){
    margin-top: 24px;
  }
`;

export const PopupTextBtn = styled.button `
  margin-top: 16px;
  font-family: 'SamsungOne-700';
  font-size: 14px;
  font-weight: bold;
  line-height: 1.57;
  letter-spacing: normal;
  color: #535353;
  text-decoration: underline;
  &:hover {
    color: #000;
  }
  @media screen and (max-width: 768px){
    margin-top: 12px;
  }
`;

export const PopupButton = styled.div `
  .button {
    display: inline-block;
    width: calc(50% - 4px);
    & + .button {
      margin-left: 8px;
    }
  }
`;
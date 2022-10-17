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
  min-width: 400px;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.08);
  background-color: #fff;
  text-align: center;
  font-size: 0;
  box-sizing: border-box;
  @media screen and (max-width: 768px){
    min-width: 312px;
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
    margin-bottom: 30px;
    font-size: 20px;
    letter-spacing: -0.2px;
  }
`;

export const PopupCont = styled.div `
  width: 240px;
  margin: 0 auto;
  @media screen and (max-width: 768px){
    width: 200px;
  }
`;

export const PopupItem = styled.button `
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 12px 0;
  text-align: center;
  border: solid 1px #1e1e1e;
  border-radius: 8px;
  font-family: 'SamsungOne-700';
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: normal;
  color: #1e1e1e;
  &+& {
    margin-top: 16px;
  }
  &.google {
    border: solid 1px #fd2c25;
    color: #fd2c25;
  }
  &.office {
    border: solid 1px #ea2400;
    color: #ea2400;
  }
  &.outlook {
    border: solid 1px #0072c6;
    color: #0072c6;
  }
  &.yahoo {
    border: solid 1px #571bc9;
    color: #571bc9;
  }
  img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-right: 4px;
  }
  @media screen and (max-width: 768px){
    padding: 8px 0;
    &+& {
      margin-top: 10px;
    }
  }
`;

export const PopupClose = styled.button `
  position: absolute;
  right: 20px;
  top: 20px;
  width: 24px;
  height: 24px;
	background-image: url(${process.env.PUBLIC_URL + '/images/ico-close.png'});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 768px){
    right: 14px;
    top: 14px;
    width: 20px;
    height: 20px;
  }
`;
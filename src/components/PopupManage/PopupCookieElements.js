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
  min-width: 680px;
  max-width: 680px;
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

export const PopupDesc = styled.div `
  margin-top: 16px;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: center;
  color: #535353;
`;

export const PopupCont = styled.div `
  max-height: calc(100vh - 164px - 112px - 80px);
  height: 424px;
  margin-top: 40px;
  text-align: left;
  overflow-y: auto;
  @media screen and (max-width: 768px){
    max-height: calc(100vh - 170px - 94px - 80px);
    height: 336px;
    margin-top: 24px;
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
  margin-top: 24px;
  text-align: center;
  @media screen and (max-width: 768px){
    margin-top: 24px;
  }
`;

export const PopupButton = styled.div `
  .button {
    display: inline-block;
    width: 180px;
  }
  @media screen and (max-width: 768px){
    .button {
      width: 150px;
    }
  }
`;

export const CookieItem = styled.div `
  padding: 24px;
  border-radius: 10px;
  background-color: #f5f7fb;
  &+& {
    margin-top: 16px;
  }
  @media screen and (max-width: 768px){
    padding: 16px;
  }
`;

export const CookieTitle = styled.div `
  font-family: 'SamsungOne-700';
  font-size: 16px;
  font-weight: bold;
  line-height: 1.25;
  letter-spacing: normal;
  color: #000;
  @media screen and (max-width: 768px){
    font-size: 14px;
    line-height: 1.43;
  }
`;

export const CookieDesc = styled.div `
  margin-top: 2px;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #535353;
`;

export const CookieBottom = styled.div `
  display: flex;
  margin-top: 16px;
  justify-content: space-between;
  align-items: flex-end;
  @media screen and (max-width: 768px){
    margin-top: 10px;
  }
`;

export const CookieView = styled.button `
  position: relative;
  padding-right: 18px;
  font-family: 'SamsungOne-700';
  font-size: 14px;
  font-weight: bold;
  line-height: 1.57;
  letter-spacing: normal;
  color: #535353;
  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 3px;
    width: 14px;
    height: 14px;
    background-image: url(${process.env.PUBLIC_URL + '/images/ico-arrow-grey.png'});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  &.is-active {
    &:after {
      transform: rotate(180deg);
    }
  }
`;

export const CookieBtn = styled.div `
  .button {
    position: relative;
    background-color: #fff;
    box-sizing: border-box;
    width: 37px;
    height: 30px;
    span {
      position: absolute;
      top: 8px;
      left: 8px;
      display: inline-block;
      font-family: 'SamsungOne-600';
      font-size: 12px;
      font-weight: 600;
      line-height: 14px;
      letter-spacing: normal;
      color: #7c7c7c;
      z-index: 2;
    }
    &:first-of-type {
      border-radius: 4px 0 0 4px;
      padding: 8px 8px 8px 10px;
      span {
        left: 10px;
      }
    }
    &:last-of-type {
      border-radius: 0 4px 4px 0;
      padding: 8px 10px 8px 8px;
      span {
        left: auto;
        right: 10px;
      }
      &.is-active {
        &:after {
          width: 37px;
        }
      }
    }
    &.is-active {
      span {
        color: #fff;
      }
      &:after {
        content: '';
        position: absolute;
        top: 2px;
        right: 2px;
        width: 33px;
        height: 26px;
        border-radius: 4px;
        background-color: #000;
        z-index: 1;
      }
    }
  }
`;

export const CookieGrid = styled.div `
  display: none;
  margin-top: 12px;
  &.is-active {
    display: block;
  }
  table {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #000;
    }
  }
  table colgroup col:first-of-type {
    width : 36.231%;
  }
  table tr {
    background-color: #fff;
  }
  thead th {
    padding: 16px;
    font-family: 'SamsungOne-700';
    font-size: 14px;
    font-weight: bold;
    line-height: 1.43;
    letter-spacing: normal;
    color: #4e4e4e;
    border-right: 1px solid #efefef;
    &:last-of-type {
      border: none;
    }
  }
  tbody td {
    padding: 16px;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #4e4e4e;
    border-top: 1px solid #efefef;
    border-right: 1px solid #efefef;
    vertical-align: top;
    &:last-of-type {
      border-right: none;
    }
  }
  @media screen and (max-width: 768px){
    table colgroup col:first-of-type {
      width : 37.272%;
    }
    thead th {
      padding: 16px 6px;
    }
    tbody td {
      padding: 16px 6px;
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
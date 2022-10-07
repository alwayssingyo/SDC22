import styled, {keyframes } from "styled-components";

export const Card = styled.div `
  position: relative;
  width: 33.333%;
  background-color: #fff;
  box-sizing: border-box;
  overflow: hidden;
  transition: 0.3s ease-in-out;
  &+& {
    border-left: 1px solid #e1e1e1;
  }
  a {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    cursor: default;
  }

  @media screen and (max-width: 768px){
    width: 100%;
    border-radius: 14px;
    &+& {
      border-left: none;
      margin-top: 16px;
    }
  }
`;

export const CardLink = styled.a `
  display: inline-block;
  width: 100%;
  overflow: hidden;
`;

export const CardImage = styled.div `
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  padding: 0 24px 36px 24px;
  box-sizing: border-box;
  img {
    display: none;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 102%;
    height: 102%;
    transition: 0.3s;
    object-fit: cover;
    border-radius: 14px 14px 0 0;
  }

  @media screen and (max-width: 768px){
    max-height: 180px;
    padding: 24px;
    img {
      display: inline-block;
    }
    &:after {
      content: "";
      display: block;
      padding-bottom: 180px;
    }
  }
`;

export const CardText = styled.div `
  font-size: 0;
`;

export const CardTitle = styled.div `
  position: relative;
	font-family: 'samsungsharpsans-bold';
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: normal;
  color: #000;
  @media screen and (max-width: 768px){
    font-size: 16px;
    line-height: 1.38;
  }
`;

export const CardTime = styled.div `
  position: relative;
  margin-top: 2px;
  font-family: 'SamsungOne-700';
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #2088fd;
`;

const circleFade = keyframes`
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`

export const CardTypeInner = styled.div `
  position: relative;
  height: 100%;

  @media screen and (max-width: 768px){

  }
`;

export const CardType = styled.div `
  display: inline-block;
  margin: 0 0 8px 24px;
  border-radius: 18px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  vertical-align: middle;
  letter-spacing: normal;

  .inner {
    .tag {
      display: inline-block;
      margin-right: 0;
      padding: 6.8px 12px 5.2px 12px;
      font-family: 'SamsungOne-700';
      color: #fff;
      line-height: 1.43;
      border-radius: 18px;
    }
  }

  &.on-live {
    .inner {
      .tag {
        color: #fff;
        background-color: #fa5347;
        &::before {
          content: '';
          display: inline-block;
          width: 8px;
          height: 8px;
          margin-right: 6px;
          background-color: #fff;
          border-radius: 100%;
          animation: ${circleFade} 0.8s infinite linear alternate;
          margin-bottom: 0.6px;
        }
      }
    }
  }
  @media screen and (max-width: 768px){
    position: absolute;
    top: 12px;
    left: 12px;
    margin: 0;
    z-index: 10;

    &.on-live {
      .inner {
        .tag {
          padding: 6.8px 12px 5.2px 12px;
          line-height: 20px;
          &::before {
            margin-bottom: 0.8px;
          }
        }
      }
    }
  }
`;

export const CardBtn = styled.div `
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: 24px;
  padding-right: 18px;
  margin-top: 14px;
  font-family: 'SamsungOne-700';
  font-size: 14px;
  font-weight: bold;
  line-height: 1.57;
  letter-spacing: normal;
  color: #1259aa;
  cursor: pointer;
  &:hover {
    color: #2088fd;
    text-decoration: underline;
  }
  &:before {
    content: "";
    position: absolute;
    top: 3px;
    right: 0;
    width: 14px;
    height: 14px;
    background-image: url(${process.env.PUBLIC_URL + '/images/ico-arrow-navy.svg'});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  &:hover:before {
    background-image: url(${process.env.PUBLIC_URL + '/images/ico-arrow-blue.svg'});
  }
  @media screen and (max-width: 768px){
    display: none;
  }
`;
import styled from "styled-components";

export const Card = styled.div `
  opacity: ${props => props.listYn ? '0' : '1'};
  transform: ${props => props.listYn ? 'translateY(50px)' : 'none'};
  width: ${props => props.phase4 ? '100%' : 'calc(25% - 24px)'};
  margin: ${props => props.phase4 ? 0 : '12px'};
  display: inline-block;
  text-align: left;
  border-radius: 14px;
  background-color: #fff;
  font-size: 0;
  border: ${props => props.border ? '1px solid #efefef;' : 'none'};
  box-sizing: border-box;
  transition: 0.3s ease;
  &.is-active {
    opacity: 1;
    transform: translateY(0);
  }

  @media screen and (min-width: 769px){
    &:hover:not(.loading) {
      box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.06);
      .card_img img {
        transform: translate(-50%, -50%) scale(1.06);
      }
    }
  }

  @media screen and (max-width: 768px){
    width: ${props => props.listYn ? 'calc(50% - 10px)' : '100%'};
    margin: ${props => props.listYn ? '5px' : '8px'};
    text-align: center;
    &.is-slide {
      width: 100%;
      margin: 0;
      .card_img {
        height: auto;
        img {
          width: 100%;
          height: auto;
        }
      }
      .Text {
        div:first-of-type {
          font-size: 16px;
        }
        div:last-of-type {
          margin-top: 2px;
        }
      }
    }
  }
`;

export const CardImage = styled.div `
  position: relative;
  display: inline-block;
  width: 100%;
  border-radius: 14px 14px 0 0;
  background-color: #DBDFE8;
  overflow: hidden;
  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    transition: 0.3s;
    object-fit: cover;
    border-radius: 14px 14px 0 0;
  }
  &:after {
    content: "";
    display: block;
    padding-bottom: 78.014%;
  }

  @media screen and (max-width: 768px){
    position: relative;
    height: ${props => props.listYn ? '38.888vw' : '50vw'};
    background-color: #DBDFE8;
    img {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 100%;
      margin: 0 auto;
      width: auto;
    }
  }
`;

export const CardInfo = styled.div `
  display: block;
  padding: 24px;
  word-break: break-word;
  @media screen and (max-width: 1768px){
    text-align: left;
  }
  @media screen and (max-width: 768px){
    padding: ${props => props.listYn ? '16px' : '24px'};
  }
`;

export const CardTitle = styled.div `
  display: block;
	font-family: 'SamsungOne-700';
  font-size: 20px;
  color: #000;
  @media screen and (max-width: 768px){
    font-size: ${props => props.listYn ? '14px' : '16px'};
    line-height: 1.25;
  }
`;

export const CardText = styled.div `
  display: block;
  margin-top: 6px;
  font-size: 1em;
  line-height: 1.43em;
  color: #535353;
  white-space: pre-line;
  @media screen and (max-width: 768px){
    margin-top: ${props => props.listYn ? '4px' : '2px'};
    font-size: ${props => props.listYn ? '12px' : '1em'};
  }
`;

export const LoadingCard = styled.div `
  border-radius: 14px;
  background-color: #fff;
`;

export const LoadingCardInner = styled.div `
  width: 100%;
  box-sizing: border-box;
`;

export const LoadingCardTop = styled.div `
  position: relative;
  background-color: #dbdfe8;
  border-radius: 14px 14px 0 0;
  &:after {
    content: "";
    display: block;
    padding-bottom: 78.014%;
  }
  @media screen and (max-width: 768px){
    height: 38.888vw;
  }
`;

export const LoadingCardTopInner = styled.div `
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  transition: 0.3s;
  object-fit: cover;
  border-radius: 14px 14px 0 0;
`;

export const LoadingCardIcon = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #000;
    animation-name: blink;
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    & + .dot {
      margin-left: 10px;
    }
    &:nth-of-type(2) {
      animation-delay: .2s;
    }
    &:nth-of-type(3) {
      animation-delay: .4s;
    }
  }
  @keyframes blink {
    0% {
      opacity: .08;
    }
    35% {
      opacity: .2;
    }
    100% {
      opacity: .08;
    }
  }
`;

export const LoadingCardBottom = styled.div `
  width: 100%;
  padding: 24px;
  background-color: #fff;
  border-radius: 0 0 14px 14px;
  box-sizing: border-box;
  div {
    width: 100%;
    height: 26px;
    border-radius: 4px;
    background-color: #f5f7fb;
    & + div {
      margin-top: 6px;
    }
    &:first-of-type {
      width: 50%;
    }
    &:last-of-type {
      height: 20px;
    }
  }
  @media screen and (max-width: 768px){
    padding: ${props => props.listYn ? '16px' : '24px'};
    div {
      height: 20px;
      & + div {
        margin-top: 4px;
      }
      &:last-of-type {
        height: 16px;
      }
    }
  }
`;
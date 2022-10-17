import styled, {keyframes } from "styled-components";

export const Card = styled.div `
  position: relative;
  width: calc(33.333% - 24px);
  margin: 12px;
  background-color: #fff;
  border-radius: 14px;
  box-sizing: border-box;
  transition: 0.3s ease-in-out;
  &.is-active {
    transform: translateY(0);
    opacity: 1;
  }
  
  @media screen and (min-width: 769px){
    &:hover:not(.loading) {
      box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.06);
      .card_img img {
        transform: translate(-50%, -50%) scale(1.06);
      }
      .card_img.has-dim:before {
        background-color: rgba(0,0,0,0.2);
      }
    }
  }

  @media screen and (max-width: 768px){
    width: 100%;
    margin: 8px;
  }
`;

export const CardLink = styled.a `
  display: inline-block;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
`;

export const CardImage = styled.div `
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  padding: 0 24px 24px;
  max-height: 244px;
  border-radius: 14px 14px 0 0;
  box-sizing: border-box;
  img {
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

  &:after {
    content: "";
    display: block;
    padding-bottom: 56.25%;
  }

  &.has-dim {
    padding: 0;
    +.Text {
      .Title {
        color: #000;
        font-family: 'SamsungOne-700';
      }
    }
    &:after {
      padding-bottom: 56.25%;
    }

    :before {
    content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 14px 14px 0 0;
      background-color: rgba(0,0,0,0.4);
      z-index: 2;
      transition: 0.3s;
    }
  }
`;

export const CardInfo = styled.div `
  padding: 24px;
`;

export const CardTitle = styled.div `
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-family: 'SamsungOne-700';
  font-size: 20px;
  font-weight: bold;
  line-height: 1.3;
  letter-spacing: normal;
  color: #000;
  @media screen and (max-width: 768px){
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const CardText = styled.div `
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #535353;
  @media screen and (max-width: 768px){
    margin-top: 6px;
  }
`;

export const CardTagWrap = styled.div `
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const CardType = styled.div `
  padding: 8px 16px;
  border-radius: 18px;
  background-color: #f5f7fb;
  font-family: 'SamsungOne-600';
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  letter-spacing: normal;
  color: #7d838e;
  @media screen and (max-width: 768px){
    padding: 8px 12px;
  }
`;

export const CardTag = styled.div `
  margin-left: 8px;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #7d838e;
`;
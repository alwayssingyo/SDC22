import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const MainKeynoteArea = styled.div `
  padding: 0 0 120px 0;
  background-color: #F5F7FB;
  font-size: 14px;
  @media screen and (max-width: 768px){
    padding:0 0 60px
  }
`
export const MainKeynoteAreaTop = styled.div `
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 40px 60px;
  @media screen and (max-width: 768px){
    display: block;
    max-width: 100%;
    padding: 60px 24px 40px;
  }
`

export const MainKeynoteAreaTitle = styled.h3 `
  min-width: 288px;
  padding-right: 40px;
  font-size: 3em;
  font-family: 'samsungsharpsans-bold';

  @media screen and (max-width: 768px){
    width: 100%;
    margin-bottom: 8px;
    font-size: 20px;
    line-height: 1.15;
  }
`
export const MainKeynoteAreaText = styled.div `
  font-size: 16px;
  line-height: 1.38;
  color: #535353;

  @media screen and (max-width: 768px){
    width: 100%;
    font-size: 1em;
    line-height: 1.57;
  }
`
export const CardWrap = styled.div `
  max-width: 1200px;
  padding: 0 40px;
  margin: 0 auto;
  @media screen and (max-width: 768px){
    padding: 0;
  }
`;

export const CardInner = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap : wrap;
  &.is-phase4 {
    display: block;
    .slick-slide {
      padding: 0 0 40px 0;
    }
    .slick-slider {
      padding: 0;
    }
  }
  @media screen and (max-width: 768px){
    display: block;
  }
`;

export const LinkArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  &.is-phase4 {
    margin-top: 20px;
  }
  @media screen and (max-width: 1024px){
    margin-top: 40px;
    &.is-phase4 {
      margin-top: 40px;
    }
  }
`
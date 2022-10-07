import styled from "styled-components";

export const AccordionWrap = styled.div `
    & + &{
      margin-top: 20px;
    }

  @media screen and (max-width: 768px){
    & + &{
      margin-top: 16px;
    }
  }
`;

export const AccordionCon = styled.div `
  border: solid 1px #dcdcdc;
  border-radius: 14px;
  transition: background-color 0.25s ease;
  &.active {
    background-color: #f5f7fb;
    border: solid 1px #f5f7fb;
  }

  @media screen and (max-width: 768px){
    border-radius: 10px;
    &.active {
      button {
        padding-bottom: 14px;
      }
    }
  }
`;

export const AccordionHeader = styled.button `
  position: relative;
  width: 100%;
  padding: 24px;
	font-family: 'SamsungOne-700';
  font-size: 20px;
  line-height: 1.13;
  text-align: left;
  color: #000;
  span {
    padding-right: 16px;
    font-size: 24px;
    line-height: 1.38;
    color: #cecece;
  }

  @media screen and (max-width: 768px){
    padding: 16px 40px 16px 36px;
    font-family: 'SamsungOne-600';
    font-size: 16px;
    line-height: 1.38;

    span{
      position: absolute;
      top: 16px;
      left: 14px;
      font-size: 16px;
    }
  }
`;

export const AccordionButton = styled.div `
  display: inline-block;
  position: absolute;
  top: 26px;
  right: 24px;
  width: 24px;
  height: 24px;
  color: #000;
  transform: rotate(180deg);

  .open {
    transform: rotate(-180deg);
  }
  @media screen and (max-width: 768px){
    top: 19px;
    right: 14px;
    width: 16px;
    height: 16px;

    .arr {
      width: 16px;
      height: 16px;
    }
  }
`;

export const AccordionBody = styled.div `
  display: block;
  overflow: hidden;
  transition: max-height 0.25s ease;
  max-height: 0;

  &.open {
    height:100px;
    height: auto;
  }
  @media screen and (max-width: 768px){

  }
`;

export const AccordionText = styled.p `
  display: inline-block;
  width: calc(100% - 81px);
  padding: 25px 0 40px 0;
  margin-left: 57px;
  font-size: 16px;
  line-height: 1.5;
  color: #535353;
  border-top: 1px solid #dcdcdc;
  box-sizing: border-box;
  >a {
    color: #1259aa;
    &:hover {
      color: #2088fd;
    }
  }

  @media screen and (max-width: 768px){
  width: calc(100% - 50px);
    margin-left: 36px;
    padding: 14px 0 16px 0;
    font-size: 1em;
  }
`;


import styled from 'styled-components'

export const FilterContainer = styled.div `
  border-radius: 14px;
  background-color: #fff;
`;

export const FilterDim = styled.div `
  position: relative;
  display: none;
  @media screen and (max-width: 1024px){
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.6);
    z-index: 100;
  }
`;

export const FilterInner = styled.div `
  position: relative;
  padding: 30px 24px 32px 24px;

  @media screen and (max-width: 1024px){
    position: fixed;
    top: 0;
    right: 0;
    width: 274px;
    height: 100vh;
    padding: 0;
    border-radius: 0;
    background-color: #fff;
    z-index: 101;
  }
`;

export const FilterTop = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
  
  @media screen and (max-width: 1024px){
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0;
    padding: 20px;
    border-bottom: 1px solid #efefef;
    box-sizing: border-box;
  }
`;

export const FilterTitle = styled.div `
  font-family: 'SamsungOne-700';
  font-size: 20px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: normal;
  color: #1e1e1e;

  @media screen and (max-width: 1024px){
    line-height: 1.2;
  }
`;

export const FilterClose = styled.button `
  display: none;
  @media screen and (max-width: 1024px){
    display: block;
    width: 24px;
    height: 24px;
    background-image: url(${process.env.PUBLIC_URL + '/images/ico-close.png'});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const FilterCont = styled.div `
  box-sizing: border-box;
  @media screen and (max-width: 1024px){
    height: calc(100vh - 64px - 79px);
    margin: 64px 0 79px 0;
    padding: 24px 20px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

export const FilterItem = styled.div `
  & + &{
    margin-top: 24px;
    padding-top: 26px;
    border-top: 1px solid #efefef;
  }

`;

export const FilterItemTitle = styled.div `
  padding-bottom: 17px;
  font-family: 'SamsungOne-700';
  font-weight: bold;
  font-size: 16px;
  color: #535353;
`;

export const FilterItemCont = styled.div `
  margin: -5px;
`;

export const FilterClearWrap = styled.div `
  position: absolute;
  top: 24px;
  right: 24px;
  box-sizing: border-box;

  @media screen and (max-width: 1024px){
    top: auto;
    bottom: 0;
    right: 0;
    width: 100%;
    padding: 19px 20px;
    border-top: 1px solid #efefef;
    background-color: #fff;
    box-sizing: border-box;
  }
`;

export const FilterClear = styled.button `
  height: 40px;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  font-family: 'SamsungOne-700';
  font-size: 14px;
  font-weight: bold;
  line-height: 1.71;
  letter-spacing: normal;
  color: #1e1e1e;
  box-sizing: border-box;

  @media screen and (max-width: 1024px){
    width: 100%;
  }
`;
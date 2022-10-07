import styled from "styled-components";

export const ErrorWrap = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  min-height: calc(100vh - 60px - 170px - 120px - 60px);
  margin: 0 auto;
  padding: 120px 40px;

  a {
    min-width: 240px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 24px;
    min-height: calc(100vh - 56px - 218px);

    a {
      min-width: 180px;
    }
  }
`

export const ErrorWrapInner = styled.div `
  text-align: center;
  @media screen and (max-width: 768px){
    display: block;
  }
`

export const ErrorNum = styled.div `
  margin-bottom: 14px;
	font-family: 'samsungsharpsans-bold';
  font-size: 100px;
  line-height: 1.2;
  @media screen and (max-width: 768px){
    margin-bottom: 8px;
    font-size: 50px;
    line-height: 1.2;
  }
`

export const ErrorTitle = styled.div `
  margin-bottom: 6px;
  font-family: 'SamsungOne-700';
  font-size: 20px;
  line-height: 1.3;
  @media screen and (max-width: 768px){
    margin-bottom: 4px;
    font-size: 16px;
    line-height: 1.25;
  }
`

export const ErrorDesc = styled.div `
  margin-bottom: 60px;
  color: #535353;
  line-height: 1.43;
  @media screen and (max-width: 768px){
    margin-bottom: 40px;
  }
`

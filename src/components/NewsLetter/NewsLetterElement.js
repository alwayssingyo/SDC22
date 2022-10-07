import styled from 'styled-components'

export const NewsLetterCon = styled.div `
  position: relative;
  padding: 121px 0 119px;
  background-color: #F5F7FB;
  @media screen and (max-width: 768px){
    padding: 60px 0;
  }
`;

export const NewsLetterInner = styled.div `
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  @media screen and (max-width: 768px){
    padding: 0 24px;
  }
`;

export const NewsLetterTitle = styled.h3 `
  display: block;
	font-family: 'samsungsharpsans-bold';
  font-size: 42px;
  @media screen and (max-width: 768px){
    font-size: 20px;
    line-height: 1.15;
  }
`;

export const NewsLetterSubtitle = styled.div `
  margin-bottom: 40px;
  margin-top: 8px;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.38;
  letter-spacing: normal;
  color: #535353;
  @media screen and (max-width: 768px){
    margin-top: 8px;
    font-size: 14px;
    line-height: 1.57;
  }
`;

export const NewsLetterInnerContent = styled.div `
  padding: 40px;
  background-color: #fff;
  border-radius: 20px;

  @media screen and (max-width: 768px){
    padding: 0;
    background-color: transparent;
  }
`;

export const NewsLetterInput = styled.div `
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  > div {
    &:first-of-type {
      width: 45%;
    }
    &:nth-of-type(2) {
      width: 26%;
    }
    &:last-of-type {
      width: 26%;
    }

    +div {
      margin-left: 2.166%;
    }
  }

  @media screen and (max-width: 768px){
    display: block;
    margin-bottom: 16px;
    > div {
      &:first-of-type {
        width: 100%
      }
      &:nth-of-type(2) {
        width: 100%
      }
      &:last-of-type {
        width: 100%
      }

      +div {
        margin-left: 0;
        margin-top: 16px;
      }
    }
  }
`;

export const NewsLetterAgree = styled.div `
  position: relative;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.19px;
  color: #6E6E6E;
  .text {
    margin-left: 8px;
  }
  a {
    color: #1259aa;
    margin-left: 4px;
    &:hover {
      color: #2088fd;
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 768px){
    padding-left: 32px;
    font-size: 1em;
    line-height: 1.578;

    .text {
      margin-left: 0;
    }
    >span:not(.text) {
      position: absolute;
      top: -1px;
      left: 0;
    }
  }
`

export const LinkArea = styled.div `
  display: flex;
  justify-content: center;
  margin-top: 30px;
  @media screen and (max-width: 768px){
    margin-top: 40px;
  }
`
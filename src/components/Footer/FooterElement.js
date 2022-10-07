import styled from 'styled-components'

export const FooterContent = styled.div `
  position: relative;
  min-height: 30px;
  width: 100%;
  border-top: 1px solid #efefef;
`;

export const FooterInner = styled.div `
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  @media screen and (max-width: 1023px){
    padding: 40px 24px;
  }
`;

export const FooterTop = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #EFEFEF;

  @media screen and (max-width: 1023px){

  }
`;

export const FooterLogoBox = styled.div `
	font-family: 'samsungsharpsans-bold';
  font-size: 16px;
  color: #c8c8c8;
  line-height: 1.25;

  @media screen and (max-width: 1023px){
    display: none;
  }
`;

export const FooterSns = styled.div `
  ul {
    display: flex;
    align-items: center;

    li {
      a {
        display: block;
        width: 30px;
        height: 30px;

        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      + li {
        margin-left: 20px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    ul {
      li {
        a {
          width: 24px;
          height: 24px;
        }
        + li {
          margin-left: 16px;
        }
      }
    }
  }
`;

export const FooterBottom = styled.div `
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1023px){
    display: block;
  }
`;

export const FooterFamily = styled.div `
  ul {
    display: flex;
    align-items: center;

    li {
      &:first-child {
        margin-right: 24px;
      }
      img {
        vertical-align: middle;
      }
      a {
        display: block;
        font-family: 'SamsungOne-500';
        font-size: 1em;
        line-height: 1.57;
        color: #9C9C9C;

        span {
          display: inline-block;
          padding-left: 10px;
          vertical-align: middle
        }
      }
      + li  {
        margin-right: 24px ;
      }
    }
  }
  @media screen and (min-width: 769px){
    ul {
      li {
        a:hover {
          font-weight: bold;
          color: #535353;
        }
      }
    }
  }
  @media screen and (max-width: 1023px){
    margin-bottom: 10px;
    ul {
      display: block;

      li {
        display: inline-block;
        vertical-align: middle;
        &:first-child {
          margin-right: 16px;
          margin-bottom: 10px;
        }
        + li  {
          margin-right: 16px ;
        }
      }
    }
  }
  @media screen and (max-width: 768px){
    ul{
      li{
        vertical-align: top;
        &:first-child {
          display: block;
        }
        a{
          line-height: 1.43;
        }
      }
    }
  }
`;

export const FooterCopy = styled.div `
  font-size: 1em;
  color: #9C9C9C;
  @media screen and (max-width: 768px){
    color: #BABABA;
  }
`;
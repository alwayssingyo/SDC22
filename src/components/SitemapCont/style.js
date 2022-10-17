import styled from "styled-components";

export const SitemapWrap = styled.div `
  max-width: 1200px;
  min-height: calc(100vh - 60px - 170px - 120px);
  margin: 0 auto;
  padding: 120px 40px;
  @media screen and (max-width: 768px) {
    padding: 0 24px;
  }
`


export const SitemapWrapInner = styled.div `
  display: flex;
  vertical-align: top;
  @media screen and (max-width: 768px){
    display: block;
  }
`

export const SitemapTitle = styled.div `
  margin-right: 120px;
	font-family: 'samsungsharpsans-bold';
  font-size: 42px;

  @media screen and (max-width: 768px){
    padding: 40px 0 20px;
    font-size: 20px;
    line-height: 1.4;
  }
`

export const SitemapLinks = styled.div `
  width: calc( 100%  - 185px - 120px);

  .link {
    display: flex;
    align-items: center;
    padding: 30px 0;
    font-family: 'samsungsharpsans-bold';
    font-size: 24px;
    line-height: 1.25;
    color: #1e1e1e;
    &:first-of-type(:not(div)){
      padding-top: 16px;
    }

    +.link {
      border-top: 1px solid #efefef;
    }
  }

  .depth-link {
    padding-left: 60px;
    font-family: 'samsungsharpsans-medium';
    font-size: 18px;
    + .depth-link {
      padding-left: 24px;
    }
  }

  @media screen and (max-width: 768px){
    width: 100%;
    .link {
      display: block;
      font-size: 16px;
      line-height: 1.25;
      padding: 20px 0;
      >span {
        display: block;
        margin-bottom: 4px;
      }

      &:first-of-type(:not(div)){
        padding-top: 0;
      }
    }
    .depth-link {
      display: inline-block;
      width: auto;
      padding-left: 0;
      font-family: 'SamsungOne-400';
      font-size: 14px;
      + .depth-link {
        padding-left: 16px;
      }
    }
  }
`
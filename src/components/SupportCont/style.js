import styled from "styled-components";

export const Support = styled.div `
  position: relative;

  .react-tabs__tab-list{
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
  }

  .react-tabs__tab{
    width: 50%;
    padding: 20px 0;
    font-family: 'samsungsharpsans-Medium';
    font-size: 18px;
    line-height: 1.44;
    color: #9e9e9e;
    border-bottom: 2px solid #efefef;
    text-align: center;
    cursor: pointer;
    &--selected {
      font-family: 'samsungsharpsans-bold';
      color: #1259aa;
      border-bottom: 2px solid #1259aa;
    }
  }

  @media screen and (max-width: 768px){
    .react-tabs__tab-list{
      padding: 0 24px;
    }
    .react-tabs__tab{
      padding: 14px 0 13px;
      font-size: 16px;
      &--selected {
        color: #1259aa;
        border-bottom: 2px solid #1259aa;
      }
    }
  }
`;

export const SupportWrap = styled.div `
  position: relative;
  padding-top: 60px;
  @media screen and (max-width: 768px){
    padding-top: 25px;
  }
`;

export const SupportInner = styled.div `
 	max-width: 1200px;
  margin: 0 auto;
	padding: 0 40px;

  @media screen and (max-width: 768px){
    padding: 0 20px;
  }
`;

export const SupportTitle = styled.div `
  max-width: 1200px;
  margin: 120px auto 16px;
  padding: 0 40px;
  font-size: 32px;
  font-family: 'samsungsharpsans-bold';

  @media screen and (max-width: 768px){
    margin: 60px 0 10px 0;
    padding: 0 24px;
    font-size: 20px;
    line-height: 1.4;
    margin-bottom: 20px;
  }
`;

export const SupportBanner = styled.div`
  background-color: #f5f7fb;

  .moreLink {
    display: none;
  }
`

export const SupportBannerTitle = styled.div `
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 40px 0;
  font-size: 32px;
  font-family: 'samsungsharpsans-bold';

  @media screen and (max-width: 768px){
    padding: 40px 24px 0;
    font-size: 20px;
    line-height: 1.4;
    margin-bottom: 20px;
  }
`;

export const SupportBannerInner = styled.div`
  display: flex;
 	max-width: 1200px;
  margin: 0 auto;
  padding: 40px 40px 120px;
  background-color: #f5f7fb;
  @media screen and (max-width: 768px){
    display: block;
    margin: 24px auto 0;
    padding: 0 20px 60px;
  }
`

export const SupportItem = styled.div`
  &+& {
    margin-top: 60px;
  }
  &:last-of-type {
    margin-bottom: 120px;
  }
  @media screen and (max-width: 768px){
    &+& {
      margin-top: 40px;
    }
  }
  &:last-of-type {
    margin-bottom: 60px;
  }
`;

export const SupportItemTitle = styled.div`
  margin-bottom: 24px;
  font-family: 'SamsungOne-700';
  font-size: 22px;
  font-weight: bold;
  line-height: normal;
  letter-spacing: normal;
  color: #000;
  @media screen and (max-width: 768px){
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 1.38;
  }
`;

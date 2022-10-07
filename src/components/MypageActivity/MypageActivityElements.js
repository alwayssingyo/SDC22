import styled from 'styled-components'

export const ActivityContainer = styled.div `
  padding: 120px 0;
  background-color: #f5f7fb;
  @media screen and (max-width: 768px){
    padding: 60px 0;
  }
`;

export const ActivityInner = styled.div `
  max-width: 1280px;
  padding: 0 40px;
  margin: 0 auto;
  box-sizing: border-box;
  @media screen and (max-width: 768px){
    padding: 0 24px;
  }
`;

export const SectionWrap = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: -12px;
  @media (max-width: 768px) {
    margin: -8px;
  }
`;

export const SectionSubtext = styled.div `
  margin-bottom: 24px;
  font-family: 'SamsungOne-700';
  font-size: 20px;
  font-weight: bold;
  line-height: 1.3;
  letter-spacing: normal;
  color: #000;
  @media (max-width: 768px) {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const MoreButton = styled.div `
  margin-top: 40px;
  text-align: center;
  @media (max-width: 768px) {
    margin-top: 24px;
  }
`;

export const ActivityNodata = styled.div `
  padding-top: 60px;
  text-align: center;
  @media (max-width: 768px) {
    padding-top: 36px;
  }
`;

export const NodataTitle = styled.div `
  font-family: 'SamsungOne-700';
  font-size: 16px;
  font-weight: bold;
  line-height: 1.38;
  letter-spacing: normal;
  color: #535353;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.57;
  }
`;

export const NodataLink = styled.div `
  margin-top: 4px;
  a {
    position: relative;
    padding-right: 18px;
    font-family: 'SamsungOne-700';
    font-size: 14px;
    font-weight: bold;
    line-height: 1.57;
    letter-spacing: normal;
    color: #1259aa;
    &:hover {
      color: #2088fd;
      text-decoration: underline;
    }
    &:before {
      content: "";
      position: absolute;
      top: 2px;
      right: 0;
      width: 14px;
      height: 14px;
      background-image: url(${process.env.PUBLIC_URL + '/images/ico-arrow-navy.svg'});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
    &:hover:before {
      background-image: url(${process.env.PUBLIC_URL + '/images/ico-arrow-blue.svg'});
    }
  }
  @media (max-width: 768px) {
    margin-top: 2px;
  }
`;
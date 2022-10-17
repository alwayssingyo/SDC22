import styled from 'styled-components'

export const MapContainer = styled.div `
  padding: 120px 0;
  background-color: #f5f7fb;
  @media screen and (max-width: 768px){
    padding: 60px 0;
  }
`;

export const MapInner = styled.div `
  max-width: 1280px;
  padding: 0 40px;
  margin: 0 auto;
  box-sizing: border-box;
  @media screen and (max-width: 768px){
    padding: 0 24px;
  }
`;

export const MapWrap = styled.div `
  position: relative;
  display: flex;
  padding: 40px;
  border-radius: 20px;
  background-color: #fff;
  @media screen and (max-width: 768px){
    display: block;
    padding: 24px;
  }
`;

export const MapText = styled.div `
  width: calc( 100% - 460px );
  margin-right: 60px;
  @media screen and (max-width: 768px){
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const MapTitle = styled.div `
  font-family: 'SamsungOne-700';
  font-size: 20px;
  font-weight: bold;
  line-height: 1.3;
  letter-spacing: normal;
  @media screen and (max-width: 768px){
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const MapDesc = styled.div `
  max-width: 524px;
  margin-top: 4px;
  padding-bottom: 68px;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #535353;
  a {
    color: #1259aa;
    &:hover {
      color: #2088fd;
      text-decoration: underline;
    }
  }
  @media screen and (max-width: 768px){
    margin-top: 6px;
    padding-bottom: 0;
  }
`;

export const MapLink = styled.div `
  position: absolute;
  left: 40px;
  bottom: 40px;
  @media screen and (max-width: 768px){
    margin-top: 20px;
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    button {
      width: 100%;
    }
  }
`;

export const MapImage = styled.div `
  width: 400px;
  border-radius: 14px;
  img {
    max-width: 100%;
  }
  @media screen and (max-width: 768px){
    width: 100%;
    border-radius: 8px;
  }
`;
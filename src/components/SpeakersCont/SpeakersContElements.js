import styled from 'styled-components'

export const SpeakersContainer = styled.div `
	padding: 80px 0 120px 0;
  background-color: #f5f7fb;
  @media screen and (max-width: 768px){
    padding: 40px 0 60px 0;
  }
`;

export const SpeakersInner = styled.div `
  max-width: 1280px;
  padding: 0 40px;
  margin: 0 auto;
  box-sizing: border-box;

  @media screen and (max-width: 768px){
    padding: 0 24px;
  }
`;

export const SpeakersWrap = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap : wrap;
  margin: -12px;
  @media screen and (max-width: 768px){
    margin: -5px;
  }
`;

export const SpeakersSection = styled.div `
  &+& {
    margin-top: 120px;
  }
  @media screen and (max-width: 768px){
    &+& {
      margin-top: 60px;
    }
  }
`;

export const SpeakersTitle = styled.div `
  margin-bottom: 40px;
  font-family: 'samsungSharpSans-bold';
  font-size: 32px;
  font-weight: bold;
  line-height: normal;
  letter-spacing: normal;
  color: #000;
  @media screen and (max-width: 768px){
    margin-bottom: 24px;
    font-size: 20px;
    line-height: 1.4;
  }
`;
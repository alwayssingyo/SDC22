import styled from 'styled-components'

export const DetailContContainer = styled.div `
  padding: 120px 0;
  background-color: #f5f7fb;

  	
  @media screen and (max-width: 768px){
    padding: 60px 0;
  }
`;

export const DetailContInner = styled.div `
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
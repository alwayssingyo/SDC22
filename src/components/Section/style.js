import styled from 'styled-components'

export const SectionContainer = styled.div `
  width: 100%;
  &+& {
    margin-top: 100px;
  }
  @media screen and (max-width: 768px){
    &+& {
      margin-top: 60px;
    }
  }
`;

export const SectionTitle = styled.div `
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

export const Sectioncont = styled.div `

`;
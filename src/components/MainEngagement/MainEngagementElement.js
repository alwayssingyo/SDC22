import styled from 'styled-components'

export const MainEngagementWrap = styled.div `
  padding: 120px 40px;
  @media screen and (max-width: 768px){
    padding: 60px 24px;
  }
`;

export const MainEngagementBox = styled.div `
  position: relative;
  max-width: 1200px;
  height: 350px;
  margin: 0 auto;

  &+& {
    margin-top: 60px;
  }

  @media screen and (max-width: 768px){
    height: auto;

    &+& {
      margin-top: 40px;
    }
  }
`

export const MainEngagementBoxBg = styled.div `
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  @media screen and (max-width: 768px){
    border-radius: 14px;
  }
`

export const MainEngagementBoxInner = styled.div `
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding: 0 60px;
  text-align: left;
  z-index: 2;

  @media screen and (max-width: 768px){
    display: block;
    padding: 24px;
    text-align: left;

    /* ButtonLink */
    .sdcStack {
      width: 100%;
    }
  }
`

export const MainEngagementTitle = styled.div `
  margin-bottom: 24px;
	font-family: 'SamsungOne-700';
  font-size: 36px;
  line-height: 1.28;
  color: #fff;
  &.bright {
    color: #000;
  }
  @media screen and (max-width: 768px){
    margin-bottom: 6px;
    font-size: 1.432em;
  }
`

export const MainEngagementText = styled.div `
  max-width: 760px;
  margin-bottom: 40px;
  font-size: 16px;
  line-height: 1.63;
  color: rgba(255, 255, 255, 0.75);
  white-space: pre-line;
  
  &.bright {
    color: rgba(0, 0, 0, 0.75);
  }
  @media screen and (max-width: 768px){
    max-width: 100%;
    font-size: 1em;
    line-height: 1.57;
  }
`
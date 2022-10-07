import styled from 'styled-components'

export const SpeakerDetailWrap = styled.div `
	padding: 120px 0;
  @media screen and (max-width: 768px){
		padding: 40px 0 60px;
	}
`;

export const SpeakerDetailInner = styled.div `
  display: flex;
  justify-content: space-between;
	max-width: 1280px;
	margin: 0 auto;
  padding: 0 40px;
  box-sizing: border-box;
  @media screen and (max-width: 768px){
    flex-direction: column-reverse;
    padding: 0 24px;
	}
`;

export const SpeakerDetailInfo = styled.div `
  width: calc(100% - 340px - 100px);
  margin-right: 100px;
  text-align: left;
  @media screen and (max-width: 768px){
    width: 100%;
    margin: 24px 0 0 0;
	}
`;

export const SpeakerDetailTitle= styled.div `
  font-family: 'samsungsharpsans-bold';
  font-size: 42px;
  line-height: 1.19;
  text-align: left;
  @media screen and (max-width: 768px){
    font-size: 20px;
    line-height: 1.4;
	}
`;

export const SpeakerDetailSubTitle = styled.div `
  margin-top: 10px;
  font-family: 'SamsungOne-700';
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: normal;
  color: #1e1e1e;
  text-align: left;
  white-space: pre-line;
  @media screen and (max-width: 768px){
    margin-top: 2px;
    font-size: 16px;
    line-height: 1.5;
	}
`;

export const SpeakerDetailDesc = styled.div `
  margin-top: 24px;
  font-size: 14px;
  line-height: 1.57;
  letter-spacing: normal;
  color: #535353;
  text-align: left;
  >div {
    display: block;
  }
  &.is-more {
    height: 110px;
    overflow: hidden;
  }
  @media screen and (max-width: 768px){
    margin-top: 12px;
    &.is-more {
      height: 66px;
    }
    &.is-appended {
      height: auto;
      overflow: initial;
    }
	}
`;

export const SpeakerDetailImage = styled.div `
  width: 340px;
  height: 218px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #DBDFE8;
  border-radius: 20px;
  @media screen and (max-width: 768px){
    width: 100%;
    height: 61.111vw;
    border-radius: 14px;
	}
`;

export const SpeakerDetailMoreWrap = styled.div `
  display: none;
  margin-top: 20px;
  &.block {
    display: block;
  }
	@media screen and (max-width: 768px){
    text-align: center;
	}
`

export const SpeakerDetailMore = styled.button `
	position: relative;
	order: 4;
	margin: 0 auto;
	padding-right: 18px;
	font-family: 'SamsungOne-600';
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #000;
	&:after {
		content: "";
		position: absolute;
		top: 2px;
		right: 0;
		width: 14px;
		height: 14px;
		background-image: url(${process.env.PUBLIC_URL + '/images/ico-arrow-black.svg'});
		background-repeat: no-repeat;
		background-size: cover;
		background-position: right center;
	}
	&.is-appended:after {
		transform: rotate(180deg);
	}
  @media screen and (max-width: 768px){
    display: block;
    margin-top: 16px;
  }
`;



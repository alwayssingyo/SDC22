import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SpeakerContainer = styled.div `
	padding: 120px 0;
	background-color: #f5f7fb;
  @media screen and (max-width: 768px){
		padding: 60px 0;
	}
`;

export const SpeakerInner = styled.div `
	max-width: 1280px;
	padding: 0 40px;
	margin: 0 auto;
	box-sizing: border-box;
  @media screen and (max-width: 768px){
		padding: 0 24px;
	}
`;

export const SpeakerTitle = styled.div `
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

export const CardWrap = styled.div `
  @media screen and (max-width: 768px){

	}
`;

export const CardInner = styled.div `
	display: flex;
  flex-direction: row;
  flex-wrap : wrap;
  margin: -12px;
  @media screen and (max-width: 768px){
		margin: -8px;
	}
`;
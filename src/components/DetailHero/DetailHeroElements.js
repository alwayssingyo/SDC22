import styled from 'styled-components'

export const DetailHeroContainer = styled.div `
	background-image: url(${props => process.env.PUBLIC_URL + '/images/' + props.bgPc});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
  @media screen and (max-width: 768px){
		background-image: url(${props => process.env.PUBLIC_URL + '/images/' + props.bgMo});
	}
`;

export const DetailHeroInner = styled.div `
	position: relative;
	height: 240px;
	max-width: 1280px;
	padding: 0 40px;
	margin: 0 auto;
	box-sizing: border-box;
  @media screen and (max-width: 768px){
		height: 140px;
		padding: 0 24px;
	}
`;

export const DetailHeroText = styled.div `
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 50%;
	left: 40px;
	transform: translateY(-50%);
	padding: 0 40px 0 43px;
  @media screen and (max-width: 768px){
		left: 50%;
		transform: translate(-50%,-50%);
		width: 100%;
		padding: 0;
		text-align: center;
	}
`;

export const DetailHeroTitle = styled.div `
  font-family: 'samsungSharpSans-bold';
  font-size: 54px;
  line-height: 1.1;
  letter-spacing: normal;
  color: #000;
	order: 2;
  @media screen and (max-width: 768px){
		margin-bottom: 6px;
		font-size: 24px;
		line-height: 1.25;
		order: 1;
	}
`;

export const DetailHeroSamsung = styled.div `
	margin-bottom: 12px;
	font-family: 'samsungsharpsans-medium';
  color: #000;
	line-height: 1.1;
	order: 1;
  @media screen and (max-width: 768px){
		margin-bottom: 0;
		font-family: 'samsungsharpsans-medium';
		font-size: 12px;
		order: 2;
	}
`;
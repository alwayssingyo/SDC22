import styled from 'styled-components'

export const TechContainer = styled.div `
	position: relative;
	padding: 80px 0 120px 0;
  background-color: #f5f7fb;
  @media screen and (max-width: 1024px){
		padding: 89px 0 60px 0;
	}
`;

export const TechInner = styled.div `
	display: flex;
	max-width: 1280px;
	padding: 0 40px;
	margin: 0 auto;
	box-sizing: border-box;
  @media screen and (max-width: 1024px){
		display: block;
		padding: 0 24px;
	}
`;

export const TechFilterBtn = styled.button `
	display: none;
	/* position: fixed;
	top: 56px; */
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	padding: 14px 24px;
	border-bottom: 1px solid #efefef;
  font-family: 'SamsungOne-700';
  font-size: 14px;
  font-weight: bold;
  line-height: 1.43;
  letter-spacing: normal;
  color: #000;
	text-align: left;
	background-color: #fff;
	background-image: url(${process.env.PUBLIC_URL + '/images/ico-filter.svg'});
	background-repeat: no-repeat;
	background-position: right 24px center;
	background-size: 16px 16px;

	span {
		display: none;
	}

	&.is-checked {
		background-image: url(${process.env.PUBLIC_URL + '/images/ico-filter-fill.svg'});
		background-repeat: no-repeat;
		background-position: right 24px center;
		background-size: 16px 16px;

		span {
			display: inline;
			padding-left: 4px;
			color: #7c7c7c;
		}
	}
  @media screen and (max-width: 1024px){
		display: block;
	}
`;

export const TechLeft = styled.div `
	width: 282px;
  @media screen and (max-width: 1024px){
		position: fixed;
		top: 0;
		width: auto;
		z-index: 100
	}
`;

export const TechRight = styled.div `
	width: calc(100% - 282px - 24px);
	margin-left: 24px;
  @media screen and (max-width: 1024px){
		width: 100%;
		margin: 0;
	}
`;

export const CardWrap = styled.div `

`;

export const CardInner = styled.div `
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin: -12px;
  @media screen and (max-width: 768px){
		margin: -8px;
	}
`;

export const CardRoomWrap = styled.div `
	padding-bottom: 40px;
	margin-bottom: 40px;
	border-bottom: 1px solid rgba(0,0,0,0.1);
`;

export const CardRoomInner = styled.div `
	.card_item:first-of-type {
		.card_type {
			margin-left: 0;
		}
		.card_img {
			padding: 0;
		}
		.card_btn {
			left: 0;
		}
	}
	.card_bg {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
  	border-radius: 14px;
		background-color: #fff;
		padding: 40px;
	}
	@media screen and (max-width: 768px){
		.card_bg {
			border-radius: none;
			background-color: transparent;
			padding: 0;
		}
		.card_item:first-of-type {
			.card_img {
				padding: 24px;
			}
		}
	}
`;
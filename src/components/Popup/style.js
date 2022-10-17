import styled from 'styled-components'

export const PopupContainer = styled.div `
	position: relative;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 99;
	background-color: rgba(0,0,0,0.6);
`;

export const PopupInner = styled.div `
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	min-width: 520px;
	max-width: 520px;
	padding: 40px;
  border-radius: 20px;
  box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.08);
	background-color: #fff;
	box-sizing: border-box;
	text-align: center;

	@media (max-width: 768px) {
		min-width: 312px;
		max-width: calc(100% - 48px);
		padding: 30px;
	}
`;

export const PopupTitle = styled.div `
	font-family: 'SamsungOne-700';
	font-size: 24px;
	font-weight: bold;
	line-height: normal;
	letter-spacing: -0.24px;
	text-align: center;
	color: #000;
	
	@media (max-width: 768px) {
  	font-size: 20px;
  	letter-spacing: -0.2px;
	}
`;

export const PopupDesc = styled.div `
	margin-top: 16px;
	font-size: 20px;
	font-weight: normal;
	line-height: normal;
	letter-spacing: -0.42px;
	text-align: center;
	color: #535353;
	white-space: pre-wrap;
	.link {
		margin-left: 4px;
		color: #1259aa;
		&:hover {
			text-decoration: underline;
  		color: #2088fd;
		}
	}
	
	@media (max-width: 768px) {
		margin-top: 14px;
  	font-size: 16px;
  	letter-spacing: -0.33px;
	}
`;

export const PopupBottom = styled.div `
	display: flex;
	justify-content: center;
	width: 100%;
	margin-top: 30px;
	text-align: center;
`;

export const PopupBtnLeft = styled.div `
	min-width: 140px;
`;

export const PopupBtnRight = styled.div `
	margin-left: 8px;
	min-width: 140px;
`;

export const PopupBtn = styled.div `
	display: inline-block;
	margin-top: 60px;
	width: 140px;

	@media (max-width: 768px) {
		margin-top: 40px;
	}
`;

export const PopupClose = styled.button `
	position: absolute;
	top: 20px;
	right: 20px;
	width: 24px;
	height: 24px;
	background-image: url( ${process.env.PUBLIC_URL + '/images/ico-close.png'} );
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	@media (max-width: 768px) {
		top: 14px;
		right: 14px;
		width: 20px;
		height: 20px;
	}
`;

export const PopupOnlyNoti = styled.div `
	font-size: 20px;
	font-family: 'SamsungOne-600';

	& + div {
		margin-top: 40px;
	}
	@media (max-width: 768px) {

	}
`;



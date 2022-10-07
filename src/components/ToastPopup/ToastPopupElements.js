import styled from 'styled-components'

export const ToastPopupContainer = styled.div `
	opacity: ${props => props.modal ? '1' : '0'};
	visibility: ${props => props.modal ? 'visibel' : 'hidden'};
	position: fixed;
	top: 84px;
	left: 50%;
	transform: translateX(-50%);
	max-width: calc(100% - 48px);
	z-index: 99;
	transition: .3s;
	
  @media screen and (max-width: 768px){
		width: 100%;
		top: 68px;
	}
`;

export const ToastPopupInner = styled.div `
	position: relative;
	display: flex;
	align-items: center;
	padding: 20px 24px;
  border-radius: 30px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  @media screen and (max-width: 768px){
		padding: 14px 24px;
	}
`;

export const ToastPopupIcon = styled.div `
	width: 24px;
	height: 24px;
  background-image: url(${props => process.env.PUBLIC_URL + '/images/ico-' + props.state + '.svg'});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
`;

export const ToastPopupText = styled.div `
	width: calc(100% - 32px);
	margin-left: 8px;
	font-family: 'SamsungOne-700';
	font-size: 16px;
	font-weight: bold;
	line-height: 1.25;
	letter-spacing: -0.33px;
	color: #535353;
`;
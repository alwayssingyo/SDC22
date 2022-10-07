import styled from 'styled-components'

export const TopbuttonContainer = styled.div `
	opacity: 0;
	visibility: hidden;
	position: fixed;
	bottom: 24px;
	right: 32px;
	z-index: 99;
	transition: 0.3s;
	&.is-active {
		opacity: 1;
		visibility: visible;
	}

  @media screen and (max-width: 1024px){
		right: 16px;
		bottom: 16px;
	}
`;

export const TopbuttonItem = styled.button `
	position: relative;
	width: 48px;
	height: 48px;
	border-radius: 100%;
	opacity: 0.5;
	background-color: #000;
	transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
	&:after {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		width: 24px;
		height: 24px;
		transform: translate(-50%, -50%);
		background-image: url(${process.env.PUBLIC_URL + '/images/ico-top-button.png'});
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
	&:hover {
		opacity: 0.7;
	}
`;
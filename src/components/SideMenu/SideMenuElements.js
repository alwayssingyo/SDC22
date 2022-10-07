import styled from 'styled-components'

export const SideMenuContainer = styled.div `
	transform: ${props => props.sideMenu ? 'translateY(0)' : 'translateY(-100%)'};
	visibility: ${props => props.sideMenu ? 'visible' : 'hidden'};
	position: fixed;
	top: 0;
	left: 0;
	margin-top: 56px;
	width: 100%;
	height: 100vh;
	background-color: ${props => props.sideMenu ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.1)'};
	z-index: 50;
	box-sizing: border-box;
	transition: all .4s cubic-bezier(.215,.61,.355,1);
`;

export const SideMenuInner = styled.div `
	width: 100%;
	height: 100vh;
	background-color: #fff;
	overflow-y: auto;
`;

export const SideMenuTop = styled.div `
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 16px 24px;
	background-color: #fff;
	box-sizing: border-box;
	font-size: 0;
`;

export const SideMenuLogo = styled.div `
	width: 60px;
	height: 16px;
`;

export const SideMenuBtn = styled.button `
	width: 24px;
	height: 24px;
	background-image: url( ${process.env.PUBLIC_URL + '/images/ico-close.png'} );
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;

export const SideMenuCont = styled.div `

	padding-bottom: 20px;
`;

export const SideMenuLink = styled.div `
	a, button {
		display: inline-block;
		width: 100%;
		padding: 20px 24px;
		font-family: 'SamsungOne-700';
		font-size: 16px;
		font-weight: bold;
		line-height: 1.25;
		letter-spacing: -0.16px;
		color: #363636;
		text-align: left;
	}
	>button {
		position: relative;
	}
	&.is-active {
		a {
  		color: #2088fd;
  		background-color: #f5f7fb;
		}
	}
	&.deps-2.is-active {
		a {
			font-family: 'SamsungOne-700';
			font-weight: bold;
		}
	}
`;

export const SideMenu2Deps = styled.div `
	height: 0;
	transition: height 0.3s ease-in-out;
	overflow: hidden;
	.deps-2 a {
		padding: 20px 24px 20px 40px;
		font-family: 'SamsungOne-400';
		font-weight: normal;
	}
	&.is-open {
		height: auto;
	}
`;

export const SideMenuArrow = styled.div `
	position: absolute;
	top: 23px;
	right: 24px;
	width: 14px;
	height: 14px;
	background-image: url( ${process.env.PUBLIC_URL + '/images/ico-arrow-black.svg'} );
	&.is-open {
		transform: rotate(180deg);
	}
`;

export const SideMenuBottom = styled.div `
	position: relative;
	margin-top: 16px;
	padding-top: 16px;
	&:after {
		content: "";
		position: absolute;
		top: 0;
		left: 24px;
		width: calc(100% - 48px);
		height: 1px;
		background-color: #efefef;
	}
`;
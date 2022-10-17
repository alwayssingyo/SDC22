import styled from 'styled-components'

export const NavContainer = styled.div `
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	border-bottom: ${props => props.color === 'black' ? 'none' : '1px solid #efefef'};
	-webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(10px);
	z-index: 99;
	transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
	@media (min-width: 769px) {
		background-color: ${props => props.color === 'black' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.7)'};
	}
`;

export const NavInner = styled.div `
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1248px;
	margin: 0 auto;
	padding: 20px 24px;
	box-sizing: border-box;
	transition: background-color .4s cubic-bezier(.215,.61,.355,1);
	@media (max-width: 768px) {
		position: relative;
		padding: 16px 24px;
		background-color: ${props => props.color === 'black' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.7)'};
		z-index: 90;
		&.active {
			background-color: #fff;

			.logo {
				svg {
					.path {
						fill: #000;
					}
				}
			}

			.toggleLine {

				&::before,
				&:after {
					background-color: #000;
				}
			}
		}
	}
`;

export const NavTitle = styled.h1 `
	width: 74px;
	height: 20px;

	@media (max-width: 768px) {
		width: 60px;
		height: 16px;
	}
`;

export const NavMenu = styled.div `
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;

	@media (max-width: 768px) {
		display: none;
	}
`;

export const NavLink = styled.div `
	position: relative;
	transition: background-color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
	border-radius: 8px;
	a, button {
		display: inline-block;
		padding: 10px 14px;
		opacity: ${props => props.color === 'black' ? '0.8' : '1'};
		font-family: 'SamsungOne-700';
		font-size: 14px;
		color: ${props => props.color === 'black' ? '#fff' : '#000'};
		vertical-align: middle;
	}
	button {
		padding: 10px 32px 10px 14px !important;
		position: relative;
		padding-right: 18px;
	}
	&+& {
		margin-left: 22px;
	}
	&:hover:not(.my-page, .sign-out, .is-selected, .signin) {
		border-radius: 8px;
		background-color: ${props => props.color === 'black' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.04)'};
		a {
			color: ${props => props.color === 'black' ? '#fff' : '#363636'};
		}
	}
	&.is-selected {
		border-radius: 8px;
		background-color: rgba(0, 0, 0, 0.04);
		a,button {
  		color: #2088fd;
		}
	}
`;

export const NavDropdown = styled.div `
	display: ${ ({open}) => open ? 'inline-block' : 'none' };
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	height: 150px;
	transition: 0.3s;
	padding-top: 56px;
	.inner {
		min-width: 142px;
		border-radius: 8px;
  	box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
		background-color: ${props => props.color === 'black' ? 'rgba(0, 0, 0, 0.4)' : '#ffffff'};
		text-align: center;
		overflow: hidden;
	}
	a, button {
		color: ${props => props.color === 'black' ? '#ffffff' : '#000000'} !important;
	}
`;

export const NavDropdownLink = styled.div `
	font-size: 14px;
	letter-spacing: -0.14px;
	color: #fff;
	transition: background-color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
	a, button {
		opacity: 1;
		padding: 10px 16px;
		font-family: 'SamsungOne-400';
		display: inline-block;
		width: 100%;
	}
	&:hover {
		background-color: ${props => props.color === 'black' ? 'rgba(255, 255, 255, 0.1)' : '#f5f7fb'};
		a, button {
			font-family: 'SamsungOne-600';
			color: ${props => props.color === 'black' ? '#fff' : '#000'};
		}
	}
`;

export const NavArrow = styled.span `
	position: absolute;
	top: 11px;
	right: 14px;
	width: 14px;
	height: 14px;
	transform: rotate(${ ({open}) => open ? '180deg' : 'none' });

`;

export const NavRight = styled.span `
	display: flex;
	height: 24px;
	>div {
		display: inline-block;
		vertical-align: top;
		padding: 2px 0;
		a,button {
			padding: 0;
		}
	}
	&:nth-child(2) {
		margin-right: 10px;
	}
	.sign-out {
		position: relative;
		margin-left: 10px;
		padding-left: 10px;
		> button {
			padding: 0 !important;
		}
		&:after {
			content: "";
			position: absolute;
			top: 4px;
			left: 0;
			width: 1px;
			height: 14px;
			background-color: ${props => props.color === 'black' ? '#ffffff' : '#dcdcdc'};
			opacity: ${props => props.color === 'black' ? '0.2 !important' : '1'};
		}
	}

	@media (max-width: 768px) {
		width: 24px;
		height: 24px;
		align-items: center;
		justify-content: center;
		>div {
			display: none;
		}
	}
`;

export const NavButton = styled.button `
	display: none;
	width: 20px;
	height: 20px;
	margin-right: 16px;

	@media (max-width: 768px) {
		display: inline-block;
		position: relative;
		margin-right: 0;
	
		i,
		i::before,
		i::after {
			display: block;
			position: absolute;
			width: 100%;
			height: 2px;
			background-color: ${props => props.color === 'black' ? '#ffffff' : '#000'};
			border-radius: 1px;
			content: '';
			-webkit-transition: -webkit-transform .2s ease-in-out;
			transition: -webkit-transform .2s ease-in-out;
		}

	 i {
			top: 8px;
			&:before{
				top: -7px;
				left: 0;
			}

			&:after {
				bottom: -7px;
				left: 0;
			}
		}

		&.active {

			i {
				background-color: transparent;
			}
			 i {

				&::before {
					transform: scale(1);
					top: 50%;
    			transform: rotate(45deg) scale(1.1);
				}

				&:after {
					transform: scale(1);
					top: 50%;
    			transform: rotate(-45deg) scale(1.1);
				}
			}
		}
	}
`;

export const NavLogin = styled.div `
	position: relative;

`;

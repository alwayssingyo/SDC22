import styled, {keyframes} from 'styled-components'

export const HeroContainer = styled.div `
	position: relative;
	width: 100%;
	height: 100vh;
	background-color: #000;
`;

export const HeroDim = styled.div `
	position: absolute;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.5);
	z-index: 2;
`;

export const HeroInner = styled.div `
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: inherit;
	z-index: 1;
	&.is-phase3 {
		position: absolute;
	}
  video {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const HeroContent = styled.div `
	position: relative;
	width: 100%;
	height: 100%;
`;

export const HeroIntroText = styled.div `
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: calc(100% - 80px);
	height: 90%;
	padding: 0 40px;
	text-align: center;
	z-index: 10;

  @media (max-width: 768px) {
		width: calc(100% - 48px);
		padding: 0 24px;
  }
`;

export const HeroIntroTitle = styled.div `
	font-family: 'SamsungSharpSans-bold';
	font-size: 70px;
	line-height: normal;
	letter-spacing: normal;
	text-align: center;
	color: #fff;

  @media (max-width: 768px) {
  	font-size: 36px;
  	line-height: 1.28;
  }
`;

export const HeroIntroDesc = styled.div `
	margin-top: 14px;
	opacity: 0.64;

  @media (max-width: 768px) {
		margin-top: 6px;
  }
`;

export const HeroIntroDescItem = styled.div `
	position: relative;
	font-size: 18px;
  line-height: normal;
	color: #fff;
	& + &{
		margin-top: 8px;
	}
	br {
		display: none;
	}

  @media (max-width: 768px) {
		padding: 0;
		font-size: 14px;
  	line-height: 1.43;
		white-space: pre-line;
		& + &{
			margin-top: 2px;
		}
		br {
			display: block;
		}
	}
`;

export const HeroIntroBtnWrap = styled.div `
	margin-top: 60px;
	@media (max-width: 768px) {
		margin-top: 40px;
	}
`;

const circleFade = keyframes`
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`
export const HeroIntroBtn = styled.div `
	position: relative;
	display: inline-block;
	&+& {
		margin-left: 10px;
	}
	&.is-dim {
		a {
			background-color: rgba(255,255,255,0.8);
		}
	}
	&.is-live {
		a {
			position: relative;
			padding: 12px 20px 12px 40px;
				&:after {
					content: '';
					position: absolute;
					left: 28px;
					top: 20px;
					display: inline-block;
					width: 8px;
					height: 8px;
					margin-right: 6px;
					background-color: #fa5347;
					border-radius: 100%;
					animation: ${circleFade} 0.8s infinite linear alternate;
				}
		}
		&.is-session a:after {
			left: 25px;
		}
	}
  @media (max-width: 768px) {
		display: block;
		&+& {
			margin-left: 0;
			margin-top: 8px;
		}
		&.is-live {
			display: block;
			a {
				padding: 12px 20px 12px 36px;
				&:after {
					top: 16px;
					left: 25px;
				}
			}
			&.is-session a:after {
				left: 22px;
			}
		}
	}
`;

export const HeroText = styled.div `
	display: none;
	opacity: 0;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 90%;
	text-align: center;
	z-index: 5;
	&.is-active {
		display: flex;
	}
`;

export const HeroTitle = styled.div `
	font-family: 'samsungsharpsans-bold';
  font-size: 42px;
  line-height: 1.43;
	color: #fff;

  @media (max-width: 768px) {
		font-size: 32px;
		line-height: 1.38;
	}
`;

export const HeroDesc = styled.div `
	margin-top: 4px;
	font-family: 'samsungsharpsans';
  font-size: 18px;
  line-height: 1.56;
	color: #fff;

  @media (max-width: 768px) {
		font-size: 14px;
		line-height: 1.57;
  }
`;

export const HeroCount = styled.div `
	display: none;
	margin-top: 50px;
	font-family: 'samsungsharpsans-bold';
	font-size: 64px;
	font-weight: bold;
	color: #fff;
	&.is-active {
		display: block;
	}
	br {
		display: none;
	}
	
  @media (max-width: 768px) {
		font-size: 30px;
		line-height: 1.33;
		br {
			display: block;
		}
  }
`;

export const HeroDate = styled.div `
	position: relative;
	.odometer_wrap * {
		font-family: 'samsungsharpsans' !important;
		font-size: 150px !important;
		color: #fff;
	}
	.odometer-value {
		width: 88px;
	}
	.odometer-digit {
		width: 88px;
	}
	+ div {
		margin-left: 127px;
		&:before {
			content: "";
			position: absolute;
			top: 42px;
			left: -64px;
			width: 8px;
			height: 36px;
			background-image: url( ${process.env.PUBLIC_URL + '/images/countdown-dot.svg'} );
		}
	}

  @media (max-width: 768px) {
		.odometer_wrap * {
			font-size: 70px !important;
		}
		.odometer-value {
			width: 44px;
		}
		.odometer-digit {
			width: 44px;
		}
	}
`;

export const HeroDateText = styled.div `
	margin-top: 2px;
	font-family: 'samsungsharpsans-medium';
  font-size: 42px;
  line-height: 1.19;
  letter-spacing: normal;
  opacity: 0.7;

  @media (max-width: 768px) {
		font-size: 18px;
		line-height: 1.11;
	}
`;

export const HeroLink = styled.div `
	margin-top: 70px;
	@media (max-width: 768px) {
		margin-top: 60px;
	}
`;

export const HeroArrow = styled.div `
	position: absolute;
	bottom: 24px;
	left: 50%;
	transform: translateX(-50%);
	width: 50px;
	height: 50px;
	z-index: 30;
	img {
		display: inlinex-block;
		width: 100%;
		height: 100%;
	}

	@media (max-width: 768px) {
		bottom: 16px;
		width: 40px;
		height: 40px;
	}
`;

export const HeroTime = styled.div `
	display: none;
	justify-content: center;
	width: 100%;
	margin-top: 120px;
	text-align: center;
	&.is-active{
		display: flex;
	}

	@media (max-width: 768px) {
		margin-top: 84px;
	}
`;

export const HeroTimeItem = styled.div `
	position: relative;
	display: inline-block;
	min-width: 200px;

	@media (max-width: 768px) {
		min-width: 70px;
	}

	.value {
		font-family: 'samsungSharpSans-medium';
		font-size: 100px;
		font-weight: bold;
		line-height: 1.16;
		letter-spacing: normal;
		text-align: center;
		color: #fff;
		transform: scale(1.7);

		@media (max-width: 768px) {
  		font-size: 50px;
		}
	}
	.text {
		margin-top: 42px;
  	opacity: 0.7;
		font-family: 'samsungSharpSans-medium';
		font-size: 16px;
		line-height: 1.25;
		letter-spacing: normal;
		text-align: center;
		color: #fff;

		@media (max-width: 768px) {
			margin-top: 20px;
  		font-size: 12px;
			line-height: 1.17;
		}
	}
	&+& {
		margin-left: 32px;
		&:before {
			content: "";
			position: absolute;
			top: 5px;
			left: -16px;
			width: 8px;
			height: 36px;
			background-image: url( ${process.env.PUBLIC_URL + '/images/countdown-dot.svg'} );
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
			@media (max-width: 768px) {
				left: -18px;
				width: 4px;
				height: 18px;
			}
		}
	}
`;
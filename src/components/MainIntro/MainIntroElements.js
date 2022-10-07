import styled from 'styled-components'

export const IntroContainer = styled.div `
	display: none;
	&.is-active {
		display: block;
	}
`;

export const IntroInner = styled.div `
	max-width: 1360px;
	margin: 0 auto;
	padding: 200px 80px 120px 80px;
	padding: ${props => props.phase3 ? '74px 0 120px 0' : '200px 80px 120px 80px'};
	text-align: center;

	@media (max-width: 768px) {
		padding: ${props => props.phase3 ? '56px 24px 60px' : '100px 24px 60px'};
	}
`;

export const IntroMotion = styled.div `
	position: relative;
	max-width: 792px;
	margin: 0 auto;
	div {
		opacity: 0;
		font-family: 'SamsungSharpSans-bold';
		font-size: 48px;
		font-weight: bold;
		text-align: center;
		+ div {
			margin-top: 13px;
		}
	}

	@media (max-width: 768px) {
		div {
  		font-size: 30px;
			+ div {
				margin-top: 8px;
			}
		}
	}
`;

export const IntroTop = styled.div `
	position: relative;
	.intro_motion {
		svg {
			height: 460px !important;
		}
	}
	@media (max-width: 768px) {
		.intro_motion {
			svg {
				height: 50.555vw !important;
			}
		}
	}
`;

export const IntroMotionText = styled.div `
	position: absolute;
	bottom: 40px;
	left: 50%;
	transform: translateX(-50%);
	max-width: 792px;
	margin: 0 auto;
	div {
		font-family: 'SamsungSharpSans-bold';
		font-size: 55px;
		font-weight: bold;
		text-align: center;
  	line-height: 1.2;
		+ div {
 			margin-top: 45px;
 		}
 	}
	@media (max-width: 768px) {
		bottom: 5.555vw;
		div {
			font-size: 26px;
			line-height: normal;
			+ div {
				margin-top: 3.888vw;
			}
			&.item-01 {
				transform: translateX(-30.555vw);
			}
			&.item-02 {
				transform: translateX(30.555vw);
			}
			&.item-03 {
				transform: translateX(-30.555vw);
			}
		}
	}
`;

export const IntroText = styled.div `
	max-width: ${props => props.phase3 ? 'none' : '800px'};
	margin: ${props => props.phase3 ? '20px auto 0 auto' : '56px auto 0 auto'};
	font-family: 'SamsungOne-700';
  font-size: 18px;
  line-height: 1.44;
	color: #4e4e4e;
  text-align: center;
	.is-pc {
		display: inline-block;
	}

	@media (max-width: 768px) {
		max-width: 312px;
		margin: 40px auto 0 auto;
		margin: ${props => props.phase3 ? '20px auto 0 auto' : '40px auto 0 auto'};
		font-size: 14px;
		line-height: 1.43;
		.is-pc {
			display: none;
		}
	}
`;

export const LinkArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`
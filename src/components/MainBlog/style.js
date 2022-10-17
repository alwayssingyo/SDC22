import styled from 'styled-components'

export const BlogContainer = styled.div `
	padding: 0 40px;
  	background-color: #F5F7FB;

	@media (max-width: 768px) {
		padding: 0 24px;
	}
`;

export const BlogInner = styled.div `
	max-width: 1200px;
	margin: 0 auto;
	padding: 80px 0 120px 0;

	@media (max-width: 768px) {
		padding: 40px 0;
	}
`;

export const BlogTop = styled.div `
	display: flex;
	margin-bottom: 60px;

	@media (max-width: 768px) {
		display: block;
		margin-bottom: 40px;
	}
`;

export const BlogTitle = styled.div `
	min-width: 288px;
	padding-right: 40px;
	margin-right: 14px;
	font-family: 'SamsungSharpSans-bold';
  font-size: 42px;
	letter-spacing: normal;
  line-height: 44px;
	color: #000;

	@media (max-width: 768px) {
    font-size: 20px;
    line-height: 1.5;
	}
`;

export const BlogDesc = styled.div `
	font-size: 16px;
	line-height: 1.38;
	letter-spacing: normal;
  color: #535353;
  a {
		display: inline-block;
		margin-top: 2px;
    position: relative;
    padding-right: 18px;
    font-family: 'SamsungOne-700';
    font-size: 14px;
    font-weight: bold;
    line-height: 1.57;
    letter-spacing: normal;
    color: #1259aa;
    &:hover {
      color: #2088fd;
      text-decoration: underline;
    }
    &:before {
      content: "";
      position: absolute;
      top: 4px;
      right: 0;
      width: 14px;
      height: 14px;
      background-image: url(${process.env.PUBLIC_URL + '/images/ico-arrow-navy.svg'});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
    &:hover:before {
      background-image: url(${process.env.PUBLIC_URL + '/images/ico-arrow-blue.svg'});
    }
  }

	@media (max-width: 768px) {
		margin-top: 8px;
		font-size: 14px;
		line-height: 1.57;
		a {
			margin-top: 4px;
		}
	}
`;

export const BlogCont = styled.div `
`;

export const CardWrap = styled.div `
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin: -12px;
	@media (max-width: 768px) {
		margin: -8px;
	}
`;
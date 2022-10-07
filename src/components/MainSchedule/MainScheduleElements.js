import styled from 'styled-components'

export const ScheduleContainer = styled.div `
	padding: 0 40px;
  	background-color: #F5F7FB;

	@media (max-width: 768px) {
		padding: 0 24px;
	}
`;

export const ScheduleInner = styled.div `
	max-width: 1200px;
	margin: 0 auto;
	padding: 120px 0;

	@media (max-width: 768px) {
		padding: 60px 0;
	}
`;

export const ScheduleTop = styled.div `
	display: flex;
	margin-bottom: 60px;

	@media (max-width: 768px) {
		display: block;
		margin-bottom: 40px;
	}
`;

export const ScheduleTitle = styled.div `
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

export const ScheduleDesc = styled.div `
	font-size: 16px;
	line-height: 1.38;
	letter-spacing: normal;
  color: #535353;

	@media (max-width: 768px) {
		margin-top: 8px;
		font-size: 14px;
		line-height: 1.57;
		br {
			display: none;
		}
	}
`;

export const ScheduleCont = styled.div `
`;

export const ScheduleContInner = styled.div `
	display: flex;
	padding: 24px;
  border-radius: 20px;
	background-color: #ffffff;

	@media (max-width: 768px) {
		padding: 0;
		border-radius: none;
  	background-color: #f5f8fc;
	}
`;

export const ScheduleIndex = styled.div `
	display: grid;
	grid-template-rows: 136px 166px 94px;
	grid-template-columns: 62px;
	grid-gap: 10px;
	gap: 10px;
	border-right: 1px solid #efefef;
	margin-right: 16px;
	.item {
		font-size: 12px;
		font-weight: 600;
		line-height: normal;
		letter-spacing: normal;
		color: #bababa;
		padding-right: 15px;
		margin-top: 4px;
		&:nth-of-type(2) {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		&:nth-of-type(3) {
			display: flex;
    	align-items: flex-end;	
		}
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

export const ScheduleCalendar = styled.div `
	display: grid;
	grid-template-rows: 136px 166px 94px;
	grid-template-columns: calc(50% - 5px) calc(50% - 5px);
	grid-gap: 14px;
	gap: 14px;
	width: 100%;
	.item {
		position: relative;
		padding: 24px 24px 24px 36px;
		border-radius: 10px;
  	background-color: #f5f7fb;
		transition: 0.3s;
		&:after {
			content: "";
				position: absolute;
				top: 16px;
				left: 12px;
				width: 6px;
				height: calc(100% - 32px);
  			border-radius: 3px;
		}
		&.is-active {
  		box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.06);
		}
		&.item-01 {
			grid-column: span 2;
			&:after {
  			background-color: #4ED1E0;
			}
		}
		&.item-02 {
			&:after {
  			background-color: #8E8FEE;
			}
		}
		&.item-03 {
			&:after {
  			background-color: #65ACFE;
			}
		}
		&.item-04 {
			grid-column: span 2;
			&:after {
  			background-color: #65ACFE;
			}
		}
		.title {
			font-family: 'SamsungOne-700';
			font-size: 20px;
			font-weight: bold;
			line-height: 1.38;
			letter-spacing: normal;
  		color: #1e1e1e;
		}
		.time {
			margin-top: 4px;
			font-family: 'SamsungOne-600';
			font-size: 14px;
			line-height: 1.14;
			letter-spacing: normal;
  		color: #535353;
		}
		.desc {
			margin-top: 10px;
			font-size: 14px;
			font-weight: normal;
			line-height: 1.43;
			letter-spacing: normal;
			color: #7e7e7e;
		}
		.link {
			position: absolute;
			bottom: 20px;
			left: 36px;
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
				top: 3px;
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
	}

	@media (max-width: 768px) {
		grid-template-rows: 126px 176px 88px 88px;
		grid-template-columns: calc(50% - 8px) calc(50% - 8px);
		grid-gap: 16px;
		gap: 16px;
		.item {
			padding: 24px 24px 24px 30px;
  		background-color: #fff;
			&.item-02 {
				grid-column: span 2;
			}
			&.item-03 {
				grid-column: span 2;
			}
			.title {
				font-size: 16px;
				line-height: 20px;
			}
			.time {
  			line-height: 1.14;
			}
			.desc {
  			line-height: 1.43;
			}
			.link {
				bottom: 20px;
				left: 28px;
			}
		}
	}
`;

export const LinkArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;

	@media (max-width: 768px) {
  	margin-top: 40px;
	}
`
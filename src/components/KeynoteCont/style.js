import styled, {keyframes } from "styled-components";

export const KeynoteContContainer = styled.div `
	padding: 80px 0 120px 0;
  @media screen and (max-width: 768px){
		padding: 40px 0 60px 0;
	}
`;

export const KeynoteContInner = styled.div `
	max-width: 1280px;
	margin: 0 auto;
	padding: 0 40px;
	box-sizing: border-box;
  @media screen and (max-width: 768px){
		padding: 0 24px;
	}
`;

export const KeynoteContVideo = styled.div `
	position: relative;
	border-radius: 24px;
	overflow: hidden;
	&:after {
    content: "";
    display: block;
    padding-bottom: 56.25%;
	}
	 .react-player {
    position: absolute;
    top: 0;
    left: 0;
  	background-color: ${props => props.released ? '#000' : '#fff'};
		iframe {
			border-radius: 24px !important;
		}
		video {
			border-radius: 24px !important;
			background-color: #fff;
		}

  }
  @media screen and (max-width: 768px){
		border-radius: 14px;
		.react-player iframe {
			border-radius: 14px !important;
		}
	}
`;

export const KeynoteContSoon = styled.div `
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 100%;
	text-align: center;
	z-index: 10;
	vertical-align: middle;
	.title {
		font-family: 'samsungSharpSans-bold';
		font-size: 50px;
		line-height: normal;
		letter-spacing: normal;
		color: rgba(0,0,0,0.4);
	}
	.desc {
		margin-top: 10px;
		font-family: 'SamsungSharpSans-Medium';
		font-size: 20px;
		font-weight: 500;
		line-height: 1.5;
		letter-spacing: normal;
		text-align: center;
		color: rgba(0,0,0,0.4);
	}
	.time {
		margin-top: 16px;
		font-family: 'SamsungOne-600';
		font-size: 16px;
		line-height: normal;
		letter-spacing: normal;
		color: rgba(0,0,0,0.4);
	}

	&.LiveVideo {
		.title {
			font-size: 40px;
			line-height: 1.38;
		}
	}
  @media screen and (max-width: 768px){
		.title {
			font-size: 20px;
		}
		.desc {
			margin-top: 2px;
			font-size: 14px;
			line-height: 1.43;
		}
		.time {
			margin-top: 6px;
			font-size: 14px;
		}
		&.LiveVideo {
			.title {
			  font-size: 16px;
			}
		}
	}
`;

export const KeynoteContText = styled.div `
	margin-top: 40px;
	/* tag in KeynoteContText */
	.tag_wrap {
    display: none;
    position: absolute;
  }

	&.is-session {
		.tag_wrap {
			position: relative;
			display: flex;
			width: 100%;
			margin: 11px -5px -5px -5px;

			@media screen and (max-width: 768px){
				position: relative;
				width: calc(100% - 78px);
				overflow: auto;
				margin: 14px -5px -5px -5px;
				padding-left: 10px;
				order: 2;
				-ms-overflow-style: none;
    		scrollbar-width: none;
				&::-webkit-scrollbar {
					display: none;
				}
      }

		}
	}
	@media screen and (max-width: 768px){
		margin-top: 24px;
	}
`;

export const KeynoteContTitle = styled.div `
	display: flex;
	justify-content: space-between;
	align-items: center;
	justify-content: space-between;
	align-items: flex-start;
	.title {
		font-family: 'samsungSharpSans-bold';
  	font-size: 32px;
		font-weight: bold;
  	line-height: 1.19;
		letter-spacing: normal;
		color: #000;
	}
	.btn {
		position: relative;
		margin-top: -3px;
		font-size: 0;
	}
  @media screen and (max-width: 768px){
		justify-content: space-between;
		.title {
			font-size: 20px;
  		line-height: 1.4;
		}
	}
`;

export const KeynoteContMark = styled.button `
	margin-left: 16px;
	width: 34px;
	height: 34px;
	background-image: url(${process.env.PUBLIC_URL + '/images/Bookmark_icon.svg'});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	&.Bookmark-checked {
		background-image: url(${process.env.PUBLIC_URL + '/images/Bookmark_icon_checked.svg'});
	}
  @media screen and (min-width: 769px){
		&:hover:not(.Bookmark-checked) {
			background-image: url(${process.env.PUBLIC_URL + '/images/Bookmark_icon-hover.svg'});
		}
	}
  @media screen and (max-width: 768px){
		width: 26px;
		height: 26px;
		background-image: url(${process.env.PUBLIC_URL + '/images/Bookmark_icon-26.svg'});
		&.Bookmark-checked {
			background-image: url(${process.env.PUBLIC_URL + '/images/Bookmark_icon_checked-26.svg'});
		}
	}
`;

export const KeynoteContDesc = styled.div `
	p {
		font-size: 16px;
		line-height: 1.38;
		letter-spacing: normal;
		color: #535353;
	}
	margin-top: 20px;
	font-size: 16px;
	line-height: 1.38;
	letter-spacing: normal;
	color: #535353;
  @media screen and (max-width: 768px){
		p {
			font-size: 14px;
		}
		font-size: 14px;
		margin-top: 8px;
	}
`;

export const KeynoteContLink = styled.a `
	position: relative;
	display: inline-block;
	margin-top: 34px;
	padding-right: 18px;
	font-family: 'SamsungOne-700';
	font-size: 18px;
	font-weight: bold;
	line-height: 1.33;
	letter-spacing: normal;
  color: #1259aa;
	&:hover {
  	color: #2088fd;
		text-decoration: underline;
		&:after {
			background-image: url(${process.env.PUBLIC_URL + '/images/ico-arrow-blue.svg'});
		}
	}
	&:after {
		content: "";
		position: absolute;
		top: 50%;
		right: 0;
		transform: translateY(-50%);
		width: 16px;
		height: 16px;
		background-image: url(${process.env.PUBLIC_URL + '/images/ico-arrow-navy.svg'});
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		z-index: 1;
	}
  @media screen and (max-width: 768px){
		margin-top: 30px;
		font-size: 14px;
	}
`;

export const KeynoteContTag = styled.div `
	display: none;
`;

export const KeynoteContLike = styled.button `
	position: relative;
	width: 34px;
	height: 34px;
	background-image: url(${process.env.PUBLIC_URL + '/images/ico-like.svg'});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	&.is-active {
		background-image: url(${process.env.PUBLIC_URL + '/images/ico-like-active.svg'});
	}
  @media screen and (min-width: 769px){
		&:hover:not(.is-active) {
			background-image: url(${process.env.PUBLIC_URL + '/images/ico-like-hover.svg'});
			.like_tooltip {
				opacity: 1;
				visibility: visible;
			}
		}
	}
  @media screen and (max-width: 768px){
		background-image: url(${process.env.PUBLIC_URL + '/images/ico-like-26.svg'});
		&.is-active {
			background-image: url(${process.env.PUBLIC_URL + '/images/ico-like-active-26.svg'});
		}
		.like_tooltip {
			display: none;
		}
	}
`;

const circleFade = keyframes`
  0% {
    opacity: 0.2;
  }
  100%{
    opacity: 1;
  }
`

export const KeynoteContType = styled.span `
	display: inline-block;
	vertical-align: middle;
	margin: 5px;
	padding: 8px 16px;
	font-family: 'SamsungOne-600';
  border-radius: 18px;
  background-color: #f5f7fb;
  color: #7d838e;
	span {
		white-space: nowrap;
	}

	&.released {
		padding: 8px 12px;
    background-color: #fa5347;
		color: #fff;
    >span {
      position: relative;
      display: flex;
      align-items: center;
      &::before {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-right: 6px;
        background-color: #fff;
        border-radius: 100%;
        animation: ${circleFade} 1s infinite linear alternate;
      }
    }
  }
	@media screen and (max-width: 768px){
		margin: 0 10px 0 0;
		&.released {
			padding: 6px 10px;
		}
	}
`;


export const KeynotebtnWrap = styled.div `
  display: none;
  text-align: center;
	order: 4;
  &.block {
    display: block;
  }
	@media screen and (max-width: 768px){
		order: inherit;
	}
`

export const KeynoteMore = styled.button `
	position: relative;
	margin: 40px auto 0;
	padding-right: 18px;
	font-family: 'SamsungOne-600';
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #000;
	&:after {
		content: "";
		position: absolute;
		top: 3px;
		right: 0;
		width: 14px;
		height: 14px;
		background-image: url(${process.env.PUBLIC_URL + '/images/ico-arrow-black.svg'});
		background-repeat: no-repeat;
		background-size: cover;
		background-position: right center;
	}
	&.is-appended:after {
		transform: rotate(180deg);
	}

  @media screen and (max-width: 768px){
		margin: 16px auto 0;
		order: inherit;
	}
`;

export const SessionDesc = styled.div `
	display: none;
	margin-top: 20px;
	font-size: 16px;
	line-height: 1.38;
	letter-spacing: normal;
	color: #535353;
	p {
		font-size: 16px;
		line-height: 1.38;
		letter-spacing: normal;
		color: #535353;
	}
  @media screen and (max-width: 768px){
		p {
			font-size: 14px;
		}
		font-size: 14px;
		margin-top: 14px;
	}
`;

export const BookmarkTooltip = styled.div `
  opacity: 0;
  visibility: hidden;
  position: absolute;
  right: 17px;
  top: -90px;
  z-index: 99;
  width: 210px;
  padding: 14px 40px 14px 14px;
  border-radius: 8px;
  transform: translateX(50%);
  box-shadow: 0 0 100px 0 rgba(0, 0, 0, 0.1);
  background-color: #2088fd;
  text-align: left;
	font-family: 'SamsungOne-600';
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  letter-spacing: -0.29px;
  color: #fff;
  box-sizing: border-box;
  transition: opacity 0.3s;
	z-index: 50;
  &:after {
    content: '';
    left: 50%;
    bottom: -12px;
    transform: translateX(-50%);
    position: absolute;
    border-top: 12px solid #2088fd;
    border-right: 12px solid transparent;
    border-left: 12px solid transparent;
  }
  &.is-open {
    opacity: 1;
    visibility: visible;
  	transition: opacity 0.3s;
  }
  a {
    color: #fff;
    text-decoration: underline;
  }
  .close_btn {
    opacity: 0.7;
    position: absolute;
    top: 14px;
    right: 14px;
    width: 16px !important;
    height: 16px !important;
	  background-image: url(${process.env.PUBLIC_URL + '/images/ico-close-grey.svg'});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    &:hover {
      opacity: 1;
    }
  }

	@media screen and (max-width: 1370px){
		right: -10px;
		transform: none;
    &:after {
			right: 15px;
			left: auto;
			transform: none;
		}
	}
	@media screen and (max-width: 768px){
    &:after {
			right: 10px;
		}
	}
`;

export const KeynoteContLikeTooltip = styled.div `
	opacity: 0;
	visibility: hidden;
	position: absolute;
	top: -62px;
	left: 50%;
	transform: translateX(-50%);
	min-width: 130px;
	padding: 12px 14px;
  border-radius: 8px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);
  background-color: #2088fd;
	box-sizing: border-box;
	font-family: 'SamsungOne-600';
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  letter-spacing: -0.29px;
  color: #fff;
	transition: 0.3s;
  &:after {
    content: '';
    left: 50%;
    bottom: -12px;
    transform: translateX(-50%);
    position: absolute;
    border-top: 12px solid #2088fd;
    border-right: 12px solid transparent;
    border-left: 12px solid transparent;
  }
`;

export const KeynoteTimeStamp = styled.div `
	position: relative;
	margin-top: 27px;
  @media screen and (max-width: 768px){

	}
`;

export const KeynoteTimeStampTitle = styled.div `
	margin-top: 40px;
	padding-top: 40px;
	border-top: 1px solid #EFEFEF;
	font-family: 'SamsungOne-700';
	font-size: 20px;
  @media screen and (max-width: 768px){
		padding-top: 26px;
		font-size: 16px;
	}
`;

export const KeynoteTimeStampWrap = styled.div `
	display: flex;
	align-items: top;

	.slick-list:before {
		opacity: 0;
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 60px;
		height: 100%;
		background-image: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
		z-index: 10;
		transition: 0.2s;
	}
	
	&.not-first {
		.slick-list:before {
			opacity: 1;
		}
	}

  @media screen and (max-width: 768px){
		&.not-first {
			.slick-list:before {
				opacity: 0;
			}
		}
	}
`;

export const KeynoteTimeStampItem = styled.div `
	width: 180px;
	.title {
		margin-bottom: 2px;
		font-family: 'SamsungOne-600';
		font-size: 16px;
  	color: #535353;
		text-align: left;
	}

	.txt {
		color: #535353;
		text-align: left;
	}

	/* TimeStamp active */
	&.active {
		.title {
			font-family: 'SamsungOne-700';
			color: #000;
		}
		.thumb {
			&:after {
				content: '';
				background-color: transparent;
			}
		}
	}

  @media screen and (max-width: 768px){
		.title {
			margin-bottom: 0;
			font-size: 14px;
			line-height: 1.43;
		}
	}
`;

export const KeynoteTimeStampImg = styled.div `
	position: relative;
	width: 180px;
	height: 101px;
	margin-bottom: 16px;
	border-radius: 10px;
	overflow: hidden;
	img {
		display: block;
		width: 100%;
	}
	&:after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			display: block;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.4);
		}
  @media screen and (max-width: 768px){
		width: 148px;
		height: 82px;
		margin-bottom: 10px;
	}
`;

export const SessionRoomLink = styled.div `
	color: blue;
  @media screen and (max-width: 768px){

	}
`;

export const KeynoteBadgeWrap = styled.div `
	position: relative;
	display: block;
	margin-bottom: 17px;
  @media screen and (max-width: 768px){
		margin-bottom: 6px;
	}
`;

export const KeynoteBadge = styled.div `
	display: inline-block;
	.inner {
		position: relative;
		padding: 8px 12px 8px 12px;
		border-radius: 18px;
		background-color: #fa5347;
		&::before {
			content: '';
			display: inline-block;
			width: 8px;
			height: 8px;
			margin-right: 6px;
			background-color: #fff;
			border-radius: 100%;
			animation: ${circleFade} 0.8s infinite linear alternate;
			margin-bottom: 0.6px;
		}
	}
	span {
		font-size: 14px;
		font-weight: bold;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.43;
		letter-spacing: normal;
		color: #fff;
	}
  @media screen and (max-width: 768px){
		.inner {
			padding: 6px 12px 6px 12px;
		}
	}
`;

import styled, {keyframes } from "styled-components";

export const Card = styled.div `
  opacity: ${props => props.listYn ? '0' : '1'};
  position: relative;
  margin: 12px;
  background-color: #fff;
  border: ${props => props.border ? '1px solid #dcdcdc' : 'none'};
  border-radius: 14px;
  box-sizing: border-box;
  transition: 0.3s ease-in-out;
  overflow: ${props => props.video ? 'hidden' : 'visible'};
  transform: ${props => props.listYn ? 'translateY(50px)' : 'none'};
  &.col-2 {
    width: calc(50% - 24px);
  }
  &.col-3 {
    width: calc(33.333% - 24px);
  }
  &.is-active {
    transform: translateY(0);
    opacity: 1;
  }

  @media screen and (min-width: 769px){
    &:hover:not(.loading) {
      box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.06);
      .card_img img {
        transform: translate(-50%, -50%) scale(1.06);
      }
      .card_img.has-dim:before {
        background-color: rgba(0,0,0,0.2);
      }
    }
  }

  @media screen and (max-width: 768px){
    margin: 8px;
    &.col-2 {
      width: 100%;
    }
    &.col-3 {
      width: 100%;
    }
  }
`;

export const CardLink = styled.a `
  display: inline-block;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
`;

export const CardImage = styled.div `
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  padding: 0 24px 24px;
  max-height: 244px;
  border-radius: 14px 14px 0 0;
  border-bottom: 1px solid #EFEFEF;
  box-sizing: border-box;
  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 102%;
    height: 102%;
    transition: 0.3s;
    object-fit: cover;
    border-radius: 14px 14px 0 0;
  }

  &:after {
    content: "";
    display: block;
    padding-bottom: 56.25%;
  }

  &.has-dim {
    padding: 0;
    +.Text {
      .Title {
        color: #000;
        font-family: 'SamsungOne-700';
      }
    }
    &:after {
      padding-bottom: 56.25%;
    }

    :before {
    content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 14px 14px 0 0;
      background-color: rgba(0,0,0,0.4);
      z-index: 2;
      transition: 0.3s;
    }
  }
`;

export const VideoIcon = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 64px;
  height: 64px;
  border-radius: 100%;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.47);
  z-index: 2;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
	  background-image: url(${process.env.PUBLIC_URL + '/images/ico-play.svg'});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  @media screen and (max-width: 768px){
    width: 40px;
    height: 40px;
    &:before {
      width: 10px;
      height: 10px;
    }
  }
`;

export const CardInfo = styled.div `
  padding: ${props => props.video ? '24px' : '24px 24px 76px 24px'};
  @media screen and (max-width: 768px){
    padding: ${props => props.video ? '24px !important' : '24px 24px 72px 24px'};
  }
`;

export const CardTitle = styled.div `
  position: relative;
  overflow: hidden;
  text-overflow: 5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
	font-family: 'samsungsharpsans-bold';
  font-size: 20px;
  font-weight: bold;
  line-height: 1.4;
  letter-spacing: normal;
  white-space: pre-line;
  color: #fff;
  &.is-live {
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(0 0 0 0);
    overflow: hidden;
    font-size: 1px;
  }
  @media screen and (max-width: 768px){
    font-size: 16px;
    line-height: 1.38;
  }
`;

export const CardTitleVideo = styled.div `
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-family: 'SamsungOne-700';
  font-size: 20px;
  font-weight: bold;
  line-height: 1.3;
  letter-spacing: normal;
  color: #000;
  @media screen and (max-width: 768px){
    margin-bottom: 6px;
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const CardText = styled.div `
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #535353;
`;

export const CardTagWrap = styled.div `
  position: absolute;
  left: 24px;
  bottom: 24px;
  width: calc(100% - 48px);
  overflow: hidden;
  white-space: nowrap;
  margin: 11px -5px -5px -5px;
  box-sizing: border-box;
  .tag_inner {
    display: inline-block;
    width: auto;
  }
`;

export const CardTag = styled.div `
  display: inline-block;
  margin: 5px;
  padding: 8px 16px 8px 16px;
  border-radius: 18px;
  background-color: #f5f7fb;
  vertical-align: middle;
	font-family: 'SamsungOne-600';
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  letter-spacing: normal;
  color: #7d838e;
  @media screen and (max-width: 768px){
    padding: 6px 12px;
  }
`;

export const CardMore = styled.div `
  display: none;
  margin-left: 10px;
	font-family: 'SamsungOne-700';
  font-size: 14px;
  font-weight: bold;
  line-height: 1.43;
  letter-spacing: normal;
  color: #b0b0b0;
  &.is-active {
    display: inline-block;
  }
`;

export const CardBookmark = styled.button `
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 10;
  @media screen and (max-width: 768px){
    top: 8px;
    right: 8px;
  }
`;

export const KeynoteContMark = styled.div `
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
`;


const circleFade = keyframes`
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`

export const CardTypeInner = styled.div `
  position: relative;
  height: 100%;

  @media screen and (max-width: 768px){

  }
`;

export const CardType = styled.div `
  display: inline-block;
  position: absolute;
  top: 14px;
  left: 14px;
  border-radius: 18px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  vertical-align: middle;
  letter-spacing: normal;

  .inner {
    .tag {
      display: inline-block;
      margin-right: 0;
      padding: 8px 16px;
      font-family: 'SamsungOne-700';
      color: #fff;
      line-height: 1.43;
      border-radius: 18px;
      + .time {
        padding-right: 16px;
      }
    }
    .time {
      margin-left: -8px;
      font-family: 'SamsungOne-400';
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.43;
    }
  }

  &.onLive {
    .inner {
      .tag {
        padding: 8px 12px 8px 12px;
        color: #fff;
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
    }
  }
  @media screen and (max-width: 768px){
    top: 12px;
    left: 12px;
    padding: 6px 12px;

    &.onLive {
      padding: 0;
      .inner {
        .tag {
          padding: 6.8px 12px 5.2px 12px;
          line-height: 20px;
          &::before {
            margin-bottom: 0.8px;
          }
        }
      }
    }

    .inner {
      .tag {
        padding: 0;
      }
    }

  }
`;

export const BookmarkTooltip = styled.div `
  opacity: 0;
  visibility: hidden;
  position: absolute;
  right: 31px;
  top: -75px;
  z-index: 99;
  width: 210px;
  padding: 14px 40px 14px 14px;
  border-radius: 8px;
  transform: translateX(50%);
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);
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
    width: 16px;
    height: 16px;
	  background-image: url(${process.env.PUBLIC_URL + '/images/ico-close-grey.svg'});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    &:hover {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1370px){
    right: 100px;
    &:after {
      left : auto;
      right: 24px;
      transform: none;
    }
  }
  @media screen and (max-width: 768px){
    &:after {
      right: 18px;
    }
  }
`;

export const LoadingCard = styled.div `
  border-radius: 14px;
  background-color: #fff;
  @media screen and (max-width: 768px){
    width: 100%;
    margin: 0;
  }
`;

export const LoadingCardInner = styled.div `
  width: 100%;
  box-sizing: border-box;
`;

export const LoadingCardTop = styled.div `
  position: relative;
  background-color: #dbdfe8;
  border-radius: 14px 14px 0 0;
  &:after {
    content: "";
    display: block;
    padding-bottom: 56.25%;
  }
  @media screen and (max-width: 768px){
    &:after {
      padding-bottom: 56.25%;
    }
  }
`;

export const LoadingCardTopInner = styled.div `
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  transition: 0.3s;
  object-fit: cover;
  border-radius: 14px 14px 0 0;
`;

export const LoadingCardIcon = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #000;
    animation-name: blink;
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    & + .dot {
      margin-left: 10px;
    }
    &:nth-of-type(2) {
      animation-delay: .2s;
    }
    &:nth-of-type(3) {
      animation-delay: .4s;
    }
  }
  @keyframes blink {
    0% {
      opacity: .08;
    }
    35% {
      opacity: .2;
    }
    100% {
      opacity: .08;
    }
  }
`;

export const LoadingCardBottom = styled.div `
  width: 100%;
  padding: 24px;
  background-color: #fff;
  border-radius: 0 0 14px 14px;
  box-sizing: border-box;
  div {
    width: 100%;
    height: 18px;
    border-radius: 4px;
    background-color: #f5f7fb;
    & + div {
      margin-top: 4px;
    }
    &:last-of-type {
      width: 50%;
      margin-top: 16px;
      height: 36px;
    }
  }
  @media screen and (max-width: 768px){
    div {
      height: 18px;
      & + div {
        margin-top: 4px;
      }
      &:last-of-type {
        height: 32px;
        margin-top: 16px;
      }
    }
  }
`;
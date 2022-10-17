import styled from 'styled-components'

export const MainSession = styled.div `
  position: relative;
  padding: 0 24px 120px;
  &.is-p4 {
    background-color: #f5f7fb;
  }
  @media screen and (max-width: 1024px){
    padding: 0 24px 60px;
    &.is-p4 {
      padding: 0 24px 40px;
    }
  }
`;

export const MainSessionTop = styled.div `
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 16px 60px;
  &.is-p4 {
    padding: 40px 16px 60px;
  }

  @media screen and (max-width: 768px){
    display: block;
    max-width: 100%;
    padding: 60px 0 40px;
    &.is-p4 {
      padding: 20px 0 40px;
    }
  }
`;

export const MainSessionTitle = styled.h3 `
  min-width: 288px;
  padding-right: 40px;
  font-size: 3em;
  font-family: 'samsungsharpsans-bold';

  @media screen and (max-width: 1024px){
    font-size: 3em;
  }
  @media screen and (max-width: 768px){
    width: 100%;
    margin-bottom: 8px;
    font-size: 20px;
    line-height: 1.15;
  }
`;

export const MainSessionText = styled.div `
  font-size: 16px;
  line-height: 1.38;
  color: #535353;
  @media screen and (max-width: 768px){
    width: 100%;
    font-size: 1em;
    line-height: 1.57;
  }
`;

export const MainSessionInner = styled.div `
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: grid;
  gap: 1.2em;
  @media screen and (min-width: 768px){
    grid-template-columns: repeat(2, 1fr);
    gap: 1.66em;
  }
  @media screen and (max-width: 768px){
    padding: 0;
  }
`;
export const MainSessionCardWrap = styled.div `
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  > img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    transition: 350ms cubic-bezier(0.215, 0.61, 0.355, 1);
    z-index: 0;
  }
  overflow: hidden;

  @media screen and (max-width: 768px){
    border-radius: 12px;
    >img {
      display: none;
    }
  }

`

export const MainSessionCard = styled.div `
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 28.711em;
  border-radius: 20px;

  .CardInner {
    transition: 350ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  /* pc hover style */
  @media screen and (min-width: 768px){
    background-image: none !important;

      &:hover {
        img {
          transform: scale(1.25);
        }
        .Blur,
        .More,
        .Btns
        {
          opacity: 1;
          button:not(.close_btn) {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .CardInner {
          transform: translateY(-10%)
        }

        .Info {
          margin-bottom: 10px;
          transform: scale(0.9);
        }

        .More {
          position: relative;
          min-height: 22px;
          height: auto;
        }

        .Title {
          color: #000;
        }

        .Text {
          transform: translateY(0);
          opacity: 1;
        }

      }

    }

  .MainSessionLink {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
  }

  @media screen and (max-width: 768px){
    height: 22.755em;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 12px;
    >img {
      display: none;
    }
  }
`

export const MainSessionBlur = styled.div `
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(240, 246, 255, 0.4);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  transition: all 430ms cubic-bezier(0.215, 0.61, 0.355, 1);
  opacity: 0;
  z-index: 1;
  @media screen and (max-width: 768px){
    border-radius: 12px;
  }
`;

export const MainSessionCardInner = styled.div `
  position: relative;
  width: 100%;
  padding-bottom: 40px;
  z-index: 1;
  @media screen and (max-width: 768px){
    padding-bottom: 24px;
  }
`;

export const MainSessionCardInfo = styled.div `
  /* position: absolute;
  bottom: 40px; */
  transform: scale(1);
  transform-origin: top left;
  transition: all 390ms cubic-bezier(0.215, 0.61, 0.355, 1);
  /* transform: translateY(74%); */
  z-index: 2;
  @media screen and (max-width: 1024px){
    /* transform: translateY(95%); */
  }
  @media screen and (max-width: 768px){
    bottom: 24px;
    transform: none;
  }
`;

export const MainSessionCardTitle = styled.div `
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 10px;
  padding: 0 40px;
	font-family: 'SamsungOne-700';
  font-size: 28px;
  line-height: 1.33;
  color: #535353;
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    height: 62px;
  }

  @media screen and (max-width: 768px){
    -webkit-line-clamp: 3;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 0 24px;
    font-size: 16px;
    line-height: 1.25;
    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
      height: 60px;
    }
  }
`;

export const MainSessionCardDate = styled.div `
  padding: 0 40px;
	font-family: 'SamsungOne-700';
  font-size: 16px;
  line-height: 1.33;
  color: #2088fd;

  @media screen and (max-width: 768px){
    padding: 0 24px;
    font-size: 1em;
    line-height: 1.43;
  }
`;

export const MainSessionCardOverlay = styled.div `
  opacity: 0;
  height: 0;
  transition: all 450ms cubic-bezier(0.215, 0.61, 0.355, 1);
  @media screen and (max-width: 768px){
    margin: 0;
  }
`;

export const MainSessionSubText = styled.div `
  opacity: 0;
  width: 80%;
  padding: 0 40px;
  font-size: 14px;
  line-height: 1.57;
  color: #000;
  transform: translateY(30%);
  transition: all 450ms cubic-bezier(0.215, 0.61, 0.355, 1);

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const MainSessionCardBtnArea = styled.div `
  position: absolute;
  top: 30px;
  right: 30px;
  opacity: 0;
  z-index: 4;
  transition: opacity .2s ease-in-out;
  
  @media screen and (max-width: 768px){
    top: 14px;
    right: 14px;
    opacity: 1;
  }
`;

export const BookmarkToggle = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: transparent;
  border-radius: 8px;
  background-image: url(${process.env.PUBLIC_URL + '/images/Bookmark_icon.svg'});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  transition: all 600ms cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: translateY(13px);
  opacity: 0;
  &.Bookmark-checked {
    background-image: url(${process.env.PUBLIC_URL + '/images/Bookmark_icon_checked.svg'});
    background-repeat: no-repeat;
    background-position: center center;
  }
  @media screen and (min-width: 769px){
    &:hover:not(.Bookmark-checked) {
      background-image: url(${process.env.PUBLIC_URL + '/images/Bookmark_icon-hover.svg'});
    }
  }
  @media screen and (max-width: 768px){
    width: 34px;
    height: 34px;
    transform: none;
    background-size: 34px 34px;
    opacity: 1;
    transition: none;
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

export const BookmarkTooltip = styled.div `
  opacity: 0;
  visibility: hidden;
  position: absolute;
  right: 24px;
  top: -85px;
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
    right: 75px;
    &:after {
      left : auto;
      right: 43px;
      transform: none;
    }
  }
  @media screen and (max-width: 768px){
    right: 90px;
    &:after {
      right: 20px;
    }
  }
`;

export const LoadingCard = styled.div `
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 28.711em;
  border-radius: 20px;
  background-color: #f3f5f8;
  @media screen and (max-width: 768px){
    height: 320px;
  }
`;

export const LoadingCardInner = styled.div `
  width: 100%;
  padding: 40px;
  @media screen and (max-width: 768px){
    padding: 24px;
  }
`;

export const LoadingCardTop = styled.div `
  position: relative;
  height: 194px;
  @media screen and (max-width: 768px){
    height: 204px;
  }
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
  margin-top: 20px;
  div {
    width: 100%;
    height: 32px;
    border-radius: 4px;
    background-color: rgba(0,0,0,0.04);
    & + div {
      margin-top: 8px;
    }
    &:first-of-type {
      width: 50%;
    }
    &:last-of-type {
      width: 27.559%;
      height: 24px;
      margin-top: 10px;
    }
  }
  @media screen and (max-width: 768px){
    margin-top: 24px;
    div {
      height: 20px;
      & + div {
        margin-top: 4px;
      }
      &:last-of-type {
        display: none;
      }
    }
  }
`;

export const CardWrap = styled.div `
  max-width: 1232px;
  padding: 0 16px;
  margin: 0 auto;
  box-sizing: border-box;
  @media screen and (max-width: 768px){
    padding: 0;
  }
`

export const CardInner = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: -12px;
  @media (max-width: 768px) {
    margin: -8px;
  }
`;
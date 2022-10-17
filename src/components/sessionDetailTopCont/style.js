import styled from 'styled-components'

export const SessionTopWrap = styled.div `

  .KeynoteContLink {
    display: none;
  }
`;

export const SessionDetailTopInner = styled.div `

  /* KeynoteContElement */
  .KeynoteContInner {
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px){
      flex-direction: column-reverse;
    }
  }

  /* video */
  .KeynoteContVideo {
    width: 100%;
    height: 100%;
    order: 0;

    @media screen and (max-width: 768px){
      margin-top: 0;
      margin-bottom: 14px;
      order: 3;
    }

  }

  /* text */
  .KeynoteContText {
    order: 1;
    margin-top: 40px;

    @media screen and (max-width: 1370px){
      &.is-session {
        .bookmark_tooltip {
          right: -10px;
          transform: none;
          &:after {
            left : auto;
            right: 15px;
            transform: none;
          }
        }
      }
    }
    @media screen and (max-width: 768px){
      display: flex;
      flex-direction: column;
      margin-top: 0;
      order: 2;

      /* session page */
      &.is-session {
        .bookmark_tooltip {
          right: auto;
          left: -7px;
          &:after {
            left : 40px;
            right: auto;
            transform: none;
          }
        }
      }
    }
  }

   /* title */
  .KeynoteContTitle {
    flex-wrap: wrap;
		justify-content: space-between;
    .title {
      max-width: 80%;
      font-size: 42px;
    }
    .btn {
      display: flex;
      align-self: flex-start;
      margin-top: 0;
      button {
        margin-left: 10px;
      }
    }
    @media screen and (max-width: 768px){
      .btn {
        margin-top: 17px;
        padding-right: 10px;
        &:before {
          content: '';
          display: block;
          position: absolute;
          top: 0px;
          right: 1px;
          width: 1px;
          height: 26px;
          background-color: #efefef;
        }

        &::after {
          content: '';
            display: block;
            position: absolute;
            top: -7px;
            right: -21px;
            width: 16px;
            height: 50px;
            background: linear-gradient(to left,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);
            z-index: 1
        }
        button {
          width: 26px;
          height: 26px;
          margin-left: 6px;
          &:first-of-type {
            margin-left: 0;
          }
        }
      }

      .title {
        width: 100%;
        max-width: 100%;
        font-size: 20px;
        line-height: 1.4;
      }

    }
  }

   /* desc */
  .KeynoteContDesc {
    display: none;
  }
  .SessionDesc {
    margin-top: 40px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 1.38;
    color: #535353;
    order: 3;


    &.is-appended {
      height: auto;
      overflow: initial;
      text-overflow: initial;
      display: block;
      -webkit-line-clamp: none;
      -webkit-box-orient: vertical;
    }
    @media screen and (max-width: 768px){
      order: 2;
      line-height: 1.57;
      margin-top: 24px;
    }
  }

  .KeynoteContLink {
    display: none;
  }


  .KeynoteContTag {
    display: inline-block;
    vertical-align: middle;
    margin: 5px;
    padding: 8px 16px;
    font-family: 'SamsungOne-600';
    color: #7d838e;
    background-color: #f5f7fb;
    border-radius: 18px;
    @media screen and (max-width: 768px){
      white-space: nowrap;
      -webkit-order: 1;
      -webkit-flex: 0 1 auto;
      margin-top: 0;
      margin-bottom: 0;
      padding: 6px 12px;
      line-height: 20px;
    }
  }
`;

export const SessionRoomLink = styled.div `
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 16px;
    padding-right: 24px;
    font-family: 'SamsungOne-600';
    font-size: 18px;
    color: #1259aa;
    line-height: 24px;
    &:after {
      content: '';
      display: block;
      width: 16px;
      height: 16px;
      margin-left: 8px;
      background-image: url(${process.env.PUBLIC_URL + '/images/ico-arrow-navy.svg'});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center right;
    }
  }
  @media screen and (max-width: 768px){
    a {
      margin-top: 2px;
      font-size: 14px;
      line-height: 22px;
      &:after {
        content: '';
        display: block;
        width: 14px;
        height: 14px;
        margin-left: 4px;
      }
    }
	}
`;


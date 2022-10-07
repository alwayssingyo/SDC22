import styled from 'styled-components'

export const ScheduleContainer = styled.div `
  padding: 80px 0 120px 0;

  .react-tabs__tab-list{
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0 auto;
  }

  .react-tabs__tab{
    width: 50%;
    padding: 20px 0;
    font-family: 'samsungsharpsans-medium';
    font-size: 18px;
    line-height: 1.44;
    color: #9e9e9e;
    border-bottom: 2px solid #efefef;
    text-align: center;
    cursor: pointer;
    &--selected {
      font-family: 'samsungsharpsans-bold';
      color: #1259aa;
      border-bottom: 2px solid #1259aa;
    }
  }

  @media screen and (max-width: 768px){
    .react-tabs__tab{
      padding: 14px 0 13px;
      font-size: 16px;
      &--selected {
        color: #1259aa;
        border-bottom: 2px solid #1259aa;
      }
    }
  }

  @media screen and (max-width: 768px){
    padding: 40px 0 60px 0;
  }
`;

export const ScheduleInner = styled.div `
  max-width: 1280px;
  padding: 0 40px;
  margin: 0 auto;
  box-sizing: border-box;

  @media screen and (max-width: 768px){
    padding: 0 24px;
  }
`;

export const ScheduleTitle = styled.div `
  margin-bottom: 16px;
  font-family: 'samsungsharpsans-bold';
  font-size: 32px;
  font-weight: bold;
  line-height: normal;
  letter-spacing: normal;
  color: #000;

  @media screen and (max-width: 768px){
    margin-bottom: 10px;
    font-size: 20px;
    line-height: 1.4;
  }
`;

export const ScheduleWrap = styled.div `
  display: flex;
  margin-top: 60px;
  .index_text {
    font-family: 'SamsungOne-700';
    font-size: 14px;
    font-weight: bold;
    line-height: 1.43;
    letter-spacing: normal;
    color: #9e9e9e;
  }
  @media screen and (max-width: 768px){
    margin-top: 24px;
  }
`;

export const ScheduleIndex = styled.div `
  display: grid;
  width: 102px;
  grid-template-columns: 102px;
  grid-gap: 33px;
  gap: 33px;
  .index {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: -16px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #efefef;
    }
    &:last-of-type:after {
      content: none;
    }
    .index_text {
      margin-top: 6px;
    }
  }
  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const ScheduleGrid = styled.div `
  display: grid;
  width: 100%;
  grid-template-columns: 70px calc(100% - 136px - 180px) 180px;
  grid-gap: 33px;
  gap: 33px;
  .index {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &:before {
      content: "";
      position: absolute;
      bottom: -16px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #efefef;
    }
    &:after {
      content: "";
      position: absolute;
      bottom: -16px;
      left: 70px;
      width: 100%;
      height: 1px;
      background-color: #efefef;
    }
    &:nth-child(9) {
      &:before, &:after {
        content: none;
      }
    }
    .index_text {
      margin-top: 6px;
    }
  }
  .item_wrap {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      bottom: -16px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #efefef;
    }
    &.item-01 {
      grid-column: span 2;
      .box {
        &:after {
          background-color: #65acfe;
        }
      }
    }
    &.item-02 {
      grid-column: span 2;
      .box {
        &:after {
          background-color: #4ed1e0;
        }
      }
    }
    &.item-03 {
      grid-column: span 2;
    }
    &.item-04 {
      grid-row: span 2;
      &:before {
        content: none;
      }
      .box {
        height: 100%;
        &:after {
          background-color: #65acfe;
        }
      }
    }
    &.item-05 {
      grid-column: span 2;
      .box {
        &:after {
          background-color: #65acfe;
        }
      }
    }
    &.item-06 {
      grid-column: span 2;
    }
    &.item-07 {
      grid-column: span 2;
      &:before {
        content: none;
      }
    }
  }
  .box {
    position: relative;
    padding: 24px 24px 24px 36px;
    border-radius: 10px;
    background-color: #f5f7fb;
    box-sizing: border-box;
		&:after {
			content: "";
      position: absolute;
      top: 16px;
      left: 12px;
      width: 6px;
      height: calc(100% - 32px);
      border-radius: 3px;
      background-color: #8e8fee;
		}
    &.breake {
      background-color: #f5f7fb;
      &:after {
        background-color: #d8dce4;
      }
    }

    .title {
      font-family: 'SamsungOne-700';
      font-size: 20px;
      font-weight: bold;
      line-height: 1.3;
      letter-spacing: normal;
      color: #1e1e1e;
    }
    .time {
      margin-top: 4px;
      font-family: 'SamsungOne-600';
      font-size: 14px;
      font-weight: 600;
      line-height: 1.14;
      letter-spacing: normal;
      color: #535353;
    }
		.link {
      position: relative;
      display: inline-block;
      margin-top: 20px;
			padding-right: 10px;
			font-family: 'SamsungOne-700';
			font-size: 14px;
			font-weight: bold;
			line-height: 1.57;
			letter-spacing: normal;
			color: #1259aa;
      word-break: break-all;
      .link_icon {
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-left: 4px;
        vertical-align: middle;
				background-image: url(${process.env.PUBLIC_URL + '/images/ico-arrow-navy.svg'});
				background-repeat: no-repeat;
				background-size: cover;
				background-position: center;
      }
      &:hover {
  			color: #2088fd;
				text-decoration: underline;
        .link_icon {
				  background-image: url(${process.env.PUBLIC_URL + '/images/ico-arrow-blue.svg'});
        }
			}
		}
  }
  &.on-site {
    .index {
      &.last-index { 
        &:before {
          content: none;
        }
        &:after {
          content: none;
        }
      }
    }
    .item_wrap {
      &.item-03 {
        grid-column: unset;
      }
      &.item-04 {
        grid-row: span 4;
        &:before {
          content: "";
        }
      }
      &.item-05 {
        grid-column: unset;
        .box {
          &:after {
            background-color: #d8dce4;
          }
        }
      }
      &.item-06 {
        grid-column: unset;
        &:before {
          content: "";
        }
      }
      &.item-07 {
        grid-column: unset;
        &:after {
          content: "";
          position: absolute;
          bottom: -16px;
          right: -40px;
          width: 40px;
          height: 1px;
          background-color: #efefef;
        }
        &:before {
          content: "";
        }
        .box {
          &:after {
            background-color: #8e8fee;
          }
        }
      }
      &.item-08 {
        grid-column: span 2;
        .box {
          &:after {
            background-color: #65acfe;
          }
        }
      }
      &.item-09 {
        grid-column: span 2;
        .box {
          &:after {
            background-color: #65acfe;
          }
        }
      }
      &.last-item {
        &:before {
          content: none;
        }
      }
    }
  }
  .index_text {
    font-family: 'SamsungOne-700';
    font-size: 14px;
    font-weight: bold;
    line-height: 1.43;
    letter-spacing: normal;
    color: #9e9e9e;
  }

  @media screen and (max-width: 768px){
    width: calc(100% - 16px);
    grid-template-columns: 0 50% 50%;
    grid-gap: 16px;
    gap: 16px;
    margin-left: -16px;
    .item_wrap{
      &:before {
        content: none;
      }
      &.item-03,
      &.item-05,
      &.item-06 {
        grid-column: span 2;
      }
      &.item-04 {
        grid-row: unset;
        grid-column: span 2;
      }
      &.item-06 {
        .box {
          min-height: auto;
        }
      }
      &.item-07 {
        .is-pc {
          display: none;
        }
      }
    }
    .box {
      padding: 24px 18px 24px 30px;
      .title {
        font-size: 16px;
        line-height: 1.25;
      }
    }
    .index {
      width: 0;
      height: 0;
      overflow: hidden;
    }
    &.on-site {
      .item_wrap {
        &.item-03,
        &.item-04,
        &.item-05,
        &.item-06 {
          grid-column: span 2;
          &::before, &:after {
            content: none;
          }
        }
        &.item-04 {
          grid-row: unset;
          &:before, &:after {
            content: none;
          }
        }
        &.item-07 {
          grid-column: span 2;
          &:before, &:after {
            content: none;
          }
        }
      }
    }
  }
`;

export const ScheduleBanner = styled.div `
  margin-top: 80px;

  @media screen and (max-width: 768px){
    margin-top: 40px;
  }
`;

export const EngagementBox = styled.div `
  position: relative;
  height: 238px;

  @media screen and (max-width: 768px){
    height: auto;
  }
`

export const EngagementBoxBg = styled.div `
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  @media screen and (max-width: 768px){
    border-radius: 14px;
  }
`

export const EngagementBoxInner = styled.div `
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding: 0 40px;
  text-align: left;
  z-index: 2;

  @media screen and (max-width: 768px){
    display: block;
    padding: 24px;
    text-align: left;
    .btn_wrap {
      button {
        width: 100%;
      }
      button + button {
        margin-top: 10px;
        margin-left: 0;
      }
    }
  }
`

export const EngagementTitle = styled.div `
  margin-bottom: 4px;
	font-family: 'SamsungOne-700';
  font-size: 20px;
  font-weight: bold;
  line-height: 1.3;
  letter-spacing: normal;
  color: #fff;
  &.bright {
    color: #000;
  }
  @media screen and (max-width: 768px){
    font-size: 16px;
    line-height: 1.25;
  }
`

export const EngagementText = styled.div `
  max-width: 760px;
  margin-bottom: 40px;
  font-size: 14px;
  line-height: 1.43;
  color: rgba(255, 255, 255, 0.8);
  white-space: pre-line;
  &.bright {
    color: rgba(0, 0, 0, 0.8);
  }
  @media screen and (max-width: 768px){
    max-width: 100%;
    font-size: 1em;
    line-height: 1.43;
  }
`

export const GridInfo = styled.div `
  margin-top: 16px;
  padding: 40px;
  border-radius: 14px;
  background-color: #f5f7fb;
  .inner {
    display: flex;
    flex-wrap : wrap;
    max-height: 516px;
    overflow: hidden;
  }
  &.is-appended {
    .inner {
      max-height: none;
    }
  }
  @media screen and (max-width: 768px){
    display: block;
    padding: 24px;
    .inner {
      max-height: none;
    }
  }
`;

export const GridInfoList = styled.div `
  width: calc(50% - 12px);
  &+& {
    margin-left: 24px;
  }
  .title {
    display: block;
    width: 100%;
    margin-bottom: 16px;
    font-family: 'SamsungOne-700';
    font-size: 20px;
    font-weight: bold;
    line-height: 1.3;
    letter-spacing: normal;
    text-align: left;
    color: #1e1e1e;
    cursor: inherit;
  }
  @media screen and (max-width: 768px){
    width: 100%;
    &+& {
      margin: 24px 0 0 0;
    }
    &.is-margin {
      margin-top: 16px;
      .title {
        display: none;
      }
    }
    .grid_session {
      height: 0;
      overflow: hidden;
    }
    &.is-appended {
      .grid_session {
        height: auto;
        overflow: auto;
      }
      button.title {
       margin-bottom : 16px;
      }
      .info_btn_icon {
        transform: rotate(180deg);
      }
    }
    .title {
      margin-bottom: 10px;
      font-size: 16px;
      line-height: 1.25;
      cursor: pointer;
    }
    button.title {
      position: relative;
      padding-bottom: 8px;
      border-bottom: 1px solid #efefef;
      .info_btn_icon {
        position: absolute;
        right: 0;
        top: 0;
        width: 14px;
        height: 14px;
        background-image: url(${process.env.PUBLIC_URL + '/images/ico-arrow-black.svg'});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
    }
  }
`;

export const GridInfoItem = styled.div `
  position: relative;
  padding: 24px 24px 52px 24px;
  border-radius: 10px;
  background-color: #fff;
  height: 142px;
  box-sizing: border-box;
  &+& {
    margin-top: 24px;
  }
  .item_title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-family: 'SamsungOne-700';
    font-size: 14px;
    font-weight: bold;
    line-height: 1.43;
    letter-spacing: normal;
    color: #1e1e1e;
  }
  .item_desc {
    margin-top: 2px;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #7c7c7c;
    span {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
  .item_link {
    position: absolute;
    bottom: 24px;
    left: 24px;
    display: inline-block;
    margin-top: 10px;
    padding-right: 10px;
    font-family: 'SamsungOne-700';
    font-size: 14px;
    font-weight: bold;
    line-height: 1.57;
    letter-spacing: normal;
    color: #1259aa;
    word-break: break-all;
    .icon {
      display: inline-block;
      width: 14px;
      height: 14px;
      margin-left: 4px;
      vertical-align: middle;
      background-image: url(${process.env.PUBLIC_URL + '/images/ico-arrow-navy.svg'});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
    &:hover {
      color: #2088fd;
      text-decoration: underline;
      .icon {
        background-image: url(${process.env.PUBLIC_URL + '/images/ico-arrow-blue.svg'});
      }
    }
  }
  @media screen and (max-width: 768px){
    height: auto;
    padding: 24px;
    &+& {
      margin-top: 16px;
    }
    .item_title {
      overflow: initial;
      text-overflow: unset;
      display: inline-block;
      -webkit-line-clamp: none;
      -webkit-box-orient: unset;
    }
    .item_desc span {
      overflow: initial;
      text-overflow: unset;
      -webkit-line-clamp: none;
      -webkit-box-orient: unset;
    }
    .item_link {
      position: relative;
      bottom: 0;
      left: 0;
      margin-top: 16px;
    }
  }
`;

export const GridInfoMore = styled.button `
  position: relative;
  display: block;
  margin: 24px auto 0 auto;
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
    top: 2px;
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
    display: none;
  }
`;
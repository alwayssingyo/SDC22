import styled from 'styled-components'

export const SessionRoomNoti = styled.div `
  margin-top: 24px;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  color: #7D838E;
  background-color: #F5F7FB;
  border-radius: 8px;
  @media screen and (max-width: 768px){
    margin-top: 16px;
  }
`

export const SessionRoomSchedule = styled.div `
  position: relative;
  margin-top: -40px;
  @media screen and (max-width: 768px){
    margin-top: -20px;
  }
`

export const SessionRoomScheduleInner = styled.div `
	max-width: 1200px;
	padding: 0 40px 120px;
	margin: 0 auto;
  @media screen and (max-width: 768px){
    padding: 0 24px 60px;
  }
`

export const RoomTitle = styled.div `
  margin-bottom: 40px;
  padding-top: 80px;
	font-family: 'samsungsharpsans-bold';
  font-size: 32px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 768px){
    margin-bottom: 24px;
    padding-top: 40px;
    font-size: 20px;
    line-height: 1.4;
  }
`

export const RoomScheduleWrap = styled.div `
  background-color: #f5f7fb;
  border-radius: 20px;

  &+& {
    margin-top: 24px;
  }

  @media screen and (max-width: 768px){
    border-radius: 14px;

    &+& {
      margin-top: 16px;
    }
  }
`

export const RoomScheduleGrid = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;

  &.w-100 {
   grid-template-columns: none;
  }
  @media screen and (max-width: 768px){
    display: block;
  }
`

export const RoomScheduleInner = styled.div `
  padding: 35px 40px 40px;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 768px){
    padding: 24px;
    .top {
      margin-bottom: 16px;
    }

  }
`

export const RoomScheduleTitle = styled.div `
  font-family: 'SamsungOne-700';
  font-size: 20px;
  @media screen and (max-width: 768px){
    font-size: 16px;
  }
`

export const RoomScheduleTime = styled.div `
  font-family: 'SamsungOne-600';
  color: #9E9E9E;
  @media screen and (max-width: 768px){

  }
`

export const RoomScheduleBox = styled.div `
  background-color: #fff;
  border-radius: 10px;
  
  &:nth-of-type(2) {
    margin-top: 0;
  }

  a {
    display: block;
    padding: 24px;
  }

  .title {
    margin-bottom: 2px;
    font-family: 'SamsungOne-700';
    line-height: 20px;
    color: #000;
  }

  .time {
    color: #7C7C7C;
    line-height: 1.43;
  }

  .speaker {
    margin-bottom: 10px;
    color: #7C7C7C;
    line-height: 1.43;
  }

  span {
    display: inline-block;
    margin-top: 10px;
    padding-right: 18px;
    font-family: 'SamsungOne-700';
    color: #1259aa;
    background-image: url(${process.env.PUBLIC_URL + '/images/ico-arrow-navy.svg'});
    background-repeat: no-repeat;
    background-position: center right;
  }
  @media screen and (max-width: 768px){
    .speaker {
      margin-bottom: 16px;
    }
    span {
      margin-top: 16px;
    }
    &+& {
      margin-top: 16px;
    }

  }
`
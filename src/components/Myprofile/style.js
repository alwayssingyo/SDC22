import styled from "styled-components"

export const MyProfileWrap = styled.div `
  padding: 120px 0 0 0;
  background-color: #F5F7FB;
  @media screen and (max-width: 768px){
    padding: 40px 0 0 0;
  }
`

export const MyProfileWrapInner = styled.div `
   max-width: 1200px;
   margin: 0 auto;
   padding: 0 40px;
  @media screen and (max-width: 768px){
    padding: 0px 24px;
  }
`;
export const MyProfileTitle = styled.div `
  margin-bottom: 40px;
	font-family: 'samsungsharpsans-bold';
  font-size: 32px;
  @media screen and (max-width: 768px){
    margin-bottom: 24px;
    font-size: 20px;
    line-height: 1.4;
  }
`;

export const MyProfileBox = styled.div `
  border-radius: 14px;
  background-color: #fff;
  @media screen and (max-width: 768px){
    border-radius: 0;
    background-color: transparent;
  }
`;

export const MyProfileTop = styled.div `
  display: flex;
  align-items: center;
  padding: 40px 40px 30px;
  @media screen and (max-width: 768px){
    padding: 24px;
    border-radius: 14px;
    background-color: #fff;
  }
`;

export const MyProfileName = styled.div `
	font-family: 'SamsungOne-700';
  font-size: 24px;
  line-height: 1.42;
  @media screen and (max-width: 768px){
    font-size: 14px;
    line-height: 1.57;
  }
`;

export const MyProfileMail = styled.div `
	font-family: 'SamsungOne-700';
	font-size: 16px;
  line-height: 1.5;
  color: #535353;
  @media screen and (max-width: 768px){
    font-size: 14px;
    line-height: 1.57;
  }
`;

export const MyProfileImg = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
	width: 100px;
  height: 100px;
  margin-right: 24px;
  border-radius: 100%;
  background-image: url(${process.env.PUBLIC_URL + '/images/ico_myprofile.png'});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  img {
    display: block;
    width: 100%;
  }
  @media screen and (max-width: 768px){
    width: 60px;
    height: 60px;
    margin-right: 16px;
  }
`;

export const MyProfileDetail = styled.div `
  position: relative;
  padding: 10px 40px 24px 40px;
  .btn-edit{
    position: absolute;
    top: 4px;
    right: 40px;
    min-width: 100px;
    padding: 18px 0;
  }

  table {
    thead {
      font-size: 20px;
      line-height: 1.3;
      font-family: 'SamsungOne-700';
      >span {
        display: inline-block;
        margin-bottom: 20px;
      }
    }
    tbody {
      tr {
        border-bottom: 1px solid #efefef;

        &:first-of-type {
          border-top: 1px solid #000;
        }
        &:last-of-type {
          border-bottom: none;
        }
      }
      th {
        padding: 16px;
        text-align: left;
        vertical-align: top;
        font-family: "SamsungOne-700";
        font-size: 16px;
        font-weight: bold;
        line-height: 1.5;
        color: #535353;
      }
      td {
        padding: 16px;
        font-family: 'SamsungOne-400';
        font-size: 16px;
        line-height: 1.5;
        color: #535353;
        text-align: left;
        span {
          display: block;
          &+ span {
           margin-top : 8px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px){
    margin-top: 16px;
    padding: 24px 24px 80px;
    border-radius: 14px;
    background-color: #fff;
    .btn-edit{
      top: auto;
      left: 50%;
      bottom: 24px;
      width: calc(100% - 48px);
      transform: translateX(-50%);
    }

    .col {
      width: 100%;
      col {
        display: block;
        width: 100%;
      }
    }
    table {
      thead {
        display: block;
        font-size: 16px;
        > span {
          margin-bottom: 10px;
        }
      }

      tbody {
        
        tr {
          display: block;
          border: none;
          &:first-of-type {
            padding-top: 20px;
            border-top: 1px solid #000;
          }
          &+tr {
            margin-top: 16px;
          }
        }
        th {
          display: block;
          width: 100%;
          padding: 0;
          color: #535353;
          font-size: 14px;
          font-weight: bold;
          line-height: 1.43;
        }
        td {
          display: block;
          width: 100%;
          padding: 2px 0;
          font-size: 14px;
          line-height: 1.43;
          span {
            &+ span {
              margin-top: 2px;
            }
          }
        }
      }
    }
  }
`;
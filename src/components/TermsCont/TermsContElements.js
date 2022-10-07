import styled from 'styled-components'

export const TermsContContainer = styled.div `
  padding: 120px 0;


  @media screen and (max-width: 768px){
    padding: 40px 0 ;
  }
`;

export const TermsContInner = styled.div `
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  padding: 0 40px;
  margin: 0 auto;
  box-sizing: border-box;

  @media screen and (max-width: 768px){
    flex-direction: column;
    padding: 0 24px;
  }
`;

export const CookieInner = styled.div `
  max-width: 1280px;
  padding: 0 40px;
  margin: 0 auto;
  box-sizing: border-box;
  @media screen and (max-width: 768px){
    padding: 0 24px;
  }
`;

export const TermsContWrap = styled.div `
  width: calc(100% - 278px);
  @media screen and (max-width: 768px){
    order: 2;
    width: 100%;
  }
`;

export const TermsContTop = styled.div `
  margin-bottom: 60px;
  .space {
    margin-top: 30px;
  }
  @media screen and (max-width: 768px){
    margin-bottom: 40px;
    .space {
      margin-top: 24px;
    }
  }
`;

export const TermsContTitle = styled.div `
  font-family: 'samsungSharpSans-bold';
  font-size: 42px;
  line-height: 1.43;
  letter-spacing: normal;
  color: #000;
  @media screen and (max-width: 768px){
    font-size: 20px;
    line-height: 1.4;
  }
`;

export const CookieTitle = styled.div `
  font-family: 'samsungSharpSans-bold';
  font-size: 42px;
  line-height: 1.43;
  letter-spacing: normal;
  color: #000;
  @media screen and (max-width: 768px){
    font-size: 20px;
    line-height: 1.4;
  }
`;

export const TermsContVersion = styled.div `
  margin: 40px 0 24px;
  font-size: 16px;
  line-height: 24px;
  color: #535353;
  span {
    padding-right: 4px;
    font-family: 'SamsungOne-700';
  }
  @media screen and (max-width: 768px){
    margin: 24px 0 14px;
    font-size: 14px;
    line-height: 1.57;
  }
`;

export const TermsDropdownGroup = styled.div `
  display: flex;
  margin: 24px 0 40px;
  .dropdown {
    min-width: 218px;
    max-width: 260px;
    + .dropdown {
      margin-left: 14px;
      min-width: 312px;
      max-width: 312px;
    }
  }
  @media screen and (max-width: 768px){
    display: block;
    margin: 16px 0 24px;
    .dropdown {
      min-width: 100%;
      max-width: 100%;
      + .dropdown {
        margin-top: 10px;
        margin-left: 0;
        min-width: 100%;
        max-width: 100%;
      }
    }
  }
`

export const TermsContDesc = styled.div `
  margin-top: 10px;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #535353;
  .space {
    margin-top: 12px;
  }
  .space-large {
    margin-top: 20px;
  }
  strong {
    font-weight: bold;
    font-family: 'SamsungOne-700';
  }
  a {
    color: #1259aa;
    &:hover {
      color: #2088fd;
      text-decoration: underline;
    }
  }
  @media screen and (max-width: 768px){
    font-size: 14px;
    line-height: 1.57;

    .space-large {
      margin-top: 16px;
    }
  }
`;

export const TermsContLink = styled.div `
  margin-top: 10px;
  a {
    padding-right: 18px;
    color: #1259aa;
    font-size: 14px;
    line-height: 1.57;
    font-family: 'SamsungOne-700';
    background-image: url(${process.env.PUBLIC_URL + '/images/ico-download.png'});
    background-position: right center;
    background-size: 14px 14px;
    background-repeat: no-repeat;
    transition: all 0.3s;
    &:hover {
      color: #2088fd;
      background-image: url(${process.env.PUBLIC_URL + '/images/ico-download-hover.png'});
    }
  }
  @media screen and (max-width: 768px){
    width: 100%;
    button {
      width: 100%;
    }
  }
`;

export const TermsContItem = styled.div `
  font-size: 14px;
  font-weight: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #535353;
  &+& {
    margin-top: 40px;
  }
  .space {
    margin-top: 12px;
  }

  .space-large {
    margin-top: 20px;
  }
  .text_link {
    color: #1259aa;
    &:hover {
      color: #2088fd;
      text-decoration: underline;
    }
  }
  strong {
    font-style: italic;
  }

  em {
    font-family: 'SamsungOne-700';
    font-weight: bold;
  }

  .italic {
    font-style: italic;
    padding-bottom: 4px;
  }

  .color-light {
    color: #7c7c7c;
  }

  .space + .color-light {
    margin-top: 4px;
  }

  @media screen and (max-width: 768px){
    .space-large {
      margin-top: 16px;
    }

    .hide-m {
      display: none;
    }
  }
`;

export const TermsItemTitle = styled.div `
  margin-bottom: 6px;
  font-family: 'SamsungOne-700';
  font-size: 20px;
  font-weight: bold;
  line-height: 1.3;
  letter-spacing: normal;
  color: #000;
  @media screen and (max-width: 768px){
    font-size: 16px;
    line-height: 1.25;
  }

`;

export const TermsItemSubTitle = styled.div `
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: 'SamsungOne-600';
  font-size: 14px;
  font-weight: bold;
  line-height: 1.43;
  letter-spacing: normal;
  color: #000;
  @media screen and (max-width: 768px){
    margin-top: 16px;
    margin-bottom: 6px;
  }

`;

export const TermsItemP = styled.div `
  position: relative;
  padding-left: 12px;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #7c7c7c;
  &:before {
    content: "";
    position: absolute;
    top: 7px;
    left: 0;
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background-color: #000;
  }
  &+& {
    margin-top: 10px;
  }
`;

export const TermsItemPtagTitle = styled.div `
  margin-bottom: 4px;
  font-family: 'SamsungOne-700';
  color: #000;
`;


export const TermsContListLoman = styled.ul `
  margin-top: 12px;
  li {
    position: relative;
    padding-left: 28px;
    color: #7C7C7C;

    + li {
      margin-top: 10px
    }
    span {
      position: absolute;
      left: 0;
      top: 0;
      font-weight: bold;
      font-family: 'SamsungOne-700';
      color: #4e4e4e;
    }
  }
`;

export const TermsContListNumber = styled.ul `
  margin-top: 12px;
  padding-left: 14px;
  li {
    position: relative;
    padding-left: 4px;
    color: #7C7C7C;
    list-style: auto;

    + li {
      margin-top: 10px
    }
    ::marker {
      font-weight: bold;
      font-family: 'SamsungOne-700';
      color: #4e4e4e;
    }
  }
`;

export const TermsContListAlpha = styled.ul `
  margin-top: 12px;
  padding-left: 14px;
  li {
    position: relative;
    padding-left: 4px;
    color: #7C7C7C;
    list-style: lower-alpha;

    + li {
      margin-top: 10px
    }
    ::marker {
      font-weight: bold;
      font-family: 'SamsungOne-700';
      color: #4e4e4e;
    }
  }
`;

export const TermsItemLink = styled.a `
  display: inline-block;
  margin-top: 4px;
  font-size: 14px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: normal;
  color: #1259aa;
  transition: all 0.3s;
  &:hover {
    color: #2088fd;
    text-decoration: underline;
  }
`;

export const TermsContToc = styled.div `
  position: relative;

  @media screen and (max-width: 768px){
    order: 1;
  }
`;

export const TermsTocInner = styled.div `
  position: sticky;
  top: 125px;
  display: inline-block;
  width: 218px;
  box-sizing: border-box;
  max-height: calc(100vh - 250px);
  overflow-y: auto;
  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const TermsTocItem = styled.button `
  position: relative;
  width: 100%;
  padding-left: 20px;
  border-left: 2px solid #f5f7fb;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #7c7c7c;
  text-align: left;
  &:before{
    content: "";
    position: absolute;
    top: -15px;
    left: -2px;
    width: 2px;
    height: 15px;
    background-color: #f5f7fb;
    z-index: 10;
  }
  &.is-active {
    font-family: 'SamsungOne-700';
    font-weight: bold;
    color: #000;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: -2px;
      width: 2px;
      height: 100%;
      background-color: #2088fd;
      z-index: 10;
    }
  }
  &+& {
    margin-top: 14px;
  }
`;

export const TermsTable = styled.table `
  margin-top: 12px;
  caption {
    font-family: 'SamsungOne-700';
    color: #000;
    text-align: left;
    .desc {
      margin: 4px 0 20px 0;
      font-family: 'SamsungOne-400';
      font-size: 14px;
      font-weight: normal;
      line-height: 1.43;
      color: #7c7c7c;
    }
  }

  tr {
    border-bottom: 1px solid  #efefef;
  }

  th {
    padding: 16px;
    font-family: 'SamsungOne-700';
    border-top: 1px solid #000;
    text-align: left;
    vertical-align: top;
  }

  tbody {
    th {
      border-top: 1px solid #efefef;
    }
  }

  th,
  td {
    color: #4e4e4e;
    border-left: 1px solid #efefef;

    &:first-child {
      padding-left: 0;
      border-left: 0;
    }
  }

  td {
    padding: 16px 0 16px 16px;
    ul {
      li {
        span {
          display: inline-block;
          font-size: 16px;
        }
      }
    }
  }

  + table {
    margin-top: 20px;
  }
  @media screen and (max-width: 768px){
    + table {
      margin-top: 16px;
    }

    th {
      padding-left: 6px;
      padding-right: 6px;
    }

    td {
      padding-left: 6px;
      padding-right: 6px;
    }
  }
`;

export const TermsExtra = styled.table `
  margin-top: 20px;
  .title {
    font-family: 'SamsungOne-700';
    font-size: 14px;
    font-weight: bold;
    line-height: 1.43;
    letter-spacing: normal;
    color: #000;
  }
  .desc {
    margin-top: 4px;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #7c7c7c;
  }
`;
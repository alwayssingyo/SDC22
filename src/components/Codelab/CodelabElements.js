import styled from "styled-components";

export const CodelabContainer = styled.div `
  width: calc(50% - 24px);
  margin: 12px;
  
  @media screen and (max-width: 768px){
    width: 100%;
    margin: 8px;
  }
`;

export const CodelabInner = styled.div `
  display: flex;
  padding: 24px;
  border-radius: 14px;
  background-color: #fff;
  transition: 0.3s ease-in-out;
  
  @media screen and (min-width: 769px){
    &:hover {
      box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.06);
      .card_img img {
        transform: translate(-50%, -50%) scale(1.06);
      }
    }
  }

  @media screen and (max-width: 768px){
    display: block;
  }
`;

export const CodelabImg = styled.div `
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 14px;
  overflow: hidden;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    transition: 0.3s;
    object-fit: cover;
  }

  @media screen and (max-width: 768px){
    width: 100%;
    height: 48.888vw;
    margin-bottom: 18px;
  }
`;

export const CodelabCont = styled.div `
  width: calc(100% - 200px - 24px);
  padding: 16px 0 16px 24px;

  @media screen and (max-width: 768px){
    width: 100%;
    padding: 0;
  }
`;

export const CodelabTitle = styled.div `
  height: 52px;
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
    height: 40px;
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const CodelabDesc = styled.div `
  height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-top: 6px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #535353;
  @media screen and (max-width: 768px){
    height: 40px;
    -webkit-line-clamp: 2;
  }
`;

export const CodelabLink = styled.a `
  position: relative;
  display: inline-block;
  margin-top: 20px;
  padding-right: 18px;
  font-family: 'SamsungOne-700';
  font-size: 14px;
  font-weight: bold;
  line-height: 1.57;
  letter-spacing: normal;
  color: #1259aa;
  transition: color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 3px;
    width: 14px;
    height: 14px;
    background-image: url(${process.env.PUBLIC_URL + '/images/ico-arrow-navy.svg'});
  }
  &:hover {
    color: #2088fd;
    text-decoration: underline;
    &:after {
      background-image: url(${process.env.PUBLIC_URL + '/images/ico-arrow-blue.svg'});
    }
  }
  @media screen and (max-width: 768px){
    margin-top: 12px;
  }
`;
import styled from 'styled-components'

export const TextInputWrap = styled.div `
  position: relative;

  @media screen and (max-width: 1024px){
  
  }
`;

export const TextInputLabel = styled.label `
  position: relative;
  display: inline-block;
  margin-bottom: 8px;
  font-family: 'SamsungOne-700';
  font-size: 16px;
  line-height: 1.5;
  color: #4E4E4E;
  &.is-essential {
    &:after {
      content: "*";
      position: absolute;
      top: 0;
      right: -12px;
      font-size: 16px;
      font-weight: normal;
      line-height: 1.5;
      letter-spacing: -0.16px;
      color: #ec2000;
    }
  }


  @media screen and (max-width: 1024px){
    font-size: 1em;
    line-height: 1.43;
  }
`;

export const TextInputArea = styled.div `
  position: relative;
  width: 100%;
  @media screen and (max-width: 1024px){
  
  }
`;

export const TextInput = styled.input `
  display: block;
  width: 100%;
  padding: 13px 16px;
	font-family: 'SamsungOne-400';
  font-size: 16px;
  line-height: 1.38;
  color: #000;
  border: solid 1px #f5f7fb;
  background-color: #f5f7fb;
  border-radius: 8px;
  box-sizing: border-box;
  &::placeholder {
    color: #9e9e9e;
  }
  &:focus{
    border: solid 1px #2088fd;
    &::placeholder {
      opacity: 0;
    }
  }
  &:disabled{
    background-color: ${props => props.disabled ? 'rgba(0,0,0,0.05)' : '#f5f7fb'};
  }
  &.is-error {
    padding: 13px 46px 13px 16px;
    border: solid 1px #e34a5d;
    background-image: url(${process.env.PUBLIC_URL + '/images/ico-error.svg'});
    background-repeat: no-repeat;
    background-size: 24px 24px;
    background-position: right 10px center;
    &:focus{
      border: solid 1px #e34a5d;
      &::placeholder {
        opacity: 0;
      }
    }
  }

  @media screen and (max-width: 768px){
    font-size: 1em;
    line-height: 1.57;
    border: solid 1px #dcdcdc;
    background-color: #fff;
    &::placeholder {
      color: #9e9e9e;
    }
  }
`;

export const TextInputError = styled.span `
  font-size: 14px;
  font-weight: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: #e34a5d;
`;
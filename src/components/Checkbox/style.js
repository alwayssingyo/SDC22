import styled from 'styled-components'

export const CheckboxItem = styled.span `
  position: relative;
  display: inline-block;
`;

export const CheckboxInput = styled.input `
  opacity: 0;
  position: absolute;
  margin: 0;
  z-index: -1;
  width: 0;
  height: 0;
  overflow: hidden;
  left: 0;
  pointer-events: none;
  visibility:hidden;
  + label {
    &:before {
      display: ${props => props.checked ? 'none' : 'inline-block'};
    }
    &:after {
      display: ${props => props.checked ? 'inline-block' : 'none'};
    }
  }
`;

export const Label = styled.label `
  display: inline-block;
  height: ${props => props.label ? 'auto' : '24px'};
  padding-left: ${props => props.label ? '32px' : '24px'};
  font-size: 16px;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0;
    width: 24px;
    height: 24px;
    background-image: url( ${process.env.PUBLIC_URL + '/images/ico-checkbox.svg'} );
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
  }

  &:after {
    display: none;
    content: "";
    position: absolute;
    top: 0px;
    left: 0;
    width: 24px;
    height: 24px;
    background-image: url( ${process.env.PUBLIC_URL + '/images/ico-checkbox-active.svg'} );
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
  }
`;
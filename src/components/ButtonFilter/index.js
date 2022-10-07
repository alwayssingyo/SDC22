import React, { useState } from 'react';
import styled from "styled-components";

const ButtonFilterItem = styled.button `
  display: inline-block;
  padding: 7px 16px;
  margin: 5px;
  border-radius: 18px;
  border: 1px solid #efefef;
  font-family: 'SamsungOne-600';
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: normal;
  color: #535353;
  box-sizing: border-box;
  &.is-active {
    padding: 7px 16px;
    border: solid 1px #2088fd;
    color: #2088fd;
  }
`;

const ButtonFilter = ( {item} )=>{
  const [ check, setCheck ] = useState(false);

	const checkHandler = ()=>{
    setCheck(!check);
	}

  return (
    <ButtonFilterItem className={check ? 'is-active' : null } onClick={checkHandler}>{item}</ButtonFilterItem>
  );
}

export default ButtonFilter;
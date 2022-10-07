import React from 'react';
import styled from 'styled-components'

const DetailInner = styled.div `
	margin-top: 64px;
  @media screen and (max-width: 768px){
		margin-top: 56px;
	}
`;

const DetailContainer = ({ children })=>{
	return (
		<DetailInner>
			{children}
		</DetailInner>
  )
}

export default DetailContainer;
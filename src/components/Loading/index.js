import React from 'react';
import { LoadingContainer, LoadingInner, LoadingItem } from './LoadingElements';

const Loading = ()=>{
	return (
    <LoadingContainer>
      <LoadingInner>
        <LoadingItem></LoadingItem>
      </LoadingInner>
    </LoadingContainer>
	)
}

export default Loading;
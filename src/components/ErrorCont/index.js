import React from "react";
import{ErrorWrap,ErrorWrapInner, ErrorNum, ErrorTitle, ErrorDesc} from './ErrorContElement';
import ButtonLink from '../ButtonLink';

const ErrorCont = (props) =>{
  return(
    <ErrorWrap>
      <ErrorWrapInner>
        <ErrorNum>{props.num}</ErrorNum>
        <ErrorTitle>{props.errorTitle}</ErrorTitle> 
        <ErrorDesc dangerouslySetInnerHTML={{ __html : props.errorDesc }}/>
        <ButtonLink url="/error" color="black" size="medium">Back to Previous Page</ButtonLink>
      </ErrorWrapInner>
    </ErrorWrap>
  )
}

export default ErrorCont
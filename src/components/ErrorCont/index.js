import React from "react";
import * as S from './style';
import ButtonLink from '../ButtonLink';

const ErrorCont = (props) =>{
  return(
    <S.ErrorWrap>
      <S.ErrorWrapInner>
        <S.ErrorNum>{props.num}</S.ErrorNum>
        <S.ErrorTitle>{props.errorTitle}</S.ErrorTitle> 
        <S.ErrorDesc dangerouslySetInnerHTML={{ __html : props.errorDesc }}/>
        <ButtonLink url="/error" color="black" size="medium">Back to Previous Page</ButtonLink>
      </S.ErrorWrapInner>
    </S.ErrorWrap>
  )
}

export default ErrorCont
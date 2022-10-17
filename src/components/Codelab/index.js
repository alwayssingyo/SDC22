import React from 'react';
import * as S from './style';

const Codelab = ({ id, title, discription, image, link }) => {
  return(
		<S.CodelabContainer>
      <S.CodelabInner>
        <S.CodelabImg className="card_img">
          <img src={image} alt={discription}></img>
        </S.CodelabImg>
        <S.CodelabCont>
          <S.CodelabTitle>{title}</S.CodelabTitle>
          <S.CodelabDesc>{discription}</S.CodelabDesc>
          <S.CodelabLink href={link} target="_blank">Go to Code Lab</S.CodelabLink>
        </S.CodelabCont>
      </S.CodelabInner>
    </S.CodelabContainer>
  )
}

export default Codelab;
import React from 'react';
import * as S from './style';

const CardSession = ({ id, image, title, discription, tag, type, link, loading}) => {
  
  return(
		<S.Card className={loading ? 'loading' : ''}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <S.CardImage className='card_img'>
          <img src={image} alt={discription}></img>
        </S.CardImage>

        <S.CardInfo className='Text'>
          <S.CardTagWrap>
            <S.CardType>{type}</S.CardType>
            <S.CardTag>{tag}</S.CardTag>
          </S.CardTagWrap>
          <S.CardTitle>{title}</S.CardTitle>
          <S.CardText>{discription}</S.CardText>
        </S.CardInfo>
      </a>
		</S.Card>
  )
}

export default CardSession;
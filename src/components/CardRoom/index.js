import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const CardRoom = ({ link, image, title, time, live }) => {
  return(
		<S.Card className='card_item'>
      <Link to={"/" + link}>
        <S.CardType className={ live ? 'on-live card_type' : 'card_type' }>
          <S.CardTypeInner className='inner'>
            <span className='tag'>LIVE</span>
          </S.CardTypeInner>
        </S.CardType>
        <S.CardImage className='card_img'>
          <img src={image} alt=""></img>
          <S.CardText>
            <S.CardTitle>{title}</S.CardTitle>
            <S.CardTime>{time}</S.CardTime>
          </S.CardText>
        </S.CardImage>
        <S.CardBtn className='card_btn'>View More</S.CardBtn>
      </Link>
		</S.Card>
  )
}

export default CardRoom;
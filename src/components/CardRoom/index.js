import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImage, CardText, CardTitle, CardTime, CardType, CardTypeInner, CardBtn } from './CardRoomElements';

const CardRoom = ({ link, image, title, time, live }) => {
  return(
		<Card className='card_item'>
      <Link to={"/" + link}>
        <CardType className={ live ? 'on-live card_type' : 'card_type' }>
          <CardTypeInner className='inner'>
            <span className='tag'>LIVE</span>
          </CardTypeInner>
        </CardType>
        <CardImage className='card_img'>
          <img src={image} alt=""></img>
          <CardText>
            <CardTitle>{title}</CardTitle>
            <CardTime>{time}</CardTime>
          </CardText>
        </CardImage>
        <CardBtn className='card_btn'>View More</CardBtn>
      </Link>
		</Card>
  )
}

export default CardRoom;
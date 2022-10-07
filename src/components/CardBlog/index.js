import React from 'react';
import { Card, CardImage, CardInfo, CardTagWrap, CardType, CardTag, CardTitle, CardText } from './CardBlogElements';

const CardSession = ({ id, image, title, discription, tag, type, link, loading}) => {
  
  return(
		<Card className={loading ? 'loading' : ''}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <CardImage className='card_img'>
          <img src={image} alt={discription}></img>
        </CardImage>

        <CardInfo className='Text'>
          <CardTagWrap>
            <CardType>{type}</CardType>
            <CardTag>{tag}</CardTag>
          </CardTagWrap>
          <CardTitle>{title}</CardTitle>
          <CardText>{discription}</CardText>
        </CardInfo>
      </a>
		</Card>
  )
}

export default CardSession;
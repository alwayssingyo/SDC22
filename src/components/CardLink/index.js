import React from 'react';
import { Card, CardImage, VideoIcon, CardInfo, CardTitleVideo, CardText, CardLink } from '../CardSession/CardSessionElements';

// id : 아이디 
// col : card 너비
// border : border 유무
// image : 이미지 URL
// title : 제목
// discription : 내용
// video : 비디오인 경우
// link : 이동할 링크
const CardSession = ({ id, col, border, image, title, discription, video, link  }) => {
  return(
		<Card className={col} border={border} video={video}>
      <CardLink href={link} target="_blank" rel="noreferrer">
        <CardImage className={ video ? 'card_img has-dim' : 'card_img' }>
          {  video ? <VideoIcon></VideoIcon> : null}
          <img src={image} alt={discription}></img>
        </CardImage>

        <CardInfo className='Text' video={video}>
          <CardTitleVideo className='Title'>{title}</CardTitleVideo>
          <CardText>{discription}</CardText>
        </CardInfo>
      </CardLink>
		</Card>
  )
}

export default CardSession;
import React from 'react';
import * as S from '../CardSession/style';

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
		<S.Card className={col} border={border} video={video}>
      <S.CardLink href={link} target="_blank" rel="noreferrer">
        <S.CardImage className={ video ? 'card_img has-dim' : 'card_img' }>
          {  video ? <S.VideoIcon></S.VideoIcon> : null}
          <img src={image} alt={discription}></img>
        </S.CardImage>

        <S.CardInfo className='Text' video={video}>
          <S.CardTitleVideo className='Title'>{title}</S.CardTitleVideo>
          <S.CardText>{discription}</S.CardText>
        </S.CardInfo>
      </S.CardLink>
		</S.Card>
  )
}

export default CardSession;
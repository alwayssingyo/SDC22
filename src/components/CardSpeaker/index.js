import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const CardSpeaker = ({ id, personImage, title, discription, slide, border, listYn, phase4, loading }) => {
  return(
		<S.Card className={ slide ? 'is-slide' : loading ? 'loading' : null } border={border} listYn={listYn} phase4={phase4}>
			{
				loading 
				? <S.LoadingCard>
						<S.LoadingCardInner>
							<S.LoadingCardTop listYn={listYn}>
								<S.LoadingCardTopInner>
									<S.LoadingCardIcon>
										<span className='dot'></span>
										<span className='dot'></span>
										<span className='dot'></span>
									</S.LoadingCardIcon>
								</S.LoadingCardTopInner>
							</S.LoadingCardTop>
							<S.LoadingCardBottom listYn={listYn}>
								<div></div>
								<div></div>
							</S.LoadingCardBottom>
						</S.LoadingCardInner>
					</S.LoadingCard>
				: <>
						{/* 퍼블 : 동일한 스피터 디테일 페이지로 이동시킴 */}
						<Link to={"/speakerDetail"}>
						{/* <Link to={"/speakers/" +id}> */}
							<S.CardImage className='card_img' listYn={listYn}>
								<img src={personImage === '' ? process.env.PUBLIC_URL + '/images/img-speaker-default.png' : personImage} alt={discription}></img>
							</S.CardImage>
							<S.CardInfo className='Text' listYn={listYn}>
								<S.CardTitle listYn={listYn}>{title}</S.CardTitle>
								<S.CardText listYn={listYn}>{discription}</S.CardText>
							</S.CardInfo>
						</Link>
					</>
			}
		</S.Card>
  )
}

export default CardSpeaker;
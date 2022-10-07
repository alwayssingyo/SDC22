import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImage, CardInfo, CardTitle, CardText, LoadingCard, LoadingCardInner, LoadingCardTop, LoadingCardTopInner, LoadingCardIcon, LoadingCardBottom} from './CardSpeakerElements';

const CardSpeaker = ({ id, personImage, title, discription, slide, border, listYn, phase4, loading }) => {
  return(
		<Card className={ slide ? 'is-slide' : loading ? 'loading' : null } border={border} listYn={listYn} phase4={phase4}>
			{
				loading 
				? <LoadingCard>
						<LoadingCardInner>
							<LoadingCardTop listYn={listYn}>
								<LoadingCardTopInner>
									<LoadingCardIcon>
										<span className='dot'></span>
										<span className='dot'></span>
										<span className='dot'></span>
									</LoadingCardIcon>
								</LoadingCardTopInner>
							</LoadingCardTop>
							<LoadingCardBottom listYn={listYn}>
								<div></div>
								<div></div>
							</LoadingCardBottom>
						</LoadingCardInner>
					</LoadingCard>
				: <>
						{/* 퍼블 : 동일한 스피터 디테일 페이지로 이동시킴 */}
						<Link to={"/speakerDetail"}>
						{/* <Link to={"/speakers/" +id}> */}
							<CardImage className='card_img' listYn={listYn}>
								<img src={personImage === '' ? process.env.PUBLIC_URL + '/images/img-speaker-default.png' : personImage} alt={discription}></img>
							</CardImage>
							<CardInfo className='Text' listYn={listYn}>
								<CardTitle listYn={listYn}>{title}</CardTitle>
								<CardText listYn={listYn}>{discription}</CardText>
							</CardInfo>
						</Link>
					</>
			}
		</Card>
  )
}

export default CardSpeaker;
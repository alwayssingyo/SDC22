import React from 'react';
import * as S from './style';
import { MainSpeakers } from '../../data/MainSlideData';
import '../MainSlide/style-slide.scss';
import Card from '../CardSpeaker';

const Speaker = () => {
  return (
		<S.SpeakerContainer>
			<S.SpeakerInner>
				<S.SpeakerTitle>Keynote Speakers</S.SpeakerTitle>
				<S.CardWrap>					
					<S.CardInner>
						{
							MainSpeakers.map((item,idx)=>(
								<Card key={idx} id={item.id} title={item.title} discription={item.discription} personImage={item.personImage}/>
							))
						}
					</S.CardInner>
				</S.CardWrap>
			</S.SpeakerInner>
		</S.SpeakerContainer>
	)
}

export default Speaker;
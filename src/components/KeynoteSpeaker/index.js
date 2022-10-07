import React from 'react';
import { SpeakerContainer, SpeakerInner, SpeakerTitle, CardWrap, CardInner } from './KeynoteSpeakerElements';
import { MainSpeakers } from '../../data/MainSlideData';
import '../MainSlide/style.scss';
import Card from '../CardSpeaker';

const Speaker = () => {
  return (
		<SpeakerContainer>
			<SpeakerInner>
				<SpeakerTitle>Keynote Speakers</SpeakerTitle>
				<CardWrap>					
					<CardInner>
						{
							MainSpeakers.map((item,idx)=>(
								<Card key={idx} id={item.id} title={item.title} discription={item.discription} personImage={item.personImage}/>
							))
						}
					</CardInner>
				</CardWrap>
			</SpeakerInner>
		</SpeakerContainer>
	)
}

export default Speaker;
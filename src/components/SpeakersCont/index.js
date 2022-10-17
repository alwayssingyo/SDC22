import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as S from './style';
import { SpeakersData } from '../../data/SpeakersData';
import CardSpeaker from '../CardSpeaker';

const SpeakersCont = ()=>{

	//card interaction
	const tl = useRef();
	const tl2 = useRef();
	const cardRef = useRef();
	const cardRef2 = useRef();
	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		ScrollTrigger.matchMedia({
			"(min-width: 768px)": function() {

				const cardArray = gsap.utils.toArray(cardRef.current.children);
				cardArray.forEach( el => {
					tl.current = gsap.timeline({
						scrollTrigger: {
							trigger: el,
							start: "0 98%",
							scrub: true,
							onEnter: () => {
								el.classList.add('is-active'); 
							},
						}
					})
				});

				const cardArray2 = gsap.utils.toArray(cardRef2.current.children);
				cardArray2.forEach( el => {
					tl2.current = gsap.timeline({
						scrollTrigger: {
							trigger: el,
							start: "0 100%",
							scrub: true,
							onEnter: () => {
								el.classList.add('is-active');
							},
						}
					})
				});

			},
			"(max-width: 767px)": function() {

				const cardArray = gsap.utils.toArray(cardRef.current.children);
				cardArray.forEach( el => {
					tl.current = gsap.timeline({
						scrollTrigger: {
							trigger: el,
							start: "0 100%",
							scrub: true,
							onEnter: () => {
								el.classList.add('is-active'); 
							},
						}
					})
				});

				const cardArray2 = gsap.utils.toArray(cardRef2.current.children);
				cardArray2.forEach( el => {
					tl2.current = gsap.timeline({
						scrollTrigger: {
							trigger: el,
							start: "top 100%",
							scrub: true,
							onEnter: () => {
								el.classList.add('is-active');
							},
						}
					})
				});

			}
		});

		return () => {
			ScrollTrigger.getAll().forEach(t => t.kill());
			tl.current.kill();
			tl2.current.kill();

			ScrollTrigger.clearMatchMedia();
		}
	}, [])

	return (
    <S.SpeakersContainer>
      <S.SpeakersInner>

        <S.SpeakersSection>
          <S.SpeakersTitle>Keynote Speakers</S.SpeakersTitle>
          <S.SpeakersWrap ref={cardRef}>
            {
              SpeakersData.map((item, idx)=>(
                <CardSpeaker 
									key={idx} 
									listYn={true} 
									id={item.id} 
									title={item.title} 
									discription={item.discription} 
									personImage={item.personImage} 
									// 로딩일 경우 true 전송
									// loading={true}
								/>
              ))
            }
          </S.SpeakersWrap>
        </S.SpeakersSection>

        <S.SpeakersSection>
          <S.SpeakersTitle>Session Speakers</S.SpeakersTitle>
          <S.SpeakersWrap ref={cardRef2}>
            {
              SpeakersData.map((item, idx)=>(
                <CardSpeaker 
									key={idx} 
									listYn={true} 
									id={item.id} 
									title={item.title} 
									discription={item.discription} 
									personImage={item.personImage} 
									// 로딩일 경우 true 전송
									// loading={true}
								/>
              ))
            }
          </S.SpeakersWrap>
        </S.SpeakersSection>

      </S.SpeakersInner>
    </S.SpeakersContainer>
  )
}

export default SpeakersCont;
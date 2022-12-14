import React,{useLayoutEffect, useRef} from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { PopupSurveyContainer, PopupSurveyInner } from './style';
import { PopupClose } from '../Popup/style';
import ALink from '../ALink';

const PopupSurvey = ({setOpenSurvey})=>{

  const tl = useRef();
  const SurveyRef = useRef();

  const closePopup = () => {
    setOpenSurvey(false);
  }

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);

    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: SurveyRef.current,
      }
    }).fromTo(SurveyRef.current, { opacity: 0, y:40}, {opacity: 1, y:0, duration: 0.55, delay: 0.85,})

    return()=>{
      tl.current.kill();
    }
  }, [])

  return (
    <PopupSurveyContainer ref={SurveyRef}>
      <PopupSurveyInner>
        <p>Did you enjoy SDC22?</p>
        <p>Make a moment to tell us your experience</p>
        <ALink className='btn' href="https://www.samsungdeveloperconference.com/" color="border" size="medium" fullWidth={true} rel="noopener noreferrer">Go to survey</ALink>
        <PopupClose onClick={closePopup}></PopupClose>
      </PopupSurveyInner>
    </PopupSurveyContainer>
  )
}

export default PopupSurvey;
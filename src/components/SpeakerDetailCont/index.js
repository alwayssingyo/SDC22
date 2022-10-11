import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SpeakerDetailWrap, SpeakerDetailInner, SpeakerDetailInfo, SpeakerDetailTitle, SpeakerDetailSubTitle, SpeakerDetailDesc, SpeakerDetailImage, SpeakerDetailMoreWrap, SpeakerDetailMore } from './SpeakerDetailContElement';


const SpeakerDetailCont = (props)=>{

  const [more, setMore] = useState(false);
  const textHandler = ()=> {
    setMore(!more);
  }

  const descRef = useRef(null);
  const [btnBlock, setBtnBlock] = useState(false);

  const descHandler = useCallback(()=>{
    if(descRef.current){
      setBtnBlock(false);
      if( window.innerWidth > 769 ){
        if(descRef.current.clientHeight > 110){ // 5줄 넘길 경우
          setBtnBlock(true); // 말줄임, more 버튼 활성화
        }
      }else{ 
        if(descRef.current.clientHeight > 66){ // 3줄 넘길 경우
          setBtnBlock(true); // 말줄임, more 버튼 활성화
        }
      }
    }
  }, [descRef]);
  
  useEffect(()=>{
    descHandler();

    window.addEventListener("resize", descHandler);
    return () => window.removeEventListener("resize", descHandler);
  }, [descHandler]);

  return(
    <SpeakerDetailWrap>
      <SpeakerDetailInner>
        <SpeakerDetailInfo>
          <SpeakerDetailTitle>{props.title}</SpeakerDetailTitle>
          <SpeakerDetailSubTitle>{props.subTitle}</SpeakerDetailSubTitle>
          <SpeakerDetailDesc className={more ? 'is-appended' : btnBlock ? 'is-more' : ''}>
            <div ref={descRef}>{props.desc}</div>
          </SpeakerDetailDesc>
          <SpeakerDetailMoreWrap className={btnBlock ? 'block' : ''}>
            <SpeakerDetailMore onClick={textHandler} className={more ? 'is-appended' : ''}>
              { more ? "Less" : "More" }
            </SpeakerDetailMore>
          </SpeakerDetailMoreWrap>
        </SpeakerDetailInfo>
        <SpeakerDetailImage  style={{ backgroundImage: `url(${ process.env.PUBLIC_URL + '/images/MainSpeaker_1.png' })` }}></SpeakerDetailImage>
      </SpeakerDetailInner>
    </SpeakerDetailWrap>

  )
}

export default SpeakerDetailCont;
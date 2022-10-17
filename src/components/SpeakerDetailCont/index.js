import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as S from './style';


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
    <S.SpeakerDetailWrap>
      <S.SpeakerDetailInner>
        <S.SpeakerDetailInfo>
          <S.SpeakerDetailTitle>{props.title}</S.SpeakerDetailTitle>
          <S.SpeakerDetailSubTitle>{props.subTitle}</S.SpeakerDetailSubTitle>
          <S.SpeakerDetailDesc className={more ? 'is-appended' : btnBlock ? 'is-more' : ''}>
            <div ref={descRef}>{props.desc}</div>
          </S.SpeakerDetailDesc>
          <S.SpeakerDetailMoreWrap className={btnBlock ? 'block' : ''}>
            <S.SpeakerDetailMore onClick={textHandler} className={more ? 'is-appended' : ''}>
              { more ? "Less" : "More" }
            </S.SpeakerDetailMore>
          </S.SpeakerDetailMoreWrap>
        </S.SpeakerDetailInfo>
        <S.SpeakerDetailImage  style={{ backgroundImage: `url(${ process.env.PUBLIC_URL + '/images/MainSpeaker_1.png' })` }}></S.SpeakerDetailImage>
      </S.SpeakerDetailInner>
    </S.SpeakerDetailWrap>

  )
}

export default SpeakerDetailCont;
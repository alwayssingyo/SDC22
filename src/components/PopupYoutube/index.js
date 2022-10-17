import React from 'react';
import * as S from './style';

const PopupYoutube = ({open, setOpen, setPlay })=>{

  const closePopup = ()=>{
    setOpen(false);
    setPlay(true);
  }

	return (
    <>
      {
        open &&
        <S.YoutubeContainer onClick={closePopup}>
          <S.YoutubeInner>
            <S.YoutubeBox>
              <S.YoutubeWrap>
                <iframe id="ytplayer" type="text/html" src="https://www.youtube.com/embed/0itxerYtbVI" title="video" frameBorder="0" allowFullScreen={true}></iframe>
              </S.YoutubeWrap>
              <S.CloseBtn onClick={closePopup}></S.CloseBtn>
            </S.YoutubeBox>
          </S.YoutubeInner>
        </S.YoutubeContainer>
      }
    </>
  )
}

export default PopupYoutube;
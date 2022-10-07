import React from 'react';
import { YoutubeContainer, YoutubeInner, YoutubeBox, YoutubeWrap, CloseBtn } from './PopupYoutubeElements';

const PopupYoutube = ({open, setOpen, setPlay })=>{

  const closePopup = ()=>{
    setOpen(false);
    setPlay(true);
  }

	return (
    <>
      {
        open 
        ? <YoutubeContainer onClick={closePopup}>
            <YoutubeInner>
              <YoutubeBox>
                <YoutubeWrap>
                  <iframe id="ytplayer" type="text/html" src="https://www.youtube.com/embed/0itxerYtbVI" title="video" frameBorder="0" allowFullScreen={true}></iframe>
                </YoutubeWrap>
                <CloseBtn onClick={closePopup}></CloseBtn>
              </YoutubeBox>
            </YoutubeInner>
          </YoutubeContainer>
        : null
      }
    </>
  )
}

export default PopupYoutube;
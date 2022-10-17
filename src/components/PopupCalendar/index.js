import React from 'react';
import * as S from './style';

const PopupCalndar = ({setOpen})=>{

	const closePopup = () => {
		setOpen(false);
		document.body.style.overflow = "auto";
	};

  return (
    <S.PopupContainer>
      <S.PopupInner>
        <S.PopupTitle>Add to Calendar</S.PopupTitle>
        <S.PopupCont>
          <S.PopupItem className='apple'><img src={process.env.PUBLIC_URL + '/images/ico-apple.png'} alt=""/>Apple</S.PopupItem>
          <S.PopupItem className='google'><img src={process.env.PUBLIC_URL + '/images/ico-google.png'} alt=""/>Google</S.PopupItem>
          <S.PopupItem className='office'><img src={process.env.PUBLIC_URL + '/images/ico-office-365.png'} alt=""/>Office 365</S.PopupItem>
          <S.PopupItem className='outlook'><img src={process.env.PUBLIC_URL + '/images/ico-outlook.png'} alt=""/>Outlook</S.PopupItem>
          <S.PopupItem className='yahoo'><img src={process.env.PUBLIC_URL + '/images/ico-yahoo.png'} alt=""/>Yahoo</S.PopupItem>
        </S.PopupCont>
        <S.PopupClose onClick={closePopup}></S.PopupClose>
      </S.PopupInner>
    </S.PopupContainer>
  );
}

export default PopupCalndar;
import React from 'react';
import { PopupContainer, PopupInner, PopupTitle, PopupCont, PopupItem, PopupClose} from './PopupCalendarElements';

const PopupCalndar = ({setOpen})=>{

	const closePopup = () => {
		setOpen(false);
		document.body.style.overflow = "auto";
	};

  return (
    <PopupContainer>
      <PopupInner>
        <PopupTitle>Add to Calendar</PopupTitle>
        <PopupCont>
          <PopupItem className='apple'><img src={process.env.PUBLIC_URL + '/images/ico-apple.png'} alt=""/>Apple</PopupItem>
          <PopupItem className='google'><img src={process.env.PUBLIC_URL + '/images/ico-google.png'} alt=""/>Google</PopupItem>
          <PopupItem className='office'><img src={process.env.PUBLIC_URL + '/images/ico-office-365.png'} alt=""/>Office 365</PopupItem>
          <PopupItem className='outlook'><img src={process.env.PUBLIC_URL + '/images/ico-outlook.png'} alt=""/>Outlook</PopupItem>
          <PopupItem className='yahoo'><img src={process.env.PUBLIC_URL + '/images/ico-yahoo.png'} alt=""/>Yahoo</PopupItem>
        </PopupCont>
        <PopupClose onClick={closePopup}></PopupClose>
      </PopupInner>
    </PopupContainer>
  );
}

export default PopupCalndar;
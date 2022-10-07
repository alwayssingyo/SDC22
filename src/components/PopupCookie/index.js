import React from 'react';
import { Link } from 'react-router-dom';
import { PopupContainer, PopupInner, PopupTitle, PopupCont, PopupText, PopupBottom, PopupTextBtn, PopupButton} from './PopupCookieElements';
import Button from '../Button';

const PopupCookie = ({setOpen, setOpenManage})=>{

	const closePopup = () => {
		setOpen(false);
		document.body.style.overflow = "auto";
	};

  return (
    <>
      <PopupContainer>
        <PopupInner>
          <PopupTitle>SAMSUNG and Cookies</PopupTitle>
          <PopupCont>
            <PopupText>
              Samsung Electronics, and its partners, use cookies and similar technologies (collectively “technologies”) to store and access information on your device. Some of these technologies are technically essential to provide you with a secure, well-functioning and reliable website. We would also like to set optional/non-essential technologies to give you the best user experience. Optional technologies make it possible to measure the audience of our website, to display personalized advertising on third-party sites based on your profile, to track your location, to carry out targeted marketing campaigns and to personalize the content of our website depending on your usage. Through these technologies, we will collect information such as your interaction with our website, your preferences and your browsing habits.<br/>
              If you are happy for technologies to be used for these purposes, click on "Accept All" to accept all of the technologies. Alternatively, you may click "Continue without accepting" to refuse all non-essential technologies. You can also make a choice by category by clicking "Configure". You can withdraw your consent and modify your choices at any time by clicking on the "Cookie Preferences" button located at the bottom of our website. Further information is also available in<br/>
              our <Link to="/cookie/lang=eu">Cookie Policy</Link> and our <Link to="/privacy/lang=eu">Privacy Policy</Link>.
            </PopupText>
            <PopupBottom>
              <PopupButton>
                <span className='button'><Button color="border" size="medium" fullWidth={true} onClick={function(e){
                  e.preventDefault();
                  setOpenManage(true);
                  closePopup();
                }}>Configure</Button></span>
                <span className='button'><Button color="black" size="medium" fullWidth={true} onClick={closePopup}>Accept All</Button></span>
              </PopupButton>
              <PopupTextBtn>Continue without accepting</PopupTextBtn>
            </PopupBottom>
          </PopupCont>
        </PopupInner>
      </PopupContainer>
    </>
  );
}

export default PopupCookie;
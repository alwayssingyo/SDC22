import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { NewsLetterCon, NewsLetterInner, NewsLetterTitle, NewsLetterSubtitle, NewsLetterInnerContent, NewsLetterInput,NewsLetterAgree, LinkArea } from './NewsLetterElement';
import InputText from '../TextInput';
import CheckBox from '../Checkbox';
import Button from '../Button'
import Popup from '../Popup'

const NewsLetter = ()=>{

  const [modal, setModal] = useState(false);
  const openPopup = ()=>{
    setModal(true);
  }

	return (
    <NewsLetterCon>
      <NewsLetterInner>
        <NewsLetterTitle>Subscribe to the SDC22 & Samsung Developers Newsletter</NewsLetterTitle>
        <NewsLetterSubtitle>Stay on the front-end of innovation. Sign up to receive registration and event updates first.</NewsLetterSubtitle>
        <NewsLetterInnerContent>
          <NewsLetterInput>
            <div>
              <InputText label="Email address" placeholder="example@samsung.com" id="Email address"/>
            </div>
            <InputText label="First Name" placeholder="First Name" id="First Name"/>
            <InputText label="Last Name" placeholder="Last Name" id="Lastt Name"/>
          </NewsLetterInput>
          <NewsLetterAgree>
            <CheckBox id={"chkAgree"}/><span className='text'>I agree that Samsung Developers may use the data given by me for the newsletter.</span><a href="https://developer.samsung.com/privacy?lang=en" target="_blank">Detail</a>
          </NewsLetterAgree>
          <LinkArea>
            <Button color="black" size="medium" onClick={openPopup}>Subscribe</Button>
          </LinkArea>
        </NewsLetterInnerContent>
      </NewsLetterInner>
      {/* newsletter confirm popup */}
      {
        modal &&
        <Popup
          modal={modal}
          setModal={setModal}
          title="Confirmed"
          desc="Thank you for the subscription"
          btnText="OK"
        />
      }
    </NewsLetterCon>
  )

}

export default NewsLetter;
import React, {useState} from "react";
import { BannerBox, BannerBoxInner, BannerBoxInfo, BannerTitle, BannerDesc, BannerLink, BannerBtnLink  } from "./BannerElement";
import ALink from "../ALink"
import Button from "../Button"
import Chevron from "./Chevron";
import Popup from '../Popup'

const Banner = (props) => {
  const url= props.url;
  const linkText= props.linkText;
  const  buttonLength2 = props.buttonLength2;
  const buttonLengthOne= props.buttonLengthOne;
  const buttonUrl = props.buttonUrl;
  const buttonUrl2 = props.buttonUrl2;
  const fullWidth = props.fullWidth;
  const popupRight = props.popupRight;

  const [modal, setModal] = useState(false);
  const popupHandler = (target)=>{
    setModal(true);
  }

  return(
    <>
    {
      !fullWidth
      ?(
        <BannerBox>
          <BannerBoxInner>
            <BannerBoxInfo>
              <BannerTitle>{props.title}</BannerTitle>
              <BannerDesc>{props.desc}</BannerDesc>

              {
                typeof url !== 'string'
                ?
                  url && url.map((item, idx)=>(
                    <BannerLink href={item} target="_blank" key={idx}><span>{linkText[idx]}</span><Chevron /></BannerLink>
                  ))
                : <BannerLink className="moreLink" href={url} target="_blank"><span>{linkText}</span><Chevron /></BannerLink>
              }

              {
                buttonLengthOne == false
                ?(
                  <>
                    <BannerBtnLink><ALink className='btn' href={`${props.buttonUrl}`} color="border" size="medium" rel="noopener noreferrer">{props.buttonText}</ALink></BannerBtnLink>
                    { 
                      popupRight
                      ? <BannerBtnLink><Button onClick={popupHandler} color="border" size="medium" rel="noopener noreferrer">{props.buttonText2}</Button></BannerBtnLink>
                      : <BannerBtnLink><ALink className='btn' href={`${props.buttonUrl}`} color="border" size="medium" rel="noopener noreferrer">{props.buttonText2}</ALink></BannerBtnLink>
                    }
                  </>
                  )
                :( null )
              }

              {
                buttonLengthOne
                ?(<BannerBtnLink className="fullWidth"><ALink className='btn' href={`${props.buttonUrl}`} color="border" size="medium" rel="noopener noreferrer">{props.buttonText}</ALink></BannerBtnLink>)
                :( null )
              }

            </BannerBoxInfo>
          </BannerBoxInner>
        </BannerBox>)
      :(
        /* If there is only one, add border class */
        <BannerBox className={`fullWidth ${ props.border }`} >
          <BannerBoxInner className="fullWidthInner">
            <BannerBoxInfo>
              <BannerTitle>{props.title}</BannerTitle>
              <BannerDesc>{props.desc}</BannerDesc>
              {
                typeof url !== 'string'
                ?
                  url && url.map((item, idx)=>(
                    <BannerLink href={item} target="_blank" key={idx}><span>{linkText[idx]}</span><Chevron /></BannerLink>
                  ))
                : <BannerLink href={url} target="_blank"><span>{linkText}</span><Chevron /></BannerLink>
              }

              {
                buttonUrl
                ?(<BannerBtnLink className="right"><ALink className='btn' href={`${props.buttonUrl}`} color="border" size="medium" rel="noopener noreferrer">{props.buttonText}</ALink></BannerBtnLink>)
                :( null )
              }
            </BannerBoxInfo>
          </BannerBoxInner>
        </BannerBox>)


    }

    {/* alert popup */}
    {
      modal
      ? <Popup
          modal={modal}
          setModal={setModal}
          title="Alert Sign In"
          desc="You'll have to sign in to do that."
          linkText="Sign In"
          link="https://developer.samsung.com/dashboard/support"
          btnText="OK"
        />
      : null
    }
    </>
  )

}

export default Banner;
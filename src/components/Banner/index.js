import React, {useState} from "react";
import * as S from "./style";
import ALink from "../ALink"
import Button from "../Button"
import Chevron from "./Chevron";
import Popup from '../Popup'

const Banner = (props) => {
  const url= props.url;
  const linkText= props.linkText;
  const buttonLengthOne= props.buttonLengthOne;
  const buttonUrl = props.buttonUrl;
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
        <S.BannerBox>
          <S.BannerBoxInner>
            <S.BannerBoxInfo>
              <S.BannerTitle>{props.title}</S.BannerTitle>
              <S.BannerDesc>{props.desc}</S.BannerDesc>

              {
                typeof url !== 'string'
                ?
                  url && url.map((item, idx)=>(
                    <S.BannerLink href={item} target="_blank" key={idx}><span>{linkText[idx]}</span><Chevron /></S.BannerLink>
                  ))
                : <S.BannerLink className="moreLink" href={url} target="_blank"><span>{linkText}</span><Chevron /></S.BannerLink>
              }

              {
                buttonLengthOne 
                ? <S.BannerBtnLink className="fullWidth"><ALink className='btn' href={`${props.buttonUrl}`} color="border" size="medium" rel="noopener noreferrer">{props.buttonText}</ALink></S.BannerBtnLink>
                : <>
                    <S.BannerBtnLink><ALink className='btn' href={`${props.buttonUrl}`} color="border" size="medium" rel="noopener noreferrer">{props.buttonText}</ALink></S.BannerBtnLink>
                    { 
                      popupRight
                      ? <S.BannerBtnLink><Button onClick={popupHandler} color="border" size="medium" rel="noopener noreferrer">{props.buttonText2}</Button></S.BannerBtnLink>
                      : <S.BannerBtnLink><ALink className='btn' href={`${props.buttonUrl}`} color="border" size="medium" rel="noopener noreferrer">{props.buttonText2}</ALink></S.BannerBtnLink>
                    }
                  </>
              }

            </S.BannerBoxInfo>
          </S.BannerBoxInner>
        </S.BannerBox>)
      :(
        /* If there is only one, add border class */
        <S.BannerBox className={`fullWidth ${ props.border }`} >
          <S.BannerBoxInner className="fullWidthInner">
            <S.BannerBoxInfo>
              <S.BannerTitle>{props.title}</S.BannerTitle>
              <S.BannerDesc>{props.desc}</S.BannerDesc>
              {
                typeof url !== 'string'
                ?
                  url && url.map((item, idx)=>(
                    <S.BannerLink href={item} target="_blank" key={idx}><span>{linkText[idx]}</span><Chevron /></S.BannerLink>
                  ))
                : <S.BannerLink href={url} target="_blank"><span>{linkText}</span><Chevron /></S.BannerLink>
              }

              {
                buttonUrl && <S.BannerBtnLink className="right"><ALink className='btn' href={`${props.buttonUrl}`} color="border" size="medium" rel="noopener noreferrer">{props.buttonText}</ALink></S.BannerBtnLink>
              }
            </S.BannerBoxInfo>
          </S.BannerBoxInner>
        </S.BannerBox>)


    }

    {/* alert popup */}
    {
      modal &&
      <Popup
        modal={modal}
        setModal={setModal}
        title="Alert Sign In"
        desc="You'll have to sign in to do that."
        linkText="Sign In"
        link="https://developer.samsung.com/dashboard/support"
        btnText="OK"
      />
    }
    </>
  )

}

export default Banner;
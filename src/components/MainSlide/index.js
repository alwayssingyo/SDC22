import React, {useEffect, useState} from 'react'
import Slider from 'react-slick';
import * as S from './style'
import './style-slide.scss'
import ButtonLink from '../ButtonLink';
import Card from '../CardSpeaker';
import { MainSpeakers } from '../../data/MainSlideData';

function SlideNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "none" }}
      onClick={onClick}
    />
  );
}

function SlidePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "none" }}
      onClick={onClick}
    />
  );
}

const MainSlide = () => {
	//phase4 유무 체크
	const [phase4, setPhase4] = useState(false);

  //Slide setting
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    nextArrow: <SlideNextArrow />,
    prevArrow: <SlidePrevArrow />,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    centerPadding: 0,
    touchThreshold: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '16.666%',
        }
      }
    ]
  };

  const [isDesktop, setDesktop] = useState(window.innerWidth > 769);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 769);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
    <S.MainKeynoteArea>
      <S.MainKeynoteAreaTop>
        <S.MainKeynoteAreaTitle>Keynote</S.MainKeynoteAreaTitle>
        <S.MainKeynoteAreaText>
        Unveiling Samsung's latest software advances, building toward a future of smarter, safer and highly personalized connected living. Discover our expansive ecosystem of powerful, next-generation technologies.
        </S.MainKeynoteAreaText>
      </S.MainKeynoteAreaTop>
      <S.CardWrap className='main_slide'>
        <S.CardInner className={phase4 ? 'is-phase4' : ''}>
          {
            phase4
            ? <Slider {...settings}>
                {
                  MainSpeakers.map((item,idx)=>(
                    <Card
                      key={idx}
                      id={item.id}
                      title={item.title}
                      discription={item.discription}
                      personImage={item.personImage}
                      slide={true}
                      phase4={true}
                      //로딩일 경우 true 전송
                      // loading={true}
                    />
                  ))
                }
              </Slider>
            : isDesktop
              ? 
                MainSpeakers.map((item,idx)=>(
                  <Card 
                    key={idx} 
                    id={item.id} 
                    title={item.title} 
                    discription={item.discription} 
                    personImage={item.personImage}
                    //로딩일 경우 true 전송
                    // loading={true}
                  />
                ))
              : <Slider {...settings}>
                  {
                    MainSpeakers.map((item,idx)=>(
                      <Card 
                        key={idx} 
                        id={item.id} 
                        title={item.title} 
                        discription={item.discription} 
                        personImage={item.personImage} 
                        slide={true}
                        //로딩일 경우 true 전송
                        // loading={true}
                      />
                    ))
                  }
                </Slider>
          }
        </S.CardInner>
      </S.CardWrap>
      <S.LinkArea className={phase4 ? 'is-phase4' : ''}>
        <ButtonLink url="/keynote" color="black" size="medium">Go to Keynote</ButtonLink>
      </S.LinkArea>

    </S.MainKeynoteArea>
    </>

  )
};


export default MainSlide;


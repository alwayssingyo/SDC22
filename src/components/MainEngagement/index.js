import {React, useState, useEffect} from 'react';
import * as S from './style';
import ButtonLink from '../ButtonLink';

const MainEngagementData = [
  {
    id: 2,
    title: 'Hacker\'s Playground',
    discription: "Calling all hackers, developers to hacker's playground!\nCome and play Capture the Flag including coding challenges - no experience necessary!\nAnd if you're brand new, there's step-by-step guidance here, too!",
    bg: process.env.PUBLIC_URL + '/images/MainEngagement_2.png',
    mobileBg: process.env.PUBLIC_URL + '/images/MainEngagement_m_2.png',
    url: 'sdcStack2',
    btnText: 'Go to Hacker\'s Playground',
    theme : 'bright'
  },
  {
    id: 3,
    title: 'Samsung Developers',
    discription:'Discover and create with Samsung Developers. \n Using our tools and services, you can provide an exceptional experience to Samsung users around the world.',
    bg: process.env.PUBLIC_URL + '/images/MainEngagement_3.png',
    mobileBg: process.env.PUBLIC_URL + '/images/MainEngagement_m_3.png',
    url: 'sdcStack2',
    btnText: 'Go to Samsung Developers',
    theme : 'bright'
  },
]

const MainEngagement = ()=>{
	//phase4 유무 체크
	const [phase4, setPhase4] = useState(false);

  const [isDesktop, setDesktop] = useState(window.innerWidth > 769);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 769);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return(
    <S.MainEngagementWrap>
    {
      phase4 
      // phase4에서 Hackers Playgroud 배너 삭제
      ? <S.MainEngagementBox> 
          {isDesktop ? (
            <S.MainEngagementBoxBg style={{ backgroundImage: `url(${ MainEngagementData[1].bg })`,  }}></S.MainEngagementBoxBg>
          ) : (
            <S.MainEngagementBoxBg style={{ backgroundImage: `url(${ MainEngagementData[1].mobileBg })`,  }}></S.MainEngagementBoxBg>
          )}
          <S.MainEngagementBoxInner>
            <S.MainEngagementTitle className={MainEngagementData[1].theme}>{MainEngagementData[1].title}</S.MainEngagementTitle>
            <S.MainEngagementText className={MainEngagementData[1].theme}>{MainEngagementData[1].discription}</S.MainEngagementText>
            <div>
              <ButtonLink className='sdcStack' url={MainEngagementData[1].url} color={ MainEngagementData[1].theme === 'dark' ? 'white' : 'black' } size="medium">{MainEngagementData[1].btnText}</ButtonLink>
            </div>
          </S.MainEngagementBoxInner>
        </S.MainEngagementBox>
      : MainEngagementData.map((item, idx)=>(
        <S.MainEngagementBox key={idx}>
          {isDesktop ? (
            <S.MainEngagementBoxBg style={{ backgroundImage: `url(${ item.bg })`,  }}></S.MainEngagementBoxBg>
          ) : (
            <S.MainEngagementBoxBg style={{ backgroundImage: `url(${ item.mobileBg })`,  }}></S.MainEngagementBoxBg>
          )}
          <S.MainEngagementBoxInner>
            <S.MainEngagementTitle className={item.theme}>{item.title}</S.MainEngagementTitle>
            <S.MainEngagementText className={item.theme}>{item.discription}</S.MainEngagementText>
            <div>
              <ButtonLink className='sdcStack' url={item.url} color={ item.theme === 'dark' ? 'white' : 'black' } size="medium">{item.btnText}</ButtonLink>
            </div>
          </S.MainEngagementBoxInner>
        </S.MainEngagementBox>
      ))
    }
    </S.MainEngagementWrap>
  )

}

export default MainEngagement;
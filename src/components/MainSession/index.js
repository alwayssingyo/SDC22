import React, {useState, useEffect} from 'react';
import { Link, } from 'react-router-dom';
import * as S from './style'
import { MainSessionData } from '../../data/MainSessionData';
import ButtonLink from '../ButtonLink';
import ToastPopup from '../ToastPopup';
import CardSession from '../CardSession';

const BookmarkToggleItem = ({ idx, setModal, setModalFalse, tooltipOpen, setTooltipOpen }) => {
  const [Bookmark, setBookmark] = useState(false);

  const onClickHandler = ()=> {

    //로그인 전일 경우 북마크 툴팁 오픈
    setTooltipOpen(true);

    //로그인 후일 경우 북마크 클릭 이벤트
    setBookmark((isCheck) => !isCheck );
    //call toast popup
    if( Bookmark === false ){ //북마크 클릭시
      setModalFalse(false);
      setModal(true);
    }else { //북마크 해제시
      setModal(false);
      setModalFalse(true);
    }
  }

  useEffect(()=>{
    const timer = setTimeout(()=>{ setTooltipOpen(false) }, 4000);

    return ()=>{ clearTimeout(timer) }
  }, [tooltipOpen, setTooltipOpen])

  return (
    <S.BookmarkToggle className={Bookmark ? "Bookmark-checked" : ""} onClick={onClickHandler}></S.BookmarkToggle>
  );
};

//Card component
const CardItem = ({ item, idx, pictureMo, setModal, setModalFalse }) => {

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const closeTooltip = () => {
    setTooltipOpen(false);
  }
  
  return (
    <S.MainSessionCard className='Card' style={{ backgroundImage: `url(${ item.pictureMo })`,  }}>
      <S.MainSessionCardWrap>
        <img src={item.picture} alt=""/>
        <S.MainSessionBlur className='Blur'></S.MainSessionBlur>
        <Link className='MainSessionLink' to={`/${item.sessionLink}`}></Link>
        <S.MainSessionCardInner className='CardInner'>
          <S.MainSessionCardInfo className='Info'>
            <S.MainSessionCardTitle className='Title'>{item.title}</S.MainSessionCardTitle>
            <S.MainSessionCardDate className='Date'>{item.date}</S.MainSessionCardDate>
          </S.MainSessionCardInfo>
          <S.MainSessionCardOverlay className='More'>
            <S.MainSessionSubText className='Text'>{item.discription}</S.MainSessionSubText>
          </S.MainSessionCardOverlay>
        </S.MainSessionCardInner>
      </S.MainSessionCardWrap>
      {/* Bookmark button */}
      <S.MainSessionCardBtnArea className='Btns'>
        <BookmarkToggleItem id={idx} setModal={setModal} setModalFalse={setModalFalse} tooltipOpen={tooltipOpen} setTooltipOpen={setTooltipOpen}/>
        {/* Bookmark tooltip */}
        <S.BookmarkTooltip className={ tooltipOpen ? 'bookmark_tooltip is-open' : 'bookmark_tooltip' }>
          Bookmarks are available after signing in. <a href="https://developer.samsung.com/dashboard/support">Sign in</a>
          <button className='close_btn' onClick={closeTooltip}></button>
        </S.BookmarkTooltip> 
      </S.MainSessionCardBtnArea>
    </S.MainSessionCard>
  );
}

//Card loading component
const LoadingItem = () => {
  return (
    <S.LoadingCard>
      <S.LoadingCardInner>
        <S.LoadingCardTop>
          <S.LoadingCardIcon>
            <span className='dot'></span>
            <span className='dot'></span>
            <span className='dot'></span>
          </S.LoadingCardIcon>
        </S.LoadingCardTop>
        <S.LoadingCardBottom>
          <div></div>
          <div></div>
          <div></div>
        </S.LoadingCardBottom>
      </S.LoadingCardInner>
    </S.LoadingCard>
  );
}

const MainSessionContent = ()=>{

	//phase4 유무 체크
	const [phase4, setPhase4] = useState(false);

  const [modal, setModal] = useState(false);
  const [modalFalse, setModalFalse] = useState(false);

  const SessionData = [
    {
      id: 1,
      title: 'What’s new in One UI 5',
      date: '10/12 Start at 10:00',
      discription:"One UI 5 pushes personalization and productivity to the next level. Explore new features that enable you to build a Galaxy experience that reflects your personal style and help you to get more done on all your devices, wherever or whenever you need to.",
      picture: process.env.PUBLIC_URL + '/images/img-live-session-01.png',
      sessionLink: 'session1',
      tag: ["Mobile","Design","UI/UX"],
      type: 'LIVE',
    },
    {
      id: 2,
      title: 'SmartThings Find: Find alongside 200+ million users',
      date: '10/12 Start at 10:00',
      discription: "SmartThings Find is Samsung’s fastest growing service, powered by more than 200 million Galaxy users. Discover some of the new features and functions added over the past year and learn how partners can leverage the service to innovate their own solutions to meet the needs of businesses and consumers alike.",
      picture: process.env.PUBLIC_URL + '/images/img-live-session-02.png',
      sessionLink: 'session2',
      tag: ["IoT", "Contents & Service", "Open Innovation"],
      type: 'LIVE',
    },
    {
      id: 3,
      title: 'Tizen everywhere',
      date: '10/12 Start at 10:00',
      discription:"This session highlighted Samsung's direction and goals for the Enterprise and B2B markets, focused on taking Tizen to the next level on so many platforms. Various Enterpriser Displays based on Tizen and solutions suitable for business purposes will always be together.",
      picture: process.env.PUBLIC_URL + '/images/img-live-session-01.png',
      sessionLink: 'session3',
      tag: ["Enterprise","Tizen"],
      type: 'LIVE',
    },
    {
      id: 4,
      title: 'Telehealth in Samsung devices',
      date: '10/12 Start at 10:00',
      discription:"One UI 4 is the next phase in the evolution of One UI. In this session, we'll see One UI 4 innovations that help you focus on what matters, feel comfortable while using the interface and express yourself and your style — watch for the exploding emoji! And you'll get a look at how we're using design to unify our ecosystem, from phones and foldables to tablets, Galaxy Books and watches.",
      picture: process.env.PUBLIC_URL + '/images/img-live-session-02.png',
      sessionLink: 'session1',
      tag: ["Health","Tizen"],
      type: 'LIVE',
    },
    {
      id: 5,
      title: "What's new in Tizen?",
      date: '10/12 Start at 10:00',
      discription: "Join this session to learn why Bixby is the best voice interface for connecting users and devices. Check out the cross-device experiences that Bixby offers across Samsung's ecosystem. We will also be introducing the Bixby Home Platform and tools to add intelligence to your devices.",
      picture: process.env.PUBLIC_URL + '/images/img-live-session-01.png',
      sessionLink: 'session2',
      tag: ["IoT", "Tizen", "UI/UX"],
      type: 'LIVE',
    },
    {
      id: 6,
      title: 'SmartThings Energy service',
      date: '10/12 Start at 10:00',
      discription:'Building on the SmartThings vision of creating the world’s best in-home experience, we will announce our strategy on Matter, platform innovations and new services in the market — including the SmartThings Find partnership program, SmartThings Energy and SmartThings Build, a home developer and builder solution to embed smart home technology and elevate the resident experience.',
      picture: process.env.PUBLIC_URL + '/images/img-live-session-02.png',
      sessionLink: 'session3',
      tag: ["IoT","Monetization", "Smart Appliances"],
      type: 'LIVE',
    },
  ]

	return (
    <S.MainSession className={phase4 ? 'is-p4' : ''}>
      <S.MainSessionTop className={phase4 ? 'is-p4' : ''}>
        <S.MainSessionTitle>Tech Sessions</S.MainSessionTitle>
        <S.MainSessionText>
        Get a deeper understanding of the tech mentioned during the keynote. Each session offers further insights into the innovations that will shape even more connected customer experiences.
        </S.MainSessionText>
      </S.MainSessionTop>
      {
        !phase4 &&
        <S.MainSessionInner>
          {
            MainSessionData.map((item, idx, id)=>(
              <CardItem key={idx} item={item} idx={idx} setModal={setModal} setModalFalse={setModalFalse}/>
            ))
          }
          {/* 로딩시 */}
          {/* {
            MainSessionData.map((item, idx)=>(
              <LoadingItem key={idx} />
            ))
          } */}
        </S.MainSessionInner>
      }
      {
        phase4 &&
        <S.CardWrap>
          <S.CardInner>
            {
              SessionData.map((item, idx)=>(
                <CardSession key={idx} id={item.id} col="col-3" title={item.title} date={item.date} discription={item.discription} image={item.picture} bookmark={true} tag={item.tag} type={item.type} setModal={setModal} setModalFalse={setModalFalse}/>
              ))
            }
          </S.CardInner>
        </S.CardWrap>
      }
      <S.LinkArea>
        <ButtonLink url="/liveTech" color="black" size="medium">Go to Tech Sessions</ButtonLink>
      </S.LinkArea>

      {/* toast popup */}
      {/* 북마크 설정 팝업 */}
      <ToastPopup
        modal={modal}
        setModal={setModal}
        state="success" 
        text="This session is kept as a bookmark."
      />

      {/* 북마크 해제 팝업 */}
      <ToastPopup
        modal={modalFalse}
        setModal={setModalFalse}
        state="success" 
        text="This session is no longer bookmarked."
      />
    </S.MainSession>
  )

}

export default MainSessionContent;
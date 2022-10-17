import React, {useState, useEffect, useRef} from 'react';
import Slider from 'react-slick';
import * as S from './style';
import { SessionRoomLink } from '../sessionDetailTopCont/style';
import  ReactPlayer  from  'react-player/lazy'
import ToastPopup from '../ToastPopup';
import './style-slide.scss'

const BookmarkToggleItem = ({ setModal, setModalFalse, tooltipOpen, setTooltipOpen }) => {

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
    <S.KeynoteContMark className={Bookmark ? "Bookmark-checked" : ""} onClick={onClickHandler}></S.KeynoteContMark>
  );
};

const KeynoteCont = (props)=>{
	//phase4 유무 체크
	const [phase4, setPhase4] = useState(false);

  const [time, setTime] = useState('SessionEndBefore');

  const [modal, setModal] = useState(false);
  const [modalFalse, setModalFalse] = useState(false);

  const [like, setLike] = useState(false);
  const likeHandler = ()=> {
    setLike(!like);
  }

  const TagData = props.tag;

  const [more, setMore] = useState(false);
  const textHandler = ()=> {
    setMore(!more);
  }

  //Bookmark tooltip
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const closeTooltip = () => {
    setTooltipOpen(false);
  }

  const ref = useRef(null);
  const [btnBlock, setBtnBlock] = useState(false);

  useEffect(()=>{
    if(ref.current){
     if(ref.current.clientHeight >= 66){
      setBtnBlock(!btnBlock);
     }else {
      setBtnBlock(btnBlock);
     }
    }
  },[]);


  const playerRef = useRef(null);

  const timestampValues = [
    {id: 1, thumbnail:process.env.PUBLIC_URL + '/images/KeynotePlayerThumb_1.png', time: 17, title: "Overview", text: "From 04:20:30"},
    {id: 2, thumbnail:process.env.PUBLIC_URL + '/images/KeynotePlayerThumb_1.png', time: 337, title: "Game Booster", text: "From 04:20:30"},
    {id: 3, thumbnail:process.env.PUBLIC_URL + '/images/KeynotePlayerThumb_1.png', time: 705, title: "Intervention Problem", text: "From 04:20:30"},
    {id: 4, thumbnail:process.env.PUBLIC_URL + '/images/KeynotePlayerThumb_1.png', time: 905, title: "Intervention Problem", text: "From 04:20:30"},
    {id: 5, thumbnail:process.env.PUBLIC_URL + '/images/KeynotePlayerThumb_1.png', time: 1000, title: "Intervention Problem", text: "From 04:20:30"},
    {id: 6, thumbnail:process.env.PUBLIC_URL + '/images/KeynotePlayerThumb_1.png', time: 1100, title: "Intervention Problem", text: "From 04:20:30"},
    {id: 7, thumbnail:process.env.PUBLIC_URL + '/images/KeynotePlayerThumb_1.png', time: 1200, title: "Intervention Problem", text: "From 04:20:30"},
    {id: 8, thumbnail:process.env.PUBLIC_URL + '/images/KeynotePlayerThumb_1.png', time: 1300, title: "Intervention Problem", text: "From 04:20:30"},
    {id: 9, thumbnail:process.env.PUBLIC_URL + '/images/KeynotePlayerThumb_1.png', time: 1400, title: "Intervention Problem", text: "From 04:20:30"},
  ]

  const [nextSlide, setNextSlide] = useState(0);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
    beforeChange: (current, next) => {setNextSlide(next)},
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]

  };

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }


  const [activeId, setActiveId] = useState();

  const goToTime = (second)=>{
    const length = timestampValues.length;
    for( let i=0; i<length; i++ ){
      const val = timestampValues;

      if( second < val[length-1].time ){
        //첫번째 타임스탬프 이전일 경우
        if( second < val[0].time ){
          setActiveId(0);
        }else {
          if( second >val[i].time && second <val[i+1].time) {
            setActiveId(i+1);
          }
        }
      //마지막 타임스탬프일 경우
      }else{
        setActiveId(length);
      }
    }
  }


	return (

		<S.KeynoteContContainer>
			<S.KeynoteContInner className='KeynoteContInner'>
      {
        props.released?
              props.session ?
                      <S.KeynoteContVideo className='KeynoteContVideo'>
                        <ReactPlayer
                          className="react-player"
                          url={process.env.PUBLIC_URL + '/images/video-commingsoon.mp4'}
                          width="100%"
                          height="100%"
                          playing={true}
                          loop={true}
                          playsinline={true}
                          muted={true}
                        />
                        <S.KeynoteContSoon>
                          <div className='title'>SDC22 is now live<br/> Click below to come in</div>
                          <SessionRoomLink className='room' dangerouslySetInnerHTML={{ __html : props.room }} />
                        </S.KeynoteContSoon>
                      </S.KeynoteContVideo>

                  : <S.KeynoteContVideo className='KeynoteContVideo' released={props.released}>
                      <ReactPlayer
                        ref={playerRef}
                        className="react-player"
                        playing={true}
                        url={props.url}
                        width="100%"
                        height="100%"
                        controls={true}
                        onProgress={(prog) => {
                          goToTime(prog.playedSeconds);
                        } }
                        />
                  </S.KeynoteContVideo>

        :	 props.uploadedBefore ?
                <S.KeynoteContVideo className='KeynoteContVideo'>
                  <ReactPlayer
                    className="react-player"
                    url={process.env.PUBLIC_URL + '/images/video-commingsoon.mp4'}
                    width="100%"
                    height="100%"
                    playing={true}
                    loop={true}
                    playsinline={true}
                    muted={true}
                  />
                  <S.KeynoteContSoon>
                    <div className='title'>The Sessions <br/> will be uploaded soon.</div>
                  </S.KeynoteContSoon>
                </S.KeynoteContVideo>

              : props.on_Demand ?
                <S.KeynoteContVideo className='KeynoteContVideo' released={props.released}>
                  <ReactPlayer
                    ref={playerRef}
                    className="react-player"
                    playing={true}
                    url={props.url}
                    width="100%"
                    height="100%"
                    controls={true}
                    />
                </S.KeynoteContVideo>
              :  <S.KeynoteContVideo className='KeynoteContVideo'>
                  <ReactPlayer
                    className="react-player"
                    url={process.env.PUBLIC_URL + '/images/video-commingsoon.mp4'}
                    width="100%"
                    height="100%"
                    playing={true}
                    loop={true}
                    playsinline={true}
                    muted={true}
                  />
                  <S.KeynoteContSoon>
                    <div className='title'>Coming Soon </div>
                    <div className='time'>Wed, Oct 12, 2022 {props.time}</div>{/*해당 세션 시작 시각 적용*/}
                  </S.KeynoteContSoon>
              </S.KeynoteContVideo>
        }

        {
          props.session &&
          <>
            {/* On the session detail page, use the Sessiondesc component instead of the KeynoteContDesc*/}
            <S.SessionDesc ref={ref} className={more ? 'SessionDesc is-appended' : 'SessionDesc'} dangerouslySetInnerHTML={{ __html : props.desc }} />
            {/* More button in sessionDetail page */}
            <S.KeynotebtnWrap className={btnBlock ? 'block' : ''}>
              <S.KeynoteMore onClick={textHandler} className={  more ? 'is-appended' : ''}>
                { more ? "Less" : "More" }
              </S.KeynoteMore>
            </S.KeynotebtnWrap>
          </>
        }
				<S.KeynoteContText className={ props.session ? 'KeynoteContText is-session' : 'KeynoteContText' }>
          {
            !props.session && props.released && !props.vodOpen && // 라이브 오픈 후, vod 업로드 이전
            <S.KeynoteBadgeWrap>
              <S.KeynoteBadge>
                <div className='inner'>
                  <span className='tag'>LIVE</span>
                </div>
              </S.KeynoteBadge>
            </S.KeynoteBadgeWrap>
          }
					<S.KeynoteContTitle className='KeynoteContTitle'>
						<div className='title'>{props.title}</div>
              <div className='btn'>
                {/* Like button in sessionDetail page */}
                {
                  props.session &&
                  <S.KeynoteContLike onClick={likeHandler} className={like ? 'is-active' : ''}>
                    <S.KeynoteContLikeTooltip className='like_tooltip'>Was this helpful?</S.KeynoteContLikeTooltip>
                  </S.KeynoteContLike>
                }
                <BookmarkToggleItem setModal={setModal} setModalFalse={setModalFalse} tooltipOpen={tooltipOpen} setTooltipOpen={setTooltipOpen}/>
                {/* Bookmark tooltip */}
                <S.BookmarkTooltip className={ tooltipOpen ? 'bookmark_tooltip is-open' : 'bookmark_tooltip' }>
                  Bookmarks are available after signing in. <a href="https://developer.samsung.com/dashboard/support">Sign in</a>
                  <button className='close_btn' onClick={closeTooltip}></button>
                </S.BookmarkTooltip>
              </div>
              {/* Use in sessionDetail page */}
                <div className='tag_wrap'>
                {
                  props.type && <S.KeynoteContType className={props.released ? 'released' : ''}><span>{props.type}</span></S.KeynoteContType>
                }
                {
                  TagData && TagData.map((item,idx)=>(
                    <S.KeynoteContTag className='KeynoteContTag' key={idx}>{item}</S.KeynoteContTag>
                  ))
                }
              </div>
					  </S.KeynoteContTitle>
					  <S.KeynoteContDesc className='KeynoteContDesc' dangerouslySetInnerHTML={{ __html : props.desc }} />
            {
              !phase4 &&
              <S.KeynoteContLink  className='KeynoteContLink' href="https://www.youtube.com/watch?v=ElMqHkG26sM&list=PL7PfK8Mp1rLHOrUvW_v9h12pd7TFOXMEL&index=2" target="_blank">Watch last year's Keynote</S.KeynoteContLink>
            }

            {
              !props.session && phase4 &&
              <>
                <S.KeynoteTimeStampTitle>Chapter</S.KeynoteTimeStampTitle>
                <S.KeynoteTimeStamp>
                    <S.KeynoteTimeStampWrap className={ nextSlide !== 0 ? 'timestampe not-first' : 'timestampe' } >
                      <Slider {...settings}>
                        {
                          timestampValues.map( (val, idx) => (
                            <S.KeynoteTimeStampItem key={idx} onClick={() => {setActiveId(val.id)}} className={ activeId === val.id ? "active" : "" }>
                              <button onClick={() => playerRef.current.seekTo(val.time) }>
                                <S.KeynoteTimeStampImg className='thumb'>
                                  <img src={val.thumbnail} alt={val.title}></img>
                                </S.KeynoteTimeStampImg>
                                <div className='title'>{val.title}</div>
                                <div className='txt'> {val.text}</div>
                              </button>
                            </S.KeynoteTimeStampItem>
                          ))
                        }
                      </Slider>
                    </S.KeynoteTimeStampWrap>
                  </S.KeynoteTimeStamp>
                </>
              }

            </S.KeynoteContText>
			</S.KeynoteContInner>

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

		</S.KeynoteContContainer>
	)
}

export default KeynoteCont;
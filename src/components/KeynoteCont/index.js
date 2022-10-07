import React, {useState, useEffect, useRef} from 'react';
import Slider from 'react-slick';
import { KeynoteContContainer, KeynoteContInner, KeynoteContVideo, KeynoteContSoon, KeynoteContText, KeynoteContTitle, KeynoteContMark, KeynoteContDesc, KeynoteContLink, KeynoteContTag, KeynoteContLike, KeynoteContType, KeynoteMore, SessionDesc, KeynotebtnWrap, KeynoteTimeStampWrap, BookmarkTooltip, KeynoteContLikeTooltip, KeynoteTimeStamp, KeynoteTimeStampTitle, KeynoteTimeStampItem, KeynoteTimeStampImg, KeynoteBadge, KeynoteBadgeWrap } from './KeynoteContElements';
import { SessionRoomLink } from '../sessionDetailTopCont/SessionDetailTopContElement';
import  ReactPlayer  from  'react-player/lazy'
import ToastPopup from '../ToastPopup';
import './style.scss'



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
    <KeynoteContMark className={Bookmark ? "Bookmark-checked" : ""} onClick={onClickHandler}></KeynoteContMark>
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

  const [descHeight, setDescHeight] = useState(0);
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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
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

		<KeynoteContContainer>
			<KeynoteContInner className='KeynoteContInner'>
      {
        props.released?
              props.session ?
                      <KeynoteContVideo className='KeynoteContVideo'>
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
                        <KeynoteContSoon>
                          <div className='title'>SDC22 is now live<br/> Click below to come in</div>
                          <SessionRoomLink className='room' dangerouslySetInnerHTML={{ __html : props.room }} />
                        </KeynoteContSoon>
                      </KeynoteContVideo>

                  : <KeynoteContVideo className='KeynoteContVideo' released={props.released}>
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
                  </KeynoteContVideo>

        :	 props.uploadedBefore ?
                <KeynoteContVideo className='KeynoteContVideo'>
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
                  <KeynoteContSoon>
                    <div className='title'>The Sessions <br/> will be uploaded soon.</div>
                  </KeynoteContSoon>
                </KeynoteContVideo>

              : props.on_Demand ?
                <KeynoteContVideo className='KeynoteContVideo' released={props.released}>
                  <ReactPlayer
                    ref={playerRef}
                    className="react-player"
                    playing={true}
                    url={props.url}
                    width="100%"
                    height="100%"
                    controls={true}
                    />
                </KeynoteContVideo>
              :  <KeynoteContVideo className='KeynoteContVideo'>
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
                  <KeynoteContSoon>
                    <div className='title'>Coming Soon </div>
                    <div className='time'>Wed, Oct 12, 2022 {props.time}</div>{/*해당 세션 시작 시각 적용*/}
                  </KeynoteContSoon>
              </KeynoteContVideo>
        }

        {
          props.session &&
          <>
            {/* On the session detail page, use the Sessiondesc component instead of the KeynoteContDesc*/}
            <SessionDesc ref={ref} className={more ? 'SessionDesc is-appended' : 'SessionDesc'} dangerouslySetInnerHTML={{ __html : props.desc }} />
            {/* More button in sessionDetail page */}
            <KeynotebtnWrap className={btnBlock ? 'block' : ''}>
              <KeynoteMore onClick={textHandler} className={  more ? 'is-appended' : ''}>
                { more ? "Less" : "More" }
              </KeynoteMore>
            </KeynotebtnWrap>
          </>
        }
				<KeynoteContText className={ props.session ? 'KeynoteContText is-session' : 'KeynoteContText' }>
          {
            !props.session && props.released && !props.vodOpen && // 라이브 오픈 후, vod 업로드 이전
            <KeynoteBadgeWrap>
              <KeynoteBadge>
                <div className='inner'>
                  <span className='tag'>LIVE</span>
                </div>
              </KeynoteBadge>
            </KeynoteBadgeWrap>
          }
					<KeynoteContTitle className='KeynoteContTitle'>
						<div className='title'>{props.title}</div>
              <div className='btn'>
                {/* Like button in sessionDetail page */}
                {
                  props.session &&
                  <KeynoteContLike onClick={likeHandler} className={like ? 'is-active' : ''}>
                    <KeynoteContLikeTooltip className='like_tooltip'>Was this helpful?</KeynoteContLikeTooltip>
                  </KeynoteContLike>
                }
                <BookmarkToggleItem setModal={setModal} setModalFalse={setModalFalse} tooltipOpen={tooltipOpen} setTooltipOpen={setTooltipOpen}/>
                {/* Bookmark tooltip */}
                <BookmarkTooltip className={ tooltipOpen ? 'bookmark_tooltip is-open' : 'bookmark_tooltip' }>
                  Bookmarks are available after signing in. <a href="https://developer.samsung.com/dashboard/support">Sign in</a>
                  <button className='close_btn' onClick={closeTooltip}></button>
                </BookmarkTooltip>
              </div>
              {/* Use in sessionDetail page */}
                <div className='tag_wrap'>
                {
                  props.type && <KeynoteContType className={props.released ? 'released' : ''}><span>{props.type}</span></KeynoteContType>
                }
                {
                  TagData && TagData.map((item,idx)=>(
                    <KeynoteContTag className='KeynoteContTag' key={idx}>{item}</KeynoteContTag>
                  ))
                }
              </div>
					  </KeynoteContTitle>
					  <KeynoteContDesc className='KeynoteContDesc' dangerouslySetInnerHTML={{ __html : props.desc }} />
            {
              !phase4 &&
              <KeynoteContLink  className='KeynoteContLink' href="https://www.youtube.com/watch?v=ElMqHkG26sM&list=PL7PfK8Mp1rLHOrUvW_v9h12pd7TFOXMEL&index=2" target="_blank">Watch last year's Keynote</KeynoteContLink>
            }

            {
              !props.session && phase4 &&
              <>
                <KeynoteTimeStampTitle>Chapter</KeynoteTimeStampTitle>
                <KeynoteTimeStamp>
                    <KeynoteTimeStampWrap className={ nextSlide !== 0 ? 'timestampe not-first' : 'timestampe' } >
                      <Slider {...settings}>
                        {
                          timestampValues.map( (val, idx) => (
                            <KeynoteTimeStampItem key={idx} onClick={() => {setActiveId(val.id)}} className={ activeId === val.id ? "active" : "" }>
                              <button onClick={() => playerRef.current.seekTo(val.time) }>
                                <KeynoteTimeStampImg className='thumb'>
                                  <img src={val.thumbnail}></img>
                                </KeynoteTimeStampImg>
                                <div className='title'>{val.title}</div>
                                <div className='txt'> {val.text}</div>
                              </button>
                            </KeynoteTimeStampItem>
                          ))
                        }
                      </Slider>
                    </KeynoteTimeStampWrap>
                  </KeynoteTimeStamp>
                </>
              }

            </KeynoteContText>
			</KeynoteContInner>

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

		</KeynoteContContainer>
	)
}

export default KeynoteCont;
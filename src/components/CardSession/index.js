import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImage, VideoIcon, CardInfo, CardTitle, CardText, CardTagWrap, CardTag, CardMore, CardBookmark, KeynoteContMark, CardType, CardTypeInner, BookmarkTooltip, LoadingCard, LoadingCardInner, LoadingCardTop, LoadingCardTopInner, LoadingCardIcon, LoadingCardBottom } from './CardSessionElements';

const BookmarkToggleItem = ({ setModal, setModalFalse, tooltipOpen, setTooltipOpen }) => {
  const [Bookmark, setBookmark] = useState(false);

  const onClickHandler = (e)=> {
    e.preventDefault();

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

// id : 아이디
// col : card 너비
// border : border 유무
// bookmark : 북마크 유무
// img : 이미지 URL
// title : 제목
// discription : 내용
// video : 비디오인 경우
// tag : 태그
// type : 세션 타입
// listYn : 리스트 페이지인 경우
// setModal : 북마크 설정
// setModalFalse : 북마크 해제
// loading : 로딩 유무
// keynote : 키노트 유무
const CardSession = ({ id, col, border, image, title, discription, bookmark, video, tag, type, listYn, live, setModal, setModalFalse, loading, keynote }) => {
  const [phase2, setPhase2] = useState(true);
  const [phase3, setPhase3] = useState(false);

  let tagLive = live;
  const [isLive, setIsLive] = useState(false);

  const tagWrapRef = useRef();
  const tagInner = useRef();

  let tagData = [...tag]
  const [wrapWidth, setWrapWidth] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);

  if( wrapWidth < innerWidth ){ //태그가 넘치는 경우
    //tag slice
    if( tag && tag.length > 2 ){
      tagData = tagData.slice(0,1);
    }
  }else {
    //tag slice
    if( tag && tag.length > 2 ){
      tagData = tagData.slice(0,2);
    }
  }

  useLayoutEffect(()=>{
    if( loading ){
      return
    }

    if( tagLive === 'on') {
      setIsLive(true)
    };

    const tagWrapWidth = tagWrapRef.current.offsetWidth;
    const tagInnerWidth = tagInner.current.offsetWidth;
    setWrapWidth(tagWrapWidth);
    setInnerWidth(tagInnerWidth);
  },[])

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const closeTooltip = () => {
    setTooltipOpen(false);
  }

  return(
		<Card className={loading ? 'loading ' + col : col} border={border} listYn={listYn}>
      {
        loading
        ? <LoadingCard>
            <LoadingCardInner>
              <LoadingCardTop>
                <LoadingCardTopInner>
                  <LoadingCardIcon>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                  </LoadingCardIcon>
                </LoadingCardTopInner>
              </LoadingCardTop>
              <LoadingCardBottom>
                <div></div>
                <div></div>
                <div></div>
              </LoadingCardBottom>
            </LoadingCardInner>
          </LoadingCard>
        :
          <>
            {/* 퍼블 : 동일한 세션 디테일 페이지로 이동시킴 */}
            <Link to={"/sessionDetail"}>
            {/* <Link to={"/liveTech/" + id}> */}
              <CardImage className={ video ? 'card_img has-dim' : 'card_img' }>
                {  video ? <VideoIcon></VideoIcon> : null}
                <img src={image} alt={discription}></img>
                {
                  type === "LIVE"
                  ? <CardTitle className='is-live'>{title}</CardTitle>
                  : <CardTitle>{title}</CardTitle>
                }
              </CardImage>

              <CardInfo className='Text'>
                <CardText>{discription}</CardText>
                {
                  tag &&
                  <CardTagWrap ref={tagWrapRef}>
                    <div className='tag_inner' ref={tagInner}>
                      {
                        tagData&&tagData.map((item, idx)=>(
                          <CardTag key={idx}>{item}</CardTag>
                        ))
                      }
                      <CardMore className={tag.length > 2 ? 'is-active' : null}>+ {tag.length - tagData.length}</CardMore>
                    </div>
                  </CardTagWrap>
                }
              </CardInfo>

              {
                type &&
                phase2 || phase3
                ?
                  type === "LIVE"
                  /* LIVE On is provided only in 3 (live red tag on the first card is a sample)  */
                  ? <CardType className={ isLive ? 'onLive' : '' }><CardTypeInner className='inner'><span className='tag'>{type}</span></CardTypeInner></CardType>
                  : <CardType className={ isLive ? 'onLive' : '' }><CardTypeInner className='inner'><span className='tag'>{type}</span></CardTypeInner></CardType>
                : <CardType ><CardTypeInner className='inner'><span className='tag'>{type}</span></CardTypeInner></CardType>
              }
            </Link>

            {
              bookmark && 
              <CardBookmark>
                <BookmarkToggleItem setModal={setModal} setModalFalse={setModalFalse} tooltipOpen={tooltipOpen} setTooltipOpen={setTooltipOpen}/>
              </CardBookmark>
            }

            {/* Bookmark tooltip */}
            <BookmarkTooltip className={ tooltipOpen ? 'bookmark_tooltip is-open' : 'bookmark_tooltip' }>
              Bookmarks are available after signing in. <a href="https://developer.samsung.com/dashboard/support">Sign in</a>
              <button className='close_btn' onClick={closeTooltip}></button>
            </BookmarkTooltip>
          </>
      }
		</Card>
  )
}

export default CardSession;
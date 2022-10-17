import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

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
    <S.KeynoteContMark className={Bookmark ? "Bookmark-checked" : ""} onClick={onClickHandler}></S.KeynoteContMark>
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
  },[loading, tagLive])

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const closeTooltip = () => {
    setTooltipOpen(false);
  }

  return(
		<S.Card className={loading ? 'loading ' + col : col} border={border} listYn={listYn}>
      {
        loading
        ? <S.LoadingCard>
            <S.LoadingCardInner>
              <S.LoadingCardTop>
                <S.LoadingCardTopInner>
                  <S.LoadingCardIcon>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                  </S.LoadingCardIcon>
                </S.LoadingCardTopInner>
              </S.LoadingCardTop>
              <S.LoadingCardBottom>
                <div></div>
                <div></div>
                <div></div>
              </S.LoadingCardBottom>
            </S.LoadingCardInner>
          </S.LoadingCard>
        :
          <>
            {/* 퍼블 : 동일한 세션 디테일 페이지로 이동시킴 */}
            <Link to={"/sessionDetail"}>
            {/* <Link to={"/liveTech/" + id}> */}
              <S.CardImage className={ video ? 'card_img has-dim' : 'card_img' }>
                {  
                  video && <S.VideoIcon></S.VideoIcon>
                }
                <img src={image} alt={discription}></img>
                {
                  type === "LIVE"
                  ? <S.CardTitle className='is-live'>{title}</S.CardTitle>
                  : <S.CardTitle>{title}</S.CardTitle>
                }
              </S.CardImage>

              <S.CardInfo className='Text'>
                <S.CardText>{discription}</S.CardText>
                {
                  tag &&
                  <S.CardTagWrap ref={tagWrapRef}>
                    <div className='tag_inner' ref={tagInner}>
                      {
                        tagData&&tagData.map((item, idx)=>(
                          <S.CardTag key={idx}>{item}</S.CardTag>
                        ))
                      }
                      <S.CardMore className={tag.length > 2 ? 'is-active' : null}>+ {tag.length - tagData.length}</S.CardMore>
                    </div>
                  </S.CardTagWrap>
                }
              </S.CardInfo>
              {
                type === "LIVE"
                ? <S.CardType className={ isLive ? 'onLive' : '' }><S.CardTypeInner className='inner'><span className='tag'>{type}</span></S.CardTypeInner></S.CardType>
                : <S.CardType ><S.CardTypeInner className='inner'><span className='tag'>{type}</span></S.CardTypeInner></S.CardType>
              }
            </Link>

            {
              bookmark && 
              <S.CardBookmark>
                <BookmarkToggleItem setModal={setModal} setModalFalse={setModalFalse} tooltipOpen={tooltipOpen} setTooltipOpen={setTooltipOpen}/>
              </S.CardBookmark>
            }

            {/* Bookmark tooltip */}
            <S.BookmarkTooltip className={ tooltipOpen ? 'bookmark_tooltip is-open' : 'bookmark_tooltip' }>
              Bookmarks are available after signing in. <a href="https://developer.samsung.com/dashboard/support">Sign in</a>
              <button className='close_btn' onClick={closeTooltip}></button>
            </S.BookmarkTooltip>
          </>
      }
		</S.Card>
  )
}

export default CardSession;
import React, {useState, useEffect, useRef} from 'react';
import Slider from 'react-slick';
import { KeynoteContContainer, KeynoteContInner, KeynoteContVideo, KeynoteContSoon, KeynoteContText, KeynoteContTitle, KeynoteContDesc, KeynoteBadge, KeynoteBadgeWrap } from '../KeynoteCont/KeynoteContElements';
import { SessionRoomNoti, SessionRoomSchedule, RoomScheduleGrid, SessionRoomScheduleInner, RoomTitle, RoomScheduleBox, RoomScheduleInner, RoomScheduleTime, RoomScheduleTitle, RoomScheduleWrap } from './../SessionRoomCont/SessionRoomContElement';
import Popup from '../Popup'
import  ReactPlayer  from  'react-player/lazy'
import { Link } from 'react-router-dom';


const MegaSessionCont = (props)=>{
	//phase4 유무 체크
	const [phase4, setPhase4] = useState(false);

  const ref = useRef(null);
  const playerRef = useRef(null);

  const [modal, setModal] = useState(true);
  const openPopup = ()=>{
    setModal(true);
  }
	return (
    <>
      <KeynoteContContainer>
      <KeynoteContInner className='KeynoteContInner'>
        {
          props.released
          ?
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

          :	<KeynoteContVideo className='KeynoteContVideo'>
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
              <KeynoteContSoon className='LiveVideo'>
                <div className='title'>The next session<br/>will begin at 16:30 PM</div>
                <div className='desc'>Please refresh this page at 16:30</div>
              </KeynoteContSoon>
          </KeynoteContVideo>
        }
        <KeynoteContText className={ props.session ? 'KeynoteContText is-session' : 'KeynoteContText' }>
          {
            props.released && !props.vodOpen // 라이브 오픈 후, vod 업로드 이전
            ? <KeynoteBadgeWrap>
                <KeynoteBadge>
                  <div className='inner'>
                    <span className='tag'>LIVE</span>
                  </div>
                </KeynoteBadge>
              </KeynoteBadgeWrap>
            : ''
          }
          <KeynoteContTitle className='KeynoteContTitle'>
            <div className='title'>{props.title}</div>
          </KeynoteContTitle>
          <KeynoteContDesc className='KeynoteContDesc' dangerouslySetInnerHTML={{ __html : props.desc }} />
          <SessionRoomNoti>Welcome to the Live Session Room! Catch live sessions streaming right here, in real time. Please note that actual running times may be subject to change and possibly differ slightly from what has been previously announced.</SessionRoomNoti>
        </KeynoteContText>
      </KeynoteContInner>
    </KeynoteContContainer>

    {
      /* SessionRoomSchedule */
    }
      <SessionRoomSchedule>
        <SessionRoomScheduleInner>
          <RoomTitle>Schedule</RoomTitle>
          {
            /* RoomScheduleWrap */
          }

          <RoomScheduleWrap>
            <RoomScheduleInner>
                <div className='top'>
                  <RoomScheduleTitle>16:30 - 17:40 PT</RoomScheduleTitle>
                </div>
                <RoomScheduleGrid>
                  <RoomScheduleBox>
                    <Link to="/sessionDetail">
                      <div className='title'>Immersive audio</div>
                      <div className='time'>16:30 - 17:00</div>
                      <span>View More</span>
                    </Link>
                  </RoomScheduleBox>
                  <RoomScheduleBox>
                    <Link to="/sessionDetail">
                      <div className='title'>Samsung Wallet, it's convenient, personal and safe</div>
                      <div className='time'>17:00 - 17:40</div>
                      <span>View More</span>
                    </Link>
                  </RoomScheduleBox>
                </RoomScheduleGrid>

            </RoomScheduleInner>
          </RoomScheduleWrap>

        </SessionRoomScheduleInner>
      </SessionRoomSchedule>
      {
        modal &&
        <Popup
          modal={modal}
          setModal={setModal}
          notify="Please refresh this page at 16:30 <Br />Do you want to refresh"
          btnText="OK"
        />
      }
    </>

	)
}

export default MegaSessionCont;
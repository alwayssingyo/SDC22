import React, {useState, useEffect, useRef} from 'react';
import Slider from 'react-slick';
import { KeynoteContContainer, KeynoteContInner, KeynoteContVideo, KeynoteContSoon, KeynoteContText, KeynoteContTitle, KeynoteContDesc, KeynoteBadge, KeynoteBadgeWrap } from '../KeynoteCont/KeynoteContElements';
import { SessionRoomNoti, SessionRoomSchedule, RoomScheduleGrid, SessionRoomScheduleInner, RoomTitle, RoomScheduleBox, RoomScheduleInner, RoomScheduleTime, RoomScheduleTitle, RoomScheduleWrap } from './SessionRoomContElement';
import  ReactPlayer  from  'react-player/lazy'
import { Link } from 'react-router-dom';


const SessionRoomCont = (props)=>{
	//phase4 유무 체크
	const [phase4, setPhase4] = useState(false);



  const ref = useRef(null);

  const playerRef = useRef(null);

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
                  <div className='title'>The next session<br/>will begin at 11:30 AM</div>
                </KeynoteContSoon>
            </KeynoteContVideo>
          }

          <KeynoteContText className={ props.session ? 'KeynoteContText is-session' : 'KeynoteContText' }>
            {
              props.released && !props.vodOpen && // 라이브 오픈 후, vod 업로드 이전
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
            </KeynoteContTitle>
            <KeynoteContDesc className='KeynoteContDesc' dangerouslySetInnerHTML={{ __html : props.desc }} />
            <SessionRoomNoti>Welcome to the Live Session Room! Catch live sessions streaming right here, in real time. Please note that actual running times may be subject to change and possibly differ slightly from what has been previously announced. </SessionRoomNoti>
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
          /* RoomScheduleWra */
        }

        <RoomScheduleWrap>
          <RoomScheduleInner>
              <div className='top'>
                <RoomScheduleTitle>11:30 - 11:55 PT</RoomScheduleTitle>
              </div>
              <RoomScheduleGrid className='w-100'>
                <RoomScheduleBox>
                  <Link to="/sessionDetail">
                    <div className='title'>What's new in One UI 5</div>
                    <div className='time'>11:30 - 11:55</div>
                    <span>View More</span>
                  </Link>
                </RoomScheduleBox>
              </RoomScheduleGrid>

          </RoomScheduleInner>
        </RoomScheduleWrap>

        <RoomScheduleWrap>
          <RoomScheduleInner>
            <div className='top'>
              <RoomScheduleTitle>13:00 - 16:30 PT</RoomScheduleTitle>
            </div>
            <RoomScheduleGrid>
              <RoomScheduleBox>
                <Link to="/sessionDetail">
                  <div className='title'>SmartThings Find: Find alongside 200+ million users</div>
                  <div className='time'>13:00 - 13:25</div>
                  <span>View More</span>
                </Link>
              </RoomScheduleBox>
              <RoomScheduleBox>
                <Link to="/sessionDetail">
                  <div className='title'>What's new in Bixby for Smart Home</div>
                  <div className='time'>13:35 - 14:00</div>
                  <span>View More</span>
                </Link>
              </RoomScheduleBox>
              <RoomScheduleBox>
                <Link to="/sessionDetail">
                  <div className='title'>Google and Samsung strengthen enterprise ecosystem together</div>
                  <div className='time'>14:10 - 14:35</div>
                  <span>View More</span>
                </Link>
              </RoomScheduleBox>
              <RoomScheduleBox>
                <Link to="/sessionDetail">
                  <div className='title'>Intuitive multitasking experience based upon Android 12L </div>
                  <div className='time'>14:45 – 15:10</div>
                  <span>View More</span>
                </Link>
              </RoomScheduleBox>
              <RoomScheduleBox>
                <Link to="/sessionDetail">
                  <div className='title'>What's new in Tizen?</div>
                  <div className='time'>15:20 - 15:45</div>
                  <span>View More</span>
                </Link>
              </RoomScheduleBox>
             <RoomScheduleBox>
               <Link to="/sessionDetail">
                  <div className='title'>Healthcare research hub</div>
                  <div className='time'>15:55 – 16:30</div>
                  <span>View More</span>
                </Link>
              </RoomScheduleBox>
            </RoomScheduleGrid>

          </RoomScheduleInner>
        </RoomScheduleWrap>

      </SessionRoomScheduleInner>
    </SessionRoomSchedule>
    </>
	
	)
}

export default SessionRoomCont;
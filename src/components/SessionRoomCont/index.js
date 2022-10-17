import React, {useRef} from 'react';
import * as S from '../KeynoteCont/style';
import * as RS from './style';
import  ReactPlayer  from  'react-player/lazy'
import { Link } from 'react-router-dom';


const SessionRoomCont = (props)=>{

  const playerRef = useRef(null);

	return (
    <>	
      <S.KeynoteContContainer>
        <S.KeynoteContInner className='KeynoteContInner'>

          {
            props.released
            ?
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

            :	<S.KeynoteContVideo className='KeynoteContVideo'>
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
                <S.KeynoteContSoon className='LiveVideo'>
                  <div className='title'>The next session<br/>will begin at 11:30 AM</div>
                </S.KeynoteContSoon>
            </S.KeynoteContVideo>
          }

          <S.KeynoteContText className={ props.session ? 'KeynoteContText is-session' : 'KeynoteContText' }>
            {
              props.released && !props.vodOpen && // 라이브 오픈 후, vod 업로드 이전
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
            </S.KeynoteContTitle>
            <S.KeynoteContDesc className='KeynoteContDesc' dangerouslySetInnerHTML={{ __html : props.desc }} />
            <RS.SessionRoomNoti>Welcome to the Live Session Room! Catch live sessions streaming right here, in real time. Please note that actual running times may be subject to change and possibly differ slightly from what has been previously announced. </RS.SessionRoomNoti>
          </S.KeynoteContText>
      </S.KeynoteContInner>
    </S.KeynoteContContainer>
  
    {/* SessionRoomSchedule */}
    <RS.SessionRoomSchedule>
      <RS.SessionRoomScheduleInner>
        <RS.RoomTitle>Schedule</RS.RoomTitle>

        <RS.RoomScheduleWrap>
          <RS.RoomScheduleInner>
              <div className='top'>
                <RS.RoomScheduleTitle>11:30 - 11:55 PT</RS.RoomScheduleTitle>
              </div>
              <RS.RoomScheduleGrid className='w-100'>
                <RS.RoomScheduleBox>
                  <Link to="/sessionDetail">
                    <div className='title'>What's new in One UI 5</div>
                    <div className='time'>11:30 - 11:55</div>
                    <span>View More</span>
                  </Link>
                </RS.RoomScheduleBox>
              </RS.RoomScheduleGrid>

          </RS.RoomScheduleInner>
        </RS.RoomScheduleWrap>

        <RS.RoomScheduleWrap>
          <RS.RoomScheduleInner>
            <div className='top'>
              <RS.RoomScheduleTitle>13:00 - 16:30 PT</RS.RoomScheduleTitle>
            </div>
            <RS.RoomScheduleGrid>
              <RS.RoomScheduleBox>
                <Link to="/sessionDetail">
                  <div className='title'>SmartThings Find: Find alongside 200+ million users</div>
                  <div className='time'>13:00 - 13:25</div>
                  <span>View More</span>
                </Link>
              </RS.RoomScheduleBox>
              <RS.RoomScheduleBox>
                <Link to="/sessionDetail">
                  <div className='title'>What's new in Bixby for Smart Home</div>
                  <div className='time'>13:35 - 14:00</div>
                  <span>View More</span>
                </Link>
              </RS.RoomScheduleBox>
              <RS.RoomScheduleBox>
                <Link to="/sessionDetail">
                  <div className='title'>Google and Samsung strengthen enterprise ecosystem together</div>
                  <div className='time'>14:10 - 14:35</div>
                  <span>View More</span>
                </Link>
              </RS.RoomScheduleBox>
              <RS.RoomScheduleBox>
                <Link to="/sessionDetail">
                  <div className='title'>Intuitive multitasking experience based upon Android 12L </div>
                  <div className='time'>14:45 – 15:10</div>
                  <span>View More</span>
                </Link>
              </RS.RoomScheduleBox>
              <RS.RoomScheduleBox>
                <Link to="/sessionDetail">
                  <div className='title'>What's new in Tizen?</div>
                  <div className='time'>15:20 - 15:45</div>
                  <span>View More</span>
                </Link>
              </RS.RoomScheduleBox>
             <RS.RoomScheduleBox>
               <Link to="/sessionDetail">
                  <div className='title'>Healthcare research hub</div>
                  <div className='time'>15:55 – 16:30</div>
                  <span>View More</span>
                </Link>
              </RS.RoomScheduleBox>
            </RS.RoomScheduleGrid>

          </RS.RoomScheduleInner>
        </RS.RoomScheduleWrap>

      </RS.SessionRoomScheduleInner>
    </RS.SessionRoomSchedule>
    </>
	
	)
}

export default SessionRoomCont;
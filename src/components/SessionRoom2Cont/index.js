import React, {useState, useEffect, useRef} from 'react';
import Slider from 'react-slick';
import { KeynoteContContainer, KeynoteContInner, KeynoteContVideo, KeynoteContSoon, KeynoteContText, KeynoteContTitle, KeynoteContDesc, KeynoteBadge, KeynoteBadgeWrap } from '../KeynoteCont/KeynoteContElements';
import { SessionRoomNoti, SessionRoomSchedule, RoomScheduleGrid, SessionRoomScheduleInner, RoomTitle, RoomScheduleBox, RoomScheduleInner, RoomScheduleTime, RoomScheduleTitle, RoomScheduleWrap } from './../SessionRoomCont/SessionRoomContElement';
import  ReactPlayer  from  'react-player/lazy'
import { Link } from 'react-router-dom';


const SessionRoom2Cont = (props)=>{
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
                    <div className='title'>Tizen everywhere</div>
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
              <RoomScheduleTitle>13:00 - 16:20 PT</RoomScheduleTitle>
            </div>
            <RoomScheduleGrid>
              <RoomScheduleBox>
                <Link to="/sessionDetail">
                  <div className='title'>Telehealth in Samsung devices</div>
                  <div className='time'>13:00 - 13:25</div>
                  <span>View More</span>
                </Link>
              </RoomScheduleBox>
              <RoomScheduleBox>
                <Link to="/sessionDetail">
                  <div className='title'>HDR10+/SALT and automatic HDR video creations for productions</div>
                  <div className='time'>13:35 - 14:00</div>
                  <span>View More</span>
                </Link>
              </RoomScheduleBox>
              <RoomScheduleBox>
                <Link to="/sessionDetail">
                  <div className='title'>8K visual quality and ecosystem</div>
                  <div className='time'>14:10 - 14:35</div>
                  <span>View More</span>
                </Link>
              </RoomScheduleBox>
              <RoomScheduleBox>
                <Link to="/sessionDetail">
                  <div className='title'>Introducing Blockchain Wallet with Knox Vault </div>
                  <div className='time'>14:45 – 15:10</div>
                  <span>View More</span>
                </Link>
              </RoomScheduleBox>
              <RoomScheduleBox>
                <Link to="/sessionDetail">
                  <div className='title'>Joint efforts on standardization toward open ecosystem of UWB services</div>
                  <div className='time'>15:20 - 15:45</div>
                  <span>View More</span>
                </Link>
              </RoomScheduleBox>
             <RoomScheduleBox>
               <Link to="/sessionDetail">
                  <div className='title'>Our journey to responsibly handling data</div>
                  <div className='time'>15:55 – 16:20</div>
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

export default SessionRoom2Cont;
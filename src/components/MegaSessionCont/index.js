import React, {useState, useRef} from 'react';
import * as S from '../KeynoteCont/style';
import * as RS from '../SessionRoomCont/style';
import Popup from '../Popup'
import  ReactPlayer  from  'react-player/lazy'
import { Link } from 'react-router-dom';


const MegaSessionCont = (props)=>{

  const playerRef = useRef(null);

  const [modal, setModal] = useState(true);
  
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
                <div className='title'>The next session<br/>will begin at 16:30 PM</div>
                <div className='desc'>Please refresh this page at 16:30</div>
              </S.KeynoteContSoon>
          </S.KeynoteContVideo>
        }
        <S.KeynoteContText className={ props.session ? 'KeynoteContText is-session' : 'KeynoteContText' }>
          {
            props.released && !props.vodOpen // 라이브 오픈 후, vod 업로드 이전
            ? <S.KeynoteBadgeWrap>
                <S.KeynoteBadge>
                  <div className='inner'>
                    <span className='tag'>LIVE</span>
                  </div>
                </S.KeynoteBadge>
              </S.KeynoteBadgeWrap>
            : ''
          }
          <S.KeynoteContTitle className='KeynoteContTitle'>
            <div className='title'>{props.title}</div>
          </S.KeynoteContTitle>
          <S.KeynoteContDesc className='KeynoteContDesc' dangerouslySetInnerHTML={{ __html : props.desc }} />
          <RS.SessionRoomNoti>Welcome to the Live Session Room! Catch live sessions streaming right here, in real time. Please note that actual running times may be subject to change and possibly differ slightly from what has been previously announced.</RS.SessionRoomNoti>
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
                  <RS.RoomScheduleTitle>16:30 - 17:40 PT</RS.RoomScheduleTitle>
                </div>
                <RS.RoomScheduleGrid>
                  <RS.RoomScheduleBox>
                    <Link to="/sessionDetail">
                      <div className='title'>Immersive audio</div>
                      <div className='time'>16:30 - 17:00</div>
                      <span>View More</span>
                    </Link>
                  </RS.RoomScheduleBox>
                  <RS.RoomScheduleBox>
                    <Link to="/sessionDetail">
                      <div className='title'>Samsung Wallet, it's convenient, personal and safe</div>
                      <div className='time'>17:00 - 17:40</div>
                      <span>View More</span>
                    </Link>
                  </RS.RoomScheduleBox>
                </RS.RoomScheduleGrid>

            </RS.RoomScheduleInner>
          </RS.RoomScheduleWrap>

        </RS.SessionRoomScheduleInner>
      </RS.SessionRoomSchedule>
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
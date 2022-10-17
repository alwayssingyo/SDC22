import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import Section from '../Section';
import CardSession from '../CardSession';
import Button from '../Button';
import ToastPopup from '../ToastPopup';

const MypageActivity = ()=>{

  // test data
  const SessionData = [
    {
      id: 1,
      title: 'Bixby-Best voice Interface for connected experience',
      date: '10/12 Start at 10:00',
      discription:'SDC21 builds connections and shapes the future of customer experiences. Enabling smarter, more seamless connectivity across devices',
      picture: process.env.PUBLIC_URL + '/images/img-session-02.png',
      sessionLink: 'session1',
      tag: ["Developer Program","Game","Design"],
      type: 'VOD',
    },
    {
      id: 2,
      title: 'Game-Focused, Developer-Focused: The Galaxy Store Rebooted',
      date: '10/12 Start at 10:00',
      discription:'SDC21 builds connections and shapes the future of customer experiences. Enabling smarter, more seamless connectivity across devices',
      picture: process.env.PUBLIC_URL + '/images/img-session-02.png',
      sessionLink: 'session2',
      tag: ["Mobile"],
      type: 'VOD',
    },
    {
      id: 3,
      title: 'Building the future Smart Home Today',
      date: '10/12 Start at 10:00',
      discription:'SDC21 builds connections and shapes the future of customer experiences. Enabling smarter, more seamless connectivity across devices',
      picture: process.env.PUBLIC_URL + '/images/img-session-02.png',
      sessionLink: 'session3',
      tag: ["Design","IoT"],
      type: 'VOD',
    },
    {
      id: 4,
      title: 'Bixby-Best voice Interface for connected experience',
      date: '10/12 Start at 10:00',
      discription:'SDC21 builds connections and shapes the future of customer experiences. Enabling smarter, more seamless connectivity across devices',
      picture: process.env.PUBLIC_URL + '/images/img-session-02.png',
      sessionLink: 'session1',
      tag: ["Developer Program","Game","Design"],
      type: 'VOD',
    },
    {
      id: 5,
      title: 'Game-Focused, Developer-Focused: The Galaxy Store Rebooted',
      date: '10/12 Start at 10:00',
      discription:'SDC21 builds connections and shapes the future of customer experiences. Enabling smarter, more seamless connectivity across devices',
      picture: process.env.PUBLIC_URL + '/images/img-session-02.png',
      sessionLink: 'session2',
      tag: ["Mobile"],
      type: 'VOD',
    },
    {
      id: 6,
      title: 'Building the future Smart Home Today',
      date: '10/12 Start at 10:00',
      discription:'SDC21 builds connections and shapes the future of customer experiences. Enabling smarter, more seamless connectivity across devices',
      picture: process.env.PUBLIC_URL + '/images/img-session-02.png',
      sessionLink: 'session3',
      tag: ["Design","IoT"],
      type: 'VOD',
    },
  ]

	const [modal, setModal] = useState(false);
  const [modalFalse, setModalFalse] = useState(false);

	return (
    <S.ActivityContainer>
      <S.ActivityInner>
        {
          SessionData.length > 0
          ? <>
              <Section title="My Activities">
                <S.SectionSubtext>Bookmarked</S.SectionSubtext>
                <S.SectionWrap>
                  {
                    SessionData.map((item, idx)=>(
                      <CardSession key={idx} id={item.id} col="col-3" title={item.title} date={item.date} discription={item.discription} image={item.picture} bookmark={true} tag={item.tag} type={item.type} setModal={setModal} setModalFalse={setModalFalse}/>
                    ))
                  }
                </S.SectionWrap>
              </Section>
              <S.MoreButton><Button color="white" size="medium" outline="outline">More</Button></S.MoreButton>
            </>
          : <Section title="My Activities">
              <S.ActivityNodata>
                <S.NodataTitle>You have no saved bookmark.</S.NodataTitle>
                <S.NodataLink><Link to='/liveTech'>View Sessions</Link></S.NodataLink>
              </S.ActivityNodata>
            </Section>
        }
      </S.ActivityInner>

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
    </S.ActivityContainer>
	)
}

export default MypageActivity;
import React, { useState } from 'react';
import * as S from './style';
import Section from '../Section';
import CardSession from '../CardSession';
import ToastPopup from '../ToastPopup';

const SpeakerDetailBottom = (props)=>{
  
  //test data
  const SessionData = [ 
    {
      id: 1,
      title: 'SDC22 Keynote',
      discription:"Unveiling Samsung's latest software advances, building toward a future that's smarter, safer and personally connected. Discover our broad ecosystem of powerful, next-level tech.",
      picture: process.env.PUBLIC_URL + '/images/Keynote_Thumbnails.png',
      sessionLink: 'session1',
      tag: [],
      keynote: true
    },
    {
      id: 2,
      title: 'Game-Focused, Developer-Focused: The Galaxy Store Rebooted',
      discription:'SDC21 builds connections and shapes the future of customer experiences. Enabling smarter, more seamless connectivity across devices',
      picture: process.env.PUBLIC_URL + '/images/img-live-session-01.png',
      sessionLink: 'session2',
      tag: ["Mobile"],
      type: 'LIVE',
    },
    {
      id: 3,
      title: 'Building the future Smart Home Today',
      discription:'SDC21 builds connections and shapes the future of customer experiences. Enabling smarter, more seamless connectivity across devices',
      picture: process.env.PUBLIC_URL + '/images/img-session-01.png',
      sessionLink: 'session3',
      tag: ["Design","IoT"],
      type: 'On-demand',
    },
  ]

	const [modal, setModal] = useState(false);
  const [modalFalse, setModalFalse] = useState(false);

  return(
    <S.DetailBottomContainer>
      <S.DetailBottomInner>
        <Section title="Related Sessions">
          <S.SectionWrap>
            {
              SessionData.map((item, idx)=>(
                <CardSession key={idx} id={item.id} col="col-3" title={item.title} date={item.date} discription={item.discription} image={item.picture} bookmark={true} tag={item.tag} type={item.type} setModal={setModal} setModalFalse={setModalFalse} keynote={item.keynote}/>
              ))
            }
          </S.SectionWrap>
        </Section>
      </S.DetailBottomInner>

			{/* toast popup */}
      {/* ????????? ?????? ?????? */}
      <ToastPopup
        modal={modal}
        setModal={setModal}
        state="success" 
        text="This session is kept as a bookmark."
      />

      {/* ????????? ?????? ?????? */}
      <ToastPopup
        modal={modalFalse}
        setModal={setModalFalse}
        state="success" 
        text="This session is no longer bookmarked."
      />
    </S.DetailBottomContainer>
  )
}

export default SpeakerDetailBottom;
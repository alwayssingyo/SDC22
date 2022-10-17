import React, { useState } from 'react';
import * as S from './style'
import Section from '../Section';
import CardSpeaker from '../CardSpeaker';
import CardSession from '../CardSession';
import CardLink from '../CardLink';
import Codelab from '../Codelab';
import Banner from '../Banner'
import ToastPopup from '../ToastPopup';

const SessionDetailCont = ()=>{

  // test data
  const SpeakersData = [
    {
      title: 'Hye Soon Jeong',
      discription:'Samsung Electronics',
      personImage: process.env.PUBLIC_URL + '/images/MainSpeaker_6.png',
      id: '01',
    },
  ]

  const SessionData = [
    {
      id: 1,
      title: 'One UI 4: Focus, Comfort, Self-Expression',
      date: '10/12 Start at 10:00',
      discription:"One UI 4 is the next phase in the evolution of One UI. In this session, we'll see One UI 4 innovations that help you focus on what matters, feel comfortable while using the interface and express yourself and your style — watch for the exploding emoji! And you'll get a look at how we're using design to unify our ecosystem, from phones and foldables to tablets, Galaxy Books and watches.",
      picture: process.env.PUBLIC_URL + '/images/img-live-session-01.png',
      sessionLink: 'session1',
      tag: ["Content & Services","Developer Program","Design"],
      type: 'LIVE',
    },
    {
      id: 2,
      title: 'Bixby, the Best Voice Interface for a World of Connected Devices',
      date: '10/12 Start at 10:00',
      discription: "Join this session to learn why Bixby is the best voice interface for connecting users and devices. Check out the cross-device experiences that Bixby offers across Samsung's ecosystem. We will also be introducing the Bixby Home Platform and tools to add intelligence to your devices.",
      picture: process.env.PUBLIC_URL + '/images/img-session-04.png',
      sessionLink: 'session2',
      tag: ["Mobile"],
      type: 'On-demand',
    },
    {
      id: 3,
      title: 'The Future of Smart Home Is Now',
      date: '10/12 Start at 10:00',
      discription:'Building on the SmartThings vision of creating the world’s best in-home experience, we will announce our strategy on Matter, platform innovations and new services in the market — including the SmartThings Find partnership program, SmartThings Energy and SmartThings Build, a home developer and builder solution to embed smart home technology and elevate the resident experience.',
      picture: process.env.PUBLIC_URL + '/images/img-session-02.png',
      sessionLink: 'session3',
      tag: ["Design","IoT", "Design"],
      type: 'On-demand',
    },
  ]

  const CodelabData = [
    {
      id: 1,
      title: 'What’s New in Tizen 6.5',
      discription:'This is what’s new for Tizen 6.5. We’ve enhanced the device ecosystem and connections, developed a 2D and 3D unified UI and created an advanced app development environment for an improved developer and user experience.',
      picture: process.env.PUBLIC_URL + '/images/img-session-02.png',
      link : 'https://www.youtube.com/c/SamsungDevelopers/videos'
    },
    {
      id: 2,
      title: 'The Birth of the New Watch Face Studio',
      discription:"Introducing how Watch Face Studio, a tool for creating watch faces, was born and developed. Watch Face Studio is an interactive organic tool that keeps evolving and allows you to communicate and collaborate with other designers. See how easy and fun it can be to design without coding. Learn how to add color and style to your identity, and see how fast it can become reality! Don't hesitate to visit the Code Lab, where you can enjoy Watch Face Studio without installing it.",
      picture: process.env.PUBLIC_URL + '/images/img-session-02.png',
      link : 'https://www.youtube.com/c/SamsungDevelopers/videos'
    },
    {
      id: 3,
      title: 'Build Your App in the New Watch Ecosystem',
      discription:'Wear OS Powered by Samsung is a new unified platform based on Android. As a result, the concepts and tools you use for Android development are applicable to Wear OS. This tech talk runs through a range of new APIs, tools and more to help start your watch app development.',
      picture: process.env.PUBLIC_URL + '/images/img-session-02.png',
      link : 'https://www.youtube.com/c/SamsungDevelopers/videos'
    },
  ]

  const LabData = [
    {
      id: 1,
      title: 'Create a Daily Step Counter on Galaxy Watch',
      discription:'Create a native app for Galaxy Watch4, operating on Wear OS powered by Samsung, using Health Platform to using Health Platform to using Health Platform to samsung',
      picture: process.env.PUBLIC_URL + '/images/img-codelab.png',
      link : 'https://developer.samsung.com/codelab'
    },
    {
      id: 2,
      title: 'Create a Daily Step Counter on Galaxy Watch',
      discription:'Create a native app for Galaxy Watch4, operating on Wear OS powered by Samsung',
      picture: process.env.PUBLIC_URL + '/images/img-codelab.png',
      link : 'https://developer.samsung.com/codelab'
    },
  ]

  const BannerText = ["Announcing our testing partnership with BrowserStack", "Greetings Web Developers", "Webfont rendering in canvas issue"]
  const BannerUrl = ["https://developer.samsung.com/codelab", "https://www.youtube.com/c/SamsungDevelopers/videos", "https://developer.samsung.com/codelab"]

	const [modal, setModal] = useState(false);
  const [modalFalse, setModalFalse] = useState(false);

	return (
    <>
      <S.DetailContContainer>
        <S.DetailContInner>
          <Section title="Speakers">
            <S.SectionWrap>
              {
                SpeakersData.map((item, idx)=>(
                  <CardSpeaker key={idx} id={item.id} title={item.title} discription={item.discription} personImage={item.personImage}/>
                ))
              }
            </S.SectionWrap>
          </Section>
          <Section title="Related Sessions">
            <S.SectionWrap>
              {
                SessionData.map((item, idx)=>(
                  <CardSession key={idx} id={item.id} col="col-3" title={item.title} date={item.date} discription={item.discription} image={item.picture} bookmark={true} tag={item.tag} type={item.type} setModal={setModal} setModalFalse={setModalFalse}/>
                ))
              }
            </S.SectionWrap>
          </Section>
          <Section title="Related Videos">
            <S.SectionWrap>
              {
                CodelabData.map((item, idx)=>(
                  <CardLink key={idx} id={item.id} col="col-3" title={item.title} discription={item.discription} image={item.picture} video={true} link={item.link}/>
                ))
              }
            </S.SectionWrap>
          </Section>
          <Section title="Code Lab">
            <S.SectionWrap>
              {
                LabData.map((item, idx)=>(
                  <Codelab key={idx} id={item.id} title={item.title} discription={item.discription} image={item.picture} link={item.link}/>
                ))
              }
            </S.SectionWrap>
          </Section>
          <Section title="Resources">
            <Banner
              fullWidth = {true}
              title="Getting Started"
              desc="Learn how to extend Bixby that enables users to get things done using natural language."
              url="https://developer.samsung.com/dashboard/support"
              linkText="Learn More"
            />
            <Banner
              fullWidth = {true}
              title="Getting Started"
              desc="Learn how to extend Bixby that enables users to get things done using natural language.."
              url="https://developer.samsung.com/dashboard/support"
              linkText="Learn More"
            />
          </Section>
          <Section title="Technical Q&A">
            <Banner
              fullWidth = {true}
              border="border"
              title="Samsung Developer Forum"
              desc="These forums are powered by you and thousands of other passionate developers. We’re excited that you’ve decided to join us. We want to help you create the next awesome app or design, so click and find your place."
              url={BannerUrl}
              linkText={BannerText}
           />
          </Section>
        </S.DetailContInner>
      </S.DetailContContainer>

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
    </>
	)
}

export default SessionDetailCont;
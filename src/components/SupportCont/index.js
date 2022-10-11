import React from 'react';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Support, SupportWrap, SupportInner, SupportTitle, SupportBanner, SupportBannerTitle, SupportBannerInner, SupportItem, SupportItemTitle } from './SupportContElements';
import Accordion from '../Accordion';
import Banner from '../Banner';


const SupportCont = ()=> {
  const [phase4, setPhase4] = useState(false);

	return (
    <Support>
      <Tabs>
        <SupportBanner>
          <SupportBannerTitle>SDC22 Support</SupportBannerTitle>
          <SupportBannerInner>
            <Banner
              title="Technical Q&A Forum"
              desc="For more technical questions, take a scroll through the forum, or post your own question to get suggestions straight from the community."
              url="https://developer.samsung.com/dashboard/support"
              buttonLengthOne={true}
              buttonUrl="https://forum.developer.samsung.com/"
              buttonText="Go to Q&A Forum"
              popupRight={true} //로그인 전일 경우 true
            />
            <Banner
              title="Watch SDC21"
              desc="See the highlights, revisit your favorite sessions, or catch what you missed from SDC21."
              buttonLengthOne={true}
              buttonUrl="https://www.youtube.com/playlist? list=PL7PfK8Mp1rLHOrUvW_v9h12pd7TFOXMEL"
              buttonText="Go to see SDC21"
            />
          </SupportBannerInner>
        </SupportBanner>
        <SupportTitle>FAQ</SupportTitle>
        <TabList>
          <Tab>Online</Tab>
          <Tab>Offline</Tab>
        </TabList>

        <TabPanel>
          <SupportWrap>
            <SupportInner>
              <SupportItem>
                <Accordion
                title="What’s Samsung Developer Conference?"
                content="SDC22 brings thousands of developers, creators and designers together to build connections and shape the future of customer experiences. Discover the latest technological innovations enabling the design of simple, convenient and seamless experiences between devices, and be empowered to create cutting-edge solutions within an expansive ecosystem. The event is packed with lectures by industry experts and opportunities for hands-on learning about the newest reveals, so you’ll get first-hand experience of the latest tech innovations shaping a new era of experiences."
                />
                <Accordion
                title="What can I expect to see at SDC22?"
                content="You’ll find out about the latest technologies from Samsung, compelling presentations by industry experts, technical sessions offering insights into SmartThings, Bixby, Security/Privacy, Tizen, and a whole lot more."
                />
                <Accordion
                title="Where and when does SDC22 take place?"
                content="SDC22 will be held on October 12, 2022, and will take place both online and offline. The offline event will take place in Moscone North, San Francisco with a limited audience, but all content and sessions will be made available for free virtually, so anyone can connect to SDC22 from anywhere in the world."
                />
                <Accordion
                title="How much does it cost to attend SDC22?"
                content="Online attendance is completely free of charge."
                />
                <Accordion
                title="How can I sign up to attend SDC22 in person?"
                content="Unfortunately, in-person attendance of SDC22 is limited due to Covid-19 concerns, however, all the content presented at the event will be available online. We hope that the next SDC presents the opportunity for us to connect more freely with those wanting to participate offline, to meet and discuss the latest technologies."
                />
                <Accordion
                title="Are there any conditions for registration?"
                content="Developers, designers, and anyone interested in learning about the tech innovations can join the online event without registering."
                />
                <Accordion
                title="What if I miss the keynote or sessions? Can I watch them again?"
                content="After live streaming of all keynotes and highlight sessions ends, you will be able to access recordings on-demand on the SDC site after the last day of the event."
                />
                <Accordion
                title=" Where can I find the agenda in more detail?"
                content="In short, the agenda for SDC22 consists of: A keynote that gives an overview of Samsung's strategy and vision for the latest technologies, Tech Sessions and Q&A that go into more detail on what was mentioned in the keynote. Then, there’s the Hacker's Playground where you can experiment with this years’ security tech innovations and use them to compete with other attendees for fun. If you would like to see all the content by S/W, and all the technologies covered during SDC22, we suggest doing a more specific search on the Tech Sessions page."
                />
                <Accordion
                title="How can I keep updated on the latest announcements from SDC22?"
                content="Updates and other relevant news released before SDC22 can be found on the Samsung Developers Conference Facebook <a href=https://www.facebook.com/samsungdev target='_blank' rel='noopener noreferrer'>(https://www.facebook.com/samsungdev)</a>, Instagram <a href=https://instagram.com/samsung_dev target='_blank' rel='noopener noreferrer'>(https://instagram.com/samsung_dev)</a>, Twitter <a href=https://twitter.com/samsung_dev  target='_blank' rel='noopener noreferrer'>(https://twitter.com/samsung_dev)</a> and LinkedIn <a href=https://www.linkedin.com/company/samsungdevelopers  target='_blank' rel='noopener noreferrer'>(https://www.linkedin.com/company/samsungdevelopers)</a> accounts. You can also subscribe to the newsletter at the bottom of the main event page so you don’t miss out on a single SDC22 update!"
                />
                <Accordion
                title="What should I do if I have other questions?"
                content="If you have any further questions, feel free to contact us at <a href=mailto:sdcsupport@samsungdevelopers.com target='_blank' rel='noopener noreferrer'>sdcsupport@samsungdevelopers.com</a>."
                />      
              </SupportItem>  
            </SupportInner>
          </SupportWrap>
        </TabPanel>
        <TabPanel>
          <SupportWrap>
            <SupportInner>
              <SupportItem>
                <SupportItemTitle>General</SupportItemTitle>
                <Accordion
                title="When and where is the conference?"
                content="SDC22 will be held both online and offline on Oct 12, 2022. Taking place in Moscone North, San Francisco, the event will be attended in person by a limited audience."
                />
                <Accordion
                title="Who is invited to attend the event in person?"
                content="The list of SDC22 offline attendees includes Samsung Electronics partners, Samsung employees and invited members of the media. All attendees will be able to explore the exhibition, as well as enjoy the networking opportunities with fellow attendees, allowing for insight sharing and the discussion of future technologies."
                />
                <Accordion
                title="What can I expect to see at SDC22 offline event?"
                content="Presented by industry-leading experts, the Keynote announcement is the most engaging way to experience Samsung's latest technology. The reveals are then further explained in a variety of Tech Sessions that cover topics like SmartThings, Bixby, Security/Privacy, Tizen and more. The exhibition is where you can experience the tech and software for yourself. Additionally, there will be networking opportunities where ideas can be shared and inspiration awoken with fellow attendees, plus other fun activities to enjoy, too!"
                />
                <Accordion
                title="What time should I arrive on SDC Day?"
                content="We will be kicking off SDC22 with the Keynote at 10am sharp, and open registration desk at 8am, so please make sure you make it to Moscone North with a little time to spare, so you don’t miss out on the exciting news! "
                />
                <Accordion
                title="Will the event be recorded or live streamed?"
                content="Both! The Keynote and Tech Sessions will all be live streamed via SDC22 website, so that people can tune in globally to hear the news, too. All content presented at SDC22 will be recorded and made available once the event has ended through the SDC22 website."
                />
                <Accordion
                title="Where can I see the full schedule of events?"
                content="To take a look at the full SDC22 schedule, <a href='#/schedule'>Go to schedule</a>"
                />
                <Accordion
                title="Could a photo of me at the event be used in promotional materials?"
                content="Yes, absolutely! Now and then, the shots our SDC photographers capture are used in our promotional materials."
                />
                <Accordion
                title="What should I do if I don’t want my photo taken?"
                content="We understand that not everyone wants to have their photo taken, and we fully respect the privacy of our attendees. Please help us to do that by informing our Registration Team of your preferences when checking in."
                />
                <Accordion
                title="Help! I’ve lost something. What do I do?"
                content=": If you think you might have misplaced something and the event is still running, head straight to the Registration Desk. Your item may have been found and handed in by someone else. And if you only realize that something’s gone AWOL after SDC22 ends, please send over a description of it by email to <a href=mailto:sdcsupport@samsungdevelopers.com target='_blank' rel='noopener noreferrer'>sdcsupport@samsungdevelopers.com</a>."
                />
                <Accordion
                title="I have more questions that haven’t been mentioned here. What should I do?"
                content="No problem! For any further questions, feel free to contact us at <a href=mailto:sdcsupport@samsungdevelopers.com target='_blank' rel='noopener noreferrer'>sdcsupport@samsungdevelopers.com</a>."
                />
              </SupportItem>
              <SupportItem>
                <SupportItemTitle>Registration</SupportItemTitle>
                <Accordion
                title="How can I pick up my badge?"
                content="Please bring your badge confirmation email (with QR code) to the Registration Desk to pick up your badge. We do not allow bulk pick up or picking up for others. You may not pick up your badge without a QR code."
                />
                <Accordion
                title="I can’t remember my Samsung account and/or password for my registration. How can I retrieve this information?"
                content="We can help with that! On the login page, please select “find ID.” We will send you an email prompting you to reset your login information. If you have any trouble, let us know by emailing <a href=mailto:sdcsupport@samsungdevelopers.com target='_blank' rel='noopener noreferrer'>sdcsupport@samsungdevelopers.com</a>."
                />
                <Accordion
                title="Can I cancel my registration?"
                content="We really hope to see you at SDC22, but if something comes up, please contact us to request a cancel at <a href=mailto:sdcsupport@samsungdevelopers.com target='_blank' rel='noopener noreferrer'>sdcsupport@samsungdevelopers.com</a>."
                />
                <Accordion
                title="Can I bring a guest?"
                content="If you would like to bring a guest along with you to SDC22, they will also need to be registered as an attendee. The best thing to do for this, or any other special request you may have, is to reach out to the Samsung personnel who invited you, or send an email to <a href=mailto:sdcsupport@samsungdevelopers.com target='_blank' rel='noopener noreferrer'>sdcsupport@samsungdevelopers.com</a>."
                />
              </SupportItem>
              <SupportItem>
                <SupportItemTitle>COVID & Vaccination Policy</SupportItemTitle>
                <Accordion
                title="Do I need to submit a proof of vaccination to attend?"
                content="As of March 11, 2022 (current San Francisco Public Health Requirements), the vaccination or proof of negative test requirement will no longer apply in most of indoors and it is not required to submit for SDC22. However, we continue to have safety measures in place to ensure that we have a safe and healthy environment for our visitors and staff. The measures include frequent cleaning of high-touch areas and providing sanitizing stations."
                />
                <Accordion
                title="Are masks required?"
                content="In accordance with City and Country of San Francisco guidance, masking is strongly recommended and we encourage you to wear mask indoors if you are more comfortable. If local health conditions change, masking requirements and other health precautions may be re-imposed."
                />
              </SupportItem>
              {
                !phase4 &&
                  <SupportItem>
                    <SupportItemTitle>Hotel Reservations</SupportItemTitle>
                    <Accordion
                    title="Could you help me with a hotel reservation for SDC22?"
                    content="We are pleased to help you for a hotel reservation. Please note that all rooms are available on a first-come, first-served basis and we encourage you to act quickly if you are still in need of accommodations. <a href=mailto:test@test.com target='_blank' rel='noopener noreferrer'>Request hotel reservations now.</a>"
                    />
                  </SupportItem>
                }
            </SupportInner>

          </SupportWrap>
        </TabPanel>
      </Tabs>
    </Support>

	)
}

export default SupportCont;
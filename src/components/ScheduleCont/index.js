import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ScheduleContainer, ScheduleInner, ScheduleBanner, ScheduleWrap, ScheduleGrid, EngagementBox, EngagementBoxBg, EngagementBoxInner, EngagementTitle, EngagementText, GridInfo, GridInfoList, GridInfoItem, GridInfoMore } from './ScheduleContElements'
import Button from '../Button';

const GridItem = ( {title, time} )=>{
  return(
    <GridInfoItem>
      <div className='item_title'>{title}</div>
      <div className='item_desc'>
        <span>{time}</span>
      </div>
      <Link to="/sessionDetail" className='item_link'>View More<span className='icon'></span></Link>
    </GridInfoItem>
  )
}

const ScheduleCont = ()=>{

  // More button handler - PC
  const [more, setMore] = useState(false);
  const textHandler = ()=> {
    setMore(!more);
  }

  // AHall More button handler - MO 
  const [moreA, setMoreA] = useState(true);
  const moreAHandler = ()=> {
    setMoreA(!moreA);
  }

  // BHall More button handler - MO 
  const [moreB, setMoreB] = useState(false);
  const moreBHandler = ()=> {
    setMoreB(!moreB);
  }

  //test data
  const sessionDataA = {
    id : 1,
    title : "What's new in One UI 5",
    time : '11:30 - 11:55',
  }

  const sessionDataB = {
    id : 2,
    title : 'Tizen everywhere',
    time : '11:30 - 11:55',
  }

  const sessionDataA02 = [
    {
      id : 'A1',
      title : 'SmartThings Find: Find alongside 200+ million users',
      time : '13:00 - 13:25',
    },
    {
      id : 'A2',
      title : "What's new in Bixby for Smart Home",
      time : '13:35 - 14:00',
    },
    {
      id : 'A3',
      title : 'Google and Samsung strengthen enterprise ecosystem together',
      time : '14:10 - 14:35',
    },
    {
      id : 'A4',
      title : 'Intuitive multitasking experience based upon Android 12L',
      time : '14:45 - 15:10',
    },
    {
      id : 'A5',
      title : "What's new in Tizen?",
      time : '15:20 - 15:45',
    },
    {
      id : 'A6',
      title : "Healthcare research hub",
      time : '15:55 - 16:30',
    },
  ]

  const sessionDataB02 = [
    {
      id : 'B1',
      title : 'Telehealth in Samsung devices',
      time : '13:00 - 13:25',
    },
    {
      id : 'B2',
      title : 'HDR10+/SALT and automatic HDR video creations for productions',
      time : '13:35 - 14:00',
    },
    {
      id : 'B3',
      title : '8K visual quality and ecosystem',
      time : '14:10 - 14:35',
    },
    {
      id : 'B4',
      title : 'Introducing Blockchain Wallet with Knox Vault',
      time : '14:45 - 15:10',
    },
    {
      id : 'B5',
      title : 'Joint efforts on standardization toward open ecosystem of UWB services',
      time : '15:20 - 15:45',
    },
    {
      id : 'B6',
      title : 'Our journey to responsibly handling data',
      time : '15:55 - 16:20',
    },
  ]

  const MainEngagementData = [
    {
      id: 1,
      title: 'Code Lab & Samsung Developers Forum',
      discription:'Visit Samsung Developer Portal: Learn more about our latest tools and SDKs at CodeLab, or ask questions and get involved with the developer community at the Samsung Developers Forums!',
      bg: process.env.PUBLIC_URL + '/images/Engagement.png',
      mobileBg: process.env.PUBLIC_URL + '/images/Engagement_mo.png',
      url1: '',
      url2: '',
      btnText1: 'Go to Code Lab',
      btnText2: 'Go to Q&A Forum',
      theme : 'dark'
    }
  ]

  const [isDesktop, setDesktop] = useState(window.innerWidth > 769);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 769);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  // gsap interaction
	const tl = useRef();
	const gridRef = useRef();

  const [tab, setTab] = useState(false);
  const tabHandler = ()=>{
    setTab(!tab);
  }

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: gridRef.current,
			}
		}).fromTo(gridRef.current, {opacity: 0, y:40}, {opacity: 1, y:0, duration: 0.3})

		return () => {
			ScrollTrigger.getAll().forEach(t => t.kill());
			tl.current.kill();
		}
	}, [tab]);

	return (
    <ScheduleContainer>
      <ScheduleInner>

        <Tabs onSelect={tabHandler}>
          <TabList>
            <Tab>Online</Tab>
            <Tab>Offline</Tab>
          </TabList>

          {/* Online Tab */}
          <TabPanel>
            <ScheduleWrap ref={gridRef}>
              <ScheduleGrid>
                <div className='index'>
                  <div className='index_text'>10:00 PT</div>
                </div>
                <div className='item_wrap item-02'>
                  <div className='box'>
                    <div className='title'>Keynote Live Streaming</div>
                    <div className='time'>10:00 - 11:20</div>
                  </div>
                </div>
                <div className='index'>
                  <div className='index_text'>11:30 PT</div>
                </div>
                <div className='item_wrap item-03'>
                  <div className='box'>
                    <div className='title'>Tech Sessions Live Streaming</div>
                    <div className='time'>11:30 - 11:55</div>
                    <Link to="/liveTech" className='link'>
                      Go to Tech Sessions<span className='link_icon'></span>
                    </Link>
                  </div>
                  <GridInfo>
                    <div className='inner'>
                      <GridInfoList>
                        <div className='title'>Session Room 1</div>
                        <GridItem title={sessionDataA.title} time={sessionDataA.time} speaker={sessionDataA.speaker}/>
                      </GridInfoList>
                      <GridInfoList>
                        <div className='title'>Session Room 2</div>
                        <GridItem title={sessionDataB.title} time={sessionDataB.time} speaker={sessionDataB.speaker}/>
                      </GridInfoList>
                    </div>
                  </GridInfo>
                </div>
                <div className='index'>
                  <div className='index_text'>12:00 PT</div>
                </div>
                <div className='item_wrap item-05'>
                  <div className='box'>
                    <div className='title'>Tech Sessions (On-demand)</div>
                    <div className='time'>12:00 - 17:30</div>
                    <Link to="/liveTech" className='link'>
                      Go to Tech Sessions<span className='link_icon'></span>
                    </Link>
                  </div>
                </div>
                <div className='index'>
                  <div className='index_text'>13:00 PT</div>
                </div>
                <div className='item_wrap item-06'>
                  <div className='box'>
                    <div className='title'>Tech Sessions Live Streaming</div>
                    <div className='time'>13:00 - 17:30</div>
                    <Link to="/liveTech" className='link'>
                      Go to Tech Sessions<span className='link_icon'></span>
                    </Link>
                  </div>
                  <GridInfo className={more ? 'is-appended' : ''}>
                    <div className='inner'>
                      <GridInfoList className={moreA ? 'is-appended' : ''}>
                        <button className='title' onClick={moreAHandler}>Session Room 1<span className='info_btn_icon'></span></button>
                        <div className='grid_session'>
                          {
                            sessionDataA02.map((item, idx)=>(
                              <GridItem key={item.id} title={item.title} time={item.time} speaker={item.speaker}/>
                            ))
                          }
                        </div>
                      </GridInfoList>
                      <GridInfoList className={moreB ? 'is-appended' : ''}>
                        <button className='title' onClick={moreBHandler}>Session Room 2<span className='info_btn_icon'></span></button>
                        <div className='grid_session'>
                          {
                            sessionDataB02.map((item, idx)=>(
                              <GridItem key={item.id} title={item.title} time={item.time} speaker={item.speaker}/>
                            ))
                          }
                        </div>
                      </GridInfoList>
                    </div>
                    <GridInfoMore onClick={textHandler} className={more ? 'is-appended' : ''}>{ more ? "Close" : "More" }</GridInfoMore>
                  </GridInfo>
                </div>
                <div className='index'>
                  <div className='index_text'>16:30 PT</div>
                  <div className='index_text'>17:40 PT</div>
                </div>
                <div className='item_wrap item-07'>
                  <div className='box'>
                    <div className='title'>Mega Sessions</div>
                    <div className='time'>16:30 - 17:40</div>
                    <Link to="/liveTech" className='link'>
                      Go to Tech Sessions<span className='link_icon'></span>
                    </Link>
                  </div>
                  <GridInfo>
                    <div className='inner'>
                      <GridInfoList>
                        <div className='title'>Keynote Hall</div>
                        <GridItem 
                          title="Immersive audio" 
                          time="16:30 - 17:00"
                          speaker="DJ Koh, Janghyun Yoon, Daniel Ahn"
                        />
                      </GridInfoList>
                      <GridInfoList className='is-margin'>
                        <div className='title'>&nbsp;</div>
                        <GridItem 
                          title="Samsung Wallet, it's convenient, personal and safe"
                          time="17:00 - 17:40"
                          speaker="DJ Koh, Janghyun Yoon, Daniel Ahn"
                        />
                      </GridInfoList>
                    </div>
                  </GridInfo>
                </div>
              </ScheduleGrid>
            </ScheduleWrap>
          </TabPanel>
          {/* On-Site Tab */}
          <TabPanel>
            <ScheduleWrap ref={gridRef}>
              <ScheduleGrid className='on-site'>
                <div className='index'>
                  <div className='index_text'>08:00 PT</div>
                </div>
                <div className='item_wrap item-01'>
                  <div className='box'>
                    <div className='title'>Badge Pick-up</div>
                    <div className='time'>08:00 - 17:00</div>
                  </div>
                </div>
                <div className='index'>
                  <div className='index_text'>10:00 PT</div>
                </div>
                <div className='item_wrap item-02'>
                  <div className='box item-02'>
                    <div className='title'>Keynote (Keynote Hall)</div>
                    <div className='time'>10:00 - 11:20</div>
                  </div>
                </div>
                <div className='index'>
                  <div className='index_text'>11:30 PT</div>
                </div>
                <div className='item_wrap item-03'>
                  <div className='box'>
                    <div className='title'>Tech Sessions</div>
                    <div className='time'>11:30 - 11:55</div>
                    <Link to="/liveTech" className='link'>
                      Go to Tech Sessions<span className='link_icon'></span>
                    </Link>
                  </div>
                  <GridInfo>
                    <div className='inner'>
                      <GridInfoList>
                        <div className='title'>Session Room 1</div>
                        <GridItem title={sessionDataA.title} time={sessionDataA.time} speaker={sessionDataA.speaker}/>
                      </GridInfoList>
                      <GridInfoList>
                        <div className='title'>Session Room 2</div>
                        <GridItem title={sessionDataB.title} time={sessionDataB.time} speaker={sessionDataB.speaker}/>
                      </GridInfoList>
                    </div>
                  </GridInfo>
                </div>
                {
                  !isDesktop && <div className='index'></div>
                }
                <div className='item_wrap item-04'>
                  <div className='box'>
                    <div className='title'>Tech Sqaure (Exhibition)</div>
                    <div className='time'>11:30 - 17:30</div>
                  </div>
                </div>
                <div className='index'>
                  <div className='index_text'>12:00 PT</div>
                </div>
                <div className='item_wrap item-05'>
                  <div className='box breake'>
                    <div className='title'>Lunch</div>
                    <div className='time'>12:00 - 13:00</div>
                  </div>
                </div>
                <div className='index'>
                  <div className='index_text'>13:00 PT</div>
                </div>
                <div className='item_wrap item-06'>
                  <div className='box'>
                    <div className='title'>Tech Sessions</div>
                    <div className='time'>13:00 - 17:30</div>
                    <Link to="/liveTech" className='link'>
                      Go to Tech Sessions<span className='link_icon'></span>
                    </Link>
                  </div>
                  <GridInfo className={more ? 'is-appended' : ''}>
                    <div className='inner'>
                      <GridInfoList className={moreA ? 'is-appended' : ''}>
                        <button className='title' onClick={moreAHandler}>Session Room 1<span className='info_btn_icon'></span></button>
                        <div className='grid_session'>
                          {
                            sessionDataA02.map((item, idx)=>(
                              <GridItem key={item.id} title={item.title} time={item.time} speaker={item.speaker}/>
                            ))
                          }
                        </div>
                      </GridInfoList>
                      <GridInfoList className={moreB ? 'is-appended' : ''}>
                        <button className='title' onClick={moreBHandler}>Session Room 2<span className='info_btn_icon'></span></button>
                        <div className='grid_session'>
                          {
                            sessionDataB02.map((item, idx)=>(
                              <GridItem key={item.id} title={item.title} time={item.time} speaker={item.speaker}/>
                            ))
                          }
                        </div>
                      </GridInfoList>
                    </div>
                    <GridInfoMore onClick={textHandler} className={more ? 'is-appended' : ''}>{ more ? "Close" : "More" }</GridInfoMore>
                  </GridInfo>
                </div>
                <div className='index'>
                  <div className='index_text'>16:30 PT</div>
                </div>
                <div className='item_wrap item-07'>
                  <div className='box'>
                    <div className='title'>Mega Sessions</div>
                    <div className='time'>16:30 - 17:40</div>
                    <Link to="/liveTech" className='link'>
                      Go to Tech Sessions<span className='link_icon'></span>
                    </Link>
                  </div>
                  <GridInfo>
                    <div className='inner'>
                      <GridInfoList>
                        <div className='title'>Keynote Hall</div>
                        <GridItem 
                          title="Immersive audio" 
                          time="16:30 - 17:00"
                        />
                      </GridInfoList>
                      <GridInfoList className='is-margin'>
                        <div className='title'>&nbsp;</div>
                        <GridItem 
                          title="Samsung Wallet, it's convenient, personal and safe"
                          time="17:00 - 17:40"
                        />
                      </GridInfoList>
                    </div>
                  </GridInfo>
                </div>
                <div className='index last-index'>
                  <div className='index_text'>17:40 PT</div>
                  <div className='index_text'>18:30 PT</div> 
                </div>
                <div className='item_wrap item-08 last-item'>
                  <div className='box'>
                    <div className='title'>Networking (Lounge)</div>
                    <div className='time'>17:40 - 18:30</div>
                  </div>
                </div>
              </ScheduleGrid>
            </ScheduleWrap>
          </TabPanel>
        </Tabs>

        <ScheduleBanner>
          <EngagementBox>
            {isDesktop ? (
              <EngagementBoxBg style={{ backgroundImage: `url(${ MainEngagementData[0].bg })`,  }}></EngagementBoxBg>
            ) : (
              <EngagementBoxBg style={{ backgroundImage: `url(${ MainEngagementData[0].mobileBg })`,  }}></EngagementBoxBg>
            )}
            <EngagementBoxInner>
              <EngagementTitle className={MainEngagementData[0].theme}>{MainEngagementData[0].title}</EngagementTitle>
              <EngagementText className={MainEngagementData[0].theme}>{MainEngagementData[0].discription}</EngagementText>
              <div className='btn_wrap'>
                <Button url={MainEngagementData[0].url1} color={ MainEngagementData[0].theme === 'dark' ? 'white' : 'black' } size="medium">{MainEngagementData[0].btnText1}</Button>
                <Button url={MainEngagementData[0].url2} color={ MainEngagementData[0].theme === 'dark' ? 'white' : 'black' } size="medium">{MainEngagementData[0].btnText2}</Button>
              </div>
            </EngagementBoxInner>
          </EngagementBox>
        </ScheduleBanner>
      </ScheduleInner>
    </ScheduleContainer>
	)
}

export default ScheduleCont;
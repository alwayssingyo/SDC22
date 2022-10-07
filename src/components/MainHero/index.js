import React, { useLayoutEffect, useEffect, useRef, useState, useCallback } from 'react';
import ReactPlayer from 'react-player';
import FlipNumbers from "react-flip-numbers";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Odometer from 'react-odometerjs';
import "odometer/themes/odometer-theme-default.css";
import { HeroContainer, HeroDim, HeroInner, HeroContent, HeroIntroText, HeroIntroTitle, HeroIntroDesc, HeroIntroDescItem, HeroIntroBtnWrap, HeroIntroBtn, HeroTitle, HeroText, HeroCount, HeroDate, HeroDateText, HeroDesc, HeroLink, HeroArrow, HeroTime, HeroTimeItem } from './MainHeroElements';
import Button from '../Button';
import ButtonLink from '../ButtonLink';
import PopupYoutube from '../PopupYoutube';
import PopupCalendar from '../PopupCalendar';
import PopupCookie from '../../components/PopupCookie';
import ModalCookie from '../../components/ModalCookie';
import PopupManage from '../../components/PopupManage';
import PopupConfirm from '../../components/Popup';
import PopupSurvey from '../PopupSurvey';

const MainHero = ()=>{
	//phase3 유무 체크
	const [phase3, setPhase3] = useState(false);
	//phase4 유무 체크
	const [phase4, setPhase4] = useState(false);

	// ~ 11: 30까지는 before
	// 11:30 ~ 5:30까지는 present
	// 5:30 ~는 after
	const [time, setTime] = useState('before');
	
	const heroRef = useRef();
	const tlFirst = useRef();
	const tl = useRef();
	const tlText1 = useRef();
	const tlText2 = useRef();

	useLayoutEffect(()=>{

    gsap.registerPlugin(ScrollTrigger);

		const q = gsap.utils.selector(heroRef);

		tlFirst.current = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
			}
		})
			.fromTo(q(".hero_intro_title"), {opacity: 0}, {opacity: 1, duration : 1})
			.fromTo(q(".hero_intro_title"), {y : 50}, {y : 0, duration : 1, ease: "power2.out"}, '-=1')
			.fromTo(q(".hero_intro_desc"), {opacity: 0}, {opacity:1, duration : 1, ease: "power2.out"}, '-=0.7')
			.fromTo(q(".hero_intro_desc"), {y : 50}, {y : 0, duration : 1, ease: "power2.out"}, '-=1.2')
			.fromTo(q(".hero_intro_btn"), {opacity: 0}, {opacity: 1, duration : 1, ease: "power2.out"}, '-=0.90')
			.fromTo(q(".hero_intro_btn"), {y : 50}, {y : 0, duration : 1, ease: "power2.out"}, '-=1.15')

		if( phase3 === true || phase4 === true ){
			return
		}

		tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        end: "+=100%",
        scrub: 3,
				pin: true,
      }
    })
			.fromTo(q(".hero_intro_text"), {opacity:1, zIndex:10, marginTop:0}, {opacity: 0, zIndex: -1, marginTop:-100, ease: "power4.inOut", duration: 10}, "-=2")
			.fromTo(q(".hero_text"), {opacity:0}, {opacity: 1, ease: "power4.inOut", duration: 12}, "-=7")
			.fromTo(q(".hero_dim"), {backgroundColor: "rgba(0,0,0,0.5)" }, {backgroundColor: "rgba(0,0,0,0.8)", backdropFilter: "blur(10px)", ease: "power1.inOut", duration: 10}, "-=16")
			.fromTo(q(".hero_text_title"), {opacity: 0}, {opacity: 1, duration : 10}, '-=10')
			.fromTo(q(".hero_text_title"), {y : 100}, {y : 0, duration : 10, ease: "power4.out"}, '-=9')
			.fromTo(q(".hero_text_desc"), {opacity: 0}, {opacity:1, duration : 10, ease: "power4.out"}, '-=10')
			.fromTo(q(".hero_text_desc"), {y : 70}, {y : 0, duration : 10, ease: "power4.out"}, '-=9.3')
			.fromTo(q(".hero_text_btn"), {opacity: 0}, {opacity: 1, duration : 10, ease: "power4.out"}, '-=10')
			.fromTo(q(".hero_text_btn"), {y : 70}, {y : 0, duration : 10, ease: "power4.out"}, '-=9.5')

		return () => {
			ScrollTrigger.getAll().forEach(t => t.kill());

			tl.current.kill();
			tlFirst.current.kill();
		}
	}, []);

	const [countdownDate] = useState(new Date(2022, 9, 12).getTime()); // 2022년 10월 12일
	const [dayState, setDayState] = useState({
		days: 0
	});

	const [countdownTime] = useState(new Date(2022, 9, 12, 10, 0, 0).getTime()); // 2022년 10월 12일 오전 10시
	const [timeState, setTimeState] = useState({
		hours: 0,
		minutes: 0,
		seconds: 0,
		standardTime: 100,
	});

	const dDay = ()=>{
		const currentTime = new Date().getTime();
		const distanceToDate = countdownDate - currentTime;

		let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));

		days = `${days + 1}`;

		setDayState({ days: days });
	}

	const dDayTime = ()=>{
		const currentTime = new Date().getTime();
		const distanceToDate = countdownTime - currentTime;

		let standardTime = distanceToDate/(60*60*1000);

		let hours = Math.floor(
			(distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
		);
		let minutes = Math.floor(
			(distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
		);
		let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

		hours = `${hours}`;
		minutes = `${minutes}`;
		seconds = `${seconds}`;

		setTimeState({ hours: hours, minutes, seconds, standardTime: standardTime});
	}

	//Countdown
	useLayoutEffect(() => {
		//D-day 계산
		if (countdownDate) {
			dDay();
		}
		//남은 시간 계산
		if (countdownTime) {
			dDayTime();
		}

    setInterval(() => {
			//D-day 계산
			if (countdownDate) {
				dDay();
			}
			//남은 시간 계산
			if (countdownTime) {
				dDayTime();
			}
		}, 1000);
  }, [countdownDate, countdownTime]);

	// PC, MO 체크
	const [isDesktop, setDesktop] = useState(window.innerWidth > 769);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 769);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

	//youtube popup controll
	const [open, setOpen] = useState(false);
	const popupHandler = ()=>{
		setOpen(true);
		closeVideo();
	}

	//calendar popup controll
	const [addCalendar, setAddCalendar] = useState(false);
	const calendarHandler = ()=>{
		setAddCalendar(true);
    document.body.style.overflow = "hidden"; //스크롤 막음
	}

	//bg video
	const video_source = process.env.PUBLIC_URL + '/images/video-sample.mp4'

	const [play, setPlay] = useState(true);

	function closeVideo(){
		setPlay(false)
	}

	const [odometerValue, setOdometerValue] = useState(0);
	const [over, setOver] = useState(false);

	useLayoutEffect(()=>{
		if( phase3 === true || phase4 === true ){
			return
		}

		if( over === true ){
			setOdometerValue(dayState.days || '0');
		}
	},[over])

	const checkScroll = useCallback(()=>{
		if( window.scrollY > 500 ){
			if( over === false ){
				setOver(true);
			}
		}
	},[])

  useLayoutEffect(() => {
		if( phase3 === true || phase4 === true ){
			return
		}

		window.addEventListener('scroll', checkScroll);

		return () => window.removeEventListener('scroll', checkScroll);
	},[checkScroll]);

	/* Hero Motion */
	const keys = {37: 1, 38: 1, 39: 1, 40: 1};
	const preventDefault = (e) => {
		e.preventDefault();
		return false;
	}
	const preventDefaultForScrollKeys = (e) => {
		if (keys[e.keyCode]) {
			preventDefault(e);
			return false;
		}
	}
	
	// call this to Disable
	const disableScroll = () => {
		window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
		window.addEventListener('mousewheel', preventDefault); // modern desktop
		window.addEventListener('touchmove', preventDefault); // mobile
		window.addEventListener('keydown', preventDefaultForScrollKeys, false);
	}
	
	// call this to Enable
	const enableScroll = () => {
		window.removeEventListener('DOMMouseScroll', preventDefault, false);
		window.removeEventListener('mousewheel', preventDefault);
		window.removeEventListener('touchmove', preventDefault);
		window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
	}

	const onSlideChangeEnd = () => {
		enableScroll()
	}
	
  //Snap Action
	const goToSection = (i) => {
		disableScroll();

		gsap.registerPlugin(ScrollToPlugin);

		gsap.to(window, {
			scrollTo: { y: i * window.innerHeight, autoKill: false },
			duration: 1,
			ease: "Power4.easeOut",
			onComplete: onSlideChangeEnd,
		});
  }

	useLayoutEffect(()=>{
		if( phase3 || phase4 ){
			return;
		}

    gsap.registerPlugin(ScrollTrigger);

    tlText1.current = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero_intro_text',
				start: "1% top",
        onEnter: () => goToSection(1)
      }
    })

    tlText2.current = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero_text',
				start: "99% top",
        onEnterBack: () => goToSection(0)
      }
    })
  },[]);

	// cookie popup
	const [openPopup, setOpenPopup] = useState(false);

	// cookie modal
	const [openModal, setOpenModal] = useState(false);

	// Management popup
	const [openManage, setOpenManage] = useState(false);

	// cookie confirm popup
	const [openConfirm, setOpenConfirm] = useState(false);

	// survey manage
	const [openSurvey, setOpenSurvey] = useState(true);

	return (
		<>
			<HeroContainer ref={heroRef}>
				<HeroInner className={ phase3 || phase4 ? 'is-phase3' : '' }>
					<HeroDim className='hero_dim'/>
						<ReactPlayer id="video"
						url={video_source}
						width=''
						height=''
						playing={play}
						playsinline={true}
						loop={true}
						muted={true}
					
						/>
					<HeroContent>
						<HeroIntroText className='hero_intro_text'>
							<HeroIntroTitle className='hero_intro_title'>
								{
									phase4
									? <span>Thanks for coming!<br/>Join us next year for SDC23</span>
									: <span>Samsung Developer <br/>Conference 2022</span>
								}
							</HeroIntroTitle>
							<HeroIntroDesc className='hero_intro_desc'>
								<HeroIntroDescItem>
									{
										phase3
										? 'Get ready to discover the future of connectivity.' //phase3
										: phase4
											?	'If you’re not done exploring the latest tech innovations,' //phase4
											: 'Wed, Oct 12, 2022 10:00 AM PT' //phase2
									}
								</HeroIntroDescItem>
								<HeroIntroDescItem>
									{
										phase3
										? 'Coming to you live from Moscone North.' //phase3
										: phase4
											?	'you can experience SDC22 all over again - on demand.' //phase4
											: 'Moscone North in \nSan Francisco and Online' //phase2
									}
								</HeroIntroDescItem>
							</HeroIntroDesc>
							<HeroIntroBtnWrap>
								{/* phase1,2 버튼  */}
								{
									!phase3 && !phase4 &&
									<HeroIntroBtn onClick={()=>{ popupHandler();} } className="hero_intro_btn">
										<Button color="white" size="medium">Watch Full Video</Button>
									</HeroIntroBtn>
								}
								{/* phase3 - ~ 11: 30까지의 버튼  */}
								{
									phase3 && time === 'before' &&
									<>
										<HeroIntroBtn className="hero_intro_btn is-keynote is-live">
											<ButtonLink url="/liveTech" color="white" size="medium">Join the Keynote</ButtonLink>
										</HeroIntroBtn>
										<HeroIntroBtn className="hero_intro_btn is-session is-dim">
											<ButtonLink url="/keynote" color="white" size="medium">Join Tech Sessions</ButtonLink>
										</HeroIntroBtn>
									</>
								}
								{/* phase3 - 11:30 ~ 5:30까지의 버튼  */}
								{
									phase3 && time === 'present' &&
									<>
										<HeroIntroBtn className="hero_intro_btn is-keynote is-dim">
											<ButtonLink url="/liveTech" color="white" size="medium">Join the Keynote</ButtonLink>
										</HeroIntroBtn>
										<HeroIntroBtn className="hero_intro_btn is-session is-live">
											<ButtonLink url="/keynote" color="white" size="medium">Join Tech Sessions</ButtonLink>
										</HeroIntroBtn>
									</>
								}
								{/* phase3 - 5:30~까지의 버튼  */}
								{
									phase3 && time === 'after' &&
									<>
										<HeroIntroBtn className="hero_intro_btn">
											<ButtonLink url="/liveTech" color="white" size="medium">Join the Keynote</ButtonLink>
										</HeroIntroBtn>
										<HeroIntroBtn className="hero_intro_btn">
											<ButtonLink url="/keynote" color="white" size="medium">Join Tech Sessions</ButtonLink>
										</HeroIntroBtn>
									</>
								}
								{
									phase4 &&
									<>
										<HeroIntroBtn className="hero_intro_btn">
											<ButtonLink url="/keynote" color="white" size="medium">Watch the Keynote</ButtonLink>
										</HeroIntroBtn>
										<HeroIntroBtn className="hero_intro_btn">
											<Button onClick={ ()=>{window.open('https://www.youtube.com/')} } color="white" size="medium">Watch the Highlight</Button>
										</HeroIntroBtn>
									</>
								}
							</HeroIntroBtnWrap>
						</HeroIntroText>
						<HeroText className={ phase3 || phase4 ? 'hero_text' : 'hero_text is-active'}>
							<div className='hero_text_title'>
								<HeroTitle>COMING SOON</HeroTitle>
								<HeroDesc>SDC22 kicks off in</HeroDesc>
							</div>
							<div className='hero_text_desc'>
								<HeroCount className={timeState.standardTime > 24 ? 'is-active' : null}>
									<HeroDate>
										<div className='odometer_wrap'>
											<Odometer format="d" duration={1000} value={odometerValue} theme="default"/>
										</div>
										<HeroDateText>Days</HeroDateText>
									</HeroDate>
								</HeroCount>
								<HeroTime className={timeState.standardTime > 24 ? '' : 'is-active'}>
									<HeroTimeItem>
										<div className="value">
											<FlipNumbers
												play
												width={isDesktop ? 35 : 20}
												height={isDesktop ? 50 : 30}
												numbers={timeState.hours <= 9 ? '0'+timeState.hours : timeState.hours }
											/>
										</div>
										<div className="text">Hours</div>
									</HeroTimeItem>
									<HeroTimeItem>
										<div className="value">
											<FlipNumbers
													play
													width={isDesktop ? 35 : 20}
													height={isDesktop ? 50 : 30}
													numbers={timeState.minutes <= 9 ? '0'+timeState.minutes : timeState.minutes }
												/>
										</div>
										<div className="text">Minutes</div>
									</HeroTimeItem>
									<HeroTimeItem>
										<div className="value">
											<FlipNumbers
												play
												width={isDesktop ? 35 : 20}
												height={isDesktop ? 50 : 30}
												numbers={timeState.seconds <= 9 ? '0'+timeState.seconds : timeState.seconds }
											/>
										</div>
										<div className="text">Seconds</div>
									</HeroTimeItem>
								</HeroTime>
							</div>
							<HeroLink className='hero_text_btn'><Button color="white" size="medium" onClick={calendarHandler}>Add SDC22 to My Calendar</Button></HeroLink>
						</HeroText>
						
						<HeroArrow><img src={process.env.PUBLIC_URL + '/images/ico-hero-arrow.svg'} alt="scroll down"/></HeroArrow>
					</HeroContent>
				</HeroInner>
			</HeroContainer> 

			{/* youtube popup */}
			{
				open && <PopupYoutube open={open} setOpen={setOpen} setPlay={setPlay}/>
			}

			{/* calendar popup */}
			{
				addCalendar && <PopupCalendar setOpen={setAddCalendar}/>
			}

			{/* cookie popoup */}
			{
        openPopup && <PopupCookie setOpen={setOpenPopup} setOpenManage={setOpenManage}/>
      }

			{/* cookie modal */}
			{
        openModal && <ModalCookie setOpen={setOpenModal} setOpenManage={setOpenManage}/>
      }

			{/* management modal */}
			{
        openManage && <PopupManage setOpen={setOpenManage} setOpenConfirm={setOpenConfirm}/>
      }

			{/* Cookie confirm popoup */}
			{
        openConfirm && <PopupConfirm
					modal={openConfirm}
					setModal={setOpenConfirm}
					title="Preferences Submitted"
					desc="You have successfully updated your cookie preferences."
					btnText="Close"
				/>
      }

			{/* Survey popup */}
			{
				openSurvey && phase4 && <PopupSurvey setOpenSurvey={setOpenSurvey} />
			}
		</>
	)
}

export default MainHero;
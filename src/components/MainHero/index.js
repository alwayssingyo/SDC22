import React, { useLayoutEffect, useEffect, useRef, useState, useCallback } from 'react';
import ReactPlayer from 'react-player';
import FlipNumbers from "react-flip-numbers";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Odometer from 'react-odometerjs';
import "odometer/themes/odometer-theme-default.css";
import * as S from './style';
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

	// text interaction
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
	}, [phase3, phase4]);

	// 26일 이후로 d-day 기준 date 설정
	const d = new Date();
	const day = d.getDate();
	const targetDate = new Date(new Date().setDate(day + 26))

	const [countdownDate] = useState(targetDate.getTime());
	const [dayState, setDayState] = useState({
		days: 0
	});

	const [countdownTime] = useState(targetDate.getTime());
	const [timeState, setTimeState] = useState({
		hours: 0,
		minutes: 0,
		seconds: 0,
		standardTime: 100,
	});

	// d-day 계산
	const dDay = useCallback(()=>{
		const currentTime = new Date().getTime();
		const distanceToDate = countdownDate - currentTime;

		let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));

		days = `${days + 1}`;

		setDayState({ days: days });
	}, [countdownDate]);

	// 24시간 이내 남았을 경우 남은 시간 계산
	const dDayTime = useCallback(()=>{
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
	},[countdownTime]);

	//Countdown interactions
	useLayoutEffect(() => {
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
  }, [countdownDate, countdownTime, dDay, dDayTime]);

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

	//days flip animation
	useLayoutEffect(()=>{
		if( phase3 === true || phase4 === true ){
			return
		}

		if( over === true ){
			setOdometerValue(dayState.days || '0');
		}
	},[phase3, phase4, over, dayState.days])

	//히어로 상단에서 일정 스크롤 이상 스크롤시 액션 시작
	const checkScroll = useCallback(()=>{
		if( window.scrollY > 500 ){
			if( over === false ){
				setOver(true);
			}
		}
	},[over])

  useLayoutEffect(() => {
		if( phase3 === true || phase4 === true ){
			return
		}

		window.addEventListener('scroll', checkScroll);

		return () => window.removeEventListener('scroll', checkScroll);
	},[phase3, phase4, checkScroll]);

	
	/* Hero snap motion */
	const preventDefault = (e) => {
		e.preventDefault();
		return false;
	}

	const preventDefaultForScrollKeys = useCallback((e) => {
		const keys = {37: 1, 38: 1, 39: 1, 40: 1};

		if (keys[e.keyCode]) {
			preventDefault(e);
			return false;
		}
	},[]);
	
  //Snap Action
	const goToSection = useCallback((i) => {
		gsap.registerPlugin(ScrollToPlugin);

		const onSlideChangeEnd = () => {
			// call this to Enable
			window.removeEventListener('DOMMouseScroll', preventDefault, false);
			window.removeEventListener('mousewheel', preventDefault);
			window.removeEventListener('touchmove', preventDefault);
			window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
		}

		// call this to Disable
		window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
		window.addEventListener('mousewheel', preventDefault); // modern desktop
		window.addEventListener('touchmove', preventDefault); // mobile
		window.addEventListener('keydown', preventDefaultForScrollKeys, false);

		gsap.to(window, {
			scrollTo: { y: i * window.innerHeight, autoKill: false },
			duration: 1,
			ease: "Power4.easeOut",
			onComplete: onSlideChangeEnd,
		});
  },[preventDefaultForScrollKeys]);

	useLayoutEffect(()=>{
		if( phase3 || phase4 ){
			return;
		}

    gsap.registerPlugin(ScrollTrigger);

    tlText1.current = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero_intro_text',
				start: "1% top",
        onEnter: () => goToSection(1) // snap to naxt sction
      }
    })

    tlText2.current = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero_text',
				start: "99% top",
        onEnterBack: () => goToSection(0) // snap to first sction
      }
    })
  },[phase3, phase4, goToSection]);

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
			<S.HeroContainer ref={heroRef}>
				<S.HeroInner className={ phase3 || phase4 ? 'is-phase3' : '' }>
					<S.HeroDim className='hero_dim'/>
						<ReactPlayer id="video"
							url={video_source}
							width=''
							height=''
							playing={play}
							playsinline={true}
							loop={true}
							muted={true}
						/>
					<S.HeroContent>
						<S.HeroIntroText className='hero_intro_text'>
							<S.HeroIntroTitle className='hero_intro_title'>
								{
									phase4
									? <span>Thanks for coming!<br/>Join us next year for SDC23</span>
									: <span>Samsung Developer <br/>Conference 2022</span>
								}
							</S.HeroIntroTitle>
							<S.HeroIntroDesc className='hero_intro_desc'>
								<S.HeroIntroDescItem>
									{
										phase3
										? 'Get ready to discover the future of connectivity.' //phase3
										: phase4
											?	'If you’re not done exploring the latest tech innovations,' //phase4
											: 'Wed, Oct 12, 2022 10:00 AM PT' //phase2
									}
								</S.HeroIntroDescItem>
								<S.HeroIntroDescItem>
									{
										phase3
										? 'Coming to you live from Moscone North.' //phase3
										: phase4
											?	'you can experience SDC22 all over again - on demand.' //phase4
											: 'Moscone North in \nSan Francisco and Online' //phase2
									}
								</S.HeroIntroDescItem>
							</S.HeroIntroDesc>
							<S.HeroIntroBtnWrap>
								{/* phase1,2 버튼  */}
								{
									!phase3 && !phase4 &&
									<S.HeroIntroBtn onClick={()=>{ popupHandler();} } className="hero_intro_btn">
										<Button color="white" size="medium">Watch Full Video</Button>
									</S.HeroIntroBtn>
								}
								{/* phase3 - ~ 11: 30까지의 버튼  */}
								{
									phase3 && time === 'before' &&
									<>
										<S.HeroIntroBtn className="hero_intro_btn is-keynote is-live">
											<ButtonLink url="/liveTech" color="white" size="medium">Join the Keynote</ButtonLink>
										</S.HeroIntroBtn>
										<S.HeroIntroBtn className="hero_intro_btn is-session is-dim">
											<ButtonLink url="/keynote" color="white" size="medium">Join Tech Sessions</ButtonLink>
										</S.HeroIntroBtn>
									</>
								}
								{/* phase3 - 11:30 ~ 5:30까지의 버튼  */}
								{
									phase3 && time === 'present' &&
									<>
										<S.HeroIntroBtn className="hero_intro_btn is-keynote is-dim">
											<ButtonLink url="/liveTech" color="white" size="medium">Join the Keynote</ButtonLink>
										</S.HeroIntroBtn>
										<S.HeroIntroBtn className="hero_intro_btn is-session is-live">
											<ButtonLink url="/keynote" color="white" size="medium">Join Tech Sessions</ButtonLink>
										</S.HeroIntroBtn>
									</>
								}
								{/* phase3 - 5:30~까지의 버튼  */}
								{
									phase3 && time === 'after' &&
									<>
										<S.HeroIntroBtn className="hero_intro_btn">
											<ButtonLink url="/liveTech" color="white" size="medium">Join the Keynote</ButtonLink>
										</S.HeroIntroBtn>
										<S.HeroIntroBtn className="hero_intro_btn">
											<ButtonLink url="/keynote" color="white" size="medium">Join Tech Sessions</ButtonLink>
										</S.HeroIntroBtn>
									</>
								}
								{/* phase4 버튼  */}
								{
									phase4 &&
									<>
										<S.HeroIntroBtn className="hero_intro_btn">
											<ButtonLink url="/keynote" color="white" size="medium">Watch the Keynote</ButtonLink>
										</S.HeroIntroBtn>
										<S.HeroIntroBtn className="hero_intro_btn">
											<Button onClick={ ()=>{window.open('https://www.youtube.com/')} } color="white" size="medium">Watch the Highlight</Button>
										</S.HeroIntroBtn>
									</>
								}
							</S.HeroIntroBtnWrap>
						</S.HeroIntroText>
						<S.HeroText className={ phase3 || phase4 ? 'hero_text' : 'hero_text is-active'}>
							<div className='hero_text_title'>
								<S.HeroTitle>COMING SOON</S.HeroTitle>
								<S.HeroDesc>SDC22 kicks off in</S.HeroDesc>
							</div>
							<div className='hero_text_desc'>
								<S.HeroCount className={timeState.standardTime > 24 ? 'is-active' : null}>
									<S.HeroDate>
										<div className='odometer_wrap'>
											<Odometer format="d" duration={1000} value={odometerValue} theme="default"/>
										</div>
										<S.HeroDateText>Days</S.HeroDateText>
									</S.HeroDate>
								</S.HeroCount>
								<S.HeroTime className={timeState.standardTime > 24 ? '' : 'is-active'}>
									<S.HeroTimeItem>
										<div className="value">
											<FlipNumbers
												play
												width={isDesktop ? 35 : 20}
												height={isDesktop ? 50 : 30}
												numbers={timeState.hours <= 9 ? '0'+timeState.hours : timeState.hours }
											/>
										</div>
										<div className="text">Hours</div>
									</S.HeroTimeItem>
									<S.HeroTimeItem>
										<div className="value">
											<FlipNumbers
													play
													width={isDesktop ? 35 : 20}
													height={isDesktop ? 50 : 30}
													numbers={timeState.minutes <= 9 ? '0'+timeState.minutes : timeState.minutes }
												/>
										</div>
										<div className="text">Minutes</div>
									</S.HeroTimeItem>
									<S.HeroTimeItem>
										<div className="value">
											<FlipNumbers
												play
												width={isDesktop ? 35 : 20}
												height={isDesktop ? 50 : 30}
												numbers={timeState.seconds <= 9 ? '0'+timeState.seconds : timeState.seconds }
											/>
										</div>
										<div className="text">Seconds</div>
									</S.HeroTimeItem>
								</S.HeroTime>
							</div>
							<S.HeroLink className='hero_text_btn'><Button color="white" size="medium" onClick={calendarHandler}>Add SDC22 to My Calendar</Button></S.HeroLink>
						</S.HeroText>
						
						<S.HeroArrow><img src={process.env.PUBLIC_URL + '/images/ico-hero-arrow.svg'} alt="scroll down"/></S.HeroArrow>
					</S.HeroContent>
				</S.HeroInner>
			</S.HeroContainer> 

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
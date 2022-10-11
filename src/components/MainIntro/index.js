import React, { useState, useLayoutEffect, useRef } from 'react';
import { ScrollScene } from "scrollscene";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import lottie from "lottie-web";
import { IntroContainer, IntroInner, IntroTop, IntroMotion, IntroMotionText, IntroText, LinkArea } from './MainIntroElements';
import Button from '../Button';
import motionJSON from "../../data/motion.json";


const MainIntro = ()=>{
	//phase3 유무 체크
	const [phase3, setPhase3] = useState(false);
	//phase4 유무 체크
	const [phase4, setPhase4] = useState(false);

	//texts reveal
	const textRef = useRef();
	const textQ = gsap.utils.selector(textRef);

	//texts motion
	const introRef = useRef();
	const q = gsap.utils.selector(introRef);
	const tl = useRef();
	const tlAfter = useRef();

	//texts motion (phase3)
	const tlRelease = useRef();

	//bg motion
	const bgRef = useRef(null);
  const bgContainerRef = useRef(null);

	useLayoutEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);

		if( !phase3 ){

			ScrollTrigger.matchMedia({
				"(min-width: 1024px)": function() {
					tl.current = gsap.timeline({
						scrollTrigger: {
							trigger: introRef.current,
							start: "top 33%",
							end: "+=200px",
							scrub: 0.5,
						}
					})
						.to(q(".item-01"), {
							x: -275
						})
						.to(q(".item-03"), {
							x: 275
						}, 0)
				},
				"(max-width: 1023px)": function() {
					tl.current = gsap.timeline({
						scrollTrigger: {
							trigger: introRef.current,
							start: "top 40%",
							end: "+=200px",
							scrub: 0.3,
						}
					})
						.to(q(".item-01"), {
							x: '-30vw'
						})
						.to(q(".item-03"), {
							x: '30vw'
						}, 0)
				}
			});
	
			// 텍스트 드러나는 모션
			const textArray = gsap.utils.toArray(textRef.current.children);
			textArray.forEach( el => {
				tlAfter.current = gsap.timeline({
					scrollTrigger: {
						trigger: el,
						start: "bottom 95%",
						end: "+=180px",
						scrub: true,
					}
				}).to(textQ(el), {
						opacity: 1,
					})
			});

		}else {

			//texts motion (phase3)
			ScrollTrigger.matchMedia({
				"(min-width: 768px)": function() {
					tlRelease.current = gsap.timeline({
						scrollTrigger: {
							trigger: introRef.current,
							start: "50% bottom",
							end: "+=500px",
							scrub: true,
						}
					})
					.fromTo(q(".item-01"), { x:-290 }, { x: -220 })
					.fromTo(q(".item-02"), { x:290 }, { x: 235 }, '-=0.5')
					.fromTo(q(".item-03"), { x:-285 }, { x: -200 }, '-=0.5')
				},
				"(max-width: 767px)": function() {
					tlRelease.current = gsap.timeline({
						scrollTrigger: {
							trigger: introRef.current,
							start: "40% bottom",
							end: "+=450px",
							scrub: true,
						}
					})
					.fromTo(q(".item-01"), { x:-110 }, { x:-90 })
					.fromTo(q(".item-02"), { x:115 }, { x:95 }, '-=0.5')
					.fromTo(q(".item-03"), { x:-105 }, { x:-85 }, '-=0.5')
				}
			});

			// bg motion
			if (bgRef === null && bgContainerRef === null) {
				return;
			}
			const AnimOptions = {
				container: bgRef.current,
				renderer: "svg",
				loop: false,
				autoplay: false,
				animationData: motionJSON
			};
			const anim = lottie.loadAnimation(AnimOptions);
			const tlBg = gsap.timeline({ paused: true });

			tlBg.to({ frame: 0 }, 3, {
				frame: anim.totalFrames - 1,
				onUpdate: () => {
					anim.goToAndStop(Math.round(tlBg.progress() * 30), true);
				},
				ease: "power2.out"
			});

			const scrollScene = new ScrollScene({
				triggerElement: bgContainerRef.current,
				triggerHook: 0.7,
				offset: 0,
				duration: "75%",
				gsap: {
					timeline: tlBg
				}
			});
			
		}
		
		return () => {
			ScrollTrigger.getAll().forEach(t => t.kill());

			if( phase3 ){
				tlRelease.current.kill();
			}else {
				tl.current.kill();
				tlAfter.current.kill();
			}
			ScrollTrigger.clearMatchMedia();
		}
	}, [phase3, q, textQ]);

	//Go to Sign Up
	const goToPage = ()=>{
		window.open('https://developer.samsung.com/dashboard/support');
	}

	return (
		<IntroContainer className={ phase4 ? '' : 'is-active' }>
			<IntroInner ref={introRef} phase3={phase3}>

				{
					phase3
					?	<IntroTop ref={bgContainerRef}>
							<div ref={bgRef} className="intro_motion"/>
							<IntroMotionText ref={textRef}>
								<div className='item-01'>Shape</div>
								<div className='item-02'>Design</div>
								<div className='item-03'>Create</div>
							</IntroMotionText>
						</IntroTop> 
					:	<IntroMotion ref={textRef}>
							<div className='item-01'>Shape</div>
							<div className='item-02'>Design</div>
							<div className='item-03'>Create</div>
						</IntroMotion>
				}

				<IntroText phase3={phase3}>
					Now meets next at SDC22 as we explore the untapped potential of today's tech. <br/>Join us, be inspired, and get in on the excitement. <br/>This year's reveal is bigger than ever. You won’t want to miss it. 
				</IntroText>
				<LinkArea>
					<Button onClick={goToPage} color="black" size="medium">Sign Up Now</Button>
				</LinkArea>

			</IntroInner>
		</IntroContainer>
	)
}

export default MainIntro;
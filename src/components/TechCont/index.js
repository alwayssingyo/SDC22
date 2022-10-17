import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as S from './style';
import { SessionData } from '../../data/SessionData';
import Filter from '../Filter';
import CardSession from '../CardSession';
import CardRoom from '../CardRoom';
import ToastPopup from '../ToastPopup';

const Tech = ()=>{
	//phase3 유무 체크
	const [phase3, setPhase3] = useState(false);

	const [filterOpen, setFilterOpen] = useState(false);

	const openFilter = ()=>{
		setFilterOpen(true);
    document.body.style.overflow = "hidden";
	}

	//화면 사이즈에 따라 필터 보이고 숨김
	const filterHandler = ()=>{
		if( !isDesktop ){
			setFilterOpen(false);
		}else{
			setFilterOpen(true);
		}
	}

	// PC, MO 체크
	const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);
	const updateMedia = () => {
		setDesktop(window.innerWidth > 1024);
	};

	useEffect(() => {
		
    window.addEventListener("resize", updateMedia, filterHandler);

    return () => window.removeEventListener("resize", updateMedia, filterHandler);
  });

	//card interaction
	const tl = useRef();
	const cardRef = useRef();
	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		ScrollTrigger.matchMedia({
			"(min-width: 768px)": function() {
				const cardArray = gsap.utils.toArray(cardRef.current.children);
				cardArray.forEach( el => {
					tl.current = gsap.timeline({
						scrollTrigger: {
							trigger: el,
							start: "0 95%",
							onEnter: () => {
								el.classList.add('is-active');
							},
						}
					})
				});
			},
			"(max-width: 767px)": function() {
				const cardArray = gsap.utils.toArray(cardRef.current.children);
				cardArray.forEach( el => {
					tl.current = gsap.timeline({
						scrollTrigger: {
							trigger: el,
							start: "0 100%",
							onEnter: () => {
								el.classList.add('is-active');
							},
						}
					})
				});
			}
		});

		return () => {
			ScrollTrigger.getAll().forEach(t => t.kill());
			tl.current.kill();

			ScrollTrigger.clearMatchMedia();
		}
	}, [])

	const [modal, setModal] = useState(false);
  const [modalFalse, setModalFalse] = useState(false);

	const CardRoomData = [
    {
      id: 1,
			link: 'sessionRoom',
			image: process.env.PUBLIC_URL + '/images/img-room-a.png',
      title: 'Session Room 1',
      time: "11:30 - 16:30 PT",
      live: true,
    },
    {
      id: 2,
			link: 'sessionRoom2',
			image: process.env.PUBLIC_URL + '/images/img-room-b.png',
      title: 'Session Room 2',
      time: "11:30 - 16:20 PT",
      live: true,
    },
    {
      id: 3,
			link: 'megaSessionRoom',
			image: process.env.PUBLIC_URL + '/images/img-room-mega.png',
      title: 'Mega Session Room',
      time: "16:30 - 17:40 PT",
      live: false,
    },
	]

	return (
		<S.TechContainer>
			<S.TechInner>
				<S.TechFilterBtn onClick={openFilter}>Filter<span>3</span></S.TechFilterBtn>
				<S.TechLeft>
					{
						isDesktop 
						? <Filter setOpen={setFilterOpen}/> 
						: filterOpen && <Filter setOpen={setFilterOpen}/>
					}
				</S.TechLeft>
				<S.TechRight>
					<S.CardWrap>
						{
							phase3 &&
							<S.CardRoomWrap>
								<S.CardRoomInner>
									<div className='card_bg'>
										{
											CardRoomData.map((item,idx)=>(
												<CardRoom
													key={idx} 
													link={item.link}
													image={item.image} 
													title={item.title}
													time={item.time}
													live={item.live}
												/>
											))
										}
									</div>
								</S.CardRoomInner>
							</S.CardRoomWrap>
						}
						<S.CardInner ref={cardRef}>
							{
								SessionData.map((item,idx)=>(
									<CardSession 
										key={idx} 
										id={item.id} 
										listYn={true} 
										col={"col-2"} 
										bookmark={true} 
										title={item.title} 
										discription={item.discription} 
										image={item.image} 
										tag={item.tag} 
										type={item.type} 
										live={item.live} 
										setModal={setModal} 
										setModalFalse={setModalFalse}
										//로딩중일 경우 true로 전송
										// loading={true}
									/>
								))
							}
						</S.CardInner>
					</S.CardWrap>
				</S.TechRight>
			</S.TechInner>

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
		</S.TechContainer>
	)
}

export default Tech;
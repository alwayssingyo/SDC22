import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const SideMenu = ({ sideMenu, setSideMenu, pathname })=>{

	const [open, setOpen] = useState(false);
	const depthRef = useRef();
	const depthItem = useRef();
	const open2Deps = ()=>{
		if( depthRef.current.offsetHeight > 0 ){
			depthRef.current.style.height = "0";
		}else {
			depthRef.current.style.height = `${depthItem.current.offsetHeight}px`;
		}
		setOpen(!open);
	}

	const menuClose = ()=>{
		setSideMenu(false);
		document.body.style.overflow = "auto";
	}

  useEffect(()=>{
		if( pathname === '/liveTech' || pathname === '/speaker' ){
			setOpen(true);
		}
	}, [pathname])

	return (
		<S.SideMenuContainer sideMenu={sideMenu}>
			<S.SideMenuInner>
				<S.SideMenuCont>
					<S.SideMenuLink className={pathname === '/keynote' ? 'is-active' : null}>
						<Link to="/keynote" onClick={menuClose}>Keynote</Link>
					</S.SideMenuLink>
					<S.SideMenuLink>
						<button onClick={open2Deps}>Sessions<S.SideMenuArrow className={open ? 'is-open' : null}></S.SideMenuArrow></button>
						<S.SideMenu2Deps ref={depthRef} className={open ? 'is-open' : ''}>
							<div ref={depthItem}>
								<S.SideMenuLink className={pathname === '/liveTech' ? 'deps-2 is-active' : 'deps-2'}><Link to="/liveTech" onClick={menuClose}>Tech Sessions</Link></S.SideMenuLink>
								<S.SideMenuLink className={pathname === '/speaker' ? 'deps-2 is-active' : 'deps-2'}><Link to="/speaker" onClick={menuClose}>Speakers</Link></S.SideMenuLink>
							</div>
						</S.SideMenu2Deps>
					</S.SideMenuLink>
					<S.SideMenuLink className={pathname === '/schedule' ? 'is-active' : null}>
						<Link to="/schedule" onClick={menuClose}>Schedule</Link>
					</S.SideMenuLink>
					<S.SideMenuLink className={pathname === '/support' ? 'is-active' : null}>
						<Link to="/support" onClick={menuClose}>Support</Link>
					</S.SideMenuLink>

					<S.SideMenuBottom>

						{/* sign in */}
						{/* <SideMenuLink>
							<a href="https://developer.samsung.com/dashboard/support">Sign in</a>
						</SideMenuLink> */}

						{/* after login */}
						<S.SideMenuLink className={pathname === '/mypage' ? 'is-active' : null}>
							<Link to="/mypage" onClick={menuClose}>My page</Link>
						</S.SideMenuLink>
						<S.SideMenuLink>
							<button onClick={menuClose}>Sign Out</button>
						</S.SideMenuLink>
					</S.SideMenuBottom>
				</S.SideMenuCont>

			</S.SideMenuInner>
		</S.SideMenuContainer>
	)
}

export default SideMenu;
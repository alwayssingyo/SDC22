import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SideMenuContainer, SideMenuInner, SideMenuCont, SideMenuLink, SideMenu2Deps, SideMenuArrow, SideMenuBottom } from './SideMenuElements';

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
		<SideMenuContainer sideMenu={sideMenu}>
			<SideMenuInner>
				<SideMenuCont>
					<SideMenuLink className={pathname === '/keynote' ? 'is-active' : null}>
						<Link to="/keynote" onClick={menuClose}>Keynote</Link>
					</SideMenuLink>
					<SideMenuLink>
						<button onClick={open2Deps}>Sessions<SideMenuArrow className={open ? 'is-open' : null}></SideMenuArrow></button>
						<SideMenu2Deps ref={depthRef} className={open ? 'is-open' : ''}>
							<div ref={depthItem}>
								<SideMenuLink className={pathname === '/liveTech' ? 'deps-2 is-active' : 'deps-2'}><Link to="/liveTech" onClick={menuClose}>Tech Sessions</Link></SideMenuLink>
								<SideMenuLink className={pathname === '/speaker' ? 'deps-2 is-active' : 'deps-2'}><Link to="/speaker" onClick={menuClose}>Speakers</Link></SideMenuLink>
							</div>
						</SideMenu2Deps>
					</SideMenuLink>
					<SideMenuLink className={pathname === '/schedule' ? 'is-active' : null}>
						<Link to="/schedule" onClick={menuClose}>Schedule</Link>
					</SideMenuLink>
					<SideMenuLink className={pathname === '/support' ? 'is-active' : null}>
						<Link to="/support" onClick={menuClose}>Support</Link>
					</SideMenuLink>

					<SideMenuBottom>

						{/* sign in */}
						{/* <SideMenuLink>
							<a href="https://developer.samsung.com/dashboard/support">Sign in</a>
						</SideMenuLink> */}

						{/* after login */}
						<SideMenuLink className={pathname === '/mypage' ? 'is-active' : null}>
							<Link to="/mypage" onClick={menuClose}>My page</Link>
						</SideMenuLink>
						<SideMenuLink>
							<button onClick={menuClose}>Sign Out</button>
						</SideMenuLink>
					</SideMenuBottom>
				</SideMenuCont>

			</SideMenuInner>
		</SideMenuContainer>
	)
}

export default SideMenu;
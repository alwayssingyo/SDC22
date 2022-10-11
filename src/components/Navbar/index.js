import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavContainer, NavInner, NavButton, NavTitle, NavMenu, NavLink, NavDropdown, NavDropdownLink, NavArrow, NavRight } from './NavbarElements';
import SideMenu from '../SideMenu'
import NavLogo from './NavLogo'
import Btn from './NavButton'
import Arrow from './NavArrow'

const Navbar = ()=>{

	//phase3 유무 체크
	const [phase3, setPhase3] = useState(false);
	//phase4 유무 체크
	const [phase4, setPhase4] = useState(false);

	//session dropdown controll
	const [dropdownOpen, setDropdownOpen] = useState(false);

	//side menu controll
	const [sideMenu, setSideMenu] = useState(false);

  const sideMenuHandler = () => {

		setSideMenu(sideMenu => !sideMenu);
		if(!sideMenu){
			document.body.style.overflow = "hidden";
		}
		else {
			document.body.style.overflow = "auto";
		}

  };

	const locationObj = useLocation();
  const [color, setColor] = useState('black');
	const [scrollVal, setScrollVal] = useState(0);

	//check color version
	const checkColor = useCallback( ()=>{
		// phase에 따라 스크롤 양 계산
		if( phase3 || phase4 ){
			setScrollVal(1);
		}else {
			setScrollVal(2);
		}

		if( window.scrollY >= (window.innerHeight * scrollVal) ){
			setColor("white");
		}else {
			setColor("black");
		}
	},[phase3, phase4, scrollVal]);

  useEffect(()=>{
		//Other page
		if (locationObj.pathname !== '/') {
			setColor("white");
		//Main
		}else {
			checkColor();

			//Only main page has scroll event
			window.addEventListener('scroll', checkColor);
		}

		return () => window.removeEventListener('scroll', checkColor);
	}, [locationObj, checkColor])

	return (
		<NavContainer color={color} className={sideMenu ? 'active' : ''}>
			<NavInner color={color} className={sideMenu ? 'active' : ''}>

				<NavTitle><Link to="/" className="logo"><NavLogo fill={color === 'black' ? '#ffffff' : '#000'}/></Link></NavTitle>

				<NavMenu>
					<NavLink
						color={color}
						className={ locationObj.pathname === '/keynote' ? 'is-selected' : '' }
					>
						<Link to="/keynote">Keynote</Link>
					</NavLink>
					<NavLink 
						color={color}
						className={ locationObj.pathname === '/liveTech' || locationObj.pathname === '/speaker' ? 'is-selected' : '' }
					>
						<button onMouseEnter={()=>{setDropdownOpen(true)}} onMouseLeave={()=>{setDropdownOpen(false)}}>
							Sessions
							<NavArrow open={dropdownOpen}><Arrow fill={color === 'black' ? '#fff' : locationObj.pathname === '/liveTech' || locationObj.pathname === '/speaker' ? "#2088fd" : '#000'} opacity="0.8"/></NavArrow>
							<NavDropdown open={dropdownOpen} color={color}>
								<div className='inner'>
									<NavDropdownLink color={color}><Link to="/liveTech" onClick={()=>{setDropdownOpen(false)}}>Tech Sessions</Link></NavDropdownLink>
									<NavDropdownLink color={color}><Link to="/speaker" onClick={()=>{setDropdownOpen(false)}}>Speakers</Link></NavDropdownLink>
								</div>
							</NavDropdown>
						</button>
					</NavLink>
					<NavLink
						color={color}
						className={ locationObj.pathname === '/schedule' ? 'is-selected' : '' }
					>
						<Link to="/schedule">Schedule</Link>
					</NavLink>
					<NavLink
						color={color}
						className={ locationObj.pathname === '/support' ? 'is-selected' : '' }
					>
						<Link to="/support">Support</Link>
					</NavLink>
				</NavMenu>

				<NavRight color={color}>
					{/* hamburger btn */}
					<NavButton color={color} className={sideMenu ? 'active' : ''} onClick={()=>{sideMenuHandler()}}><i className="toggleLine middle"></i></NavButton>

					{/* sign in */}
					{/* <NavLink color={color} className="signin"><a href="https://developer.samsung.com/dashboard/support">Sign in</a></NavLink> */}

					{/* after login */}
					<NavLink color={color} className="my-page"><Link to="/mypage">My page</Link></NavLink>
					<NavLink color={color} className="sign-out"><button>Sign Out</button></NavLink>
				</NavRight>

			</NavInner>

			{/* Side Menu */}
			<SideMenu sideMenu={sideMenu} setSideMenu={setSideMenu} pathname={locationObj.pathname}/>
		</NavContainer>
	)
}

export default Navbar;
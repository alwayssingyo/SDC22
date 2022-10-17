import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';


const Footer = ()=>{
	return (
    <S.FooterContent>
      <S.FooterInner>
        <S.FooterTop>
          <S.FooterLogoBox>Samsung Developer Conference 2022​</S.FooterLogoBox>
          <S.FooterSns>
            <ul>
              <li><Link to=""><img src={process.env.PUBLIC_URL + '/images/Facebook.svg'} alt="facebook"/></Link></li>
              <li><Link to=""><img src={process.env.PUBLIC_URL + '/images/Instagram.svg'} alt="instagram"/></Link></li>
              <li><Link to=""><img src={process.env.PUBLIC_URL + '/images/Linkedin.svg'} alt="linkedin"/></Link></li>
              <li><Link to=""><img src={process.env.PUBLIC_URL + '/images/Twitter.svg'} alt="twitter"/></Link></li>
              <li><Link to=""><img src={process.env.PUBLIC_URL + '/images/Youtube.svg'} alt="youtube"/></Link></li>
              <li><Link to=""><img src={process.env.PUBLIC_URL + '/images/Broadcast.svg'} alt="broadcast"/></Link></li>
            </ul>
          </S.FooterSns>
        </S.FooterTop>
        <S.FooterBottom>
          <S.FooterFamily>
            <ul>
              <li><a href="https://developer.samsung.com" target="_blank" rel="noopener noreferrer">Samsung Developers<span><img src={process.env.PUBLIC_URL + '/images/FooterFamilyLink.svg'} alt="link"/></span></a></li>
              <li><Link to="/terms">Terms</Link></li>
              <li><Link to="/privacy/lang=us">Privacy policy</Link></li>
              <li><Link to="/cookie/lang=eu">Cookie Policy</Link></li>
            </ul>
          </S.FooterFamily>
          <S.FooterCopy>Copyright © 2021 SAMSUNG. All rights reserved. </S.FooterCopy>
        </S.FooterBottom>
      </S.FooterInner>
    </S.FooterContent>
  )

}

export default Footer;
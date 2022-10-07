import React from 'react';
import { Link } from 'react-router-dom';
import { FooterContent, FooterInner, FooterTop,FooterLogoBox, FooterSns, FooterBottom, FooterFamily, FooterCopy } from './FooterElement';


const Footer = ()=>{
	return (
    <FooterContent>
      <FooterInner>
        <FooterTop>
          <FooterLogoBox>Samsung Developer Conference 2022​</FooterLogoBox>
          <FooterSns>
            <ul>
              <li><Link to=""><img src={process.env.PUBLIC_URL + '/images/Facebook.svg'} alt="facebook"/></Link></li>
              <li><Link to=""><img src={process.env.PUBLIC_URL + '/images/Instagram.svg'} alt="instagram"/></Link></li>
              <li><Link to=""><img src={process.env.PUBLIC_URL + '/images/Linkedin.svg'} alt="linkedin"/></Link></li>
              <li><Link to=""><img src={process.env.PUBLIC_URL + '/images/Twitter.svg'} alt="twitter"/></Link></li>
              <li><Link to=""><img src={process.env.PUBLIC_URL + '/images/Youtube.svg'} alt="youtube"/></Link></li>
              <li><Link to=""><img src={process.env.PUBLIC_URL + '/images/Broadcast.svg'} alt="broadcast"/></Link></li>
            </ul>
          </FooterSns>
        </FooterTop>
        <FooterBottom>
          <FooterFamily>
            <ul>
              <li><a href="https://developer.samsung.com" target="_blank">Samsung Developers<span><img src={process.env.PUBLIC_URL + '/images/FooterFamilyLink.svg'} alt="link"/></span></a></li>
              <li><Link to="/terms">Terms</Link></li>
              <li><Link to="/privacy/lang=us">Privacy policy</Link></li>
              <li><Link to="/cookie/lang=eu">Cookie Policy</Link></li>
            </ul>
          </FooterFamily>
          <FooterCopy>Copyright © 2021 SAMSUNG. All rights reserved. </FooterCopy>
        </FooterBottom>
      </FooterInner>
    </FooterContent>
  )

}

export default Footer;
import React, { useRef, useState, useEffect } from 'react';
import { TermsContContainer, TermsContInner, TermsDropdownGroup, TermsContWrap, TermsContTop, TermsContTitle ,TermsContDesc , TermsContItem, TermsItemTitle, TermsItemP, TermsItemLink, TermsContToc, TermsTocInner, TermsTocItem } from '../TermsCont/TermsContElements';
import Dropdown from '../Dropdown';

const TermPrivacyCont = ()=>{
  const tocRef = useRef([]);
  const [currentItem, setCurrentItem] = useState(0);

  const scrollHandler = (el)=>{
    const yOffset = -100;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
  }

  const tocHandler = ()=>{
    const scrollPos = window.scrollY;

    tocRef.current.forEach((item, idx)=>{
      const refElement = tocRef.current[idx];

      if( refElement.offsetTop <= scrollPos ){
        setCurrentItem( tocRef.current[idx] );
      }
    })

    tocRef.current.forEach((item, idx)=>{
      if ( (window.innerHeight + window.scrollY) >= document.body.scrollHeight ) {
        setCurrentItem( tocRef.current[tocRef.current.length-1] );
      }
    })
  }

  useEffect(() => {
    setCurrentItem(tocRef.current[0]);

    window.addEventListener('scroll', tocHandler);
  },[])

  /*
    language dropdown in privacy page
  */
  const dropdownUrl = ["/privacy/lang=ko","/privacy/lang=eu", "/privacy/lang=us", "/privacy/lang=latinAmerica", "/privacy/lang=brazil", "/privacy/lang=turkey"];
  const dropdownBtnText = ["Republic Of Korea","EU", "US", "Latin America", "Brazil", "Turkey"];
  const dropdownBtnTextDate = ["EFFECTIVE : 09/06/2022", "EFFECTIVE : 01/29/2020"];
  const dropdownDateUrl = ["/privacy/lang=us", "/privacy/lang=us&version=1"];

	return (
    <TermsContContainer>
      <TermsContInner>
        <TermsContWrap>

          <TermsContTop>
            <TermsContTitle>Samsung Developer Conference<br />Privacy Policy</TermsContTitle>
            <TermsDropdownGroup>
              <Dropdown
                btnText="US"
                url= {dropdownUrl}
                itemText = {dropdownBtnText}
              />
              <Dropdown
                btnText="EFFECTIVE : 09/06/2022"
                itemText = {dropdownBtnTextDate}
                url= {dropdownDateUrl}
              />
            </TermsDropdownGroup>
            <TermsContDesc>
              Samsung Electronics Co., Ltd. (“<strong>Samsung</strong>,”) knows how important privacy is to its customers and their employees and partners, and we strive to be clear about how we collect, use, disclose, transfer and store your information. This Privacy Policy provides an overview of our information practices with respect to personal information collected through or for the Samsung Developer Conference (the "<strong>Business Services</strong>").
              <br/><br />
              This Privacy Policy may be updated periodically to reflect changes in our personal information practices with respect to the Business Services or changes in the applicable law. We will indicate at the top of this Privacy Policy when it was most recently updated. If we update the Privacy Policy, we will let you know in advance about changes we consider to be material by placing a notice on the Business Services or by emailing you, where appropriate.
            </TermsContDesc>
          </TermsContTop>

          <TermsContItem ref={el => (tocRef.current[0] = el)}>
            <TermsItemTitle>What information do we collect about you?</TermsItemTitle>
            We may collect various types of personal information in connection with the Business Services.
            <br/><br/>
            For example:
            <br/><br/>
            <TermsItemP>We will collect personal information that you provide, such as your name, country,  e-mail address, nickname, password, phone number and contact details, job title and position, company related information, language, registration details, bookmarked contents and any communications you send or deliver to us;</TermsItemP>
            <TermsItemP>We collect information related to your attendance and participation of the Business Service, including information needed to identify you during the attendance of the Business Services; and</TermsItemP>
            <TermsItemP>We will collect photos and videos taken of you during your participation of the Business Services</TermsItemP>
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[1] = el)}>
            <TermsItemTitle>How do we use your information?</TermsItemTitle>
            We may use information we collect for the following purposes:
            <br/><br/>
            <TermsItemP>to provide the Business Services, including identifying and authenticating you;</TermsItemP>
            <TermsItemP>to respond to your questions or requests for information;</TermsItemP>
            <TermsItemP>for assessment and analysis of our market, customers, products, and services (including asking you for your opinions on our products and services and carrying out customer surveys);</TermsItemP>
            <TermsItemP>for commercial purposes, such as using photos and videos taken of you for creating and using promotional materials;</TermsItemP>
            <TermsItemP>to understand the way companies use the Business Services so that we can improve them and develop new products and services, including for example assessing your ability as a speaker or attendee; </TermsItemP>
            <TermsItemP>to provide maintenance services and to maintain a sufficient level of security on the Business Services;</TermsItemP>
            <TermsItemP>to protect the rights, property, or safety of Samsung, or any of our respective affiliates, business partners, employees or customers, for example, in legal proceedings, internal investigations and investigations by competent authorities; and</TermsItemP>
            <TermsItemP>otherwise with your consent or as described to at the time your information is collected.</TermsItemP>
            <div className='space'></div>
            We may use third-party analytics services on the Business Services, such as those of Google Analytics. The service providers that administer these analytics services help us to analyze your use of the Business Services and improve the Business Services. The information we obtain may be disclosed to or collected directly by these providers and other relevant third parties who use the information, for example, to evaluate use of the Business Services, help administer the Business Services and diagnose technical issues.
            <br/>
            To learn more about Google Analytics, please visit
            <br/>
            <TermsItemLink href="http://www.google.com/analytics/learn/privacy.html" target='_blank' rel='noopener noreferrer'>http://www.google.com/analytics/learn/privacy.html </TermsItemLink> and 
            <br/>
            <TermsItemLink href="https://www.google.com/policies/privacy/partners/" target='_blank' rel='noopener noreferrer'>https://www.google.com/policies/privacy/partners/</TermsItemLink>.
            
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[2] = el)}>
            <TermsItemTitle>To whom do we disclose your information?</TermsItemTitle>
            We will disclose your information internally within our business and the following entities, but only for the above purposes.
            <br/><br/>
            <TermsItemP>companies that provide services for or on behalf of us, such as companies that help us with the event operating process;</TermsItemP>
            <TermsItemP>
              other parties:
              <br/>
              (i) to comply with the law or respond to compulsory legal process (such as a search warrant or other court order);<br/>
              (ii) to verify or enforce compliance with the policies governing our Business Services;<br/>
              (iii) to protect the rights, property, or safety of Samsung, or any of our respective affiliates, business partners, or customers;<br/>
              (iv) as part of a merger or transfer, or in the event of a bankruptcy;</TermsItemP>
            <TermsItemP>with other third parties when you consent to or request such sharing.</TermsItemP>
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[3] = el)}>
            <TermsItemTitle>What do we do to keep your information secure?</TermsItemTitle>
            We have put in place reasonable physical and technical measures to safeguard the information we collect in connection with the Business Services. However, please note that although we take reasonable steps to protect your information, no website, Internet transmission, computer system or wireless connection is completely secure.
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[4] = el)}>
            <TermsItemTitle>Where do we transfer your information?</TermsItemTitle>
            Your use or participation in the Business Services may involve transfer, storage and processing of your information outside of your country of residence, consistent with this policy.  Please note that the data protection and other laws of countries to which your information may be transferred might not be as comprehensive as those in your country.  We will take appropriate measures, in compliance with applicable law, to ensure that your personal information remains protected.
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[5] = el)}>
            <TermsItemTitle>What are your rights?</TermsItemTitle>
            Under the laws of some jurisdictions, you may have the right to request details about the information we collect about you, delete information collected about you, and to correct inaccuracies in that information. We may decline to process requests that are unreasonably repetitive, require disproportionate technical effort, jeopardize the privacy of others, are extremely impractical, or for which access is not otherwise required by local law.
            <br/><br/>
            If you request deletion of personal information, you acknowledge that you may not be able to access or use the Business Services and that residual personal information may continue to reside in Samsung's records and archives for some time, but Samsung will not use that information for commercial purposes. You understand that, despite your request for deletion, Samsung reserves the right to keep your personal information, or a relevant part of it, if Samsung has suspended, limited, or terminated your access to the website for violating the Samsung Terms of Use, when necessary to protect the rights, property, or safety of Samsung, or any of our respective affiliates, business partners, employees or customers.
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[6] = el)}>
            <TermsItemTitle>How long do we keep your information?</TermsItemTitle>      
            We take reasonable steps to ensure that we retain information about you only for so long as is necessary for the purpose for which it was collected, or as required under applicable law.
            </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[7] = el)}>
            <TermsItemTitle>Third-Party Links and Products on Our Services</TermsItemTitle>
            Our Business Services may link to third-party websites and services that are outside our control. We are not responsible for the security or privacy of any information collected by websites or other services. You should exercise caution, and review the privacy statements applicable to the third-party websites and services you use.
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[8] = el)}>
            <TermsItemTitle>Cookies, Beacons and Similar Technologies</TermsItemTitle>
            We, as well as certain third parties that provide content, advertising, or other functionality on our Business Services, may use cookies, beacons, and other technologies in certain areas of our Business Services.
            <br/><br/>
            <strong>Cookies</strong><br/>
            Cookies are small files that store information on your device. They enable the entity that put the cookie on your device to recognize you across different websites, services, devices, and/or browsing sessions. Cookies serve many useful purposes. 
            <br/>
            For example:
            <br/><br/>
            <TermsItemP>
              Cookies can remember your sign-in credentials so you don’t have to enter those credentials each time you log on to a service.<br/>
              Cookies help us and third parties understand which parts of our Business Services are the most popular because they help us to see which pages and features visitors are accessing and how much time they are spending on the pages.  By studying this kind of information, we are better able to adapt the Business Services and provide you with a better experience.
            </TermsItemP>
            <TermsItemP>
              Cookies help us and third parties understand which ads you have seen so that you don’t receive the same ad each time you access the MSS Service.
            </TermsItemP>
            <TermsItemP>
              Cookies help us and third parties provide you with relevant content and advertising by collecting information about your use of our Business Services and other websites and apps.
            </TermsItemP>
            <br/>
            When you use a web browser to access the Business Services, you can configure your browser to accept all cookies, reject all cookies, or notify you when a cookie is sent. Each browser is different, so check the “Help” menu of your browser to learn how to change your cookie preferences. The operating system of your device may contain additional controls for cookies.
            <br/><br/>
            Please note, however, that some Business Services may be designed to work using cookies and that disabling cookies may affect your ability to use those Business Services, or certain parts of them.
            <br/><br/>
            <strong>Other Local Storage</strong><br/>
            We, along with certain third parties, may use other kinds of local storage technologies, such as Local Shared Objects (also referred to as “Flash cookies”) and HTML5 local storage, in connection with our Business Services. These technologies are similar to the cookies discussed above in that they are stored on your device and can be used to store certain information about your activities and preferences. However, these technologies may make use of different parts of your device from standard cookies, and so you might not be able to control them using standard browser tools and settings. For information about disabling or deleting information contained in Flash cookies, please click <a href="https://www.adobe.com/products/flashplayer/end-of-life.html" target="_blank" rel='noopener noreferrer' className='text_link'>here</a>.
            <br/><br/>
            <strong>Beacons</strong><br/>
            We, along with certain third parties, also may use technologies called beacons (or “pixels”) that communicate information from your device to a server. Beacons can be embedded in online content, videos, and emails, and can allow a server to read certain types of information from your device, know when you have viewed particular content or a particular email message, determine the time and date on which you viewed the beacon, and the IP address of your device. We and certain third parties use beacons for a variety of purposes, including to analyze the use of our Business Services and (in conjunction with cookies) to provide content and ads that are more relevant to you.
            <br/><br/>
            By accessing and using our Business Services, you consent to the storage of cookies, other local storage technologies, beacons and other information on your devices.  You also consent to the access of such cookies, local storage technologies, beacons and information by us and by the third parties mentioned above.
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[9] = el)}>
            <TermsItemTitle>Contact</TermsItemTitle>
            If you have any questions regarding this policy, please contact us at : &nbsp;
            <TermsItemLink href='mailto:sdcsupport@samsungdevelopers.com' target='_blank' rel='noopener noreferrer'>sdcsupport@samsungdevelopers.com.</TermsItemLink>
          </TermsContItem>

        </TermsContWrap>

        <TermsContToc>
          <TermsTocInner>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[0])} } className={tocRef.current[0] === currentItem ? 'is-active' : ''}>What information do we collect about you?</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[1])} } className={tocRef.current[1] === currentItem ? 'is-active' : ''}>How do we use your information?</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[2])} } className={tocRef.current[2] === currentItem ? 'is-active' : ''}>To whom do we disclose your information?</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[3])} } className={tocRef.current[3] === currentItem ? 'is-active' : ''}>What do we do to keep your information secure?</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[4])} } className={tocRef.current[4] === currentItem ? 'is-active' : ''}>Where do we transfer your information?</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[5])} } className={tocRef.current[5] === currentItem ? 'is-active' : ''}>What are your rights?</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[6])} } className={tocRef.current[6] === currentItem ? 'is-active' : ''}>How long do we keep your information?</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[7])} } className={tocRef.current[7] === currentItem ? 'is-active' : ''}>Third-Party Links and Products on Our Services</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[8])} } className={tocRef.current[8] === currentItem ? 'is-active' : ''}>Cookies, Beacons and Similar Technologies</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[9])} } className={tocRef.current[9] === currentItem ? 'is-active' : ''}>Contact</TermsTocItem>
          </TermsTocInner>
        </TermsContToc>
      </TermsContInner>
    </TermsContContainer>
	)
}

export default TermPrivacyCont;
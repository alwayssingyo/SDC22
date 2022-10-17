import React, { useRef, useState, useEffect } from 'react';
import * as S from '../TermsCont/style';
import Dropdown from '../Dropdown';

const TermPrivacyContTurkey = ()=>{
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
  const dropdownBtnTextDate = ["EFFECTIVE : 09/06/2022"];
  const dropdownDateUrl = ["/privacy/lang=turkey"];

	return (
    <S.TermsContContainer>
      <S.TermsContInner>
        <S.TermsContWrap>

          <S.TermsContTop>
            <S.TermsContTitle>Samsung Developer Conference<br />Privacy Policy</S.TermsContTitle>
            <S.TermsDropdownGroup>
              <Dropdown
                btnText="Turkey"
                url= {dropdownUrl}
                itemText = {dropdownBtnText}
              />
              <Dropdown
                btnText="EFFECTIVE : 09/06/2022"
                itemText = {dropdownBtnTextDate}
                url= {dropdownDateUrl}
              />
            </S.TermsDropdownGroup>
            <S.TermsContDesc>
              Samsung Electronics Co., Ltd. (Data Controller) (<strong>“Samsung”</strong>) knows how important privacy is to its customers and their employees and partners, and we strive to be clear about how we collect, use, disclose, transfer and store your information. The Data Controller Representative of Samsung in Turkey is “Samsung Electronics Istanbul Pazarlama ve Ticaret Ltd. Şti.”. This Privacy Policy (“KVKK Notification Text”) provides an overview of our information practices with respect to personal information collected through or for the Samsung Developer Conference with commercial customers or other services that link or refer to this KVKK Notification Text  (collectively, the <strong>"Business Services"</strong>).  
              Samsung aims to process personal data of the Business Service users in accordance with the international data protection provisions and the provisions of the Law No. 6698 on Protection of Personal Data (the “KVKK- also known as LPPD in English abbreviation”) and other legislation. 
              <br /><br />
              We hereby inform you that your personal data that you have provided/will provide to Samsung and/or are obtained externally by any means by Samsung due to your being a Business Services user shall be processed by Samsung acting as of “Data Controller”:  
              <div className='space'></div>
              <S.TermsItemP>within the framework of the purpose for which they are required to be processed and as relevant, limited, and proportionate to such purpose, </S.TermsItemP>
              <S.TermsItemP>by preserving the accuracy and the most up-to-date state of such personal data as they have been provided to Samsung by you or otherwise,</S.TermsItemP>
              <S.TermsItemP>and by complying with the conditions stipulated in the KVKK.</S.TermsItemP>
              <div className='space'></div>
              With this KVKK Notification Text (Obligation to Inform Text), it has been aimed to continue and develop the activities carried out by Samsung in accordance with the principles contained in the KVKK.<br /><br />
              This KVKK Notification Text may be updated periodically to reflect changes in our personal information practices with respect to the Business Services or changes in the applicable law. We will indicate at the top of this KVKK Notification Text when it was most recently updated. If we update this KVKK Notification Text, we will let you know in advance about changes we consider to be material by placing a notice on the Business Services or by emailing you, where appropriate.
            </S.TermsContDesc>
          </S.TermsContTop>

          <S.TermsContItem ref={el => (tocRef.current[0] = el)}>
            <S.TermsItemTitle>What information do we collect?</S.TermsItemTitle>
            Samsung shall process your personal data for the purposes and legal grounds specified in this KVKK Notification Text. If there is any change in the purpose for which your personal data are processed or in the legal grounds thereof, this KVKK Notification Text shall be updated and re-published by Samsung.<br /><br />
            We will collect various types of personal information in connection with the Business Services. Your personal data are collected through electronic media, via all kinds of information, documents and certificates you have submitted to Samsung and collected through the application, both before and after the establishment of the contractual relationship and during such contractual relationship. 
            <br/><br/>
            For example:
            <div className='space'></div>
            <S.TermsItemP>We will collect personal information that you provide, such as your name, country,  e-mail address, nickname, password, phone number and contact details, job title and position, company related information, language, registration details, bookmarked contents and any communications you send or deliver to us;</S.TermsItemP>
            <S.TermsItemP>We collect information related to your attendance and participation of the Business Service, including information needed to identify you during the attendance of the Business Services; and</S.TermsItemP>
            <S.TermsItemP>We will collect photos and videos taken of you during your participation of the Business Services.</S.TermsItemP>

            <div className='space'>
              We may use third-party analytics services on the Business Services, such as those of Google Analytics. The service providers that administer these analytics services help us to analyze your use of the Business Services and improve the Business Services. The information we obtain may be disclosed to or collected directly by these providers and other relevant third parties who use the information, for example, to evaluate use of the Business Services, help administer the Business Services and diagnose technical issues.
              <br />
              To learn more about Google Analytics, please visit
            </div>


            <S.TermsItemLink href="http://www.google.com/analytics/learn/privacy.html" target='_blank' rel='noopener noreferrer'>http://www.google.com/analytics/learn/privacy.html </S.TermsItemLink> and <br /><S.TermsItemLink href="https://www.google.com/policies/privacy/partners/" target='_blank' rel='noopener noreferrer'>https://www.google.com/policies/privacy/partners/</S.TermsItemLink>.

          </S.TermsContItem>

          <S.TermsContItem ref={el => (tocRef.current[1] = el)}>
            <S.TermsItemTitle>How do we use your information?</S.TermsItemTitle>
            We may use information we collect for the following purposes:
            <div className='space'></div>
            <S.TermsItemP>to provide the Business Services, including identifying and authenticating you;</S.TermsItemP>
            <S.TermsItemP>to respond to your questions or requests for information;</S.TermsItemP>
            <S.TermsItemP>for assessment and analysis of our market, customers, products, and services (including asking you for your opinions on our products and services and carrying out customer surveys);</S.TermsItemP>
            <S.TermsItemP>for commercial purposes, such as using photos and videos taken of you for creating and using promotional materials;</S.TermsItemP>
            <S.TermsItemP>to understand the way companies use the Business Services so that we can improve them and develop new products and services, including for example assessing your ability as a speaker or attendee; </S.TermsItemP>
            <S.TermsItemP>to provide maintenance services and to maintain a sufficient level of security on the Business Services;</S.TermsItemP>
            <S.TermsItemP>to protect the rights, property, or safety of Samsung, or any of our respective affiliates, business partners, employees or customers, for example, in legal proceedings, internal investigations and investigations by competent authorities;</S.TermsItemP>
            <S.TermsItemP>otherwise with your separate consent where required by applicable law or as described to at the time your information is collected.</S.TermsItemP>
            <div className='space'>Samsung processes personal information for the purposes described above. Samsung’s legal basis to process personal information includes processing:<br />
            Your personal data are processed being limited to the use of the related service/platform; in compliance with the legislation in force and the Law on Protection of Personal Data; by automated or non-automated methods; </div>
            <div className='space'></div>
            <S.TermsItemP>based on Article 5, paragraph 2 of the KVKK, sub-paragraph c), which stipulates ‘if it is necessary to process personal data of contractual parties, provided that such processing is directly related to the establishment or performance of the contract’, and sub-paragraph f) thereof, which stipulates ‘if it is mandatory to process personal data for the legitimate interests of the data controller, provided that the fundamental rights and freedoms of the data subject are not violated’:</S.TermsItemP>
            <div className='space'>and may be updated in line with our obligations arising from the legislation and the company policies.
            <br /><br />
            Your personal data shall be kept for a reasonable period of time until the purpose for which they are processed ceases to exist or until the end of the legal time period specified in the relevant legislation, and in any case until the expiry of the statute of limitations.</div>
          </S.TermsContItem>

          <S.TermsContItem ref={el => (tocRef.current[2] = el)}>
            <S.TermsItemTitle>To whom do we disclose your information?</S.TermsItemTitle>
            The procedures and principles to be applicable to personal data transfers are set forth in Articles 8 and 9 of the KVKK, and the personal data of the data subject may be transferred to third parties in Turkey and/or abroad.
            We will disclose your information internally within our business, but only to those who need it to further provide Services or to help with your requests.<br /><br />
            
            We will also disclose your information to the following entities, only to the extent that this will be necessary to provide the Business Services:
            <br/><br/>
            <S.TermsItemP>Service Providers: Carefully selected companies that provide services for or on behalf of us. These providers are also committed to protecting your information.</S.TermsItemP>
            <S.TermsItemP>Other parties when required by law or as necessary to protect our business: For example, it may be necessary by law, legal process, or court order from governmental authorities to disclose your information. They may also seek your information from us for the purposes of law enforcement, national security, anti-terrorism, or other issues that are related to public security.</S.TermsItemP>
            <S.TermsItemP>Other parties in connection with corporate transactions: We may disclose your information to a third party as part of a merger or transfer, acquisition or sale, or in the event of a bankruptcy.</S.TermsItemP>
            <S.TermsItemP>Other parties with your consent or at your direction: In addition to the disclosures described in this Privacy Policy, we may share information about you with third parties when you separately consent to or request such sharing.</S.TermsItemP>
            </S.TermsContItem>

          <S.TermsContItem ref={el => (tocRef.current[3] = el)}>
            <S.TermsItemTitle>How do we keep your information secure?</S.TermsItemTitle>
            We take data protection seriously. We’ve put in place physical and technical safeguards to keep the information we collect secure. However, please note that although we take reasonable steps to protect your information, no website, Internet transmission, computer system, or wireless connection is completely secure.
          </S.TermsContItem>

          <S.TermsContItem ref={el => (tocRef.current[4] = el)}>
            <S.TermsItemTitle>Where do we send your data?</S.TermsItemTitle>
            Your use or participation in the Business Services may involve transfer, storage and processing of your information outside of your country of residence, consistent with this KVKK Notification Text. Such countries include, without limitation, the Republic of Korea.
          </S.TermsContItem>

          <S.TermsContItem ref={el => (tocRef.current[5] = el)}>
            <S.TermsItemTitle>What are your rights under KVKK?</S.TermsItemTitle>
            In accordance with Article 11 of the KVKK, you may apply to Samsung and make requests on the following issues about your personal data:
            <S.TermsContListAlpha>
              <li>Learning whether or not your personal data have been processed,</li>
              <li>Obtaining information on the procedure, if your personal data have been processed,</li>
              <li>Learning the purpose for which your personal data have been processed and whether or not they are used in line with such purpose,</li>
              <li>Obtaining information about third parties to whom your personal data are transferred within Turkey or abroad,</li>
              <li>Requesting correction of your personal data if they have been processed incompletely or inaccurately and requesting the notification of third parties to whom your personal data are transferred of the correction made in this respect,</li>
              <li>Requesting deletion, destruction, or anonymization of your personal data if the reasons for which they are processed no longer exist and requesting the notification of third parties to whom your personal data are transferred of such deletion, destruction, or anonymization procedure,</li>
              <li>Objecting to the occurrence of a result which is detrimental to you as a result of analyzing of your processed personal data exclusively through automatic systems,</li>
              <li>Requesting indemnification for your damages which are caused by unlawful processing of your personal data. </li>
            </S.TermsContListAlpha>
            <div className='space'></div>
            Samsung or our Data Controller Representative shall receive and evaluate the data subject requests through the “Samsung Electronics Co., Ltd. Data Subject Application Form” available on https://www.samsung.com/tr/info/kvkk/. Samsung or our Data Controller Representative shall conclude your application free of charge in accordance with Article 13 of the KVKK according to the nature of the request, and within 30 (thirty) days at the latest. If the request is rejected, the reason(s) for rejection shall be notified to you in writing or electronically together with the relevant grounds. 
            However, requesting the deletion of your personal information may also result in a loss of access to the Business Services. 
            <br/><br/>
            If you request deletion of personal information, you acknowledge that you may not be able to access or use the Business Services and that residual personal information may continue to reside in Samsung's records and archives for some time in compliance with applicable law, but Samsung will not use that information for commercial purposes. You understand that, despite your request for deletion, Samsung reserves the right to keep your personal information, or a relevant part of it, in line with our data retention policy and applicable laws, if Samsung has suspended, limited, or terminated your access to the website for violating the Samsung Terms of Use or any other applicable Samsung policy or applicable law, when necessary to protect the rights, property, or safety of Samsung, or any of our respective affiliates, business partners, employees or customers.
          </S.TermsContItem>

          <S.TermsContItem ref={el => (tocRef.current[6] = el)}>
            <S.TermsItemTitle>How long do we keep your information?</S.TermsItemTitle>
              We won’t keep your personal information for longer than is necessary for the purpose for which it was collected. This means that information will be destroyed or erased from our systems when it’s no longer required.
              <br /><br />
              We take appropriate steps to ensure that we process and retain information about you based on the following logic:
              <S.TermsContListNumber>
                <li>At least the duration for which the information is used to provide you with a service; </li>
                <li>As  required  under  law,  regulatory  obligation,  a  contract,  or  with  regard  to  our  statutory obligations;</li>
                <li>Only for as long as is necessary for the purpose for which it was collected, is processed, or longer if required under any contract, by applicable law, or for statistical purposes, subject to appropriate safeguards.</li>
            </S.TermsContListNumber>
            </S.TermsContItem>

          <S.TermsContItem ref={el => (tocRef.current[7] = el)}>
            <S.TermsItemTitle>What third-party services do we use?</S.TermsItemTitle>
            Our Business Services may link to third-party websites and services that are outside our control. We are not responsible for the security or privacy of any information collected by websites or other services. You should exercise caution, and review the privacy statements applicable to the third-party websites and services you use.
          </S.TermsContItem>

          <S.TermsContItem ref={el => (tocRef.current[8] = el)}>
            <S.TermsItemTitle>Cookies, Beacons and Similar Technologies</S.TermsItemTitle>
            We, as well as certain third parties that provide content, advertising, or other functionality on our Business Services, may use cookies, beacons, and other technologies in certain areas of our Business Services.
            <br/><br/>
            <span className='italic'>Cookies</span><br/>
            Cookies are small files that store information on your device. They enable the entity that put the cookie on your device to recognize you across different websites, services, devices, and/or browsing sessions. Cookies serve many useful purposes. 
            <br/>
            For example:
            <br/><br/>
            <S.TermsItemP>
              Cookies can remember your sign-in credentials so you don’t have to enter those credentials each time you log on to a service.<br/>
              Cookies help us and third parties understand which parts of our Business Services are the most popular because they help us to see which pages and features visitors are accessing and how much time they are spending on the pages.  By studying this kind of information, we are better able to adapt the Business Services and provide you with a better experience.
            </S.TermsItemP>
            <S.TermsItemP>
              Cookies help us and third parties understand which ads you have seen so that you don’t receive the same ad each time you access the MSS Service.
            </S.TermsItemP>
            <S.TermsItemP>
              Cookies help us and third parties provide you with relevant content and advertising by collecting information about your use of our Business Services and other websites and apps.
            </S.TermsItemP>
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
          </S.TermsContItem>

          <S.TermsContItem ref={el => (tocRef.current[9] = el)}>
            <S.TermsItemTitle>Contact Us</S.TermsItemTitle>
            You can contact us to update your preferences, correct your information, submit a request, or ask us questions.
            <br/><br/>
            You can contact us at:
            <div className='space'><em>Data Controller</em></div>
            <div className='color-light'>
              Samsung Electronics Co., Ltd.<br />
              129, Samsung-ro, Yeongtong-gu,<br />
              Suwon-si, Gyeonggi-do 16677, Republic of Korea
            </div>
            <div className='space'><em>Data Controller Representative</em></div>
            <div className='color-light'>
              Samsung Electronics Istanbul Pazarlama ve Ticaret Ltd. Şti.”<br />
              Defterdar Mah.Otakçilar Cad. Sinpaş Flatofis Apt.No.78/46 Eyüpsultan
            </div>

          </S.TermsContItem>

        </S.TermsContWrap>

        <S.TermsContToc>
          <S.TermsTocInner>
            <S.TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[0])} } className={tocRef.current[0] === currentItem ? 'is-active' : ''}>What information do we collect?</S.TermsTocItem>
            <S.TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[1])} } className={tocRef.current[1] === currentItem ? 'is-active' : ''}>How do we use your information?</S.TermsTocItem>
            <S.TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[2])} } className={tocRef.current[2] === currentItem ? 'is-active' : ''}>To whom do we disclose your information?</S.TermsTocItem>
            <S.TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[3])} } className={tocRef.current[3] === currentItem ? 'is-active' : ''}>How do we keep your information secure?</S.TermsTocItem>
            <S.TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[4])} } className={tocRef.current[4] === currentItem ? 'is-active' : ''}>Where do we send your data?</S.TermsTocItem>
            <S.TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[5])} } className={tocRef.current[5] === currentItem ? 'is-active' : ''}>What are your rights under KVKK?</S.TermsTocItem>
            <S.TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[6])} } className={tocRef.current[6] === currentItem ? 'is-active' : ''}>How long do we keep your information?</S.TermsTocItem>
            <S.TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[7])} } className={tocRef.current[7] === currentItem ? 'is-active' : ''}>What third-party services do we use?</S.TermsTocItem>
            <S.TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[8])} } className={tocRef.current[8] === currentItem ? 'is-active' : ''}>Cookies, Beacons and Similar Technologies</S.TermsTocItem>
            <S.TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[9])} } className={tocRef.current[9] === currentItem ? 'is-active' : ''}>Contact Us</S.TermsTocItem>
          </S.TermsTocInner>
        </S.TermsContToc>
      </S.TermsContInner>
    </S.TermsContContainer>
	)
}

export default TermPrivacyContTurkey;
import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TermsContContainer, TermsContInner, TermsDropdownGroup, TermsContWrap, TermsContTop, TermsContTitle, TermsContVersion,TermsContDesc, TermsContLink, TermsContItem, TermsItemTitle, TermsItemP, TermsItemPtagTitle,  TermsItemLink, TermsContToc, TermsTocInner, TermsTocItem, TermsContListNumber } from '../TermsCont/TermsContElements';
import Dropdown from '../Dropdown';

const TermPrivacyContLatin = ()=>{
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
  const location = useLocation();
  const isPrivacyPage = location.pathname.includes('privacy');
  const hasBtnClass = (route) => {return location.pathname === route ? "hasBtn" : null};
  const dropdownUrl = ["/privacy/lang=ko","/privacy/lang=eu", "/privacy/lang=us", "/privacy/lang=latinAmerica", "/privacy/lang=brazil", "/privacy/lang=turkey"];
  const dropdownBtnText = ["Republic Of Korea","EU", "US", "Latin America", "Brazil", "Turkey"];
  const dropdownBtnTextDate = ["EFFECTIVE : 09/06/2022"];
  const dropdownDateUrl = ["/privacy/lang=latinAmerica"];

  //EN
  // const dropdownBtnTextDate = ["EFFECTIVE : 01/29/2020","11/06/2019 ~ 29/01/2020"];
  // const dropdownDateUrl = ["/privacy?lang=eu","version=1"];
  //KOREAN
  // const dropdownBtnTextDate = ["최종수정 : 2022년 2월 9일","시행일자 : 2021년 1월 1일", "시행일자 : 2020년 10월 30일" ];
  // const dropdownDateUrl = ["/privacy?lang=ko", "version=1", "version=2"];
  //CHINESE
  // const dropdownBtnTextDate = ["生效日期 : 02/15/2022","06/01/2021 ~ 02/14/2022"];
  // const dropdownDateUrl = ["/privacy?lang=zh", "version=1"];
  //GLOBAL
  // const dropdownBtnTextDate = ["EFFECTIVE : 01/29/2020","11/23/2019 ~ 01/29/2020"];
  // const dropdownDateUrl = ["/privacy?lang=global", "version=1"];
	return (
    <TermsContContainer>
      <TermsContInner>
        <TermsContWrap>

          <TermsContTop>
          {
            isPrivacyPage ?  <TermsContTitle>Samsung Developer Conference<br />Privacy Policy</TermsContTitle>

                          :  <TermsContTitle>Samsung Developer Conference<br />Terms & Conditions</TermsContTitle>
          }
          {
            isPrivacyPage ?  ''

                          :  <TermsContVersion><span>Global</span>  EFFECTIVE : 06/09/2022</TermsContVersion>
          }

            {
              isPrivacyPage &&
              <TermsDropdownGroup>
                <Dropdown
                  btnText="Latin America"
                  url= {dropdownUrl}
                  itemText = {dropdownBtnText}
                />
                <Dropdown
                  btnText="EFFECTIVE : 09/06/2022"
                  itemText = {dropdownBtnTextDate}
                  url= {dropdownDateUrl}
                />
              </TermsDropdownGroup>

            }
            <TermsContDesc>
              Samsung Electronics Co., Ltd. (Data Controller) (“<strong>Samsung</strong>”) knows how important privacy is to its customers and their employees and
              partners, and we strive to be clear about how we collect, use, disclose, transfer and store your information. This Privacy Policy provides an overview of our information practices
              with respect to personal information collected throughor for the Samsung Developer Conference(the "<strong>Business Services</strong>").<br /><br />
              This Privacy Policy may be updated periodically to reflect changes in our personal information practices with respect to the Business Services or changes in the applicable law. We will indicate at the top of this Privacy Policy when it was most recently updated. If we update the Privacy Policy, we will let you know in advance about changes we consider to be material by placing a notice on the Business Services or by emailing you, where appropriate.
            </TermsContDesc>
          </TermsContTop>
          <TermsContItem ref={el => (tocRef.current[0] = el)}>
            <TermsItemTitle>What information do we collect?</TermsItemTitle>
            We will collect various types of personal information in connection with the Business Services.
            <br/><br/>
            For example:
            <div className='space'></div>
            <TermsItemP>We will collect personal information that you provide, such as your name, country,  e-mail address, nickname, password, phone number and contact details, job title and position, company related information, language, registration details, bookmarked contents and any communications you send or deliver to us;</TermsItemP>
            <TermsItemP>We collect information related to your attendance and participation of the Business Service, including information needed to identify you during the attendance of the Business Services; and</TermsItemP>
            <TermsItemP>We will collect photos and videos taken of you during your participation of the Business Services.</TermsItemP>

            <div className='space'>
              We may use third-party analytics services on the Business Services, such as those of Google Analytics. The service providers that administer these analytics services help us to analyze your use of the Business Services and improve the Business Services. The information we obtain may be disclosed to or collected directly by these providers and other relevant third parties who use the information, for example, to evaluate use of the Business Services, help administer the Business Services and diagnose technical issues.
              To learn more about Google Analytics, please visit
            </div>


            <TermsItemLink href="http://www.google.com/analytics/learn/privacy.html" target='_blank' rel='noopener noreferrer'>http://www.google.com/analytics/learn/privacy.html </TermsItemLink> and <br /><TermsItemLink href="https://www.google.com/policies/privacy/partners/" target='_blank' rel='noopener noreferrer'>https://www.google.com/policies/privacy/partners/</TermsItemLink>.

          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[1] = el)}>
            <TermsItemTitle>How do we use your information?</TermsItemTitle>
            We may use information we collect for the following purposes:
            <div className='space'></div>
            <TermsItemP>to provide the Business Services, including identifying and authenticating you;</TermsItemP>
            <TermsItemP>to respond to your questions or requests for information;</TermsItemP>
            <TermsItemP>for assessment and analysis of our market, customers, products, and services (including asking you for your opinions on our products and services and carrying out customer surveys);</TermsItemP>
            <TermsItemP>for commercial purposes, such as using photos and videos taken of you for creating and using promotional materials;</TermsItemP>
            <TermsItemP>to understand the way companies use the Business Services so that we can improve them and develop new products and services, including for example assessing your ability as a speaker or attendee; </TermsItemP>
            <TermsItemP>to provide maintenance services and to maintain a sufficient level of security on the Business Services;</TermsItemP>
            <TermsItemP>to protect the rights, property, or safety of Samsung, or any of our respective affiliates, business partners, employees or customers, for example, in legal proceedings, internal investigations and investigations by competent authorities;</TermsItemP>
            <TermsItemP>otherwise with your separate consent where required by applicable law or as described to at the time your information is collected.</TermsItemP>
            <div className='space'>Samsung processes personal information for the purposes described above. We will obtain your consent for data processing in accordance with applicable law unless we have another legal basis to process your information without consent, as applicable, such as to comply with the law, regulatory obligations and legal processes, or to perform a contract that you have engaged with us. The legal basis may vary from one country to another, but we will rely on the appropriate legal basis provided in data protection and other laws of your country.</div>
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[2] = el)}>
            <TermsItemTitle>To whom do we disclose your information?</TermsItemTitle>
            We will disclose your information internally within our business and the following entities, but only for the above purposes.
            <br/><br/>
            <TermsItemP>Service Providers: Carefully selected companies that provide services for or on behalf of us. These providers are also committed to protecting your information.</TermsItemP>
            <TermsItemP>Other parties when required by law or as necessary to protect our business: For example, it may be necessary by law, legal process, or court order from governmental authorities to disclose your information. They may also seek your information from us for the purposes of law enforcement, national security, anti-terrorism, or other issues that are related to public security.</TermsItemP>
            <TermsItemP>Other parties in connection with corporate transactions: We may disclose your information to a third party as part of a merger or transfer, acquisition or sale, or in the event of a bankruptcy.</TermsItemP>
            <TermsItemP>Other parties with your consent or at your direction: In addition to the disclosures described in this Privacy Policy, we may share information about you with third parties when you separately consent to or request such sharing.</TermsItemP>
            </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[3] = el)}>
            <TermsItemTitle>How do we keep your information secure?</TermsItemTitle>
            We take data protection seriously. We’ve put in place physical and technical safeguards to keep the information we collect secure. However, please note that although we take reasonable steps to protect your information, no website, Internet transmission, computer system, or wireless connection is completely secure.
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[4] = el)}>
            <TermsItemTitle>Where do we send your data?</TermsItemTitle>
            Your use or participation in the Business Services may involve transfer, storage and processing of your information outside of your country of residence, consistent with this policy. Such countries include, without limitation, the Republic of Korea. Please note that the data protection and other laws of countries to which your information may be transferred might not be as comprehensive as those in your country. We will take appropriate measures, in compliance with applicable law, to ensure that your personal information remains protected.
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[5] = el)}>
            <TermsItemTitle>What are your rights?</TermsItemTitle>
            Your personal information belongs to you. You can ask us to provide details about what we’ve collected, and you can ask us to delete it. To exercise your rights, please contact us by the methods outlined in the Contact Us section of this Privacy Policy.
            <br/><br/>
            However, requesting the deletion of your personal information may also result in a loss of access to the Business Services.<br/><br/>

            If you request deletion of personal information, you acknowledge that you may not be able to access or use the Business Services and that residual personal information may continue to reside in Samsung's records and archives for some time in compliance with applicable law, but Samsung will not use that information for commercial purposes. You understand that, despite your request for deletion, Samsung reserves the right to keep your personal information, or a relevant part of it, in line with our data retention policy and applicable laws, if Samsung has suspended, limited, or terminated your access to the website for violating the Samsung Terms of Use or any other applicable Samsung policy or applicable law, when necessary to protect the rights, property, or safety of Samsung, or any of our respective affiliates, business partners, employees or customers.
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[6] = el)}>
            <TermsItemTitle>How long do we keep your information?</TermsItemTitle>
              We won’t keep your personal information for longer than is necessary for the purpose for which it was collected. This means that information will be destroyed or erased from our systems when it’s no longer required.
              <br /><br />
              We take appropriate steps to ensure that we process and retain information about you based on the following logic:
              <TermsContListNumber>
                <li>At least the duration for which the information is used to provide you with a service; </li>
                <li>As  required  under  law,  regulatory  obligation,  a  contract,  or  with  regard  to  our  statutory obligations;</li>
                <li>Only for as long as is necessary for the purpose for which it was collected, is processed, or longer if required under any contract, by applicable law, or for statistical purposes, subject to appropriate safeguards.</li>
            </TermsContListNumber>
            </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[7] = el)}>
            <TermsItemTitle>What third-party services do we use?</TermsItemTitle>
            Our Business Services may link to third-party websites and services that are outside our control. We are not responsible for the security or privacy of any information collected by websites or other services. You should exercise caution, and review the privacy statements applicable to the third-party websites and services you use.
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[8] = el)}>
            <TermsItemTitle>Cookies</TermsItemTitle>
            Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and allows us to improve our site.<br /><br />
            A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that is transferred to your computer’s hard drive.<br /><br />
            We use the following cookies:
            <div className='space'></div>
            <TermsItemP>
              <TermsItemPtagTitle>Strictly necessary cookies.</TermsItemPtagTitle>
              These cookies are required for the operation of our website. They  include,  for  example,  cookies  that  enable  you  to  log  into  secure  areas  of  our website, use a shopping cart or make use of e-billing services.
            </TermsItemP>
            <TermsItemP>
              <TermsItemPtagTitle>Analytical or performance cookies.</TermsItemPtagTitle>
              These allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.
            </TermsItemP>
            <TermsItemP>
              <TermsItemPtagTitle>Functionality cookies.</TermsItemPtagTitle>
              These are used to recognize you when you return to our website. This  enables  us  to  personalize  our  content  for  you,  greet  you  by  name  and  remember your preferences (for example, your choice of language or region).
            </TermsItemP>
            <TermsItemP>
              <TermsItemPtagTitle>Targeting cookies.</TermsItemPtagTitle>
              These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests.
            </TermsItemP>
            <div className='space'>
              We do not share the information collected by the cookies with any third parties.<br /><br />

              You can block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our website.
              <br /><br />
              Except for essential cookies, all cookies will expire after 12 months.
            </div>
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[9] = el)}>
            <TermsItemTitle>Your Choices</TermsItemTitle>
            We offer you certain choices in connection with the personal information we obtain about you.<br /><br />
            The Business Services may offer choices related to the collection, deletion and sharing of certain information related to the Business Services. If you decline to allow the Business Services to collect, store or share certain information, you may not be able to use all of the features available through the Business Services.<br />
            <br />
            To exercise your choices, please contact us as indicated in the Contact Us section of this Privacy Policy.
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[10] = el)}>
            <TermsItemTitle>Contact Us</TermsItemTitle>
            You can contact us to update your preferences, submit a request, or ask us questions.<br/>
            The easiest way to contact us is through the Contact Us section of: <TermsItemLink href='https://www.samsung.com/' target='_blank' rel='noopener noreferrer'>https://www.samsung.com/</TermsItemLink>. For requests concerning your personal data, contact us at the Privacy section of: <TermsItemLink href='https://www.samsung.com/' target='_blank' rel='noopener noreferrer'>https://www.samsung.com/</TermsItemLink>.<br/>
            <br/><br/>
            You can also contact us here:
            <br/><br/>
            sdcsupport@samsungdevelopers.com<br />
            Samsung Electronics Co., Ltd.<br/>
            129, Samsung-ro, Yeongtong-gu, Suwon-si, Gyeonggi-do 16677, Republic of Korea
          </TermsContItem>

        </TermsContWrap>

        <TermsContToc>
          <TermsTocInner>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[0])} } className={tocRef.current[0] === currentItem ? 'is-active' : ''}>What information do we collect about you?</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[1])} } className={tocRef.current[1] === currentItem ? 'is-active' : ''}>How do we use your information?</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[2])} } className={tocRef.current[2] === currentItem ? 'is-active' : ''}>To whom do we disclose your information?</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[3])} } className={tocRef.current[3] === currentItem ? 'is-active' : ''}>How do we keep your information secure?</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[4])} } className={tocRef.current[4] === currentItem ? 'is-active' : ''}>Where do we send your data?</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[5])} } className={tocRef.current[5] === currentItem ? 'is-active' : ''}>What are your rights?</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[6])} } className={tocRef.current[6] === currentItem ? 'is-active' : ''}>How long do we keep your information?</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[7])} } className={tocRef.current[7] === currentItem ? 'is-active' : ''}>What third-party services do we use?</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[8])} } className={tocRef.current[8] === currentItem ? 'is-active' : ''}>Cookies</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[9])} } className={tocRef.current[9] === currentItem ? 'is-active' : ''}>Your Choices</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[10])} } className={tocRef.current[10] === currentItem ? 'is-active' : ''}>Contact Us</TermsTocItem>
          </TermsTocInner>
        </TermsContToc>
      </TermsContInner>
    </TermsContContainer>
	)
}

export default TermPrivacyContLatin;
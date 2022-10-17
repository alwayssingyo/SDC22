import React, { useRef, useState, useEffect } from 'react';
import * as S from '../TermsCont/style';
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
  const dropdownUrl = ["/privacy/lang=ko","/privacy/lang=eu", "/privacy/lang=us", "/privacy/lang=latinAmerica", "/privacy/lang=brazil", "/privacy/lang=turkey"];
  const dropdownBtnText = ["Republic Of Korea","EU", "US", "Latin America", "Brazil", "Turkey"];
  const dropdownBtnTextDate = ["EFFECTIVE : 09/06/2022"];
  const dropdownDateUrl = ["/privacy/lang=latinAmerica"];

	return (
    <S.TermsContContainer>
      <S.TermsContInner>
        <S.TermsContWrap>

          <S.TermsContTop>
            <S.TermsContTitle>Samsung Developer Conference<br />Privacy Policy</S.TermsContTitle>
            <S.TermsDropdownGroup>
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
            </S.TermsDropdownGroup>
            <S.TermsContDesc>
              Samsung Electronics Co., Ltd. (Data Controller) (“<strong>Samsung</strong>”) knows how important privacy is to its customers and their employees and
              partners, and we strive to be clear about how we collect, use, disclose, transfer and store your information. This Privacy Policy provides an overview of our information practices
              with respect to personal information collected throughor for the Samsung Developer Conference(the "<strong>Business Services</strong>").<br /><br />
              This Privacy Policy may be updated periodically to reflect changes in our personal information practices with respect to the Business Services or changes in the applicable law. We will indicate at the top of this Privacy Policy when it was most recently updated. If we update the Privacy Policy, we will let you know in advance about changes we consider to be material by placing a notice on the Business Services or by emailing you, where appropriate.
            </S.TermsContDesc>
          </S.TermsContTop>

          <S.TermsContItem ref={el => (tocRef.current[0] = el)}>
            <S.TermsItemTitle>What information do we collect?</S.TermsItemTitle>
            We will collect various types of personal information in connection with the Business Services.
            <br/><br/>
            For example:
            <div className='space'></div>
            <S.TermsItemP>We will collect personal information that you provide, such as your name, country,  e-mail address, nickname, password, phone number and contact details, job title and position, company related information, language, registration details, bookmarked contents and any communications you send or deliver to us;</S.TermsItemP>
            <S.TermsItemP>We collect information related to your attendance and participation of the Business Service, including information needed to identify you during the attendance of the Business Services; and</S.TermsItemP>
            <S.TermsItemP>We will collect photos and videos taken of you during your participation of the Business Services.</S.TermsItemP>

            <div className='space'>
              We may use third-party analytics services on the Business Services, such as those of Google Analytics. The service providers that administer these analytics services help us to analyze your use of the Business Services and improve the Business Services. The information we obtain may be disclosed to or collected directly by these providers and other relevant third parties who use the information, for example, to evaluate use of the Business Services, help administer the Business Services and diagnose technical issues.
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
            <div className='space'>Samsung processes personal information for the purposes described above. We will obtain your consent for data processing in accordance with applicable law unless we have another legal basis to process your information without consent, as applicable, such as to comply with the law, regulatory obligations and legal processes, or to perform a contract that you have engaged with us. The legal basis may vary from one country to another, but we will rely on the appropriate legal basis provided in data protection and other laws of your country.</div>
          </S.TermsContItem>

          <S.TermsContItem ref={el => (tocRef.current[2] = el)}>
            <S.TermsItemTitle>To whom do we disclose your information?</S.TermsItemTitle>
            We will disclose your information internally within our business and the following entities, but only for the above purposes.
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
            Your use or participation in the Business Services may involve transfer, storage and processing of your information outside of your country of residence, consistent with this policy. Such countries include, without limitation, the Republic of Korea. Please note that the data protection and other laws of countries to which your information may be transferred might not be as comprehensive as those in your country. We will take appropriate measures, in compliance with applicable law, to ensure that your personal information remains protected.
          </S.TermsContItem>

          <S.TermsContItem ref={el => (tocRef.current[5] = el)}>
            <S.TermsItemTitle>What are your rights?</S.TermsItemTitle>
            Your personal information belongs to you. You can ask us to provide details about what we’ve collected, and you can ask us to delete it. To exercise your rights, please contact us by the methods outlined in the Contact Us section of this Privacy Policy.
            <br/><br/>
            However, requesting the deletion of your personal information may also result in a loss of access to the Business Services.<br/><br/>

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
            <S.TermsItemTitle>Cookies</S.TermsItemTitle>
            Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and allows us to improve our site.<br /><br />
            A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that is transferred to your computer’s hard drive.<br /><br />
            We use the following cookies:
            <div className='space'></div>
            <S.TermsItemP>
              <S.TermsItemPtagTitle>Strictly necessary cookies.</S.TermsItemPtagTitle>
              These cookies are required for the operation of our website. They  include,  for  example,  cookies  that  enable  you  to  log  into  secure  areas  of  our website, use a shopping cart or make use of e-billing services.
            </S.TermsItemP>
            <S.TermsItemP>
              <S.TermsItemPtagTitle>Analytical or performance cookies.</S.TermsItemPtagTitle>
              These allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.
            </S.TermsItemP>
            <S.TermsItemP>
              <S.TermsItemPtagTitle>Functionality cookies.</S.TermsItemPtagTitle>
              These are used to recognize you when you return to our website. This  enables  us  to  personalize  our  content  for  you,  greet  you  by  name  and  remember your preferences (for example, your choice of language or region).
            </S.TermsItemP>
            <S.TermsItemP>
              <S.TermsItemPtagTitle>Targeting cookies.</S.TermsItemPtagTitle>
              These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests.
            </S.TermsItemP>
            <div className='space'>
              We do not share the information collected by the cookies with any third parties.<br /><br />

              You can block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our website.
              <br /><br />
              Except for essential cookies, all cookies will expire after 12 months.
            </div>
          </S.TermsContItem>

          <S.TermsContItem ref={el => (tocRef.current[9] = el)}>
            <S.TermsItemTitle>Your Choices</S.TermsItemTitle>
            We offer you certain choices in connection with the personal information we obtain about you.<br /><br />
            The Business Services may offer choices related to the collection, deletion and sharing of certain information related to the Business Services. If you decline to allow the Business Services to collect, store or share certain information, you may not be able to use all of the features available through the Business Services.<br />
            <br />
            To exercise your choices, please contact us as indicated in the Contact Us section of this Privacy Policy.
          </S.TermsContItem>

          <S.TermsContItem ref={el => (tocRef.current[10] = el)}>
            <S.TermsItemTitle>Contact Us</S.TermsItemTitle>
            You can contact us to update your preferences, submit a request, or ask us questions.<br/>
            The easiest way to contact us is through the Contact Us section of: <S.TermsItemLink href='https://www.samsung.com/' target='_blank' rel='noopener noreferrer'>https://www.samsung.com/</S.TermsItemLink>. For requests concerning your personal data, contact us at the Privacy section of: <S.TermsItemLink href='https://www.samsung.com/' target='_blank' rel='noopener noreferrer'>https://www.samsung.com/</S.TermsItemLink>.<br/>
            <br/><br/>
            You can also contact us here:
            <br/><br/>
            sdcsupport@samsungdevelopers.com<br />
            Samsung Electronics Co., Ltd.<br/>
            129, Samsung-ro, Yeongtong-gu, Suwon-si, Gyeonggi-do 16677, Republic of Korea
          </S.TermsContItem>

        </S.TermsContWrap>

        <S.TermsContToc>
          <S.TermsTocInner>
            <S.TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[0])} } className={tocRef.current[0] === currentItem ? 'is-active' : ''}>What information do we collect about you?</S.TermsTocItem>
            <S.TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[1])} } className={tocRef.current[1] === currentItem ? 'is-active' : ''}>How do we use your information?</S.TermsTocItem>
            <S.TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[2])} } className={tocRef.current[2] === currentItem ? 'is-active' : ''}>To whom do we disclose your information?</S.TermsTocItem>
            <S.TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[3])} } className={tocRef.current[3] === currentItem ? 'is-active' : ''}>How do we keep your information secure?</S.TermsTocItem>
            <S.TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[4])} } className={tocRef.current[4] === currentItem ? 'is-active' : ''}>Where do we send your data?</S.TermsTocItem>
            <S.TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[5])} } className={tocRef.current[5] === currentItem ? 'is-active' : ''}>What are your rights?</S.TermsTocItem>
            <S.TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[6])} } className={tocRef.current[6] === currentItem ? 'is-active' : ''}>How long do we keep your information?</S.TermsTocItem>
            <S.TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[7])} } className={tocRef.current[7] === currentItem ? 'is-active' : ''}>What third-party services do we use?</S.TermsTocItem>
            <S.TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[8])} } className={tocRef.current[8] === currentItem ? 'is-active' : ''}>Cookies</S.TermsTocItem>
            <S.TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[9])} } className={tocRef.current[9] === currentItem ? 'is-active' : ''}>Your Choices</S.TermsTocItem>
            <S.TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[10])} } className={tocRef.current[10] === currentItem ? 'is-active' : ''}>Contact Us</S.TermsTocItem>
          </S.TermsTocInner>
        </S.TermsContToc>
      </S.TermsContInner>
    </S.TermsContContainer>
	)
}

export default TermPrivacyContLatin;
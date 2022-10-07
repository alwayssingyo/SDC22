import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TermsContContainer, TermsContInner, TermsDropdownGroup, TermsContWrap, TermsContTop, TermsContTitle, TermsContVersion,TermsContDesc, TermsContLink, TermsContItem, TermsItemTitle, TermsItemP, TermsItemLink, TermsContToc, TermsTocInner, TermsTocItem } from './TermsContElements';
import Dropdown from '../Dropdown';

const TermsCont = ()=>{
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

	return (
    <TermsContContainer>
      <TermsContInner>
        <TermsContWrap>

          <TermsContTop>
          {
            isPrivacyPage ?  <TermsContTitle>Samsung Developer Conference<br />Privacy Policy</TermsContTitle>

                          :  <TermsContTitle>Samsung Developer Conference<br/>Terms and Conditions </TermsContTitle>
          }
          {
            isPrivacyPage ?  ''

                          :  <TermsContVersion><span>Global EFFECTIVE DATE: September 14. 2022</span></TermsContVersion>
          }

            <TermsContDesc>
              Please read all of the following Terms and Conditions carefully. These Terms and Conditions shall govern your use of the Samsung Developer Conference (“SDC”) event website (samsungdeveloperconference.com) and your participation in the SDC, and constitute an agreement between you and Samsung Electronics. Co. Ltd. ("Samsung"). By accessing this website, you agree that you have read, understand and agree to be legally bound by the Terms and Conditions set forth below, including the arbitration provision which provides that all dispute will be resolved by a binding arbitration.  If you are registering on behalf of another individual, it is your responsibility to ensure the person participating is aware of these Terms and Conditions and accepts them. By completing the registration on behalf of another individual you represents and warrants that you have made that person aware of these Terms and Conditions and that they have accepted them.
              <br /><br />
              Samsung may change these Terms and Conditions at any time by updating this page. You shall therefore check this page from time to time to review these Terms and Conditions to ensure that you agree with any changes. USING OR ACCESSING THIS WEBSITE INDICATES YOUR CONTINUING ACCEPTANCE OF ANY UPDATES TO THE TERMS AND CONDITIONS. IF YOU DO NOT ACCEPT THE TERMS AND CONDITIONS, THEN PLEASE DO NOT CONTINUE TO USE THE WEBSITE.
            </TermsContDesc>
          </TermsContTop>

          <TermsContItem ref={el => (tocRef.current[0] = el)}>
            <TermsItemTitle>Access to the Website and Property Rights</TermsItemTitle>
            Your registration entitles you to access this website and the content contained within it for your own use and benefit. You acknowledge and agree that Samsung reserves the right to modify, withdraw or deny access to the website at any time, including without limitation introducing charges for its use or other restrictions on access.  Any and all other costs associated with your participation shall be borne solely by you, and the SDC, Samsung and its affiliates shall have no liability for such costs.
            <br/><br/>
            You acknowledge and agree that Samsung retains all right, title, and interest in and to the website, including all materials and any intellectual property rights (including but not limited to copyright, trademarks, patents, design rights, database rights, and rights in confidential information throughout the world) therein. The materials include, but are not limited to, the design, layout, logos, brands, look and feel, appearance and graphics of the website, including any content, software, documents and other materials which constitute the website.
            <br/><br/>
            You may not (and may not permit anyone to) copy, redistribute, republish or otherwise make the materials on the website available to anyone else for any purpose without prior written consent of Samsung. You may not share, sell or trade your access to SDC to anyone else, unless such transfer is approved by Samsung. If Samsung determines that you have violated this policy, Samsung may cancel your access to SDC, and/or ban you from future Samsung events. You may not record or broadcast audio or video sessions of SDC without Samsung’s prior written permission. Samsung reserves the right to deny participation to anyone who engages in or is reputed to engage in unethical or non-compliant business practices.
            <br/><br/>
            You may only print or download materials from the website for your own personal, non-commercial use, provided that:
            <br/><br/>
            <TermsItemP>no materials are modified in any way</TermsItemP>
            <TermsItemP>no graphics are used separately from accompanying text and</TermsItemP>
            <TermsItemP>copyright and trademark notices appear in all copies</TermsItemP>
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[1] = el)}>
            <TermsItemTitle>Registration</TermsItemTitle>
            You may view some parts of this website without creating an account. If you create a Samsung Account, you can enjoy additional benefits which are subject to separate terms and conditions. You are solely responsible for any activity that occurs on your account and for maintaining the confidentiality of your password. You agree that you will provide and maintain accurate registration information and that it is your sole responsibility to do so. If there has been an unauthorized use of your password or account, please notify us immediately.
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[2] = el)}>
            <TermsItemTitle>Ownership</TermsItemTitle>
            Unless otherwise stated herein, we and/or our licensors are the sole owners of this website and all of its content, including without limitation, all information, services, features, functions, copyrights, trademarks, service marks, and other intellectual property rights contained within this website. You agree that all right, title, and interest in this website will remain ours or our licensors’ exclusive property. Nothing in these Terms and Conditions gives you a right to reproduce, copy, distribute, sell, broadcast, license, or otherwise use the Samsung name or any of our trademarks, logos, domain names, and other distinctive brand features. You may not modify, rent, lease, sell, distribute, or create derivative works based on this website unless we have given you prior written consent to do so. You agree that you will only use this website for personal, non-commercial purposes. Notwithstanding the foregoing, we do not claim ownership of any content that you submit to us via this website. You represent and warrant that you have secured (and are able to produce proof in writing) of any and all rights necessary and appropriate to submit the content to us via this website, including all necessary releases, and that such content is not confidential, as it will be not be treated as such. You do, however, grant us a perpetual, worldwide, unrestricted, non-exclusive, royalty-free, transferable license to use. license, reproduce, modify, adapt, publish, translate, create derivate works from, distribute, publicly perform and display the content that you post or submit to us via this website.
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[3] = el)}>
            <TermsItemTitle>Samsung Goods and Services</TermsItemTitle>
            Samsung may display the availability of some goods and/or services on this website. Some of these goods and/or services may only be available in certain jurisdictions and Samsung therefore reserves the right to choose where such goods and/or services are supplied. By informing the availability of any goods and/or services, Samsung does not warrant that such goods and/or services will be available in your jurisdiction and you should check with your local Samsung contact for further information. Where Samsung does supply goods and/or services, whether through this website or other means, additional terms and conditions may apply.
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[4] = el)}>
            <TermsItemTitle>Use Restrictions</TermsItemTitle>
            While using this website you agree to comply with all applicable laws, rules and regulations. You further agree that when using this website you will not:
            <br /><br />
            <TermsItemP>Transmit by any means any software, virus, malware, program, code, file, or other material intended to interrupt, disrupt, alter, destroy, or limit any part of this website;</TermsItemP>
            <TermsItemP>Use any robot, spider, script, or any manual or automated application or means to extract, download, retrieve, index, mine, scrape, reproduce, or circumvent the presentation, operation, or intended use of any feature, function, or part of this website; </TermsItemP>
            <TermsItemP>Frame or mirror any part of this website without Samsung’ express prior written consent;</TermsItemP>
            <TermsItemP>Modify, adapt, translate, reverse engineer, decompile or disassemble any portion of this website;</TermsItemP>
            <TermsItemP>Copy, download, distribute, transmit, upload, or transfer content from this website or the personal information of others without our prior written permission or authorization;</TermsItemP>
            <TermsItemP>Resell, sub-license, or lease any of the content on this website;</TermsItemP>
            <TermsItemP>Impersonate or pretend to be anyone else but you; falsely state or otherwise misrepresent your affiliation with any person or entity in connection with this website; or express or imply that we endorse any statement you make;</TermsItemP>
            <TermsItemP>Violate or infringe upon the privacy, publicity, intellectual property, or other proprietary rights of third parties;</TermsItemP>
            <TermsItemP>Engage in any activity that is criminal or tortious in nature, or otherwise violates the law or rights of another including, without limitation, hacking, phishing, fraud, stalking, defaming, abusing, harassing, or threatening.</TermsItemP>
            <br />
            Your failure to comply with these restrictions or any part of these Terms and Conditions may result in termination of your access to this website, as well as cancellation of your account and/or registration.
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[5] = el)}>
            <TermsItemTitle>Disclaimers</TermsItemTitle>
            Samsung does not guarantee that this website or any product and/or services provided through the website:
            <div className='space'></div>
            <TermsItemP>will be compatible with all or any hardware and software that you may use</TermsItemP>
            <TermsItemP>will be available all the time or at any specific time.</TermsItemP>
            <br/>
            THE WEBSITE, INCLUDING ALL CONTENT THEREIN, IS PROVIDED "AS IS" AND WITHOUT WARRANTIES OF ANY KIND EITHER EXPRESS OR IMPLIED AND YOU SHALL USE THE WEBSITE AT YOUR OWN RISK. SAMSUNG DOES NOT WARRANT NOR MAKE ANY REPRESENTATIONS REGARDING THE USE OR THE RESULTS OF THE USE OF THE WEBSITE, INCLUDING ALL CONTENT THEREIN, IN TERMS OF ITS CORRECTNESS, ACCURACY, RELIABILITY, OR OTHERWISE. TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, SAMSUNG DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. SAMSUNG DOES NOT WARRANT THE ACCURACY, COMPLETENESS OR USEFULNESS OF ANY INFORMATION CONTAINED WITHIN THE WEBSITE. SAMSUNG DOES NOT WARRANT THAT THE WEBSITE OR CONTENT OR THE FUNCTIONS CONTAINED IN THE WEBSITE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE WEBSITE OR THE SERVERS THAT MAKE IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[6] = el)}>
            <TermsItemTitle>Force Majeure</TermsItemTitle>
            If Samsung is prevented from carrying out its obligations under these Terms and Conditions as a result of any cause beyond its control, including without limitation acts of God, strikes, labor disputes, government requisitions, restrictions or war or apparent act of war, terrorism, disaster, civil disorder, epidemic or pandemic, curtailment or restriction on transportation facilities, or any other comparable calamity, casualty or condition Samsung shall have the right to immediately terminate this website without liability and shall be relieved of its obligations to you.
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[7] = el)}>
            <TermsItemTitle>Limitation of Liability</TermsItemTitle>
            TO THE FULLEST EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE TO YOU OR ANY OTHER PARTY FOR ANY CLAIM, LOSS OR DAMAGE, DIRECT OR INDIRECT, INCLUDING, WITHOUT LIMITATION, COMPENSATORY, CONSEQUENTIAL, INCIDENTAL, INDIRECT, SPECIAL, EXEMPLARY, OR PUNITIVE DAMAGES, REGARDLESS OF THE FORM OF ACTION OR BASIS OF ANY CLAIM. YOU SPECIFICALLY ACKNOWLEDGE THAT WE SHALL NOT BE LIABLE TO YOU FOR ANY INTERACTION WITH ANY THIRD PARTIES APPEARING ON THIS WEBSITE. WE SHALL NOT BE LIABLE FOR ANY LOSS OF DATA, BREACH OF SECURITY ASSOCIATED WITH YOUR ACCOUNT REGISTRATION, REGARDLESS OF THE FORM OF ACTION OR BASIS OF ANY CLAIM. SOME JURISDICTIONS DO NOT ALLOW CERTAIN EXCLUSIONS OF WARRANTIES OR LIMITATIONS ON DAMAGES, SO SOME OF THESE EXCLUSIONS AND LIMITATIONS MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH THIS WEBSITE, TERMINATION OF YOUR USE OF THIS WEBSITE IS YOUR SOLE REMEDY. WE HAVE NO OTHER OBLIGATION, LIABILITY, OR RESPONSIBILITY TO YOU.
            <br/><br/>
            NOTWITHSTANDING THE FOREGOING, IF SAMSUNG IS FOUND TO BE LIABLE TO YOU FOR ANY DAMAGE OR LOSS WHICH ARISES OUT OF OR IS IN ANY CONNECTED WITH YOUR USE OF THE WEBSITE OR ANY CONTENT CONTAINED THEREIN, SAMSUNG’S LIABILITY SHALL IN NO EVENT EXCEED THE AMOUNT PAID BY YOU TO SAMSUNG UNDER THESE TERMS AND CONDITIONS OR USD 300 WHICHEVER IS HIGHER.
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[8] = el)}>
            <TermsItemTitle>Indemnity</TermsItemTitle>
            You agree to defend, indemnify and hold harmless Samsung, its affiliates, and their respective employees, officers, directors, agents, representatives, licensors, suppliers, agencies, and service providers from and against all claims, losses, costs and expenses (including attorney’s fees) arising out of (a) your use of, or activities in connection with this website; or (b) any violation of these Terms and Conditions by you. We reserve the right to control all or any part of the defense of any such claims and negotiations for settlement and you agree to fully cooperate with us in doing so.
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[9] = el)}>
            <TermsItemTitle>Linking</TermsItemTitle>
            Samsung may link to other websites which are not within its control. When Samsung does this, Samsung will try and make it as clear as possible that you are leaving samsungdeveloperconference.com. Samsung is not responsible for these other sites in any way, and do not endorse them. It is your responsibility to check the terms and conditions and privacy policy on any other site which you visit.
            <br/><br/>
            You may not link to samsungdeveloperconference.com from another site without our consent in writing. Any consent would be subject to complying with the following guidelines:
            <div className='space'></div>
            <TermsItemP>
              links must be to the home page <TermsItemLink href="http://samsungdeveloperconference.com" rel='noopener noreferrer'>http://samsungdeveloperconference.com</TermsItemLink> 
            </TermsItemP>
            <TermsItemP>you may not create a frame or any other border around samsungdeveloperconference.com</TermsItemP>
            <TermsItemP>the site from which you wish to link must comply with all relevant laws and regulations and must not contain content which may be considered to be distasteful or offensive</TermsItemP>
            <TermsItemP>and you must not imply that Samsung endorses, or is associated with, any other site, product or service</TermsItemP>
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[10] = el)}>
            <TermsItemTitle>Fees</TermsItemTitle>
            The participation in the SDC and the use of this website services is currently free of charge. Samsung reserves the right to charge for SDC event services and to change its fees, at its discretion. Samsung may from time to time launch other services which may be subject to a separate charge and terms.
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[11] = el)}>
            <TermsItemTitle>Contracting Online</TermsItemTitle>
            Nothing on samsungdeveloperconference.com is intended to be, nor should be construed as, an offer to enter into a contractual relationship with you or anyone else, except for these Terms and Conditions, which govern the relationship between us in relation to your use of samsungdeveloperconference.com and the services made available through it (plus any additional terms applicable to specific products and/or services on the website).
            <br/><br/>
            If you make a contract with a third party who is named or referred to on samsungdeveloperconference.com, it is your responsibility to ensure that you are comfortable with the terms of that contract, and to take legal advice if necessary.
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[12] = el)}>
            <TermsItemTitle>Arbitration</TermsItemTitle>
            The formation, existence, construction, performance, validity and all aspects whatsoever of these Terms and Conditions, or of any individual one of these terms and conditions, will be governed by the law of the State of New York, without references to its choice of laws principles. These Terms will not be governed by the UN Convention on Contracts for the International Sale of Goods, the application of which is expressly excluded. Notwithstanding the foregoing, we may apply for injunctive remedies (or an equivalent type of urgent legal relief) in any court of competent jurisdiction.  YOU UNDERSTAND AND AGREE THAT, BY ENTERING INTO THESE  TERMS AND CONDITIONS, YOU AND SAMSUNG EACH WAIVE THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION, TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW. By using the Service, you unconditionally consent and agree that: (i) any claim, dispute or controversy (whether in contract, tort, or otherwise) you may have against any Samsung entity, the officers, directors, agents and employees of any Samsung entity (the “Samsung Entity(ies)”) arising out of, relating to, or connected in any way with SDC or the website or the determination of the scope or applicability of this clause, will be resolved exclusively by final and binding arbitration administered by JAMS and conducted before a sole arbitrator in accordance with the rules of JAMS; (ii) this clause is made pursuant to a transaction involving interstate commerce, and shall be governed by the Federal Arbitration Act (“FAA”), 9 U.S.C. §§ 1-16; (iii) the arbitration shall be held in New York City, New York; (iv) the arbitrator’s decision shall be controlled by the terms and conditions of the TOS and any other agreements referenced herein that you have agreed to in connection with SDC or the website; (v) the arbitrator shall apply New York law consistent with the FAA and applicable statutes of limitations, and shall honor claims of privilege recognized at law; (vi) there shall be no authority for any claims to be arbitrated on a class or representative basis, arbitration can decide only your and/or the applicable Samsung Entity’s individual claims; the arbitrator may not consolidate or join the claims of other persons or parties who may be similarly situated; and you will not file or participate in a class action against us; (vii) the arbitrator shall not have the power to award punitive damages against you or any Samsung Entity; (viii) in the event that the administrative fees and deposits that must be paid to initiate arbitration against any Samsung Entity exceed One Hundred Twenty-Five US Dollars (US$125), and you are unable (or not required under the rules of JAMS) to pay any fees and deposits that exceed this amount, Samsung agrees to pay them and/or forward them on your behalf, subject to ultimate allocation by the arbitrator. In addition, if you are able to demonstrate that the costs of arbitration will be prohibitive as compared to the costs of litigation, Samsung will pay as much of your filing and hearing fees in connection with the arbitration as the arbitrator deems necessary to prevent the arbitration from being cost prohibitive; and (ix) with the exception of subsection (vi) above, if any part of this arbitration provision is deemed invalid, unenforceable or illegal, or otherwise conflicts with the rules of JAMS, the balance of this arbitration provision shall remain in effect and shall be construed in accordance with its terms as if the invalid, unenforceable, illegal or conflicting provision were not contained herein. If, however, subsection (vi) above is found to be invalid, unenforceable or illegal, the entirety of this arbitration provision shall be null and void, and neither you nor Samsung shall be entitled to arbitrate the dispute. For more information on JAMS and/or the rules of JAMS, visit their website at www.jamsadr.com.
            <br/><br/>
            You can choose to reject this arbitration agreement by mailing us a written opt-out notice (“Opt-Out Notice”) in accordance with the terms of this section . For new users, the Opt-Out Notice must be postmarked no later than 30 days after the date you use the website for the first time. You must mail the Opt-Out Notice to sdcsupport@samsungdevelopers.com. The Opt-Out Notice must state that you do not agree to the arbitration agreement and must include your name, address, phone number, and the email address(es) used to log in to the website to which the opt-out applies. You must sign the Opt-Out Notice for it to be effective. This procedure is the only way you can opt out of the arbitration agreement. If you opt out of the arbitration agreement, Samsung will likewise not be bound by these arbitration provisions. All other terms of these Terms and Conditions will continue to apply. Opting out of the arbitration agreement has no effect on any previous, other, or future arbitration agreements that you may have with us. Samsung users who accepted a previous version of these Terms and Conditions that included an arbitration agreement, and who did not timely opt out of that arbitration agreement, remain bound by the last arbitration agreement that they accepted. Upon receipt of a valid Opt-Out Notice, Samsung will provide the opting out user with a copy of the arbitration agreement from the last version of the Terms and Conditions that the user accepted, if any exists.
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[13] = el)}>
            <TermsItemTitle>Age Limit</TermsItemTitle>
            Everyone is welcome to visit samsungdeveloperconference.com. However, if you want to participate on certain sections of the website or in certain activities available on the website, for example join a club or group, or enter a contest, you must register to the website. In order to register, you must be at least 18 years old or receive your parents and/or guardians written consent (in the latter case, the parents and/or guardians shall supervise your use of this website, assume all risks associated with your use of this website, assume any liability resulting from your use of this website, ensure the accuracy and truthfulness of all information submitted by you, and assume responsibility and are bound by these Terms and Conditions.
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[14] = el)}>
            <TermsItemTitle>Termination</TermsItemTitle>
            We may immediately suspend or terminate your use of and access to this website at our sole discretion and without prior notice, for any reason, with or without cause.
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[15] = el)}>
            <TermsItemTitle>Severability</TermsItemTitle>
            If any provision in these Terms and Conditions is invalid or unenforceable or contrary to applicable law, such provision shall be construed, limited, or altered, as necessary, to eliminate the invalidity or unenforceability or the conflict with applicable law, and all other provisions of these Terms and Conditions shall remain in effect.
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[16] = el)}>
            <TermsItemTitle>Waiver</TermsItemTitle>
            Any delay in enforcing or any failure to enforce any provision of these Terms and Conditions will not be deemed a waiver of any other or subsequent breach of these Terms and Conditions.
          </TermsContItem>

          <TermsContItem ref={el => (tocRef.current[17] = el)}>
            <TermsItemTitle>Changes</TermsItemTitle>
            We reserve the right to change any part of this website, including these Terms and Conditions, at any time. If we change these Terms and Conditions, we will update the Effective Date listed above. Your continued use of this website means that you agree with our updated Terms and Conditions. If you do not agree with our updated Terms and Conditions, you shall not use the website.
          </TermsContItem>
        </TermsContWrap>

        <TermsContToc>
          <TermsTocInner>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[0])} } className={tocRef.current[0] === currentItem ? 'is-active' : ''}>Access to the Website and Property Rights</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[1])} } className={tocRef.current[1] === currentItem ? 'is-active' : ''}>Registration</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[2])} } className={tocRef.current[2] === currentItem ? 'is-active' : ''}>Ownership</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[3])} } className={tocRef.current[3] === currentItem ? 'is-active' : ''}>Samsung Goods and Services</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[4])} } className={tocRef.current[4] === currentItem ? 'is-active' : ''}>Use Restrictions</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[5])} } className={tocRef.current[5] === currentItem ? 'is-active' : ''}>Disclaimers</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[6])} } className={tocRef.current[6] === currentItem ? 'is-active' : ''}>Force Majeure</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[7])} } className={tocRef.current[7] === currentItem ? 'is-active' : ''}>Limitation of Liability</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[8])} } className={tocRef.current[8] === currentItem ? 'is-active' : ''}>Indemnity</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[9])} } className={tocRef.current[9] === currentItem ? 'is-active' : ''}>Linking</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[10])} } className={tocRef.current[10] === currentItem ? 'is-active' : ''}>Fees</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[11])} } className={tocRef.current[11] === currentItem ? 'is-active' : ''}>Contracting Online</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[12])} } className={tocRef.current[12] === currentItem ? 'is-active' : ''}>Arbitration</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[13])} } className={tocRef.current[13] === currentItem ? 'is-active' : ''}>Age Limit</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[14])} } className={tocRef.current[14] === currentItem ? 'is-active' : ''}>Termination</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[15])} } className={tocRef.current[15] === currentItem ? 'is-active' : ''}>Severability</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[16])} } className={tocRef.current[16] === currentItem ? 'is-active' : ''}>Waiver</TermsTocItem>
            <TermsTocItem onClick={ ()=>{scrollHandler(tocRef.current[17])} } className={tocRef.current[17] === currentItem ? 'is-active' : ''}>Changes</TermsTocItem>
          </TermsTocInner>
        </TermsContToc>
      </TermsContInner>
    </TermsContContainer>
	)
}

export default TermsCont;
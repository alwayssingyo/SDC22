import React, { useState } from 'react';
import { TermsContContainer, CookieInner, TermsContTop, CookieTitle, TermsContDesc, TermsContItem, TermsItemP, TermsItemTitle, TermsItemLink, TermsExtra } from '../TermsCont/TermsContElements';
import PopupManage from '../../components/PopupManage';
import PopupConfirm from '../../components/Popup';

const CookieLatin = ()=>{

	const [open, setOpen] = useState(false);

	const closePopup = () => {
		setOpen(false);
		document.body.style.overflow = "auto";
	};

	// Management popup
	const [openManage, setOpenManage] = useState(false);

	// cookie confirm popup
	const [openConfirm, setOpenConfirm] = useState(false);

	return (
    <>
      <TermsContContainer>
        <CookieInner>
          <TermsContTop>
            <CookieTitle>Samsung Cookie Policy</CookieTitle>
            <div className='space'></div>
            <TermsContDesc><strong>Effective Date: <span className='date'>2022-09-21</span></strong></TermsContDesc>
            <br/>
            <TermsContDesc>
              This Cookie Policy describes the different types of cookies that may be used in connection with the [Samsung Developer Conference] owned or controlled by Samsung Electronics. This Policy also describes how you can manage cookies.<br />
              It’s important that you check back often for updates to the Policy as we may change it from time to time to reflect changes to our use of cookies. Please check the date at the top of this page to see when this Policy was last revised. Any changes to this Policy will become effective when we make the revised Policy available on our website.
              Samsung Electronics has offices across the globe. We can ensure that your request or query will be handled by the data protection team based in your country. If you have any questions, the easiest way to contact us as well as to exercise your privacy rights as set out in the Privacy Policy is through Contact section at <a href='https://www.samsungdeveloperconference.com/' rel='noopener noreferrer'> https://www.samsungdeveloperconference.com/</a>.
            </TermsContDesc>
          </TermsContTop>

          <TermsContItem>
            <TermsItemTitle>Cookies</TermsItemTitle>
            Cookies are small files that store information on your computer, TV, mobile phone, or other device. They enable the entity that put the cookie on your device to recognize you across different websites, services, devices, and/or browsing sessions. Cookies serve many useful purposes.
            <br /> <br />
            For example:
            <br/>
            <div className='space'></div>
            <TermsItemP>Cookies can remember your sign-in credentials so you don’t have to enter those credentials each time you log on to a service.</TermsItemP>
            <TermsItemP>Cookies help us and third parties understand which parts of our Services are the most popular because they help us to see which pages and features visitors are accessing and how much time they are spending on the pages. By studying this kind of information, we are better able to adapt the services on our website and provide you with a better experience.</TermsItemP>
            <TermsItemP>Cookies help us and third parties understand which ads you have seen so that we can tailor a more relevant communication and service to you.</TermsItemP>
            <TermsItemP>Cookies help us and third parties provide you with relevant content and advertising by collecting information about your use of our Services and other websites and apps.</TermsItemP>
            <div className='space'></div>
            When you access the website, you will be asked to accept all cookies on&nbsp;
              <TermsItemLink href='#;' rel='noopener noreferrer'onClick={function(e){
                e.preventDefault();
                setOpenManage(true);
                closePopup();
              }}>Cookies Preferences
              </TermsItemLink>, which have been categorized into ‘types’ outlined in more detail below. This tool will also allow you to configure your preferences to accept certain cookies, if you do not want to accept all cookies. You can also configure your preferences in your browser settings, which will affect the cookies that you will see on our&nbsp;
              <TermsItemLink href='#;' rel='noopener noreferrer'onClick={function(e){
                e.preventDefault();
                setOpenManage(true);
                closePopup();
              }}>Cookies Preferences
              </TermsItemLink>
              &nbsp;(for example, you may not be able to see third party cookies). Each browser is different, so check the “Help” menu of your browser to learn how to change your cookie preferences. The operating system of your device may contain additional controls for cookies.
            <br />
            Please note, however, that some aspects of our website are designed to work using cookies and that disabling cookies may affect your ability to use those aspects of our website, or certain parts of them. 
            <br /><br />
            We use the following types of cookies on our website:
          
            <TermsExtra>
              <div className='title'>Essential Cookies:</div>
              <div className='desc'>
                Our website may also display content from a third party website or service, which may result in cookies from third parties being stored on your hard drive or browser. These third parties can be seen and their cookies can be blocked in the Cookie Management Tool. We do not control the storage and use of these cookies by these third parties and you should refer to the privacy policies of the relevant third parties for more information. This type of cookie is automatically disabled and can be configured to your particular preferences.
              </div>
            </TermsExtra>

            <TermsExtra>
              <div className='title'>Performance Cookies:</div>
              <div className='desc'>
                enable us to analyze the performance and design of our website and detect errors. For example, this type of cookie enables us to recognize that you have visited our website before and shows which sections of our website are most popular by allowing us to see which pages visitors access most frequently and how much time visitors spend on each page. We use, without limitation, Google Analytics, Adobe, and similar analytics cookies to achieve this.
                <br />
                For example, the information generated by the cookie about the use of the website will normally be stored on a Google server in the United States and your IP address will be shortened by Google beforehand. In exceptional cases only, your full IP address will be transmitted to a Google server in the United States and shortened there. On our behalf, Google will use this information for the purpose of compiling reports on website activity and providing other services relating to website activity and internet usage. The IP address transmitted from your browser as part of Google Analytics will not be associated with any other data held by Google.
                <br />
                This type of cookie is automatically disabled and can be configured to your particular preferences. 
                <br />
                We will use these type of cookies for a period of 13 months.
              </div>
            </TermsExtra>

            <TermsExtra>
              <div className='title'>Functional Cookies:</div>
              <div className='desc'>
                allow us to deliver a better user experience. For example, this type of cookie ensures that the information displayed on your next visit to our website will match up with your user preferences, or your Samsung account from which you linked to our website, or the fact that you linked to our website via an email sent to you by Samsung or one of our trusted third party service providers contacting you on our behalf. This cookie is automatically disabled and can be configured to your particular preferences. 
                <br />
                We will use these type of cookies for a period of 13 months.
              </div>
            </TermsExtra>

            <TermsExtra>
              <div className='title'>Advertising Cookies:</div>
              <div className='desc'>
                enables us and our carefully selected partners to personalize our website, deliver advertisements to you, in a way which is relevant to you and which matches your interests by, for example, using information about products you have browsed or ordered on our website. For example, and without limitation, we use Google remarketing tags to allow our retail partners to advertise products, which you have browsed on our website. For further information about how Google remarketing tags work, please <TermsItemLink href='https://support.google.com/google-ads/answer/7559130?hl=en#:~:text=The%20new%20Google%20Ads%20tag%20consists%20of%20a%20global%20site,more%20detailed%20remarketing%20event%20data.' target='_blank' rel='noopener noreferrer'>click here</TermsItemLink>.
                <br />
                We may also allow carefully selected third parties to place cookies or similar technologies onto our site for this purpose.
                <br />
                We may use and combine your cookie data with the information we collect about you from other sources to provide you with a better experience for example to provide you with more relevant direct marketing (with your separate consent). We may also work with carefully selected business partners to deliver advertising jointly; this may involve combining cookie data collected from our website with data collected by our business partner.
                <br />
                Depending which cookies you enable, we may also use information collected to understand our customers’ preferences and to influence future advertising campaigns including how we select who we direct our marketing to.
                <br />
                This type of cookie is automatically disabled and can be configured to your particular preferences. We will use these type of cookies for a period of 13 months.
              </div>
            </TermsExtra>
          </TermsContItem>

          <TermsContItem>
            <TermsItemTitle>Other Local Storage</TermsItemTitle>
            We, along with certain third parties, may use other kinds of local storage technologies, such as Local Shared Objects (also referred to as “Flash cookies”) and HTML5 local storage, in connection with our Services. According to Adobe, Flash cookies are a data file that can be created on your computer by the sites you visit. They are most often used to enhance your web-browsing experience. These technologies are similar to the cookies discussed above in that they are stored on your device and can be used to store certain information about your activities and preferences. For example, these technologies allow you to personalize the look of a website that you frequently visit, remember where your video stopped playing or an animated banner advertisement stopped rotating. However, these technologies may make use of different parts of your device from standard cookies so, you might not be able to control them using standard browser tools and settings, since they can only be accessed through the <TermsItemLink href='http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html' target='_blank' rel='noopener noreferrer'>Adobe Flash Player Settings Manager</TermsItemLink>. 
          </TermsContItem>

          <TermsContItem>
            <TermsItemTitle>Pixels</TermsItemTitle>
            Pixels on our website also deliver information about the website usage to Samsung.com & third party tracing servers, but do not store the information on the users' browser like a cookie does. Pixels allow Samsung to ensure the site is running and pages are loading.
            <br />
            Pixels on our website are categorized and managed in the same way as cookies. Performance, functional and advertising pixels are disabled and can be configured to your preferences using the&nbsp;
            <TermsItemLink href='#;' rel='noopener noreferrer'onClick={function(e){
              e.preventDefault();
              setOpenManage(true);
              closePopup();
            }}>Cookies Preferences
            </TermsItemLink>.
            <br />
            An e-mail pixel is a similar technology used by Samsung in communications sent via e-mail. Where you have separately consented to receiving communications, which have been carefully selected from our partners to deliver advertisements to you, each communication contains both a cookie and pixel.
            </TermsContItem>

          <TermsContItem>
            <TermsItemTitle>Managing cookies and other technologies</TermsItemTitle>
            If you are based in Latin America, you also can adjust your cookie preferences and withdraw your consent by adjusting here:&nbsp;
            <TermsItemLink href='#;' rel='noopener noreferrer'onClick={function(e){
              e.preventDefault();
              setOpenManage(true);
              closePopup();
            }}>Cookies Preferences
            </TermsItemLink>.
            <br />
            You can also update your browser settings at any time, if you want to remove or block cookies from your device (consult your browser's "help" menu to learn how to remove or block cookies). The browser itself may have tools to disable the collection of some browsing data, including the incognito mode. Samsung Electronics is not responsible for your browser settings. 
            <br />
            Please be aware that rejecting cookies may affect your ability to perform certain transactions on the website, and our ability to recognize your browser from one visit to the next.
          </TermsContItem>

        </CookieInner>
      </TermsContContainer>

      {/* management modal */}
      {
        openManage && <PopupManage setOpen={setOpenManage} setOpenConfirm={setOpenConfirm}/>
      }

      {/* Cookie confirm popoup */}
      {
        openConfirm &&
        <PopupConfirm
          modal={openConfirm}
          setModal={setOpenConfirm}
          title="Preferences Submitted"
          desc="You have successfully updated your cookie preferences."
          btnText="Close"
        />
      }
    </>
	)
}

export default CookieLatin;
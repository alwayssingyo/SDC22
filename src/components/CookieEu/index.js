import React, { useState } from 'react';
import * as S from '../TermsCont/style';
import PopupManage from '../../components/PopupManage';
import PopupConfirm from '../../components/Popup';

const CookieEu = ()=>{

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
      <S.TermsContContainer>
        <S.CookieInner>
          <S.TermsContTop>
            <S.CookieTitle>Samsung Cookie Policy</S.CookieTitle>
            <div className='space'></div>
            <S.TermsContDesc><strong>Updated on <span className='date'>2022-09-21</span></strong></S.TermsContDesc>
            <br/>
            <S.TermsContDesc>
              This Cookie Policy describes the different types of cookies that may be used in connection with [Samsung Developer Conference] which is owned and controlled by Samsung Electronics Co., Ltd (“Samsung Electronics”). This Cookie Policy also describes how you can manage cookies.<br />
              It’s important that you check back often for updates to the Policy as we may change it from time to time to reflect changes to our use of cookies. Please check the date at the top of this page to see when this Policy was last revised. Any changes to this Policy will become effective when we make the revised Policy available on our website.
              Samsung Electronics has offices across Europe, so we can ensure that your request or query will be handled by the data protection team based in your region. If you have any questions, the easiest way to contact us is through our Privacy Support Page at <a href='https://www.samsung.com/request-desk' target='_blank' rel='noopener noreferrer'>https://www.samsung.com/request-desk</a>.
            </S.TermsContDesc>
            <S.TermsContDesc>
              <strong>
              You can also contact us at:<br /><br />
              European Data Protection Officer<br />
              Samsung Electronics (UK) Limited<br />
              Samsung House, 2000 Hillswood Drive, Chertsey, Surrey KT16 0RS, UK
              </strong>
            </S.TermsContDesc>
          </S.TermsContTop>

          <S.TermsContItem>
            <S.TermsItemTitle>Cookies</S.TermsItemTitle>
            Cookies are small files that store information on your computer, TV, mobile phone, or other device. They enable the entity that put the cookie on your device to recognize you across different websites, services, devices, and/or browsing sessions. 
            <br /> <br />
            We use the following types of cookies on this website:
            <br/>
            <S.TermsTable>
              <caption>
                Essential Cookies:
                <div className='desc'>enable you to receive the services you request via our website. Without these cookies, services that you have asked for cannot be provided. For example, these enable you to view the website based on your location or preferred language, and other accessibility settings you may have selected. These cookies are automatically enabled and cannot be turned off because they are essential to enable you to browse our website. Without these cookies this Samsung Developer Conference website could not be provided.</div>
              </caption>
              <colgroup>
                <col width="23.333%"/>
                <col width="30.25%"/>
              </colgroup>
              <thead>
                <tr>
                  <th>Cookie</th>
                  <th>Domain</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>sdc_samsung_com_visit_id</td>
                  <td>www.samsungdeveloperconference.com</td>
                  <td>to identify a visitor</td>
                </tr>
                <tr>
                  <td>sdc_samsung_com_jwt</td>
                  <td>www.samsungdeveloperconference.com</td>
                  <td>to keep login session</td>
                </tr>
                <tr>
                  <td>sdp_sso_jwt</td>
                  <td>www.samsungdeveloperconference.com</td>
                  <td>to keep login session</td>
                </tr>
              </tbody>
            </S.TermsTable>

            <S.TermsTable>
              <caption>
                Analytical or performance cookies:
                <div className='desc'>allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily. This type of cookies is automatically disabled and can be configured to your particular preferences. We will use these type of cookies for a period of one year.</div>
              </caption>
              <colgroup>
                <col width="23.333%"/>
                <col width="30.25%"/>
              </colgroup>
              <thead>
                <tr>
                  <th>Cookie</th>
                  <th>Domain</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>_fbp</td>
                  <td>.samsungdeveloperconference.com</td>
                  <td>to store and track visits across websites.</td>
                </tr>
                <tr>
                  <td>_ga</td>
                  <td>.samsungdeveloperconference.com</td>
                  <td>to store and count pageviews.</td>
                </tr>
                <tr>
                  <td>_dc_gtm_UA-74070749-3</td>
                  <td>.samsungdeveloperconference.com</td>
                  <td>to store number of service requests.</td>
                </tr>
                <tr>
                  <td>_gid</td>
                  <td>.samsungdeveloperconference.com</td>
                  <td>to store and count pageviews.</td>
                </tr>
                <tr>
                  <td>_gcl_au</td>
                  <td>.samsungdeveloperconference.com</td>
                  <td>to store and track conversions.</td>
                </tr>
                <tr>
                  <td>lms_analytics</td>
                  <td>.linkedin.com</td>
                  <td>to identify LinkedIn Members off LinkedIn for analytics</td>
                </tr>
                <tr>
                  <td>AnalyticsSyncHistory</td>
                  <td>.linkedin.com</td>
                  <td>to store information about the time a sync took place with the lms_analytics cookie</td>
                </tr>
              </tbody>
            </S.TermsTable>

            <S.TermsTable>
              <caption>
                Functionality Cookies:
                <div className='desc'>allow us to deliver a better user experience. For example, this type of cookie ensures that the information displayed on your next visit to our website will match up with your user preferences. This type of cookies is automatically disabled and can be configured to your particular preferences. We will use these type of cookies for a period of one year.</div>
              </caption>
              <colgroup>
                <col width="23.333%"/>
                <col width="30.25%"/>
              </colgroup>
              <thead>
                <tr>
                  <th>Cookie</th>
                  <th>Domain</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>sdc_samsung_com_ jwt</td>
                  <td>www.samsungdeveloperconference.com</td>
                  <td>to store tha basic user information and use for the user information page</td>
                </tr>
                <tr>
                  <td>lang</td>
                  <td>.ads.linkedin.com</td>
                  <td>to remember a user's language setting to ensure LinkedIn.com displays in the language selected by the user in their settings</td>
                </tr>
                <tr>
                  <td>lidc</td>
                  <td>.linkedin.com</td>
                  <td>to facilitate data center selection</td>
                </tr>
                <tr>
                  <td>bcookie</td>
                  <td>.linkedin.com</td>
                  <td>to store browser details.</td>
                </tr>
              </tbody>
            </S.TermsTable>

            <S.TermsTable>
              <caption>
                Advertising  Cookies:
                <div className='desc'>allow us and our carefully selected partners to personalise our website, deliver advertisements to you, or contact you directly where you have separately consented to such communications, in a way which is relevant to you and which matches your interests by, for example, using information about products you have browsed or ordered on our website. This type of cookies is automatically disabled and can be configured to your particular preferences. We will use these type of cookies for a period of year.</div>
              </caption>
              <colgroup>
                <col width="23.333%"/>
                <col width="30.25%"/>
              </colgroup>
              <thead>
                <tr>
                  <th>Cookie</th>
                  <th>Domain</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>IDE</td>
                  <td>.doubleclick.net</td>
                  <td>to provide ad delivery or retargeting</td>
                </tr>
                <tr>
                  <td>fr</td>
                  <td>.facebook.com</td>
                  <td>to provide ad delivery or retargeting</td>
                </tr>
                <tr>
                  <td>lms_ads</td>
                  <td>.linkedin.com</td>
                  <td>to identify LinkedIn Members off LinkedIn for advertising</td>
                </tr>
                <tr>
                  <td>UserMatchHistory</td>
                  <td>.linkedin.com</td>
                  <td>to provide ad delivery or retargeting</td>
                </tr>
                <tr>
                  <td>li_sugr</td>
                  <td>.linkedin.com</td>
                  <td>to store browser details.</td>
                </tr>
              </tbody>
            </S.TermsTable>
            <S.TermsExtra>
              <div className='title'>Third party Cookies:</div>
              <div className='desc'>
              Our website may also display content from a third party website or service, which may result in cookies from third parties being stored on your hard drive or browser. These third parties can be seen and their cookies can be blocked in the Cookie Management Tool. We do not control the storage and use of these cookies by these third parties and you should refer to the privacy policies of the relevant third parties for more information. This type of cookie is automatically disabled and can be configured to your particular preferences.
              </div>
            </S.TermsExtra>
          </S.TermsContItem>

          <S.TermsContItem>
            <S.TermsItemTitle>Other Local Storage</S.TermsItemTitle>
            We, along with certain third parties, may use other kinds of local storage technologies, such as Local Shared Objects (also referred to as “Flash cookies”) and HTML5 local storage, in connection with our services. These technologies are similar to the cookies discussed above in that they are stored on your device and can be used to store certain information about your activities and preferences. However, these technologies may make use of different parts of your device from standard cookies, and so you might not be able to control them using standard browser tools and settings. For information about disabling or deleting information contained in Flash cookies, please <a href="https://allaboutcookies.org/how-to-manage-cookies" target="_blank" rel='noopener noreferrer' className='text_link'>click here</a>.
          </S.TermsContItem>

          <S.TermsContItem>
            <S.TermsItemTitle>Pixel</S.TermsItemTitle>
            Pixels on our website also deliver information about the website usage to Samsung.com & third party tracing servers, but do not store the information on the users' browser like a cookie does. Pixels allow Samsung to ensure the site is running and pages are loading. 
            <br/><br/>
            Pixels on our website are categorised and managed in the same way as cookies. Performance, functional and advertising pixels are disabled and can be configured to your preferences using the Cookies Management Tool.
            <br/><br/>
            An e-mail pixel is a similar technology used by Samsung in communications sent via e-mail. Where you have separately consented to receiving communications which have been carefully selected from our partners to deliver advertisements to you, each communication contains both a cookie and pixel.
            </S.TermsContItem>

          <S.TermsContItem>
            <S.TermsItemTitle>Managing Cookies and Other Technologies</S.TermsItemTitle>
            You can change your cookie preferences at any time by adjusting the cookie settings through the Cookies Management Tool, which can be found here:
            <S.TermsItemLink href='#;' rel='noopener noreferrer' onClick={function(e){
              e.preventDefault();
              setOpenManage(true);
              closePopup();
            }}>Cookies Management Tool</S.TermsItemLink>.
            <br/><br/>
            You can also update your browser settings at any time, if you want to remove or block cookies from your device (consult your browser's "help" menu to learn how to remove or block cookies). Samsung Electronics is not responsible for your browser settings. You can find good and simple instructions on how to manage cookies on the different types of web browsers at <S.TermsItemLink href='https://allaboutcookies.org/' target='_blank' rel='noopener noreferrer'>http://www.allaboutcookies.org</S.TermsItemLink>.
            <br/><br/>
            Please be aware that rejecting cookies may affect your ability to perform certain transactions on the website, and our ability to recognize your browser from one visit to the next.
          </S.TermsContItem>

        </S.CookieInner>
      </S.TermsContContainer>

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

export default CookieEu;
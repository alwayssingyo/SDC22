import React, { useState } from 'react';
import * as S from './style';
import Button from '../Button';

const PopupManage = ({setOpen, setOpenConfirm})=>{

	const closePopup = () => {
		setOpen(false);
		document.body.style.overflow = "auto";
	};

  const [view01, setView01] = useState(false);
  const [view02, setView02] = useState(false);
  const [view03, setView03] = useState(false);
  const [view04, setView04] = useState(false);

  const [agreeYn02, setAgreeYn02] = useState(false);
  const [agreeYn03, setAgreeYn03] = useState(false);
  const [agreeYn04, setAgreeYn04] = useState(false);

  return (
    <S.PopupContainer>
      <S.PopupInner>
        <S.PopupTitle>Manage Your Cookies</S.PopupTitle>
        <S.PopupDesc>We use cookies to improve your experience on our website and to show you relevant advertising. Manage yout settings for our cookies below.</S.PopupDesc>
        <S.PopupCont>

          <S.CookieItem>
            <S.CookieTitle>Essential Cookies</S.CookieTitle>
            <S.CookieDesc>
              These cookies are essential as they enable you to move arounfd the website. This category cannot be disabled.
            </S.CookieDesc>
            <S.CookieBottom>
              <S.CookieView className={ view01 ? 'is-active' : '' } onClick={function(e){
                e.preventDefault();
                setView01(!view01);
              }}>View Cookies</S.CookieView>
            </S.CookieBottom>
            <S.CookieGrid className={ view01 ? 'is-active' : '' }>
              <table>
                <colgroup className='col'>
                  <col/>
                  <col/>
                </colgroup>
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Domain</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Samsung Electronics</td>
                    <td>.samsungdeveloperconference.com</td>
                  </tr>
                </tbody>
              </table>
            </S.CookieGrid>
          </S.CookieItem>

          <S.CookieItem>
            <S.CookieTitle>Analytical/Performance Cookies</S.CookieTitle>
            <S.CookieDesc>
            These cookies collect information about how you use our website. for example which pages you vistit most often. All information these cookies collect is used to improve how the website works.
            </S.CookieDesc>
            <S.CookieBottom>
              <S.CookieView className={ view02 ? 'is-active' : '' } onClick={function(e){
                e.preventDefault();
                setView02(!view02);
              }}>View Cookies</S.CookieView>
              <S.CookieBtn>
                <button className={ agreeYn02 ? 'button' : 'button is-active' } onClick={function(e){
                  e.preventDefault();
                  setAgreeYn02(false);
                }}><span>NO</span></button>
                <button className={ agreeYn02 ? 'button is-active' : 'button' } onClick={function(e){
                  e.preventDefault();
                  setAgreeYn02(true);
                }}><span>YES</span></button>
              </S.CookieBtn>
            </S.CookieBottom>
            <S.CookieGrid className={ view02 ? 'is-active' : '' }>
              <table>
                <colgroup className='col'>
                  <col width="36.231%"/>
                  <col/>
                </colgroup>
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Domain</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>LinkedIn</td>
                    <td>.linkedin.com</td>
                  </tr>
                  <tr>
                    <td>Meta (formerly Facebook)</td>
                    <td>.samsungdeveloperconference.com</td>
                  </tr>
                  <tr>
                    <td>Google Inc.</td>
                    <td>.samsungdeveloperconference.com</td>
                  </tr>
                </tbody>
              </table>
            </S.CookieGrid>
          </S.CookieItem>

          <S.CookieItem>
            <S.CookieTitle>Functionality Cookies</S.CookieTitle>
            <S.CookieDesc>
              These cookies allow our website to remember choices you make (such as your user name, language or the region your are in) and tailor the website to provide enhanced features and content for you.
            </S.CookieDesc>
            <S.CookieBottom>
              <S.CookieView className={ view03 ? 'is-active' : '' } onClick={function(e){
                e.preventDefault();
                setView03(!view03);
              }}>View Cookies</S.CookieView>
              <S.CookieBtn>
                <button className={ agreeYn03 ? 'button' : 'button is-active' } onClick={function(e){
                  e.preventDefault();
                  setAgreeYn03(false);
                }}><span>NO</span></button>
                <button className={ agreeYn03 ? 'button is-active' : 'button' } onClick={function(e){
                  e.preventDefault();
                  setAgreeYn03(true);
                }}><span>YES</span></button>
              </S.CookieBtn>
            </S.CookieBottom>
            <S.CookieGrid className={ view03 ? 'is-active' : '' }>
              <table>
                <colgroup className='col'>
                  <col width="36.231%"/>
                  <col/>
                </colgroup>
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Domain</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>LinkedIn</td>
                    <td>.ads.linkedin.com, .linkedin.com</td>
                  </tr>
                </tbody>
              </table>
            </S.CookieGrid>
          </S.CookieItem>

          <S.CookieItem>
            <S.CookieTitle>Advertising Cookies</S.CookieTitle>
            <S.CookieDesc>
              These cookies gather information about your browser habits. They remember that you've visited our website and share this information with other organizations such as advertisers.
            </S.CookieDesc>
            <S.CookieBottom>
              <S.CookieView className={ view04 ? 'is-active' : '' } onClick={function(e){
                e.preventDefault();
                setView04(!view04);
              }}>View Cookies</S.CookieView>
              <S.CookieBtn>
                <button className={ agreeYn04 ? 'button' : 'button is-active' } onClick={function(e){
                  e.preventDefault();
                  setAgreeYn04(false);
                }}><span>NO</span></button>
                <button className={ agreeYn04 ? 'button is-active' : 'button' } onClick={function(e){
                  e.preventDefault();
                  setAgreeYn04(true);
                }}><span>YES</span></button>
              </S.CookieBtn>
            </S.CookieBottom>
            <S.CookieGrid className={ view04 ? 'is-active' : '' }>
              <table>
                <colgroup className='col'>
                  <col width="36.231%"/>
                  <col/>
                </colgroup>
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Domain</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>LinkedIn</td>
                    <td>.linkedin.com</td>
                  </tr>
                  <tr>
                    <td>Meta (formerly Facebook)</td>
                    <td>.sdc2022.com</td>
                  </tr>
                  <tr>
                    <td>Google Inc.</td>
                    <td>.sdc2022.com</td>
                  </tr>
                </tbody>
              </table>
            </S.CookieGrid>
          </S.CookieItem>

        </S.PopupCont>
        <S.PopupBottom>
          <S.PopupButton>
            <span className='button'>
              <Button color="black" size="medium" fullWidth={true} onClick={function(e){
                e.preventDefault();
                closePopup();
                setOpenConfirm(true);
              }}>Save Preferences</Button>
            </span>
          </S.PopupButton>
        </S.PopupBottom>
        <S.PopupClose onClick={closePopup}></S.PopupClose>
      </S.PopupInner>
    </S.PopupContainer>
  );
}

export default PopupManage;
import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import Button from '../Button';

const ModalCookie = ({setOpen, setOpenManage})=>{

	const closeModal = () => {
		setOpen(false);
		document.body.style.overflow = "auto";
	};

  return (
    <S.ModalContainer>
      <S.ModalInner>
        <S.ModalWrap>
          <S.ModalText>
            <S.ModalTitle>SAMSUNG and Cookies</S.ModalTitle>
            <S.Modaldesc>
              Our site uses cookies, including optional cookies to provide you with the best experience on our website and relevant advertising based on your use of our site, You can manage your preferences or accept all cookies. You can also read our <Link to="/privacy/lang=latinAmerica" target="_blank">Privacy Policy</Link> and <Link to="/cookie/lang=latinAmerica" target="_blank">Cookie Policy</Link>.
            </S.Modaldesc>
          </S.ModalText>
          <S.ModalBtn>
            <div className='button'><Button color="white" fullWidth={true} onClick={closeModal}>OK, Let's Go!</Button></div>
            <div className='button'><Button color="borderWhite" fullWidth={true} onClick={function(e){
              e.preventDefault();
              setOpenManage(true);
              closeModal();
            }}>I Want to Manage</Button></div>
          </S.ModalBtn>
        </S.ModalWrap>
        <S.ModalClose onClick={closeModal}></S.ModalClose>
      </S.ModalInner>
    </S.ModalContainer>
  );
}

export default ModalCookie;
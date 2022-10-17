import React from 'react';
import * as S from './style';
import Button from '../Button';

const Popup = ({modal, setModal, version, title, desc, CloseText, btnText, linkText, link, notify })=>{

	const PopupOff = () => {
		setModal(false);
	};

	const goToSignin = () => {
		window.open('https://developer.samsung.com/dashboard/support');
	};

  return (
		<>
			<S.PopupContainer>
				<S.PopupInner>
					<S.PopupTitle>{title}</S.PopupTitle>
					<S.PopupDesc>
						{desc}
						{
							link && <a href={link} className="link">{linkText}</a>
						}
					</S.PopupDesc>
					{
						notify && <S.PopupOnlyNoti className="noti" dangerouslySetInnerHTML={{ __html : notify }} />
					}
					{
						version === 'alert' // Alert popup case
						? <S.PopupBottom>
								<S.PopupBtnLeft><Button color="white" outline="outline" size="medium" fullWidth="fullWidth" onClick={PopupOff}>{CloseText}</Button></S.PopupBtnLeft>
								<S.PopupBtnRight><Button color="black" size="medium" fullWidth="fullWidth" onClick={goToSignin}>{btnText}</Button></S.PopupBtnRight>
							</S.PopupBottom>
						: <S.PopupBtn><Button color="black" size="medium" fullWidth="fullWidth" onClick={PopupOff}>{btnText}</Button></S.PopupBtn> // confirm popup case
					}
				</S.PopupInner>
			</S.PopupContainer>
		</>
  );
}

export default Popup;
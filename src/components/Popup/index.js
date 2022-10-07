import React from 'react';
import { PopupContainer, PopupInner, PopupTitle, PopupDesc, PopupBottom, PopupBtnLeft, PopupBtnRight, PopupBtn, PopupClose, PopupOnlyNoti } from './PopupElements';
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
			<PopupContainer>
				<PopupInner>
					<PopupTitle>{title}</PopupTitle>
					<PopupDesc>
						{desc}
						{
							link && <a href={link} className="link">{linkText}</a>
						}
					</PopupDesc>
					{
						notify && <PopupOnlyNoti className="noti" dangerouslySetInnerHTML={{ __html : notify }} />
					}
					{
						version === 'alert' // Alert popup case
						? <PopupBottom>
								<PopupBtnLeft><Button color="white" outline="outline" size="medium" fullWidth="fullWidth" onClick={PopupOff}>{CloseText}</Button></PopupBtnLeft>
								<PopupBtnRight><Button color="black" size="medium" fullWidth="fullWidth" onClick={goToSignin}>{btnText}</Button></PopupBtnRight>
							</PopupBottom>
						: <PopupBtn><Button color="black" size="medium" fullWidth="fullWidth" onClick={PopupOff}>{btnText}</Button></PopupBtn> // confirm popup case
					}
				</PopupInner>
			</PopupContainer>
		</>
  );
}

export default Popup;
import React, {useEffect, useState} from 'react';
import { ToastPopupContainer, ToastPopupInner, ToastPopupIcon, ToastPopupText } from './ToastPopupElements';

const Popup = ({modal, setModal, state, text})=>{
	const [popupState, setPopupState] = useState(state);

  useEffect(()=>{
		if( popupState === "success" ){
			setPopupState("success")
		}else if( popupState === "warn" ){
			setPopupState("warn")
		}else if( popupState === "error" ){
			setPopupState("error")
		}
	}, [popupState])
	
  useEffect(()=>{
		const timer = setTimeout(()=>{ setModal(false) }, 4000);

		return ()=>{ clearTimeout(timer) }
	}, [modal, setModal])

  return (
	<ToastPopupContainer modal={modal}>
		<ToastPopupInner>
			<ToastPopupIcon state={popupState}></ToastPopupIcon>
			<ToastPopupText>{text}</ToastPopupText>
		</ToastPopupInner>
	</ToastPopupContainer>
  );
}

export default Popup;
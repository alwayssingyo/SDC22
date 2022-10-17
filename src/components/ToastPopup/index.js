import React, {useEffect, useState} from 'react';
import * as S from './style';

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
	<S.ToastPopupContainer modal={modal}>
		<S.ToastPopupInner>
			<S.ToastPopupIcon state={popupState}></S.ToastPopupIcon>
			<S.ToastPopupText>{text}</S.ToastPopupText>
		</S.ToastPopupInner>
	</S.ToastPopupContainer>
  );
}

export default Popup;
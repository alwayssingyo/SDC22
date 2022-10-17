import React, { useState, useEffect } from 'react';
import * as S from './style';

const CheckBox = ({label, value, id, onChangeValue, disabled}) => {

  const [checked, setChecked] = useState(false);

	const checkHandler = ()=>{
		setChecked(!checked);
	}

  useEffect(()=>{
		if( value === true ){
			setChecked(true);
		}
	}, [value]);

  return(
		<S.CheckboxItem>
			<S.CheckboxInput 
				type="checkbox"
				id={id} 
				checked={checked}
				onChange={checkHandler}
			></S.CheckboxInput>
			<S.Label 
				htmlFor={id}
				label={label}
			>{label}</S.Label>
		</S.CheckboxItem>
  )

}

export default CheckBox;
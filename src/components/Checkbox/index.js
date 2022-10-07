import React, { useState, useEffect } from 'react';
import { CheckboxItem, CheckboxInput, Label, } from './CheckboxElement';

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
		<CheckboxItem>
			<CheckboxInput 
				type="checkbox"
				id={id} 
				checked={checked}
				onChange={checkHandler}
			></CheckboxInput>
			<Label 
				htmlFor={id}
				label={label}
			>{label}</Label>
		</CheckboxItem>
  )

}

export default CheckBox;
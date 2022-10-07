import React from 'react';

import { TextInputWrap, TextInputLabel, TextInputArea, TextInput, TextInputError } from './TextInputElement';

// label: 제목
// value: 인풋 값
// onChangeText : 인풋 체인지 이벤트
// placeholder : 헬프 텍스트
// id : 아이디
// disabled : 비활성화 체크
// error : 에러케이스
// essential : 필수 인풋
const InputText = ({label, value, onChangeText, placeholder, id, disabled, error, essential}) => {

  return(
    <TextInputWrap>
      <TextInputLabel htmlFor={id} className={essential ? 'is-essential' : null}>{label}</TextInputLabel>
      <TextInputArea>
        <TextInput
          className={error ? 'is-error' : null}
          id={id}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          disabled={disabled}
        />
        {
          error && <TextInputError>Error text Error text Error text</TextInputError>
        }
      </TextInputArea>
    </TextInputWrap>

  )

}

export default InputText;
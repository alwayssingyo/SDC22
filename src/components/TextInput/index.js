import React from 'react';

import * as S from './style';

// label: 제목
// value: 인풋 값
// changeText : 인풋 체인지 이벤트
// placeholder : 헬프 텍스트
// id : 아이디
// disabled : 비활성화 체크
// error : 에러케이스
// essential : 필수 인풋
const InputText = ({label, value, onChangeText, placeholder, id, disabled, error, essential}) => {

  return(
    <S.TextInputWrap>
      <S.TextInputLabel htmlFor={id} className={essential ? 'is-essential' : null}>{label}</S.TextInputLabel>
      <S.TextInputArea>
        <S.TextInput
          className={error ? 'is-error' : null}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChangeText}
          disabled={disabled}
        />
        {
          error && <S.TextInputError>Error text Error text Error text</S.TextInputError>
        }
      </S.TextInputArea>
    </S.TextInputWrap>

  )

}

export default InputText;
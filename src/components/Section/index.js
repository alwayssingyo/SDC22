import React from 'react';
import * as S from './style'

const Section = ({title, children})=>{
	return (
    <S.SectionContainer>
      <S.SectionTitle>{title}</S.SectionTitle>
      <S.Sectioncont>
			  {children}
      </S.Sectioncont>
    </S.SectionContainer>
	)
}

export default Section;
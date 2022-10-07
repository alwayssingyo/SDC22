import React from 'react';
import {SectionContainer, SectionTitle, Sectioncont} from './SectionElements'

const Section = ({title, children})=>{
	return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <Sectioncont>
			  {children}
      </Sectioncont>
    </SectionContainer>
	)
}

export default Section;
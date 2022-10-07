import React from 'react';
import { DetailHeroContainer, DetailHeroInner, DetailHeroText, DetailHeroTitle, DetailHeroSamsung } from './DetailHeroElements';

const DetailHero = ({bgPc, bgMo, title, desc})=>{

	return (
		<DetailHeroContainer bgPc={bgPc} bgMo={bgMo}>
			<DetailHeroInner>
				<DetailHeroText>
					<DetailHeroSamsung>Samsung Developer Conference</DetailHeroSamsung>
					<DetailHeroTitle>{title}</DetailHeroTitle>
				</DetailHeroText>
			</DetailHeroInner>
		</DetailHeroContainer>
  )
}

export default DetailHero;
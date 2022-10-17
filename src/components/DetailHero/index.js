import React from 'react';
import * as S from './style';

const DetailHero = ({bgPc, bgMo, title, desc})=>{

	return (
		<S.DetailHeroContainer bgPc={bgPc} bgMo={bgMo}>
			<S.DetailHeroInner>
				<S.DetailHeroText>
					<S.DetailHeroSamsung>Samsung Developer Conference</S.DetailHeroSamsung>
					<S.DetailHeroTitle>{title}</S.DetailHeroTitle>
				</S.DetailHeroText>
			</S.DetailHeroInner>
		</S.DetailHeroContainer>
  )
}

export default DetailHero;
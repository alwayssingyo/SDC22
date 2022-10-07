import React from 'react';
import DetailContainer from '../../components/DetailContainer'
import DetailHero from '../../components/DetailHero'
import SupportFaq from '../../components/SupportCont';

const Support = ()=>{
	return (
		<DetailContainer>
			<DetailHero
			bgPc="bg-support.png"
			bgMo="bg-support-mo.png"
			title="Support" />
			<SupportFaq />
		</DetailContainer>
	)
}

export default Support;
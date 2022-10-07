import React from 'react';
import DetailContainer from '../../components/DetailContainer'
import DetailHero from '../../components/DetailHero'
import TechCont from '../../components/TechCont'

const Tech = ()=>{
	return (
		<DetailContainer>
			<DetailHero bgPc="bg-tech.png" bgMo="bg-tech-mo.png" title="Tech Sessions" />
			<TechCont />
		</DetailContainer>
	)
}

export default Tech;
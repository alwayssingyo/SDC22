import React from 'react';
import DetailContainer from '../../components/DetailContainer'
import DetailHero from '../../components/DetailHero'
import SpeakersCont from '../../components/SpeakersCont';

const Speakers = ()=>{
	return (
		<DetailContainer>
			<DetailHero bgPc="bg-speakers.png" bgMo="bg-speakers-mo.png" title="Tech Session Speakers" />
      <SpeakersCont />
		</DetailContainer>
	)
}

export default Speakers;
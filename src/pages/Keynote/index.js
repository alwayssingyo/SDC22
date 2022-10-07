import React, { useState } from 'react';
import DetailContainer from '../../components/DetailContainer'
import DetailHero from '../../components/DetailHero'
import KeynoteCont from '../../components/KeynoteCont';
import KeynoteSpeaker from '../../components/KeynoteSpeaker';

const Keynote = ()=>{
	//phase3 유무 체크
	const [phase3, setPhase3] = useState(false);
	
	return (
		<DetailContainer>
			{
				phase3 
				? null
				: <DetailHero bgPc="bg-keynote.png" bgMo="bg-keynote-mo.png" title="Keynote"/>
			}
			<KeynoteCont 
				title="SDC22 Keynote"
				desc="
					<p>Unveiling Samsung's latest software advances, building toward a future that's smarter, safer and personally connected. Discover our broad ecosystem of powerful, next-level tech.</p>
				"
				session={false}
				released={false}
				vodOpen={false}
				url='https://youtu.be/1O3drPCZlTo'
				// 세션 스케줄 확정 이후 해당 시작 시각으로 변경
				time="10:00 AM PT"
				/>
				<KeynoteSpeaker />
		</DetailContainer>
	)
}

export default Keynote;
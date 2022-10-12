import React from 'react';
import DetailContainer from '../../components/DetailContainer'
import MegaSessionCont from '../../components/MegaSessionCont'

const MegaSession = ()=>{
	
	return (
		<DetailContainer>
			<MegaSessionCont
				title="Mega Session Room"
				desc="
					<p>Deep dive into the details behind the latest Samsung tech innovations in mobile-based experiences during lectures given by leading minds of industry. </p>
				"
				session={false}
				released={false}
				vodOpen={false}
				url='https://youtu.be/1O3drPCZlTo'
				time="10:00 AM PT"
			/>
		</DetailContainer>
	)
}

export default MegaSession;
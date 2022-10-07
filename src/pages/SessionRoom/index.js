import React, { useState } from 'react';
import DetailContainer from '../../components/DetailContainer'
import DetailHero from '../../components/DetailHero'
import SessionRoomCont from '../../components/SessionRoomCont'
import KeynoteSpeaker from '../../components/KeynoteSpeaker';

const SessionRoom = ()=>{
	//phase3 유무 체크
	const [phase3, setPhase3] = useState(false);
	
	return (
		<DetailContainer>
			<SessionRoomCont
				title="Session Room 1"
				desc="
					<p>Deep dive into the details behind the latest Samsung tech innovations in mobile-based experiences during lectures given by leading minds of industry. </p>
				"
				session={false}
				released={false}
				vodOpen={false}
				url='https://youtu.be/1O3drPCZlTo'
				// 세션 스케줄 확정 이후 해당 시작 시각으로 변경
				time="10:00 AM PT"
				/>
		</DetailContainer>
	)
}

export default SessionRoom;
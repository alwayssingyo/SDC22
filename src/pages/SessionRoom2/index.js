import React, { useState } from 'react';
import DetailContainer from '../../components/DetailContainer'
import SessionRoom2Cont from '../../components/SessionRoom2Cont'

const SessionRoom2 = ()=>{
	//phase3 유무 체크
	const [phase3, setPhase3] = useState(false);
	
	return (
		<DetailContainer>
			<SessionRoom2Cont
				title="Session Room 2"
				desc="
					<p>Get a deeper view of cutting-edge innovations in visual display technology during talks given by Samsung’s leading experts.</p>
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

export default SessionRoom2;
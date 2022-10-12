import React from 'react';
import DetailContainer from '../../components/DetailContainer'
import SessionRoom2Cont from '../../components/SessionRoom2Cont'

const SessionRoom2 = ()=>{
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
				time="10:00 AM PT"
			/>
		</DetailContainer>
	)
}

export default SessionRoom2;
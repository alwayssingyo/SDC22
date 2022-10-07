import React from 'react';
import DetailContainer from '../../components/DetailContainer'
import DetailHero from '../../components/DetailHero'
import ScheduleCont from '../../components/ScheduleCont';
import ScheduleMap from '../../components/ScheduleMap';

const Schedule = ()=>{
	return (
		<DetailContainer>
			<DetailHero
			bgPc="bg-schedule.png"
			bgMo="bg-schedule-mo.png"
			title="Schedule" />
			<ScheduleCont />
			<ScheduleMap />
		</DetailContainer>
	)
}

export default Schedule;
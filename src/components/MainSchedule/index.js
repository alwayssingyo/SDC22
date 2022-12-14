import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import ButtonLink from '../ButtonLink';

const MainSchedule = ()=>{
	//phase4 유무 체크
	const [phase4, setPhase4] = useState(false);
	
	return (
		<>
			{
				!phase4 &&
				<S.ScheduleContainer>
					<S.ScheduleInner>
						<S.ScheduleTop>
							<S.ScheduleTitle>Schedule</S.ScheduleTitle>
							<S.ScheduleDesc>
								SDC22 is back, both offline and online!<br /> We’re coming to you live from the stage of Moscone North.
							</S.ScheduleDesc>
						</S.ScheduleTop>
						<S.ScheduleCont>
							<S.ScheduleContInner>
								<S.ScheduleIndex>
									<div className='item'>10:00 PT</div>
									<div className='item'>	
										<span>11:30 PT</span>
										<span>17:30 PT</span>
									</div>
									<div className='item'>18:30 PT</div>
								</S.ScheduleIndex>
								<S.ScheduleCalendar>
									<div className='item item-01'>
										<div className='title'>Keynote Live Streaming</div>
										<div className='time'>10:00 - 11:20</div>
										<Link to="/keynote"><div className='link'>Go to Keynote</div></Link>
									</div>
									<div className='item item-02'>
										<div className='title'>Tech Sessions (Live & On-demand)</div>
										<div className='time'>11:30 - 17:40</div>
										<div className='desc'>Pre-recorded Sessions will be opened at 12pm.</div>
										<Link to="/liveTech"><div className='link'>Go to Tech Sessions</div></Link>
									</div>
									<div className='item item-03'>
										<div className='title'>Exhibition (In-person)</div>
										<div className='time'>11:30 - 17:40</div>
									</div>
									<div className='item item-04'>
										<div className='title'>Networking (In-person)</div>
										<div className='time'>17:40 - 18:30</div>
									</div>
								</S.ScheduleCalendar>
							</S.ScheduleContInner>
						</S.ScheduleCont>
						<S.LinkArea>
							<ButtonLink url="/schedule" color="black" size="medium">Go to Schedule</ButtonLink>
						</S.LinkArea>
					</S.ScheduleInner>
				</S.ScheduleContainer>
			}
		</>
	)
}

export default MainSchedule;
import React from 'react';
import {SessionTopWrap, SessionDetailTopInner} from './SessionDetailTopContElement'
import DetailContainer from '../DetailContainer';
import KeynoteCont from '../KeynoteCont';

const SessionDetailTop = ()=>{

	return (
		<SessionTopWrap>
      <SessionDetailTopInner>
        <DetailContainer>
          <KeynoteCont
            title="Watch Ecosystem: The Next Phase"
            desc="The new Galaxy Watch Ecosystem is here! Are you curious to learn about the platform we created with Google? By attending this insightful session, you’ll discover why Samsung took the leap away from a legacy OS and joined a new unified platform for our line of Galaxy Watches. This highlight clip will uncover the benefits that can be realized by our developers, designers and end consumers. This informative presentation will guide the participant on how Samsung has simplified app development and watch face creation for our app community, while providing platform familiarity, maximum exposure and app distribution to an extensive user base. Samsung's push for excellence in health and wellness is enhanced by innovative multi-sensors and optimized APIs. Come and learn about the next phase of our Galaxy Watch Ecosystem!"
            tag={["Developer Program","Program","Design"]}
            type="LIVE"
            session={true}
            released={false}
            url='https://youtu.be/1O3drPCZlTo'
            time="14:10 PM PT"

            /* Session Room 1 or Session Room 2 */
            room='<a href=/#/sessionRoom>Session Room 1</a>'
            // room='<a href=/#/sessionRoom2>Session Room 2</a>'

            /* after live end and before upload the video -> true */
            uploadedBefore={false}
            /* after upload the video -> true */
            on_Demand = {false}
          />
          </DetailContainer>
      </SessionDetailTopInner>
		</SessionTopWrap>
	)
}

export default SessionDetailTop;
import React from 'react';
import DetailContainer from '../../components/DetailContainer'
import MyProfile from '../../components/Myprofile';
import MypageActivity from '../../components/MypageActivity';

const Mypage = ()=>{
	
	return (
		<DetailContainer>
			<MyProfile 
				name="abc.efg"
				mail="abc.efg@company.com"
				url="/images/MyProfile_img.png"
				type="Emplyee"
				topic="Contents & Service, Developer Program, Open Innovation"
				country="Korea, Republic of"
				countryCode="+82"
				company="Samsung Electronics"
				occupation="Designer"
				jobLevel="Coporate Executive/C-level/SVP"
				phone="010-0000-0000"
				editLink="/edit"
				registerName={"abc efg"}
			/>
      <MypageActivity />
		</DetailContainer>
	)
}

export default Mypage;
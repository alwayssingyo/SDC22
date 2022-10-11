import React from 'react';
import { ContContainer } from './MainContentElements';
import MainIntro from '../MainIntro';
import MainSlide from '../MainSlide';
import MainSessionContent from '../MainSession'
import MainSchedule from '../MainSchedule';
import NewsLetter from '../NewsLetter';
import MainEngagement from '../MainEngagement';

const MainContent = ()=>{
	return (
		<ContContainer>
			<MainIntro />
      <MainSlide />
			<MainSessionContent />
			<MainSchedule />
			<MainEngagement />
			<NewsLetter />
		</ContContainer>
	)
}

export default MainContent;
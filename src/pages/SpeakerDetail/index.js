import React from 'react';
import DetailContainer from '../../components/DetailContainer';
import SpeakerDetailCont from '../../components/SpeakerDetailCont';
import SpeakerDetailBottom from '../../components/SpeakerDetailBottom';

const subtitle = "President & CEO\nIT & Mobile Communications Division\nSamsung Electronics";



const SpeakerDetail = ()=>{
	return (
		<DetailContainer>
			<SpeakerDetailCont
				title="DJ Koh"
				subTitle={subtitle}
				desc="DJ Koh is President and CEO of Samsung Electronics’ IT and Mobile Communications Business Division, where he oversees the company’s mobile and network equipment businesses. Mr. Koh has been in charge of many successful launches of Samsung’s flagship smartphones, including the Galaxy Note8, S8/S8+ and S7/S7 edge. Prior to overseeing the mobile business, he was Head of Mobile R&D, where he played a critical role in the launch of a variety of mobile devices and services."
			/>
			<SpeakerDetailBottom />
		</DetailContainer>
	)
}

export default SpeakerDetail;
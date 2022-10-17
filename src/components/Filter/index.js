import React from 'react';
import * as S from './style';
import ButtonFilter from '../ButtonFilter';

const data = [
	[ "Live", "On-demand" ],
	[ "AI", "Android", "AR", "Connectivity", "Content & Services", "Data", "Design", "Developer Program", "Enterprise", "Game", "Health", "IoT", "Mobile", "Monetization", "Open Innovation", "Productivity", "Security & Privacy", "Smart Appliances", "Tizen", "UI/UX", "UWB", "Wearable", "Web" ]
];

const Filter = ({setOpen})=>{

	const closeFilter = ()=>{
		setOpen(false);
		document.body.style.overflow = "auto";
	}

	return (
		<S.FilterContainer>
			<S.FilterDim></S.FilterDim>
			<S.FilterInner>
				<S.FilterTop>
					<S.FilterTitle>Filter</S.FilterTitle>
					<S.FilterClose onClick={closeFilter}></S.FilterClose>
				</S.FilterTop>
				<S.FilterCont>
					<S.FilterItem>
						<S.FilterItemTitle>Type</S.FilterItemTitle>
						<S.FilterItemCont>
							{
								data[0].map((item, idx)=>(
									<ButtonFilter key={idx} item={item}/>
								))
							}
						</S.FilterItemCont>
					</S.FilterItem>
					<S.FilterItem>
						<S.FilterItemTitle>Topics</S.FilterItemTitle>
						<S.FilterItemCont>
							{
								data[1].map((item, idx)=>(
									<ButtonFilter key={idx} item={item}/>
								))
							}
						</S.FilterItemCont>
					</S.FilterItem>
				</S.FilterCont>
				<S.FilterClearWrap>
					<S.FilterClear>Clear All <span className='count'>(2)</span></S.FilterClear>
				</S.FilterClearWrap>
			</S.FilterInner>
		</S.FilterContainer>
	)
}

export default Filter;
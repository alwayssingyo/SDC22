import React from 'react';
import { FilterContainer, FilterDim, FilterInner, FilterTop, FilterTitle, FilterClose, FilterClearWrap, FilterClear, FilterCont, FilterItem, FilterItemTitle, FilterItemCont } from './FilterElements';
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
		<FilterContainer>
			<FilterDim></FilterDim>
			<FilterInner>
				<FilterTop>
					<FilterTitle>Filter</FilterTitle>
					<FilterClose onClick={closeFilter}></FilterClose>
				</FilterTop>
				<FilterCont>
					<FilterItem>
						<FilterItemTitle>Type</FilterItemTitle>
						<FilterItemCont>
							{
								data[0].map((item, idx)=>(
									<ButtonFilter key={idx} item={item}/>
								))
							}
						</FilterItemCont>
					</FilterItem>
					<FilterItem>
						<FilterItemTitle>Topics</FilterItemTitle>
						<FilterItemCont>
							{
								data[1].map((item, idx)=>(
									<ButtonFilter key={idx} item={item}/>
								))
							}
						</FilterItemCont>
					</FilterItem>
				</FilterCont>
				<FilterClearWrap>
					<FilterClear>Clear All <span className='count'>(2)</span></FilterClear>
				</FilterClearWrap>
			</FilterInner>
		</FilterContainer>
	)
}

export default Filter;
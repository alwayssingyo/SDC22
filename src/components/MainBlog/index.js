import React, { useState } from 'react';
import { BlogContainer, BlogInner, BlogTop, BlogTitle, BlogDesc, BlogCont, CardWrap } from './MainBlogElements';
import CardBlog from '../CardBlog';

const MainBlog= ()=>{
	//phase4 유무 체크
	const [phase4, setPhase4] = useState(false);

  const SessionData = [
    {
      id: 1,
      title: 'How to Use Jetpack WindowManager in Android Game Dev',
      discription:"Learn how to utilize foldable features in Android game apps.",
      picture: process.env.PUBLIC_URL + '/images/img-blog-01.png',
      type: 'Tutorials',
      tag: "Game, Mobile",
			link: '#;',
    },
    {
      id: 2,
      title: 'How to Use Jetpack WindowManager in Android Game Dev',
      discription:"Learn how to utilize foldable features in Android game apps.",
      picture: process.env.PUBLIC_URL + '/images/img-blog-02.png',
      type: 'Tutorials',
      tag: "Game, Mobile",
			link: '#;',
    },
    {
      id: 3,
      title: 'How to Use Jetpack WindowManager in Android Game Dev',
      discription:"Learn how to utilize foldable features in Android game apps.",
      picture: process.env.PUBLIC_URL + '/images/img-blog-03.png',
      type: 'Tutorials',
      tag: "Game, Mobile",
			link: '#;',
    },
	]
	
	return (
		<>
			{
				phase4 &&
		 		<BlogContainer>
					<BlogInner>
						<BlogTop>
							<BlogTitle>SDC22 Blogs</BlogTitle>
							<BlogDesc>
								Articles to inspire the builder and designer within<br/>
								<a href="https://developer.samsung.com/blog/en-us" target='_blank' rel='noopener noreferrer'>Go to Samsung Developers Blogs</a>
							</BlogDesc>
						</BlogTop>
						<BlogCont>
							<CardWrap>
								{
									SessionData.map((item, idx)=>(
										<CardBlog
											key={idx}
											id={item.id}
											title={item.title} 
											discription={item.discription} 
											image={item.picture}
											type={item.type} 
											tag={item.tag} 
											link={item.link}
										/>
									))
								}
							</CardWrap>
						</BlogCont>
					</BlogInner>
				</BlogContainer>
			}
		</>
	)
}

export default MainBlog;
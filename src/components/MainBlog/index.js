import React, { useState } from 'react';
import * as S from './style';
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
		 		<S.BlogContainer>
					<S.BlogInner>
						<S.BlogTop>
							<S.BlogTitle>SDC22 Blogs</S.BlogTitle>
							<S.BlogDesc>
								Articles to inspire the builder and designer within<br/>
								<a href="https://developer.samsung.com/blog/en-us" target='_blank' rel='noopener noreferrer'>Go to Samsung Developers Blogs</a>
							</S.BlogDesc>
						</S.BlogTop>
						<S.BlogCont>
							<S.CardWrap>
								{
									SessionData.map((item, idx)=>(
										<S.CardBlog
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
							</S.CardWrap>
						</S.BlogCont>
					</S.BlogInner>
				</S.BlogContainer>
			}
		</>
	)
}

export default MainBlog;
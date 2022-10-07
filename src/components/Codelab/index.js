import React from 'react';
import { CodelabContainer, CodelabInner, CodelabImg, CodelabCont, CodelabTitle, CodelabDesc, CodelabLink  } from './CodelabElements';

const Codelab = ({ id, title, discription, image, link }) => {
  return(
		<CodelabContainer>
      <CodelabInner>
        <CodelabImg className="card_img">
          <img src={image} alt={discription}></img>
        </CodelabImg>
        <CodelabCont>
          <CodelabTitle>{title}</CodelabTitle>
          <CodelabDesc>{discription}</CodelabDesc>
          <CodelabLink href={link} target="_blank">Go to Code Lab</CodelabLink>
        </CodelabCont>
      </CodelabInner>
    </CodelabContainer>
  )
}

export default Codelab;
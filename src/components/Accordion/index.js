import React, { useRef, useState } from 'react';
import * as S from './style';
import Chevron from './Chevron';


const Accordion = (props)=> {
  const [setActive, setActiveSate] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("")

  const content = useRef(null);

  const toggleAccordion = () => {
    setActiveSate(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(setActive === "active" ? "" : "open");
  }

	  return (
      <S.AccordionWrap>
        <S.AccordionCon className={`${setActive}`}>
          <S.AccordionHeader onClick={toggleAccordion}>
            <span>Q</span>{props.title}
            <S.AccordionButton className={`${setActive}`}>
              <Chevron className={`arr ${setRotate}`} width={24} />
            </S.AccordionButton>
          </S.AccordionHeader>
          <S.AccordionBody ref={content} style={ { maxHeight:`${setHeight}` } }>
            <S.AccordionText dangerouslySetInnerHTML={{ __html : props.content }} />
          </S.AccordionBody>
        </S.AccordionCon>
      </S.AccordionWrap>
	)
}

export default Accordion;
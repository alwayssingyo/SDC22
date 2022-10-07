import React, { useEffect, useRef, useState } from 'react';
import {AccordionWrap, AccordionCon, AccordionHeader, AccordionButton, AccordionBody, AccordionText } from './AccordionElement';
import Chevron from './Chevron';


const Accordion = (props)=> {
  const [setActive, setActiveSate] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("")

  const content = useRef(null);

  function toggleAccordion(){
    setActiveSate(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(setActive === "active" ? "" : "open");

  }

 
	  return (
      <AccordionWrap>
        <AccordionCon className={`${setActive}`}>
          <AccordionHeader onClick={toggleAccordion}>
            <span>Q</span>{props.title}
            <AccordionButton className={`${setActive}`}>
              <Chevron className={`arr ${setRotate}`} width={24} />
            </AccordionButton>
          </AccordionHeader>
          <AccordionBody ref={content} style={ { maxHeight:`${setHeight}` } }>
            <AccordionText dangerouslySetInnerHTML={{ __html : props.content }} />
          </AccordionBody>
        </AccordionCon>
      </AccordionWrap>
	)
}

export default Accordion;
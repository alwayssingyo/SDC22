import React from "react";

const Chevron = (props)=>{

	return (
    <svg
      className={props.className}
      height={props.height}
      width={props.width}
      width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.286 15.429 12 6.857l7.714 8.207" stroke="#9e9e9e" fill="none" strokeWidth="1.4" fillRule="evenodd" strokeLinecap="square"/>
    </svg>

  )
}

export default Chevron
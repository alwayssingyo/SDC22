import React from "react";

const Chevron = (props)=>{

	return (
    <svg
      className={props.className}
      height={props.height}
      width={props.width}
      width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <path id="r8h1zfr56a" d="m11.586 0 .985.906-6.285 5.951L0 .906.985 0l5.3 5.018z"/>
      </defs>
      <g transform="translate(1.714 4.571)" fill="none" fillRule="evenodd">
        <mask id="e6kq7wnkkb" fill="#fff">
            <use xlinkHref="#r8h1zfr56a"/>
        </mask>
        <use fill="#363636" fillRule="nonzero" xlinkHref="#r8h1zfr56a"/>
        <path fill="#363636" mask="url(#e6kq7wnkkb)" d="M-1.714-4.571h16v16h-16z"/>
     </g>
    </svg>

  )
}

export default Chevron
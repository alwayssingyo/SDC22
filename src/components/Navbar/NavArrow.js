import React from 'react';

const  NavArrow = ({fill, opacity})=>{
  // 👇️ paste SVG into a component
  // take fill and stroke colors as props
  return (
    <svg width="100%" height="100%" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
            <path id="nxjwp6ugwa" d="M10.138 0 11 .793 5.5 6 0 .793.862 0 5.5 4.39z"/>
        </defs>
        <g transform="translate(1.5 4)" fill="none" fillRule="evenodd" opacity={opacity}>
            <mask id="cj3z8vpu5b" fill={fill}>
                <use xlinkHref="#nxjwp6ugwa"/>
            </mask>
            <use fill={fill} fillRule="nonzero" xlinkHref="#nxjwp6ugwa"/>
            <path fill={fill} mask="url(#cj3z8vpu5b)" d="M-1.5-4h14v14h-14z"/>
        </g>
    </svg>
  );
}

export default NavArrow;
import React from 'react';

const  NavLogo = ({fill})=>{
  // 👇️ paste SVG into a component
  // take fill and stroke colors as props
  return (
    <svg width="100%" height="100%" viewBox="0 0 96 96">
        <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="ic-/-Bold-/-Menu" stroke={fill} strokeWidth="8">
                <g id="Group-6">
                    <line x1="82.0002" y1="24" x2="14.0002" y2="24" id="Stroke-3"></line>
                    <line x1="14.0002" y1="48" x2="82.0002" y2="48" id="Stroke-4"></line>
                    <line x1="82.0002" y1="72" x2="14.0002" y2="72" id="Stroke-5"></line>
                </g>
            </g>
        </g>
    </svg>
  );
}

export default NavLogo;
import React from 'react';

const  NavLogo = ({fill})=>{
  // 👇️ paste SVG into a component
  // take fill and stroke colors as props
  return (
    <svg width="100%" height="100%" viewBox="0 0 74 20" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
            <path id="1g74xa5qqa" d="M0 0h7.374v18H0z"/>
        </defs>
        <g fill="none" fillRule="evenodd">
            <path d="M0 0h52v18H0z"/>
            <path className='path' d="m0 15.674 2.814-2.28c.84 1.466 2.133 2.303 3.63 2.303 1.635 0 2.52-1.093 2.52-2.28 0-1.442-1.68-1.884-3.45-2.442C3.291 10.254.817 9.37.817 6.137c0-2.722 2.315-4.862 5.492-4.862 2.677 0 4.22 1.047 5.56 2.466L9.325 5.718c-.703-1.07-1.679-1.629-2.995-1.629-1.497 0-2.315.838-2.315 1.931 0 1.35 1.59 1.792 3.382 2.396 2.246.745 4.788 1.768 4.788 5.025 0 2.675-2.088 5.28-5.718 5.28-2.996 0-4.97-1.303-6.468-3.047M32.363 9.998c0-5.071 3.721-8.723 8.51-8.723a8.332 8.332 0 0 1 7.262 4.21l-2.7 1.768c-.954-1.768-2.43-2.861-4.562-2.861-3.132 0-5.447 2.442-5.447 5.606 0 3.093 2.293 5.56 5.378 5.56 2.293 0 3.904-1.35 4.766-3.187l2.814 1.511c-1.452 2.885-4.22 4.839-7.511 4.839-5.106 0-8.51-3.885-8.51-8.723M20.046 3.946h-2.312V16.05h2.312v2.671h-5.443V1.275h5.443z" fill={fill}/>
            <g transform="translate(23.072 1)">
                <mask id="jwf0ucuanb" fill="#fff">
                    <use xlinkHref="#1g74xa5qqa"/>
                </mask>
                <path  className='path' d="M7.374 8.998C7.374 4.547 4.93.755.99 0L0 2.98c2.875.244 4.31 3.606 4.31 6.018 0 2.367-1.444 5.759-4.31 5.977L1.01 18c4.135-.768 6.364-4.73 6.364-9.002" fill={fill} mask="url(#jwf0ucuanb)"/>
            </g>
            <path  className='path' d="M50.637 15.432c0-2.915 2.278-4.603 4.33-6.038 1.624-1.18 3.113-2.105 3.113-3.4 0-1.11-.79-2.013-2.256-2.013-1.443 0-2.323.995-2.887 2.406l-2.639-1.365c1.015-2.313 2.842-3.747 5.549-3.747 3.338 0 5.345 2.082 5.345 4.742s-2.12 4.164-4.105 5.529c-1.691 1.18-3.383 2.244-3.383 3.84h7.42v3.007H50.637v-2.961zM63.445 15.432c0-2.915 2.278-4.603 4.33-6.038 1.624-1.18 3.113-2.105 3.113-3.4 0-1.11-.79-2.013-2.256-2.013-1.443 0-2.323.995-2.887 2.406l-2.639-1.365c1.015-2.313 2.842-3.747 5.549-3.747C71.993 1.275 74 3.357 74 6.017s-2.12 4.164-4.105 5.529c-1.691 1.18-3.383 2.244-3.383 3.84h7.42v3.007H63.445v-2.961z" fill={fill}/>
        </g>
    </svg>
  );
}

export default NavLogo;
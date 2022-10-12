import React from 'react';
import classNames from 'classnames';
import './../Button/style.scss';

function ALink({className, children, size, color, outline, fullWidth, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classNames('aLink', className, size, color, {outline, fullWidth})} >{children}</a>
  );
}

ALink.defaultProps = {
  size: 'medium',
  color: 'black'
};

export default ALink;
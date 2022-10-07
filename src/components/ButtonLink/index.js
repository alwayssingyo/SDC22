import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './../Button/style.scss';

function ButtonLink({className, children, size, color, outline, fullWidth, url }) {
  return (
    <Link to={url} color={color} className={classNames('Link', className, size, color, {outline, fullWidth})}>{children}</Link>
  );
}

Link.defaultProps = {
  size: 'medium',
  color: 'black'
};

export default ButtonLink;
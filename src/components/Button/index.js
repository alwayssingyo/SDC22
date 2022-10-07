import React from 'react';
import classNames from 'classnames';
import './style.scss';

function Button({className, children, size, color, outline, fullWidth, onClick, type }) {
  return (
    <button onClick={onClick} type={type} className={classNames('Button', className, size, color, {outline, fullWidth})}>{children}</button>
  );
}

Button.defaultProps = {
  size: 'medium',
  color: 'black'
};

export default Button;
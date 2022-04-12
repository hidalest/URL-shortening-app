import React from 'react';
import './Button.scss';

const Button = (props) => {
  const { children, className, buttonType, type } = props;
  return (
    <button className={`button ${className} ${buttonType}`} type={type}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'primary',
};
export default Button;

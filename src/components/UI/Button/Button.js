import React from 'react';
import './Button.scss';

const Button = (props) => {
  const { children, className, buttonType, type, onClick } = props;
  return (
    <button
      className={`button ${className} ${buttonType}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'primary',
};
export default Button;

import React from 'react';
import './styles.scss';
import spinnerIMG from '../../../images/spinner.png';

const Spinner = (props) => {
  return (
    <img
      src={spinnerIMG}
      alt='Spinner'
      className={`spinner ${props.className}`}
    />
  );
};

export default Spinner;

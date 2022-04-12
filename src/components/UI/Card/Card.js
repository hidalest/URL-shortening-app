import React, { Children } from 'react';
import styles from './Card.module.scss';

const Card = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`} role='presentation'>
      {props.children}
    </div>
  );
};

export default Card;

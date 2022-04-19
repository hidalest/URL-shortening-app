import React from 'react';
import './StatisticsCard.scss';
import Card from '../UI/Card/Card';

const StatisticsCard = (props) => {
  const { className, description, logo, title } = props;
  return (
    <Card className={`${className} card `}>
      <div className='card__logo-container'>
        <img
          src={logo}
          alt='Brand Recognition'
          className='card__logo-container-img'
        />
      </div>
      <h3 className='card__title'>{title}</h3>
      <p className='card__description'>{description}</p>
    </Card>
  );
};

export default StatisticsCard;

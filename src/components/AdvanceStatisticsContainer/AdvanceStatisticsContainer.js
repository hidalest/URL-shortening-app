import React from 'react';
import './AdvanceStatisticsContainer.scss';

const AdvanceStatisticsContainer = (props) => {
  return (
    <section className='statistics'>
      <div className='statistics__header'>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics darshboard
        </p>
      </div>

      <div className='statistics__cards'></div>
    </section>
  );
};

export default AdvanceStatisticsContainer;

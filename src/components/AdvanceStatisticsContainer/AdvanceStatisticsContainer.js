import React from 'react';
import './AdvanceStatisticsContainer.scss';
import StatisticsCard from './StatisticsCard';
import brandRecognition from '../../images/icon-brand-recognition.svg';
import iconDetailedRecords from '../../images/icon-detailed-records.svg';
import iconFullyCustomizable from '../../images/icon-fully-customizable.svg';

const AdvanceStatisticsContainer = (props) => {
  return (
    <section className="statistics">
      <div className="statistics__header">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics darshboard
        </p>
      </div>

      <div className="statistics__cards">
        <div className="statistics__cards-connectionLine"></div>
        <StatisticsCard
          logo={iconFullyCustomizable}
          title="Brand Recognition"
          description={`Boost your brand recognition with each click. Generic links don't mean a
        thing. Branded links help instill confidence in your content`}
          className="statistics__cards-1"
        />
        <StatisticsCard
          logo={brandRecognition}
          title="Detailed Records "
          description={`Gain insight into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions`}
          className="statistics__cards-2"
        />
        <StatisticsCard
          logo={iconDetailedRecords}
          title="Fully Customizable "
          description={`Improved brand awareness and content discoverablity through customizable links, supercharging audience engagement.`}
          className="statistics__cards-3"
        />
      </div>
    </section>
  );
};

export default AdvanceStatisticsContainer;

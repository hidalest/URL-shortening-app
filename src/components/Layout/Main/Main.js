import React, { useEffect, useState } from 'react';
import AdvanceStatisticsContainer from '../../AdvanceStatisticsContainer/AdvanceStatisticsContainer';
import InputLink from '../../InputLink/InputLink';
import NewLink from '../../NewLink/NewLink';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import './styles.scss';

const Main = (props) => {
  const [errorAPI, setErrorAPI] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiResult, setApiResult] = useState([]);
  const [userLink, setUserLink] = useState('');

  const getLinkHandler = (link) => setUserLink(link);

  useEffect(() => {
    if (!userLink) return;

    setIsLoading(true);
    fetch(`https://api.shrtco.de/v2/shorten?url=${userLink}`)
      .then((result) => result.json())
      .then((response) => {
        const { short_link, original_link } = response.result;
        setIsLoading(false);
        setErrorAPI(false);
        if (!response.ok)
          throw new Error(`${response.error}, ${response.error_code}`);

        const linkElement = {
          shortLink: short_link,
          originalLink: original_link,
        };

        setApiResult((prevState) => [...prevState, linkElement]);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorAPI(true);
      });
  }, [userLink, errorAPI]);

  useEffect(() => {
    if (apiResult.length >= 3) {
      apiResult.shift();
    }
  }, [apiResult]);

  return (
    <main className='main'>
      <div className='main__inputLink-container'>
        <InputLink
          getLink={getLinkHandler}
          isLoading={isLoading}
          error={errorAPI}
        />
      </div>
      <div className='main__card-container'>
        {apiResult.map((element) => (
          <NewLink
            originalLink={element.originalLink}
            shortLink={element.shortLink}
          />
        ))}
      </div>

      <AdvanceStatisticsContainer />
    </main>
  );
};

export default Main;

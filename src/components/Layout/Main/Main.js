import React, { useEffect, useState } from 'react';
import InputLink from '../../InputLink/InputLink';
import Card from '../../UI/Card/Card';
import Spinner from '../../UI/Spinner/Spinner';
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
      <InputLink
        getLink={getLinkHandler}
        isLoading={isLoading}
        error={errorAPI}
      />
      {console.log(apiResult)}
      {apiResult.map((element) => (
        <p>{element.originalLink}</p>
      ))}
    </main>
  );
};

export default Main;

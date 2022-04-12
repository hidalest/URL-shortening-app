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

    console.log(userLink);

    setIsLoading(true);
    fetch(`https://api.shrtco.de/v2/shorten?url=${userLink}`)
      .then((result) => result.json())
      .then((response) => {
        setIsLoading(false);
        setErrorAPI(false);
        if (!response.ok)
          throw new Error(`${response.error}, ${response.error_code}`);
        console.log(response);
      })
      .catch((error) => {
        setErrorAPI(true);
        console.log(errorAPI);
      });
  }, [userLink]);

  return (
    <main className='main'>
      <InputLink
        getLink={getLinkHandler}
        isLoading={isLoading}
        error={errorAPI}
      />
    </main>
  );
};

export default Main;

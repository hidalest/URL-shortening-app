import React, { useState } from 'react';
import './NewLink.scss';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

const NewLink = (props) => {
  const { originalLink, shortLink } = props;
  const [buttonText, setButtonText] = useState(false);

  const clickCopyClickboard = (props) => {
    setButtonText(true);
    navigator.clipboard.writeText(shortLink);

    setTimeout(() => {
      setButtonText(false);
    }, 1000);
  };

  const addCopiedClass = buttonText ? 'active-button' : '';
  const btnText = buttonText ? 'Copied!' : 'Copy';

  return (
    <Card className='main__card-link'>
      <p className='main__card-link-original'>{originalLink}</p>
      <div className='main__card-link-group'>
        <p>{shortLink}</p>
        <Button
          buttonType='primary'
          onClick={clickCopyClickboard}
          className={addCopiedClass}
        >
          {btnText}
        </Button>
      </div>
    </Card>
  );
};

export default NewLink;

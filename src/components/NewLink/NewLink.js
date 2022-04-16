import React, { useState } from 'react';
import './NewLink.scss';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

const NewLink = (props) => {
  const { originalLink, shortLink } = props;
  const { btnText, setButtonText } = useState('Copy');

  const clickCopyClickboard = (props) => {
    setButtonText('Copied!');
  };

  const buttonText = 'Copy';

  console.log(btnText);
  return (
    <Card className='main__card-link'>
      <p>{originalLink}</p>
      <div className='main__card-link-group'>
        <p>{shortLink}</p>
        <Button buttonType='primary' onClick={clickCopyClickboard}>
          {/* {btnText} */}
          {buttonText}
        </Button>
      </div>
    </Card>
  );
};

export default NewLink;

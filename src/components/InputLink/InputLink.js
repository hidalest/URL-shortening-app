import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import Spinner from '../UI/Spinner/Spinner';
import './styles.scss';

const InputLink = (props) => {
  const [activeForm, setIsActiveForm] = useState(true);
  const [inputValue, setInputValue] = useState('');
  let { isLoading, getLink, error, id } = props;

  const inputValueHandler = (value) => {
    setInputValue(value.target.value);
    setIsActiveForm(true);
    error = false;
  };

  const applyErrorClass = error || !activeForm;

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      setIsActiveForm(false);
      return;
    }

    getLink(inputValue);
  };
  return (
    <>
      <form className='form' onSubmit={onFormSubmitHandler} id={id}>
        <div className={`form__group ${applyErrorClass ? 'form__alert' : ''}`}>
          <input
            type='text'
            placeholder='Shorten a link here'
            aria-label='Shorten it!'
            name='Shorten it!'
            value={inputValue}
            onChange={inputValueHandler}
          />
          <Button type='submit' buttonType='primary'>
            {isLoading ? <Spinner className='form__spinner' /> : 'Shorten It!'}
          </Button>
        </div>
        {applyErrorClass && (
          <p className='form__alert'>Please add a valid link</p>
        )}
      </form>
    </>
  );
};

export default InputLink;

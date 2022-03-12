import React, { useState } from 'react';
import logoImg from '../../../images/logo.svg';
import './MainNav.scss';
import Button from '../../UI/Button/Button';

const MainNav = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const activateMobileNavHandler = () => setMobileNav(!mobileNav);

  const mobileNavActive = mobileNav ? 'active' : '';
  return (
    <>
      <nav className='nav'>
        <div className='nav__group'>
          <img src={logoImg} alt='Shortly Logo' />
          <a href='#'>Features</a>
          <a href='#'>Pricing</a>
          <a href='#'>Resources</a>
        </div>

        <div className=''>
          <Button type='secondary'>Login</Button>
          <Button type='primary'>Sign Up</Button>
        </div>
      </nav>

      <nav className={`nav__mobile ${mobileNavActive}`}>
        <img src={logoImg} alt='Shortly Logo' />
        <button
          className={`hamburger-icon ${mobileNavActive}`}
          onClick={activateMobileNavHandler}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className='nav__mobile-content'>
          <div className='nav__mobile-group'>
            <a href='#'>Features</a>
            <a href='#'>Pricing</a>
            <a href='#'>Resources</a>
          </div>
          <span className='nav__mobile-content-line' />
          <div className='nav__mobile-group'>
            <Button type='secondary'>Login</Button>
            <Button type='primary'>Sign Up</Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNav;

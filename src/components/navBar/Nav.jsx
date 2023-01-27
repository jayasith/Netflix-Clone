import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav_background'}`}>
      <div className='nav__contents'>
        <Link to='/'>
          <img
            className='nav__logo'
            alt=''
            src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
          />
        </Link>
        <Link to='/profile'>
          <img
            className='nav__avatar'
            alt=''
            src='https://avatars.githubusercontent.com/u/6759280?v=4'
          />
        </Link>
      </div>
    </div>
  );
}

export default Nav;

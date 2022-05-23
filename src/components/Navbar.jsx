import {
  ArrowDropDown,
  HelpOutline,
  Notifications,
  Person,
  Search,
} from '@mui/icons-material';
import React, { useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState('false');

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  console.log(isScrolled);

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className='container'>
        <div className='left'>
          <img
            src={require('../images/Netflix_2015_logo.svg.png')}
            alt='Netflix logo'
          />
          <span>Home</span>
          <span>TV Shows</span>
          <span>Movies</span>
          <span>New & Popular</span>
          <span>My List</span>
        </div>
        <div className='right'>
          <Search className='icon' />
          <span>Kids</span>
          <Notifications className='icon' />
          <span className='icon pfpicon'>
            <img src={require('../images/cat_pfp.jpeg')} alt='Profile' />
            <ArrowDropDown className='dropdown' />
            <div className='options'>
              <div className='opt'>
                <Person />
                <span>Account</span>
              </div>
              <div className='opt'>
                <HelpOutline />
                <span>Help Center</span>
              </div>
              <hr></hr>
              <span className='opt'>Sign out of Netflix</span>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

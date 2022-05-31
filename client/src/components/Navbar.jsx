import {
  ArrowDropDown,
  HelpOutline,
  Notifications,
  Person,
  Search,
} from '@mui/icons-material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className='container'>
        <div className='left'>
          <img
            src={require('../images/Netflix_2015_logo.svg.png')}
            alt='Netflix logo'
          />
          <Link to='/' className='link'>
            <span>Home</span>
          </Link>
          <Link to='/series' className='link'>
            <span>TV Shows</span>
          </Link>
          <Link to='/movies' className='link'>
            <span>Movies</span>
          </Link>
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

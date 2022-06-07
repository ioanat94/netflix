import { ArrowDropDown } from '@mui/icons-material';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { logoutCall } from '../authContext/apiCalls';
import { AuthContext } from '../authContext/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className='container'>
        <div className='left'>
          <Link to='/'>
            <img
              src={require('../images/Netflix_2015_logo.svg.png')}
              alt='Netflix logo'
            />
          </Link>
          <Link to='/' className='link'>
            <span>Home</span>
          </Link>
          <Link to='/series' className='link'>
            <span className='navbarmainLinks'>TV Shows</span>
          </Link>
          <Link to='/movies' className='link'>
            <span className='navbarmainLinks'>Movies</span>
          </Link>
        </div>
        <div className='right'>
          <span className='icon pfpicon'>
            <img
              src={
                JSON.parse(localStorage.getItem('user')).profilePicture ||
                'https://firebasestorage.googleapis.com/v0/b/netflix-clone-49e41.appspot.com/o/items%2F1654582827926profilePicture30db479e1558c3ed46b4ed23b3cd98ae.jpg?alt=media&token=22e948b2-d8ef-4818-b2e4-ba34196b6c3b'
              }
              alt='Profile'
            />
            <ArrowDropDown className='dropdown' />
            <div className='options'>
              {JSON.parse(localStorage.getItem('user')).isAdmin && (
                <span className='opt'>
                  <a
                    href='https://netflix-admin-dashboard.herokuapp.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Admin Dashboard
                  </a>
                </span>
              )}
              <span className='opt' onClick={() => logoutCall(dispatch)}>
                Sign out of Netflix
              </span>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

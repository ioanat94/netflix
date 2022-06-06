import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './topbar.css';
import { logoutCall } from '../../context/authContext/apiCalls';
import { AuthContext } from '../../context/authContext/AuthContext';

export default function Topbar() {
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();
  const handleLogout = (e) => {
    e.preventDefault();
    logoutCall(dispatch);
    history.push('/');
  };

  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>
            <Link className='link' to={{ pathname: '/' }}>
              Admin
            </Link>
          </span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer' onClick={handleLogout}>
            Logout
          </div>
          <img
            src='https://data.whicdn.com/images/351162013/original.jpg'
            alt=''
            className='topAvatar'
          />
        </div>
      </div>
    </div>
  );
}

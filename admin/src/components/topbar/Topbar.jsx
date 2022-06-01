import React, { useContext } from 'react';
import './topbar.css';
import { NotificationsNone, Language } from '@material-ui/icons';
import { logoutCall } from '../../context/authContext/apiCalls';
import { AuthContext } from '../../context/authContext/AuthContext';

export default function Topbar() {
  const { dispatch } = useContext(AuthContext);
  const handleLogout = () => {
    logoutCall(dispatch);
  };

  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>Admin</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Language />
            <span className='topIconBadge'>2</span>
          </div>
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

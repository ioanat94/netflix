import { ArrowBackOutlined } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

function Watch() {
  const location = useLocation();
  const movie = location.state.movie;

  return (
    <div className='watch'>
      <Link to='/'>
        <div className='back'>
          <ArrowBackOutlined />
        </div>
      </Link>
      <video
        src={movie.video}
        className='video'
        autoPlay
        progress='true'
        controls
      ></video>
    </div>
  );
}

export default Watch;

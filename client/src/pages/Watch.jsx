import { ArrowBackOutlined } from '@mui/icons-material';
import React from 'react';

function Watch() {
  return (
    <div className='watch'>
      <div className='back'>
        <ArrowBackOutlined />
      </div>
      <video
        src={require('../videos/full_screen.mp4')}
        className='video'
        autoPlay
        progress
        controls
      ></video>
    </div>
  );
}

export default Watch;

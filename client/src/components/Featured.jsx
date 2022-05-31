import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import React from 'react';

function Featured({ type }) {
  return (
    <div className='featured'>
      {type && (
        <div className='category'>
          <span>{type === 'movie' ? 'Movies' : 'TV Shows'}</span>
          <select name='genre' id='genre'>
            <option>Genres</option>
            <option value='adventure'>Adventure</option>
            <option value='comedy'>Comedy</option>
            <option value='crime'>Crime</option>
            <option value='fantasy'>Fantasy</option>
            <option value='historical'>Historical</option>
            <option value='horror'>Horror</option>
            <option value='romance'>Romance</option>
            <option value='sci-fi'>Sci-fi</option>
            <option value='thriller'>Thriller</option>
            <option value='western'>Western</option>
            <option value='animation'>Animation</option>
            <option value='drama'>Drama</option>
            <option value='documentary'>Documentary</option>
          </select>
        </div>
      )}
      <img
        src={require('../images/queens_gambit_header.jpg')}
        alt='Featured Header'
        className='featured-header'
      />
      <div className='info'>
        <img
          src={require('../images/queens_gambit_logo.webp')}
          alt='Featured Title'
          className='featured-title'
        />
        <span className='description'>
          In a 1950s orphanage, a young girl reveals an astonishing talent for
          chess and begins an unlikely journey to stardom while grappling with
          addiction.
        </span>
        <div className='buttons'>
          <button className='play'>
            <PlayArrow className='feat-icon' />
            <span>Play</span>
          </button>
          <button className='more'>
            <InfoOutlined className='feat-icon' />
            <span>More Info</span>
          </button>
          <span className='age-rating'>16+</span>
        </div>
      </div>
    </div>
  );
}

export default Featured;

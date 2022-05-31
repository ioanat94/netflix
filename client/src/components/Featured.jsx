import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Featured({ type }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTQ5NGY5Y2I5YzgyMDM4ZjRiMzFmNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mzk5Nzc1MywiZXhwIjoxNjU0NDI5NzUzfQ.xnJCJcokygkObptwFedSngH-YoS_4EClKSFrGUNim14',
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  return (
    <div className='featured'>
      {type && (
        <div className='category'>
          <span>{type === 'movies' ? 'Movies' : 'TV Shows'}</span>
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
        src={content.image}
        alt='Featured Header'
        className='featured-header'
      />
      <div className='info'>
        <img
          src={content.imageTitle}
          alt='Featured Title'
          className='featured-title'
        />
        <span className='description'>{content.description}</span>
        <div className='buttons'>
          <button className='play'>
            <PlayArrow className='feat-icon' />
            <span>Play</span>
          </button>
          <button className='more'>
            <InfoOutlined className='feat-icon' />
            <span>More Info</span>
          </button>
          <span className='age-rating'>{content.limit}+</span>
        </div>
      </div>
    </div>
  );
}

export default Featured;

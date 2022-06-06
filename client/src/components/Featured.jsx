import { PlayArrow } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Featured({ type, setGenre }) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getRandomMovie = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
          },
        });
        setMovie(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomMovie();
  }, [type]);

  return (
    <div className='featured'>
      {type && (
        <div className='category'>
          <span className='featuredMovieType'>
            {type === 'movie' ? 'Movies' : 'TV Shows'}
          </span>
          <select
            name='genre'
            id='genre'
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value=''>Genres</option>
            <option value='Action'>Action</option>
            <option value='Anime'>Anime</option>
            <option value='Comedy'>Comedy</option>
            <option value='Crime'>Crime</option>
            <option value='Documentary'>Documentary</option>
            <option value='Drama'>Drama</option>
            <option value='Fantasy'>Fantasy</option>
            <option value='Horror'>Horror</option>
            <option value='Romance'>Romance</option>
            <option value='Thriller'>Thriller</option>
          </select>
        </div>
      )}
      <img
        src={movie.image}
        alt='Featured Header'
        className='featured-header'
      />
      <div className='info'>
        <img
          src={movie.imageTitle}
          alt='Featured Title'
          className='featured-title'
        />
        <span className='description'>{movie.description}</span>
        <div className='buttons'>
          <Link
            to='/watch'
            state={{ movie }}
            style={{ textDecoration: 'none' }}
          >
            <button className='play'>
              <PlayArrow className='feat-icon' />
              <span>Play</span>
            </button>
          </Link>
          <span className='age-rating'>{movie.limit}+</span>
        </div>
      </div>
    </div>
  );
}

export default Featured;

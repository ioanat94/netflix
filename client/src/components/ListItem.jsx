import { PlayArrow } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  const moveDistance = index * 240 + index * 8;

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get('/movies/find/' + item, {
          headers: {
            token:
              'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to='/watch' state={{ movie }}>
      <div
        className='listItem'
        style={{ left: isHovered && moveDistance }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.imageSmall} alt='Show Preview' />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay muted loop />
            <div className='itemInfo'>
              <div className='icons'>
                <PlayArrow className='play' />
              </div>
              <div className='itemInfoTop'>
                <span className='bordered'>{movie.limit}+</span>
                <span className='duration'>{movie.duration}</span>
                <span className='bordered hd'>HD</span>
              </div>
              <div className='genre'>{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

export default ListItem;

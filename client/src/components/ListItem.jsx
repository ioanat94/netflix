import { Add, PlayArrow, ThumbUpOffAltOutlined } from '@mui/icons-material';
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
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTQ5NGY5Y2I5YzgyMDM4ZjRiMzFmNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mzk5Nzc1MywiZXhwIjoxNjU0NDI5NzUzfQ.xnJCJcokygkObptwFedSngH-YoS_4EClKSFrGUNim14',
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
                <Add className='add' />
                <ThumbUpOffAltOutlined className='thumbsUp' />
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

import { Add, PlayArrow, ThumbUpOffAltOutlined } from '@mui/icons-material';
import React, { useState } from 'react';

function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = require('../videos/preview.mp4');
  const moveDistance = index * 240 + index * 8;

  return (
    <div
      className='listItem'
      style={{ left: isHovered && moveDistance }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={require('../images/chefs_table.jfif')} alt='Show Preview' />
      {isHovered && (
        <>
          <video src={trailer} autoPlay muted loop />
          <div className='itemInfo'>
            <div className='icons'>
              <PlayArrow className='play' />
              <Add className='add' />
              <ThumbUpOffAltOutlined className='thumbsUp' />
            </div>
            <div className='itemInfoTop'>
              <span className='match'>90% Match</span>
              <span className='bordered'>16+</span>
              <span className='duration'>1h 14m</span>
              <span className='bordered hd'>HD</span>
            </div>
            <div className='tags'>
              <span>Suspenseful</span>
              <span className='delimiter'> · </span>
              <span>Exciting</span>
              <span className='delimiter'> · </span>
              <span>Mystery</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListItem;

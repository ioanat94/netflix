import { Add, PlayArrow, ThumbUpOffAltOutlined } from '@mui/icons-material';
import React, { useState } from 'react';

function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761';

  return (
    <div
      className='listItem'
      style={{ left: isHovered && index * 240 + index * 8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={require('../images/chefs_table.jfif')} alt='Show Preview' />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
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

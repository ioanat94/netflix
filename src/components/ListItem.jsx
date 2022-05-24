import { Add, PlayArrow, ThumbUpOffAltOutlined } from '@mui/icons-material';
import React from 'react';

function ListItem() {
  return (
    <div className='listItem'>
      <img src={require('../images/chefs_table.jfif')} alt='Show Preview' />
      <div className='itemInfo'>
        <div className='icons'>
          <PlayArrow />
          <Add />
          <ThumbUpOffAltOutlined />
        </div>
      </div>
    </div>
  );
}

export default ListItem;

import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material';
import React, { useRef, useState } from 'react';
import ListItem from './ListItem';

function List() {
  const [isMoved, setIsMoved] = useState(false);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 65;
    if (direction === 'left') {
      listRef.current.style.transform = `translateX(${248 + distance}px)`;
    } else if (direction === 'right') {
      listRef.current.style.transform = `translateX(${-248 + distance}px)`;
    }
  };

  return (
    <div className='list'>
      <span className='listTitle'>Continue Watching</span>
      <div className='wrapper'>
        <div className='arrowWrapper left'>
          <ArrowBackIosOutlined
            className='sliderArrow left'
            onClick={() => handleClick('left')}
            style={{ display: !isMoved && 'none' }}
          />
        </div>
        <div className='container' ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <div className='arrowWrapper right'>
          <ArrowForwardIosOutlined
            className='sliderArrow right'
            onClick={() => handleClick('right')}
          />
        </div>
      </div>
    </div>
  );
}

export default List;

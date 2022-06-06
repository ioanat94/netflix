import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material';
import React, { useRef, useState } from 'react';
import ListItem from './ListItem';

function List({ list }) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 300);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 15;
    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${130 + distance}px)`;
    }
    if (direction === 'right' && slideNumber < 10 - clickLimit) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  console.log(list);

  return (
    <div className='list'>
      <span className='listTitle'>{list.title}</span>
      <div className='wrapper'>
        <div
          className='arrowWrapper left'
          style={{ display: !isMoved && 'none' }}
        >
          <ArrowBackIosOutlined
            className='sliderArrow left'
            onClick={() => handleClick('left')}
          />
        </div>
        <div className='container' ref={listRef}>
          {list.content.map((item, i) => (
            <ListItem index={i} item={item} />
          ))}
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

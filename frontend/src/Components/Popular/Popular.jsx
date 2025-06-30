import React, { useEffect, useRef } from 'react';
import './Popular.css';
import Item from '../Item/Item';

const Popular = (props) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.scrollTo({
        left: 300, // Adjust scroll distance
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className='popular-items1'>
        <div className="popular-item" ref={scrollRef}>
          {props.data.map((item, index) => (
            <Item
              id={item.id}
              key={index}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;

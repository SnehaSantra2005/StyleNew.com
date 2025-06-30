import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { backend_url, currency } from '../../App';

const Item = ({ id, name, image, new_price, old_price }) => {
  const discount =
    old_price && new_price
      ? Math.round(((old_price - new_price) / old_price) * 100)
      : 0;

  return (
    <div className="item-card">
      <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)}>
        <img
          src={backend_url + image}
          alt={name}
          loading="lazy"
          className="item-image"
        />
        <div className="item-info">
          <p className="item-name">{name}</p>
          <div className="item-prices">
            <span className="item-price-new">
              {currency}
              {new_price}
            </span>
            {old_price && (
              <span className="item-price-old">
                {currency}
                {old_price}
              </span>
            )}
          </div>
          {discount > 0 && (
            <div className="item-discount">{discount}% OFF</div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Item;

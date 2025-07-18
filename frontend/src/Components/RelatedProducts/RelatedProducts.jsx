import React, { useEffect, useState } from 'react';
import './RelatedProducts.css';
import Item from '../Item/Item';
import { backend_url } from '../../App';

const RelatedProducts = ({ category, id }) => {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    fetch(`${backend_url}/relatedproducts`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ category: category }),
    })
      .then(async (res) => {
        const text = await res.text();
        try {
          const data = text ? JSON.parse(text) : [];
          setRelated(data);
        } catch (e) {
          console.error('Invalid JSON:', e);
          setRelated([]);
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setRelated([]);
      });
  }, [category]);

  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {related.map((item, index) =>
          id !== item.id ? (
            <Item
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;

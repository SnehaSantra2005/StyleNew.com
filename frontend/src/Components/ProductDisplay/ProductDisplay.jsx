import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { backend_url, currency } from "../../App";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const [mainImage, setMainImage] = useState(backend_url + product.image);
  const [activeSize, setActiveSize] = useState(null);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src={backend_url + product.image}
              alt="thumb"
              onClick={() => setMainImage(backend_url + product.image)}
              className="thumbnail"
            />
          ))}
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={mainImage} alt="main" />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          {[...Array(4)].map((_, i) => <img key={i} src={star_icon} alt="star" />)}
          <img src={star_dull_icon} alt="star" />
          <p>(122)</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="old">{currency}{product.old_price}</div>
          <div className="new">{currency}{product.new_price}</div>
        </div>

        <p className="description">{product.description}</p>

        <div className="productdisplay-right-size">
          <h2>Select Size</h2>
          <div className="sizes">
            {sizes.map((size) => (
              <div
                key={size}
                className={`size-option ${activeSize === size ? 'active' : ''}`}
                onClick={() => setActiveSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <button className="add-to-cart" onClick={() => addToCart(product.id)}>
          🛒 Add to Cart
        </button>

        <p className="meta"><span>Category:</span> Women, T-shirt, Crop Top</p>
        <p className="meta"><span>Tags:</span> Modern, Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;

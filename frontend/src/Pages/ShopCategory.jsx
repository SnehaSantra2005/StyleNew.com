import React, { useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";

const ShopCategory = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedSize, setSelectedSize] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [brands, setBrands] = useState([]);
  const sizes = ['All', 'Small', 'Medium', 'Large'];

  const fetchInfo = async () => {
    try {
      const res = await fetch('http://localhost:5000/allproducts');
      const data = await res.json();
      setAllProducts(data);
      setFilteredProducts(data);
      const uniqueBrands = ['All', ...new Set(data.map(item => item.brand))];
      setBrands(uniqueBrands);
    } catch (err) {
      console.error("Failed to fetch products", err);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  useEffect(() => {
    let updated = [...allProducts].filter(p => p.category === props.category);

    if (selectedSize !== 'All') {
      updated = updated.filter(p => p.size === selectedSize);
    }

    if (selectedBrand !== 'All') {
      updated = updated.filter(p => p.brand === selectedBrand);
    }

    if (searchQuery.trim() !== '') {
      updated = updated.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortOrder === 'asc') {
      updated.sort((a, b) => a.new_price - b.new_price);
    } else {
      updated.sort((a, b) => b.new_price - a.new_price);
    }

    setFilteredProducts(updated);
  }, [allProducts, sortOrder, selectedSize, selectedBrand, props.category, searchQuery]);

  return (
    <div className="shopcategory">
      <img src={props.banner} className="shopcategory-banner" alt="Category Banner" />

      <div className="shopcategory-search">
        <input
          type="text"
          placeholder="Search for beauty, fashion, wellness..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="shopcategory-layout">
        <aside className="filters">
          <h2>Filters</h2>
          <div className="filter-group">
            <label>Sort by Price</label>
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Size</label>
            <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
              {sizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Brand</label>
            <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
              {brands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>
        </aside>

        <main className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, i) => (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            ))
          ) : (
            <p className="no-products">No products found.</p>
          )}
          <div className="shopcategory-loadmore">
            <Link to="/" className="explore-link">Explore More</Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ShopCategory;

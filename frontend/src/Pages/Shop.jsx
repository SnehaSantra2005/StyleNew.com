import React, { useEffect, useState } from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import SkinCare from '../Components/SkinCare/SkinCare';
import CategoryShowcase from '../Components/CategoryShowcase/CategoryShowcase';

import "./CSS/Shop.css";

const Shop = () => {
  const [popular, setPopular] = useState([]);
  const [newcollection, setNewCollection] = useState([]);
  const [skinCare, setSkinCare] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchInfo = () => {
    fetch('http://localhost:5000/popularinwomen')
      .then((res) => res.json())
      .then((data) => setPopular(data));

    fetch('http://localhost:5000/newcollections')
      .then((res) => res.json())
      .then((data) => setNewCollection(data));

    fetch('http://localhost:5000/SkinCare')
      .then((res) => res.json())
      .then((data) => setSkinCare(data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filterProducts = (products) => {
    return products.filter((item) =>
      item.name?.toLowerCase().includes(searchTerm)
    );
  };

  return (
    <div>
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="shop-search-input"
        />
      </div>
      <Hero />
      

      <CategoryShowcase />
      <Popular data={filterProducts(popular)} />
      <Offers />
      <NewCollections data={filterProducts(newcollection)} />
      <SkinCare data={filterProducts(skinCare)} />
      <NewsLetter />
    </div>
  );
};

export default Shop;

import React, { useRef, useEffect } from 'react';
import './CategoryShowcase.css';
import { Link } from 'react-router-dom';

import indianwearImg from '../Assets/IndianWare.png';
import westernwearImg from '../Assets/westernwear.png';
import FootwearImg from '../Assets/footwear.png';
import LingerieImg from '../Assets/Lingerie1.png';
import JewelleryImg from '../Assets/Jewellery1.png';
import BagsImg from '../Assets/Bags1.png';
import SunglassesImg from '../Assets/Sunglasses.png';

const categories = [
  { name: 'Indianwear', img: indianwearImg, path: '/category/indianwear' },
  { name: 'Westernwear', img: westernwearImg, path: '/category/westernwear' },
  { name: 'Footwear', img: FootwearImg, path: '/category/footwear' },
  { name: 'Lingerie', img: LingerieImg, path: '/category/lingerie' },
  { name: 'Jewellery', img: JewelleryImg, path: '/category/jewellery' },
  { name: 'Bags', img: BagsImg, path: '/category/bags' },
  { name: 'Sunglasses', img: SunglassesImg, path: '/category/sunglasses' },
];

const CategoryShowcase = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let direction = 1;

    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const scrollInterval = setInterval(() => {
      if (!container) return;
      container.scrollLeft += 1.5 * direction;

      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        direction = -1;
      } else if (container.scrollLeft <= 0) {
        direction = 1;
      }
    }, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="category-showcase">
      <h2 className="category-title">Shop by Category</h2>
      <div className="category-cards" ref={scrollRef}>
        {categories.map((cat, index) => (
          <Link to={cat.path} key={index} className="category-card">
            <img src={cat.img} alt={cat.name} loading="lazy" />
            <p>{cat.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryShowcase;

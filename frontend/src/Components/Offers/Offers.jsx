import "./Offers.css";

import img1 from "../Assets/img1.png";
import img2 from "../Assets/img2.png";
import img3 from "../Assets/img3.png";
import img4 from "../Assets/nail.png";
import img5 from "../Assets/perfume.png";
import img6 from "../Assets/eyeliner.png";
import img7 from "../Assets/lipstick.png";
import React from "react";
import { Link } from 'react-router-dom';

const Offers = () => {
  return (
    <>
      <h2 className="offers-heading"> Glamour World </h2>

      <div className="offers-content">

        {/* First offer box - fade in from left */}
        <div className="offer-box double-box animate-left">
          {/* Box 1.1 */}
          <div className="small-box with-text">
            <img src={img1} alt="Inner Box 1" />
            <div className="box-text">
              <h3>Enhances Natural Beauty 🌸</h3>
            </div>
          </div>

          {/* Box 1.2 */}
          <div className="small-box with-text">
            <img src={img2} alt="Inner Box 2" />
            <div className="box-text">
              <h3>Boosts Confidence 💄</h3>
            </div>
          </div>
        </div>
        

        {/* Second box - fade in from up */}
        <Link to="/category/makeup" className="offer-box-link animate-up">
          <div className="offer-box">
            <img src={img3} alt="Box 2" />
          </div>
        </Link>

        {/* Third box - fade in from right */}
        <div className="offer-box grid-box animate-right">
          <div className="grid-small-box"><img src={img4} alt="Grid 1" /></div>
          <div className="grid-small-box"><img src={img5} alt="Grid 2" /></div>
          <div className="grid-small-box"><img src={img6} alt="Grid 3" /></div>
          <div className="grid-small-box"><img src={img7} alt="Grid 4" /></div>
        </div>
      </div>
    </>
  );
};

export default Offers;

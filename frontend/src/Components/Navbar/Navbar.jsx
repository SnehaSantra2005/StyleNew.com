import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Assets/logo5.png';
import cart_icon from '../Assets/cart_icon.png';
import nav_dropdown from '../Assets/nav_dropdown.png';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const { getTotalCartItems } = useContext(ShopContext);
  const navigate = useNavigate();

  const menuItems = [
    { name: "shop", label: "Shop", path: "/" },
    { name: "mens", label: "Men", path: "/mens" },
    { name: "womens", label: "Women", path: "/womens" },
    { name: "kids", label: "Kids", path: "/kids" },
    { name: "SkinCare", label: "SkinCare", path: "/SkinCare" },
    { name: "about", label: "About", path: "/about" },
    { name: "contact", label: "Contact", path: "/contact" },
  ];

  const handleMenuClick = (item) => {
    setMenu(item.name);
    setIsOpen(false);
    menuRef.current.classList.remove('nav-menu-visible');
  };

  const toggleDropdown = () => {
    const visible = !isOpen;
    setIsOpen(visible);
    menuRef.current.classList.toggle('nav-menu-visible');
  };

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    navigate('/');
  };

  return (
    <div className="nav">
      <Link to="/" onClick={() => setMenu("shop")} className="nav-logo">
        <img src={logo} alt="Company Logo" />
      </Link>

      <div className="dropdown-content">
        <ul ref={menuRef} className="nav-menu">
          {menuItems.map((item) => (
            <li key={item.name} onClick={() => handleMenuClick(item)}>
              <Link to={item.path} style={{ textDecoration: 'none' }}>
                {item.label}
              </Link>
              {menu === item.name && <hr />}
            </li>
          ))}
        </ul>
      </div>

      <div className="nav-login-cart">
        {localStorage.getItem('auth-token') ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">
            <button>
              <i className="ri-login-box-line" style={{ marginRight: "8px" }}></i>
              Login
              
            </button>
          </Link>

        )}
        <Link to="/cart">
          <img src={cart_icon} alt="Cart Icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>

      {/* Dropdown toggle button with accessibility */}
      <button
        onClick={toggleDropdown}
        className={`nav-dropdown-btn ${isOpen ? 'open' : ''}`}
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        <img
          className="nav-dropdown"
          src={nav_dropdown}
          alt=""
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

export default Navbar;

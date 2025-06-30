import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import footer_logo from '../Assets/logo5.png'
import instagram_icon from '../Assets/instagram.gif'
import pintrest_icon from '../Assets/pinterest.gif'
import whatsapp_icon from '../Assets/whatsapp_icon.gif'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />

      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <Link to="https://www.instagram.com/hi_itz_snehaa"><img src={instagram_icon} alt="" /></Link>
        </div>
        <div className="footer-icons-container">
          <Link to="https://in.pinterest.com/snehasantra123fg/"><img src={pintrest_icon} alt="" /></Link>
        </div>
        <div className="footer-icons-container">
          <Link to="https://www.whatsapp.com/8100851911"><img src={whatsapp_icon} alt="" /></Link>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2025 - All Right Reserved.</p>
      </div>
    </div>
  )
}


export default Footer
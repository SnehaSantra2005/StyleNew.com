import React, { useState } from 'react';
import './Contact.css';
import instagram_icon from '../About/instagram.gif';
import whatsapp_icon from '../About/whatsapp_icon.gif';
import pinterest_icon from '../About/pinterest.gif';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="fashion-contact">
      <div className="contact-left">
        <h1>Contact Us</h1>
        <p>
          We’re here to help with any questions or concerns. Fill out the form or reach us directly — we’ll get back to you as soon as possible.
        </p>
        <div className="contact-details">
          <p><strong>Email:</strong> support@StyleNew.com</p>
          <p><strong>Phone:</strong> +1 810 085 1812</p>
          <p><strong>Address:</strong> 123 Fashion Street, New York, USA</p>
        </div>

        <div className="contact-socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><img src={instagram_icon} alt="Instagram" /></a>
          <a href="https://pinterest.com" target="_blank" rel="noreferrer"><img src={pinterest_icon} alt="Pinterest" /></a>
          <a href="https://wa.me/8100851911" target="_blank" rel="noreferrer"><img src={whatsapp_icon} alt="WhatsApp" /></a>
        </div>
      </div>

      <div className="contact-right">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
          {submitted && <p className="success-msg">Thanks for reaching out! 💌</p>}
        </form>
        <a
  href="https://wa.me/918100851911"
  className="whatsapp-chat-bubble"
  target="_blank"
  rel="noopener noreferrer"
  title="Chat with us on WhatsApp"
>
  <img
    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
    alt="WhatsApp"
  />
</a>


        <div className="contact-map">
          <iframe
            title="StyleNew Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.568288973186!2d-74.00597208459376!3d40.712776079331204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjAuMCJX!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
            style={{ border: 'none', borderRadius: '12px', marginTop: '2rem' }}
          ></iframe>
        </div>
      </div>
    </div>
    
  );
};

export default Contact;

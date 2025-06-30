import React from 'react';
import './About.css';
import journey1 from './journey1.png'; // Startup phase image
import journey2 from './journey2.png'; // Growth or milestone image
import journey3 from './journey3.png'; // Present or future vision image
import { Link } from 'react-router-dom';
import instagram_icon from './instagram.gif';
import pinterest_icon from './pinterest.gif';
import whatsapp_icon from './whatsapp_icon.gif';
import facebook_icon from './facebook_icon.gif';
import linkedin_icon from './linkedin.gif';
import telegram_icon from './telegram_icon.gif';
import email_icon from './email.gif';
import profile from './sneha5.png';


const About = () => {
  return (
    <section className="journey-section">
      <div className="journey-heading">
        <h1>Our Journey</h1>
        <p>How StyleNew became a movement, not just a brand.</p>
      </div>

      <div className="timeline-container">

        <div className="timeline-block left">
          <img src={journey1} alt="The Beginning" />
          <div className="timeline-content">
            <h2>✨ It all started in 2025</h2>
            <p>
              StyleNew was born from a passion for individuality and expression. 
              What started as a small idea in a bedroom became a dream to empower 
              people through fashion. We believed that style shouldn’t follow rules — it should write them.
            </p>
          </div>
        </div>

        <div className="timeline-block right">
          <img src={journey2} alt="Milestones" />
          <div className="timeline-content">
            <h2>🚀 Growth & Grit</h2>
            <p>
              With every product drop, our community grew stronger. 
              We embraced real stories, bold designs, and a fearless voice. 
              From curated beauty to bold statements — we became a brand people wear with pride.
            </p>
          </div>
        </div>

        <div className="timeline-block left">
          <img src={journey3} alt="Vision for future" />
          <div className="timeline-content">
            <h2>🌟 What’s Next</h2>
            <p>
              We're building something beyond trends — a digital destination for confidence, creativity, and self-love. 
              StyleNew is evolving every day, and so are you. Let’s grow together, one look at a time.
            </p>
          </div>
        </div>
      </div>

      <div className="founder-section">
  <h2>Meet the Founder</h2>
  <div className="founder-container">
    <img src={profile} alt="Sneha Santra" className="founder-image" />
    <div className="founder-bio">
      <h3>Sneha Santra</h3>
      <p>
        I'm a passionate tech enthusiast and creative mind behind StyleNew. Currently pursuing my B.Tech in Computer Science,
        I blend design with development to bring bold fashion ideas to life — digitally.
      </p>
      <p>
        From front-end development and branding to exploring cybersecurity, I love turning ideas into real experiences. 
        StyleNew started as a college dream — now it’s a voice for style, confidence, and originality.
      </p>
    </div>
  </div>
</div>


      <div className="connect">
        <h3>Connect with Us</h3>
        <div className="social-icons">
          <Link to="https://www.instagram.com/hi_itz_snehaa" target="_blank" rel="noreferrer">
            <img src={instagram_icon} alt="Instagram" />
          </Link>
          <Link to="https://in.pinterest.com/snehasantra123fg/">
            <img src={pinterest_icon} alt="Pinterest" />
          </Link>
          <Link to="https://wa.me/918100851911" target="_blank" rel="noreferrer">
            <img src={whatsapp_icon} alt="WhatsApp" />
          </Link>
          <Link to="https://www.facebook.com/sneha.santra.104825" target="_blank" rel="noreferrer">
            <img src={facebook_icon} alt="Facebook" />
          </Link>
          <Link to="https://www.linkedin.com/in/sneha-santra-07279a301?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bl4aIqceOTZ2EHCvfmDhSbA%3D%3D" target="_blank" rel="noreferrer">
            <img src={linkedin_icon} alt="Linkedin" />
          </Link>
          <Link to="https://web.telegram.org/k/" target="_blank" rel="noreferrer">
            <img src={telegram_icon} alt="Telegram" />
          </Link>
          <Link to="https://snehasantra123fg@gmail.com
" target="_blank" rel="noreferrer">
            <img src={email_icon} alt="Email" />
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default About;

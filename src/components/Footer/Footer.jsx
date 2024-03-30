import React from 'react';
import './Footer.css'; // Assume you also have a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faGithub,  } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <footer className="footer-container">
      <h4>© 2024 Douglas Rouse. All rights reserved.</h4>
      <div className="social-media-links">

      <a href="https://www.linkedin.com/in/douglas-rouse-784619301/" target="_blank" rel="noopener noreferrer" className="icon-linkedin">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/dougyfresh208" target="_blank" rel="noopener noreferrer" className="icon-github">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.facebook.com/douglas.rouse.908" target="_blank" rel="noopener noreferrer" className="icon-facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

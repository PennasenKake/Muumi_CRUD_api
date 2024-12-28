import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="logo1-container">
        <Link to="/">
          <img className="logo1" src="designer1.jpeg" alt="Logo" />
        </Link>
      </div>
      <div className="links-container">
        <li><a href="/contact">Ota yhteyttä</a></li>
        <li><a href="/kayttoehdot">Käyttöehdot</a></li>
      </div>
      <div className="footer-content">
        <p>© 2024 Muumi Mukit. Kaikki oikeudet pidätetään.</p>
        <p>Seuraa meitä sosiaalisessa mediassa: 
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>, 
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </p>
      </div>
    </footer>
  );
}

export { Footer };

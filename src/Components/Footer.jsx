import React from "react";
import "./footer.css"; // Adjust path as necessary
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section about">
          <h3>
            <img src="l.svg" alt="Barber Logo" />
          </h3>
          <p>Accelerator niche market technology business plan infographic.</p>
          <div className="socials">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <Link to={"/about"}>
              <li>
                <a href="#">About Us</a>
              </li>
            </Link>
            <li>
              <a href="#">Services</a>
            </li>
            <Link to={"contact"}>
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="footer-section contact">
          <address>
            <p>India Noida</p>
            <p>(+91) 8810873052</p>
            <p>(+91) 1234567890</p>
            <p>
              Email: <a href="mailto:info@barber.com">info@nagriik.com</a>
            </p>
            <p>
              Email: <a href="mailto:contact@barber.com">contact@nagrik.com</a>
            </p>
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 nagrik. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="social-media-icons">
        <FaInstagram />
        <FaFacebookSquare />
        <FaTwitter />
        <FaLinkedin />
      </div>
      <p>&copy; 2021 - Babuevs</p>
    </footer>
  );
}

export default Footer;

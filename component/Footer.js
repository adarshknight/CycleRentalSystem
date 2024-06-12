import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css'; // Import the Footer.css file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5 className="footer-heading">Contact Information</h5>
            <p className="footer-info">123 Church Street, Chennai, India</p>
            <p className="footer-info">Email: paramesh@gmail.com</p>
            <p className="footer-info">Phone: +90233 12233</p>
          </div>
          <div className="col-md-6 d-flex justify-content-end align-items-center">
            <h5 className="footer-heading mr-3">Follow Us</h5><br></br>
            <ul className="social-icons list-inline">
              <li className="list-inline-item"><a href="#"><FaFacebook /></a></li>
              <li className="list-inline-item"><a href="#"><FaTwitter /></a></li>
              <li className="list-inline-item"><a href="#"><FaInstagram /></a></li>
            </ul>
            <p className="footer-text ml-3 mb-0">© 2024 Bikes2Ride. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

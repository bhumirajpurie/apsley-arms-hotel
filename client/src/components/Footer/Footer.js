import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
<link rel="stylesheet" href="Footer.module.css"></link>

const App = () => {
  return (
    <>
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <div className="flex-container">
          {/* left side */}
          <div className="left-side">
            <div className="logo-container">
              <img src="./photo/image.png" alt="logo" className="logo" />
            </div>
            <div className="hotel-info">
              <span className="font-bold">Asplay Arms Hotel</span>
              <span className="py-5 font-poppins">
                Managing restaurant menus and other information including location and opening hours,
                Managing the preparation of orders of the restaurant kitchen.
              </span>
            </div>
          </div>
          {/* right side */}
          <div className="right-side">
            <div className="nav-container">
              <span className="font-bold">Navigation</span>
              <a href="Menu" className="font-poppins hover-text-blue-500">
                Menu
              </a>
              <a href="Product" className="font-poppins hover-text-blue-500">
                Product
              </a>
              <a href="About us" className="font-poppins hover-text-blue-500">
                About us
              </a>
              <a href="Accommodation" className="font-poppins hover-text-blue-500">
                Accommodation
              </a>
              <a href="Bars" className="font-poppins hover-text-blue-500">
                Bars
              </a>
            </div>
            <div className="services-container">
              <span className="font-bold">Services</span>
              <span className="font-poppins">Wi-Fi Access</span>
              <span className="font-poppins">Sustainability</span>
              <span className="font-poppins">Reception</span>
              <span className="font-poppins">Security</span>
              <span className="font-poppins"> Heaters</span>
            </div>
            <div className="follow-us-container">
              <span className="font-bold">Follow Us</span>
              <div className="social-links">
                <a href="https://www.facebook.com/profile.php?id=100075803032318&mibextid=ZbWKwL">
                  <FaFacebook />
                </a>
                <a href="https://www.example.com">
                  <FaTwitter />
                </a>
                <a href="https://www.example.com">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <span className="copyright">
          All rights reserved by Asplay Arms Hotel - © 2023 | Powered By: PLMultimedia Pvt Ltd
        </span>
      </div>
    </>
  );
};

export default App;

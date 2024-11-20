import React from "react";
import icons from "../../essets/footerIcons.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo__wrapper">
            <h2 className="footer__logo">Listee Travel</h2>
            <p className="footer__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <img className="footer__icons" src={icons} alt="icons" />
          </div>
          <ul className="footer__items">
            <li className="footer__item">
              <h4 className="footer__title">About</h4>
            </li>
            <li className="footer__item">Menu</li>
            <li className="footer__item">Features</li>
            <li className="footer__item">News & Blogs</li>
            <li className="footer__item">Help & Supports</li>
          </ul>
          <ul className="footer__items">
            <li className="footer__item">
              <h4 className="footer__title">Company</h4>
            </li>
            <li className="footer__item">How we work</li>
            <li className="footer__item">Terms of service</li>
            <li className="footer__item">Pricing</li>
            <li className="footer__item">FAQ</li>
          </ul>
          <ul className="footer__items">
            <li className="footer__item">
              <h4 className="footer__title">Contact Us</h4>
            </li>
            <li className="footer__item">
              Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
              Bangalore-560016
            </li>
            <li className="footer__item">+1 202-918-2132</li>
            <li className="footer__item">listeetravel@mail.com</li>
            <li className="footer__item">www.listeetravel.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

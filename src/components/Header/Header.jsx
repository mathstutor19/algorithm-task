import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { navbarLinks } from "../../utils/navbarLinks";
import location from "../../essets/location.svg";
import date from "../../essets/date.svg";
import search from "../../essets/search.svg";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="#">
            <strong className="header__logo">Listee Travel</strong>
          </a>
          <div className="nav__toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`nav__lists ${isMenuOpen ? "nav__lists--open" : ""}`}>
            {navbarLinks.map((item) => (
              <Link key={item.name} to={item.path}>
                <li className="nav__list">{item.name}</li>
              </Link>
            ))}
          </ul>
          <div className="auth">
            <Link className="login">Sign In</Link>
            <Link className="register">SingUp</Link>
          </div>
        </nav>
        <p className="header__subtitle">Explorer and Travel</p>
        <h1 className="header__title">Let’s Go Now</h1>
        <p className="header__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <address className="nav__address">
          <div className="nav__address__location">
            <img src={location} alt="location" />
            <div>
              <p className="nav__address__text">Location</p>
              <h4 className="nav__address__title">Thailand</h4>
            </div>
          </div>
          <div className="nav__address__line"></div>
          <div className="nav__address__location">
            <img src={date} alt="date" />
            <div>
              <p className="nav__address__text">Date</p>
              <h4 className="nav__address__title">13 May, 2023</h4>
            </div>
          </div>
          <button className="nav__address__button">
            <img src={search} alt="search" />
          </button>
        </address>
      </div>
    </header>
  );
};

export default Header;

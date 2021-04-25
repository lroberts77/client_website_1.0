import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import nature from "../../assets/planet-earth.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Navbar() {

    const [navbar, setnavbar] = useState("navbar");
    const [click, setClick] = useState(false);
    const closeMobileMenu = () => {
      setClick(false);
      scrollRelease()
    };
    
    const handleClick = () => {
      setClick(!click);
      scrollLock();
    };

    const scrollLock = () => {
      click ? document.body.style.overflow = "auto" : document.body.style.overflow = "hidden"
    };

    const scrollRelease = () => {
      document.body.style.overflow = "auto"
    }

    const listenScrollEvent = () => {
      if (window.scrollY < 73) {
        setnavbar("navbar")
      } else if (window.scrollY > 70) {
        setnavbar("navbar-black")
      } 
    };
    
    useEffect(() => {
      window.addEventListener('scroll', listenScrollEvent);
    // console.log(window.scrollY);
      return () =>
        window.removeEventListener('scroll', listenScrollEvent);
    }, []);   

  return (
      <nav className={navbar}>
          <Link to="/" className="logo" onClick={closeMobileMenu}>
              <img className="img" src={nature} alt="logo" />
              <h1 className="owner">by Catalina Balan</h1>
          </Link>
          <ul className={click ? "nav-links-open" : "nav-links"}>
            <Link to="/" className="nav-reactlink" onClick={closeMobileMenu}>
              <li>HOME</li>
            </Link>
            <Link to="/about" className="nav-reactlink" onClick={closeMobileMenu}>
              <li>ABOUT</li>
            </Link>
            <Link to="/services" className="nav-reactlink" onClick={closeMobileMenu}>
              <li>SERVICES</li>
            </Link>
            <Link to="/contact" className="nav-reactlink" onClick={closeMobileMenu}>
              <li>CONTACT</li>
            </Link>
          </ul>
          <ul className="media-links">
              <li><a href="https://www.instagram.com/experiment_growth/" className="instagram"><FontAwesomeIcon icon={faInstagram} size="2x" /></a></li>
              <li><a href="" className="youtube"><FontAwesomeIcon icon={faYoutube} size="2x" /></a></li>
              <li><a href="" className="facebook"><FontAwesomeIcon icon={faFacebook} size="2x" /></a></li>
          </ul>
          <label className={click ? "icon-burger-x" : "icon-burger"} onClick={handleClick}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </label>
      </nav>
  )
}

export default Navbar

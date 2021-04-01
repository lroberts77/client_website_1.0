import React, { useState, useEffect } from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";
import $ from 'jquery'; 
import nature from "../../assets/planet-earth.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Navbar() {

    const [navbar, setnavbar] = useState("navbar");

    $('input[id="nav-toggle"]').on('change',function(e) {
        if ($(this).prop('checked')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'auto');
        };
      });   
    
    const listenScrollEvent = () => {
      
      if (window.scrollY < 73) {
        return setnavbar("navbar")
      } else if (window.scrollY > 70) {
        return setnavbar("navbar-black")
      } 
    }
    
    useEffect(() => {
      window.addEventListener('scroll', listenScrollEvent);
    // console.log(window.scrollY);
      return () =>
        window.removeEventListener('scroll', listenScrollEvent);
    }, []);   

  return (
      <nav className={navbar}>
          <input id="nav-toggle" type="checkbox" />
          <Link to="/" className="logo">
              <img className="img" src={nature} alt="logo" />
              <h1 className="owner">by Catalina Balan</h1>
          </Link>
          <ul className="nav-links">
            <Link to="/" className="nav-reactlink">
              <li><a href="">HOME</a></li>
            </Link>
            <Link to="/about" className="nav-reactlink">
              <li><a href="">ABOUT</a></li>
            </Link>
            <Link to="/services" className="nav-reactlink">
              <li><a href="">SERVICES</a></li>
            </Link>
            <Link to="/contact" className="nav-reactlink">
              <li><a href="">CONTACT</a></li>
            </Link>
          </ul>
          <ul className="media-links">
              <li><a href="" className="instagram"><FontAwesomeIcon icon={faInstagram} size="2x" /></a></li>
              <li><a href="" className="youtube"><FontAwesomeIcon icon={faYoutube} size="2x" /></a></li>
              <li><a href="" className="facebook"><FontAwesomeIcon icon={faFacebook} size="2x" /></a></li>
          </ul>
          <label for="nav-toggle" className="icon-burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </label>
      </nav>
  )
}

export default Navbar

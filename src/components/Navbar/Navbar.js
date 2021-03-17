import React, { useState, useEffect } from 'react'
import "./Navbar.css";
import nature from "../../assets/planet-earth.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Navbar() {

    const [navbar, setnavbar] = useState("navbar");
    
    const listenScrollEvent = () => {

      
      if (window.innerWidth > 768 && window.scrollY < 73 || window.innerWidth < 768 && window.scrollY < 60) {
        return setnavbar("navbar")
      } else if (window.innerWidth > 768 && window.scrollY > 70  || window.innerWidth < 768 && window.scrollY > 15) {
        return setnavbar("navbar-black")
      } 
    }
    
    useEffect(() => {
      window.addEventListener('scroll', listenScrollEvent);
    console.log(window.scrollY);
      return () =>
        window.removeEventListener('scroll', listenScrollEvent);
    }, []);



  return (
      <nav className={navbar}>
          <input id="nav-toggle" type="checkbox" />
          <div className="logo">
              <img className="img" src={nature} alt="logo" />
              <h1 className="owner">by Catalina Balan</h1>
          </div>
          <ul className="nav-links">
              <li><a href="">HOME</a></li>
              <li><a href="">ABOUT</a></li>
              <li><a href="">SERVICES</a></li>
              <li><a href="">CONTACT</a></li>
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

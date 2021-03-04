import React, { useState, useEffect } from 'react'
import "./Navbar.css";
import nature from "../../assets/nature.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  // const [navbar, setNavbar] = useState(false)

  // const changeBG = () => {
  //   console.log(window.scrollY);
  // }

  // window.addEventListener('scroll', changeBG);

    const [navbar, setnavbar] = useState("navbar");
    
    const listenScrollEvent = () => {
      
      if (window.scrollY < 73) {
        return setnavbar("navbar")
      } else if (window.scrollY > 70) {
        return setnavbar("navbar-black")
      } 
    }
    
    useEffect(() => {
      window.addEventListener('scroll', listenScrollEvent);
    
      return () =>
        window.removeEventListener('scroll', listenScrollEvent);
    }, []);



  return (
      <nav className={navbar}>
          <div className="logo">
              <img className="img" src={nature} alt="logo" />
              <h1 className="owner">by Catalina Balan</h1>
          </div>
          <ul className="nav-ul">
              <li><a href="">HOME</a></li>
              <li><a href="">ABOUT</a></li>
              <li><a href="">SERVICES</a></li>
              <li><a href="">CONTACT</a></li>
          </ul>
          <ul className="ul-links">
              <li><a href="" ><FontAwesomeIcon icon={faInstagram} className="instagram" size="2x" /></a></li>
              <li><a href="" className="youtube"><FontAwesomeIcon icon={faYoutube} size="2x" /></a></li>
              <li><a href="" className="facebook"><FontAwesomeIcon icon={faFacebook} size="2x" /></a></li>
          </ul>
      </nav>
  )
}

export default Navbar

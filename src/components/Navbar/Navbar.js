import React from 'react'
import "./Navbar.css";
import nature from "../../assets/nature.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
  


const Navbar = () => {
    return (
        <nav className="navbar">
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

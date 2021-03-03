import React from 'react'
import "./Navbar.css";
import nature from "../../assets/nature.jpg"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img className="img" src={nature} alt="logo" />
            </div>
            <ul className="nav-ul">
                <li><a href="">HOME</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="">SERVICES</a></li>
                <li><a href="">CONTACT</a></li>
            </ul>
            <ul className="ul-links">
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
            </ul>
        </nav>
    )
}
{/* <i class="fab fa-instagram"></i> */}

export default Navbar


import React from 'react'
import "./Footer.css";
import nature from "../../assets/nature.jpg"

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                <img className="img" src={nature} alt="logo" />
                </div>
                <div className="quick-links">
                    <ul className="footer-ul">
                        <li><a href="">HOME</a></li>
                        <li><a href="">ABOUT</a></li>
                        <li><a href="">SERVICES</a></li>
                        <li><a href="">CONTACT</a></li>
                    </ul>
                </div>
                <div className="shop-link">
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Footer

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
                    <img className="img" src={nature} alt="logo" />
                </div>
            </div>
            <div>
                <a className="copyright" href="https://lroberts77.github.io/">&copy; L.Roberts designs 2021</a>
            </div>
        </div>
    )
}

export default Footer

import React from 'react'
import './HeroSection.css';
import Footer from '../Footer/Footer';
// import nature2 from "../../assets/nature2.jpg"

function HeroSection() {
    return (
        <div className="hero-container">
            <div className="section1">
                <div className="about-container">
                    <h1 className="site-title">
                        Experiment Growth
                    </h1>
                    <p className="site-about">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
            <div className="section2">
                {/* <div className="section2-container"> */}
                    <div className="line">
                    </div>
                    <div className="about">ABOUT</div>
                    <div className="row">
                        <div className="column">

                        </div>
                        <div className="column">

                        </div>
                    </div>
                {/* </div> */}
            </div>
            <div className="section3">
                
            </div>
            <div className="section4">
                
            </div>
            <Footer />
        </div>
    )
}

export default HeroSection

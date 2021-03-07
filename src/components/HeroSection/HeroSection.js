import React from 'react'
import './HeroSection.css';
import Footer from '../Footer/Footer';
import nature2 from "../../assets/nature2.jpg"
import see from "../../assets/see.jpg"
import travel from "../../assets/travel.jpg"
import cat from "../../assets/catalina.jpg"
import finance from "../../assets/bank.jpg"
import work from "../../assets/work.jpg"


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
                <div className="section2-container">
                    <div className="line">
                    </div>
                    <div className="about">ABOUT</div>
                    <div className="row">
                        <div className="column">
                            <div className="pic">
                            <img className="ppic" src={see} alt="CAT"></img>
                            </div>
                        </div>
                        <div className="column">
                            <p>
                                Hi! I'm Catalina. After years of traveling the world non-stop, I’m now enjoying my life at a new home in Kent, while still pursuing my other passions and hobbies as well.
                            </p>
                            <p>
                            I still travel a lot though! You can inspire your wanderlust by checking out my other blog - Cata Everywhere.
                            </p>
                            <p>
                            It’s my mission to teach YOU how can also you turn YOUR dreams, whatever they are, into reality.
                            </p>
                            <p>
                                dfgsagfkdsgfldsgfdlsagfldasghfldsgfhladsgfl
                            </p>
                            {/* <p>
                                dsafgawlgfodsfghdsfgahdlsfghogfhdslgfhl
                            </p> */}
                            <button>More about me</button><span> </span>
                            <button>More about me</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section3">
                <div className="section3-container">
                <div className="line">
                    </div>
                    <div className="interests">INTERESTS</div>
                </div>
                <div className="row-p">
                <div className="column">
                    <img className="pp" src={cat} alt="CAT"></img>
                    </div>
                    <div className="column">
                    <img className="pp" src={travel} alt="CAT"></img>
                    </div>
                                    <div className="column">
                    <img className="pp" src={finance} alt="CAT"></img>
                    </div>
                                    <div className="column">
                    <img className="pp" src={work} alt="CAT"></img>
                    </div>
            
                </div>
            </div>
            <div className="section4">
                
            </div>
            <Footer />
        </div>
    )
}

export default HeroSection

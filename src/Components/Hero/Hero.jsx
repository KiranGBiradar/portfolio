import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Hero.css";
import logo_icon from "../../assets/logo_icon.jpg";

import React from 'react'

const Hero = () => {




  return (
    
    <div id="home" className="hero">

        <img src={logo_icon} alt="" className="profile_img" />

        <h1> Hello,<br/>
          <span>I'm Kirankumar Biradar, </span><br/> Frontend developer</h1>
        <p>Work experience : "With over 2.5+ years of hands-on experience as a frontend developer,
           I have transformed complex design visions into dynamic, 
           user-friendly interfaces, consistently pushing the boundaries 
           of web aesthetics and functionality."</p>

        
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact " >Connect with me</AnchorLink> </div>
            <div className="hero-resume">My Resume</div>

              
        </div>

    </div>
  )
}

export default Hero;
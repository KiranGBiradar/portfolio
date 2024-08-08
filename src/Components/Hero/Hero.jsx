import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Hero.css";
// import profile_img from "../../assets/Picture1.jpg";

import React from 'react'

const Hero = () => {




  return (
    
    <div id="home" className="hero">

        {/* <img src={profile_img} alt="" className="profile_img" /> */}

        <h1> Hello,<br/>
          <span>I'm Kirankumar Biradar, </span><br/> Frontend developer</h1>
        <p>Work experience :  </p>

        
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact " >Connect with me</AnchorLink> </div>
            <div className="hero-resume">My Resume</div>

              
        </div>

    </div>
  )
}

export default Hero;
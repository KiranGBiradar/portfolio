

import React from 'react'

import "./About.css";
import profile_img from "../../assets/gitProfile.jfif";





const About = () => {
  
  
    return (
    <div id='about' className='about' >
        <div className="about-title">
            <h1>About Me</h1>
            

        </div>

        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" className='profile_img' />
        </div>

        <div className="about-right">
            <div className="about-para">
                <p>I am an experienced frontend developer with over 2+years experience</p>
                <p>My passion for frontend development is not only  </p>
            </div>

            <div className="about-skills">
                <div className="about-skill"> <p> HTML & CSS </p> <hr style={{width:"50%"}}/> </div>
                <div className="about-skill"> <p> React JS </p> <hr style={{width:"65%"}} /> </div>
                <div className="about-skill"> <p> JavaScript </p> <hr style={{width:"52%"}}/> </div>
                <div className="about-skill"> <p> NextJs </p> <hr style={{width:"48%"}}/> </div>
            </div>
        </div> 
      </div>

     <div className="about-achievements">
        
        <div className="about-achievement">
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE</p>
            
        </div>
        <hr />

        <div className="about-achievement">
            <h1>7+</h1>
            <p>PROJECT COMPLETED</p>
        </div>
        <hr />

        <div className="about-achievement">
            <h1>5+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
        


        </div>       
    </div>
  )
}

export default About;
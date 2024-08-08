


import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'



const Footer = () => {
  return (
  
        <div className="footer">

            <div className="footer-top">
                <div className="footer-top-left">
                  <p>text</p>


                </div>

                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                     <div className="footer-subscrib">Subscribe</div>   
                </div>
                </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-right">
                    <p>Connect with me</p>

                </div>

            </div>
        </div>


)
}

export default Footer;
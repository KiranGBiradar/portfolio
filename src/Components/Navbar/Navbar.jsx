
import "./Navbar.css"
import logo_icon from "../../assets/logo_icon.jpg"
import React, { useRef, useState } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll"
import menu_open from '../../assets/menu_open.svg'
import menu_close from "../../assets/menu_close.svg"




const Navbar = () => {

  const[menu, setMenu] = useState('home')
  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right="0";
  }

  const closeMenu = () =>{
    menuRef.current.style.right="-350px";
  }

  return (
    <div className="navbar">

        <img src={logo_icon} alt="" className="profile_logo" />
        <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />

        <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt=""  className="nav-mob-close"/>
                <li><AnchorLink className="anchor-link"  href="#home" ><p onClick={() =>setMenu("home") }>Home     </p>       </AnchorLink> </li>
                <li><AnchorLink className="anchor-link" offset={20} href="#about" ><p onClick={() =>setMenu("about") }> About Me </p>     </AnchorLink> </li>
                <li><AnchorLink className="anchor-link" offset={20} href="#services" ><p onClick={() =>setMenu("services") }> Services </p>  </AnchorLink> </li>
                <li><AnchorLink className="anchor-link" offset={20} href="#work" ><p onClick={() =>setMenu("Portfolio") }> Portfolio</p> </AnchorLink> </li>
                <li><AnchorLink className="anchor-link" offset={20} href="#contact" ><p onClick={() =>setMenu("contact") }>Contact </p>   </AnchorLink> </li>
        </ul>

        <div className="nav-connect"><AnchorLink className="anchor-link" offset={20} href="#contact">Connect With Me</AnchorLink></div>

            
            
            



    </div>
  )
}

export default Navbar
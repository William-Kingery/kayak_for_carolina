import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/KC_logo.png';
import Instagram from '../../assets/images/logo/Instagram-Icon.svg';
import Facebook from '../../assets/images/logo/Facebook-Icon.svg';
import kayak from '../../assets/images/logo/kayak_logo.png';
import "./Header.scss"

const Header = () => {

   return (
      <header className="header">
         <Link to="/" className="header__logo-link">
            <img src={logo} alt="Wilson Western Tours & Transportation" className="header__logo" />
         </Link>
         <div className="header__icon-cont">
            <a href="/WNC_pamphlet.pdf" target="_blank" rel="noopener noreferrer">
               <img src={kayak} alt="kayak logo" className="header__kayak"></img>
            </a>
            <a href="https://www.instagram.com/kayakcarolina/" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram Icon" className="header__insta" />
            </a>
            <a href="https://www.facebook.com/kayakcarolinaNC/" target="_blank" rel="noopener noreferrer">
               <img src={Facebook} alt="Facebook Icon" className="header__facebook" />
            </a>
         </div>
      </header>
    )
}

export default Header;
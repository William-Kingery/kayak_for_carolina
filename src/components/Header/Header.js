import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo/KC_logo.png'
import "./Header.scss"

const Header = () => {

    return (
        <header className="header">
         <Link to="/" className="header__logo-link">
            <img src={logo} alt="Wilson Western Tours & Transportation" className="header__logo" />
         </Link>
      </header>
    )
}

export default Header;
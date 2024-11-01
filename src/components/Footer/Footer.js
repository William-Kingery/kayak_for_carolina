import React from "react";
import logo from '../../assets/images/logo/KC_logo.png';
import Instagram from '../../assets/images/logo/Instagram-Icon.svg'
import Facebook from '../../assets/images/logo/Facebook-Icon.svg'
import "./Footer.scss";



const Footer = () => {


   return (
      <footer className="footer">
         <div className="footer__logo-cont">
            <img src={logo} alt="Delamore Cove Logo" className="footer__logo" />
         </div>
         <div className="footer__contact">
            <p className="footer__header">Contact Us</p>
            <p className="footer__text">Email: angela@kayakforcarolina.com</p>
            <p className="footer__text">Phone: 910-458-9171</p>
         </div>
         <div className="footer__social">
            <h3 className="footer__header">Find us</h3>
            <div className="footer__icon-cont">
               <a href="https://www.instagram.com/kayakcarolina/" target="_blank" rel="noopener noreferrer">
                  <img src={Instagram} alt="Instagram Icon" className="footer__insta" />
               </a>
               <a href="https://www.facebook.com/kayakcarolinaNC/" target="_blank" rel="noopener noreferrer">
                  <img src={Facebook} alt="Facebook Icon" className="footer__facebook" />
               </a>
            </div>
         </div>
      </footer>
   );
}
 
export default Footer
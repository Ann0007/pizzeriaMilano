import React from 'react'
//import {NavLink} from 'react-router-dom'
import './_footer.scss'
import logo from '../../images/padova-logo.png';

import { Link } from "react-scroll";
import { FaArrowAltCircleUp , FaFacebook , FaInstagram } from 'react-icons/fa';

function Footer (){  
  return(
    <div className="footer-container" >
        <div className="logo-space-in-footer">
            <div>
                <Link to="Scroll-up" 
                className="scroll-up-link"
                spy={true} 
                smooth={true} 
                offset={50} 
                duration={500}>
                    <FaArrowAltCircleUp size={35} style={{ fill: 'black' }}  />
                </Link>
            </div>
            {/* <img className="logo" src={logo}/>  */}
        </div> 
        <div id="kontakt"> 
            <div className="footer-info">
                <div className="phone-number">
                    <p className="phone-header">Beställ en pizza</p>
                    <p>1234-000 00</p> 
                </div>
                <div className="contact">
                    <p className="contact-header" >Adress</p>
                    <p>Storgatan 1</p>
                    <p>123 45, VÄXJÖ</p>
                    <br/>
                    <p className="mail-header">Maila oss</p>
                    <p>pizzerian@pizzerian.se</p> 
                </div>  
                <div className="openingHours">
                    <p className="opening-header">Öppettider</p>
                    <p>Måndag-Torsdag: 11:00-20:00</p>
                    <p>Fredag: 11:00-21:00 </p>
                    <p>Lördag: 12:00-21:00</p>
                    <p>Söndag: 12:00-20:00</p>
                </div>
                <div className="social-media-icons">
                    <p className="visit-us">Besök oss</p>
                    <a className="facebook-icon" href="https://www.facebook.com">
                        <FaFacebook size={30}/>
                    </a> 
                    <a className="instagram-icon" href="http://instagram.com">
                        <FaInstagram size={30}/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Footer
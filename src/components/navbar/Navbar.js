import React from 'react';
import {NavLink} from 'react-router-dom';
import './_navbar.scss';
import { Link } from "react-scroll";


function Navbar (){

  return(
    <>
    <div id="Scroll-up"></div>
    <div className="navigation-container">
        <ul className='navigationBar-links'>
        
            <NavLink className="navbar-link" exact to="/home" > 
                <li className='links'>Startsida</li>
            </NavLink>  
            <NavLink className="navbar-link" exact to="/menu">
                <li className='links'>Meny</li>
            </NavLink>
            <NavLink className="navbar-link"  exact to="/reservation">
                <li className='links'>Boka</li>
            </NavLink>
            <NavLink className="navbar-link"  exact to="/aboutus">
                <li className='links'>Om oss</li>
            </NavLink>
            <Link to="kontakt" 
              className="scroll-link"
              spy={true} 
              smooth={true} 
              offset={50} 
              duration={500}>
                Kontakt
            </Link>
            {/* <NavLink className="navbar-link" exact to="/aboutus" > 
                <li className='links'>Kontakt</li>
            </NavLink>   */}
          </ul>
    </div>
    </>
  )
}
export default Navbar
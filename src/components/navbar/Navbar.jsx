import React from 'react';
import "./Navbar.scss";
import {Link} from "react-router-dom";
import logo from "../../resources/BAHO-logos_black.png";

function Navbar () {

        return (
            <div className="navbar">
                {/* <h1 className="logo">BAHO</h1> */}
                <img src={logo} alt="logo" className='logo'></img>

                <ul className="navbar-list">
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/signup">join Us</Link></li>
                </ul>
                
            </div>
        );
    }


export default Navbar;
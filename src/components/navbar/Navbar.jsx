import React from 'react';
import "./Navbar.scss";
import {Link} from "react-router-dom";

function Navbar () {

        return (
            <div className="navbar">
                <h1 className="logo">BAHO</h1>

                <ul className="navbar-list">
                    <li><Link to ="/home">Home</Link></li>
                    <li><Link to ="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/signup">join Us</Link></li>
                </ul>
                
            </div>
        );
    }


export default Navbar;
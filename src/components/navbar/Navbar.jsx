import React, { Component } from 'react';
import "./Navbar.scss";
import {Link} from "react-router-dom";

class Navbar extends Component {

    
    render() {
        return (
            <div className="navbar">
                <h1 className="logo">BAHO</h1>

                <ul className="navbar-list">
                    <li><Link to ="/home">Home</Link></li>
                    <li><Link to ="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><a className='sign-in' href ="null">Log IN</a></li>
                    <li><a className='sign-up' href ="null">join US</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
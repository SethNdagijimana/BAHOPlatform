import React, { Component } from 'react';
import "./Navbar.scss";

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <h1 className="logo">BAHO</h1>

                <ul className="navbar-list">
                    <li><a className='home' href ="null">Home</a></li>
                    <li><a  href ="About">About</a></li>
                    <li><a  href ="null">Contact</a></li>
                    <li><a className='sign-in' href ="null">SIGN IN</a></li>
                    <li><a className='sign-up' href ="null">SIGN UP</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;
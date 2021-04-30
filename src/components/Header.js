import React from 'react';
import logo from '../images/dream-team.png';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src ={logo} alt =""/>
            <nav>
                <a href="/Home">Home</a>
                <a href="/About">About</a>
                <a href="/Review">Review</a>
            </nav>
        </div>
    );
};

export default Header;
import React from 'react';
import logo from '../logo/logo-removebg-preview.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src= {logo} alt="" />
            <h3>Everyday Activities</h3>
        </nav>
    );
};

export default Navbar;
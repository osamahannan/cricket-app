import React from 'react'
import { Link } from "react-router-dom";
// import logopic from "../Assets/Annihilator_logo1.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/team">Our Team</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar

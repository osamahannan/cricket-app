import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <Link to="/" >Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/service">Services</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </nav>
    )
}

export default Navbar

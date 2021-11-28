import React from 'react'
import { Link } from "react-router-dom";
import logopic from "../Assets/Annihilators3.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/" className="osamahannan">
                    <img src={logopic} alt="Annihilators" />
                </Link>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/team">Our Team</Link></li>
                <li><Link to="/funds">Our Funds</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar

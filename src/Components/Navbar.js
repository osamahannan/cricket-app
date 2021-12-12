import React, { useState } from 'react'
import { Link } from "react-router-dom";
import logopic from "../backgrounds/tab-logo.svg";
import { useMediaQuery } from 'react-responsive'
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

    const isMobile = useMediaQuery({ query: "(max-width: 750px)" });
    const [showMenu, setShowMenu] = useState(false);
    const [showLink, setShowLink] = useState(1);

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/" className="annihilator" onClick={() => setShowLink(1)} >
                    <img src={logopic} alt="Annihilators" />
                    <h1>ANNIHILATORS</h1>
                </Link>
            </div>
            {isMobile ? (<ul>
                {showMenu ? <ImCross className="cross" onClick={() => setShowMenu(!showMenu)} /> : <GiHamburgerMenu className="hamburger" onClick={() => setShowMenu(!showMenu)} />} </ul>
            ) : ""}

            <ul className={showMenu ? "hidden active" : "hidden"}>
                <div className="navdiv">
                    <li>
                        <Link to="/" onClick={() => { setShowMenu(false); setShowLink(1); }} className={(showLink === 1) ? "noSelect active-link" : "noSelect"}> Home </Link>
                    </li>
                    <li>
                        <Link to="/team" onClick={() => { setShowMenu(false); setShowLink(2); }} className={(showLink === 2) ? "noSelect active-link" : "noSelect"}> Our Team </Link>
                    </li>
                    <li>
                        <Link to="/funds" onClick={() => { setShowMenu(false); setShowLink(3); }} className={(showLink === 3) ? "noSelect active-link" : "noSelect"}> Our Funds </Link>
                    </li>
                    <li onClick={() => { setShowMenu(false); scrollToBottom(); }} className="noSelect li-contact"> Contact
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar

import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Header = ({ showModal }) => {
    return (
        <div className={showModal ? "header active-blur" : "header"} >
            <div className="welcome">
                <div className="heading">
                    <h3>Welcome to Sports Villa &nbsp;</h3>
                    <h3>| HOW TO FIND US &nbsp;</h3>
                    <h3>| GIVE FEEDBACK</h3>
                </div>
                <div className="social-container">
                    <a href="https://github.com/osamahannan" target="_blank" rel="noreferrer" className="social"><FaGithub /></a>
                    <a href="https://twitter.com/Osamahannan1" target="_blank" rel="noreferrer" className="social"><FaTwitter /></a>
                    <a href="https://www.linkedin.com/in/osama-hannan-7337921a0/" target="_blank" rel="noreferrer" className="social"><FaLinkedin /></a>
                </div>
            </div>
            <div className="service-center-container">

                <div className="service-center">
                    <h1><span className="service">Cricket</span> <span className="center">Annihilators</span></h1>
                    <h2>Teamwork makes the dream work!</h2>
                </div>
                <div className="phone-mail">
                    <div className="phone">
                        <a href="tel:8181007105" cm_dontconvertlink><BsFillTelephoneFill className="telephone" /></a>
                        <a href="tel:8181007105" cm_dontconvertlink>8181007105</a>
                    </div>
                    <div className="email">
                        <MdEmail className="email-icon" />
                        <div className="gmail">
                            <h4>MAIL US</h4>
                            <span>annihilator@gmail.com</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header

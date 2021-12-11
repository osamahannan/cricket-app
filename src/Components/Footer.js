import React, { useEffect } from 'react'
import logo from "../backgrounds/Annihilators4.png";
import { VscHome } from "react-icons/vsc";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {

    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    }, []);

    return (
        <div className="footer" data-aos="fade-up">
            <div className="footer-container">
                <div className="team11" data-aos="fade-right">
                    <img src={logo} alt="" />
                    <p>Since 2021, we have been offering travel services of the highest quality, combining our energy and enthusiasm.</p>
                </div>
                <div className="footer-contact" data-aos="fade-up">
                    <div className="footer-heading">
                        <h1 className="cont">CONT</h1>
                        <h1>ACT US</h1>
                    </div>
                    <div className="footer-icons">
                        <VscHome className="homeicon" />
                        <span>Roshan Nagar, New Haider Ganj, Lucknow, India, 226003</span>
                    </div>
                    <div className="footer-icons">
                        <BsTelephone className="footericon" />
                        <span>8181007105</span>
                    </div>
                    <div className="footer-icons">
                        <HiOutlineMail className="footericon" />
                        <span>osamahannan7@gmail.com</span>
                    </div>
                </div>
                <div className="copyright" data-aos="fade-left">
                    <span>Annihilators &copy;. All Right Reserved</span>
                    <span>Build with React Js</span>
                    <div className="social-container">
                        <a href="https://github.com/osamahannan" target="_blank" rel="noreferrer" className="social"><FaGithub /></a>
                        <a href="https://twitter.com/Osamahannan1" target="_blank" rel="noreferrer" className="social"><FaTwitter /></a>
                        <a href="https://www.linkedin.com/in/osama-hannan-7337921a0/" target="_blank" rel="noreferrer" className="social"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

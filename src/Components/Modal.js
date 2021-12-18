import React, { useState } from 'react'
import { Players } from "./Players"
import Fade from 'react-reveal/Fade';

const Modal = ({ setShowModal, playerData }) => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        // <div className='main-modal'>
        <Fade up>
            <div id="about">
                <form className="about-form">

                    <div className="about-link">
                        <div className="image">
                            <div className="profile-info">
                                <img src={playerData.image} alt="profile pic" />
                            </div>
                        </div>
                        <div className="link-container">
                            <h4>WORK LINKS</h4>

                            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">Linked In</a>
                            <a href="https://github.com" target="_blank" rel="noreferrer">Github</a>
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
                        </div>
                    </div>

                    <div className="about-details">
                        <div className="rank">
                            <div className="rank-container">
                                <h3>{playerData.name}</h3>
                                <h4>{playerData.speciality}</h4>
                                <p>RANKING: <span>1/10</span></p>
                            </div>
                            <div onClick={() => setShowModal(false)}>
                                <button className="btn">Cancel</button>
                            </div>
                        </div>

                        <div className="timeline-container">
                            <nav className="timeline-navbar">
                                <ul>
                                    <li><label onClick={() => toggleTab(1)} className={toggleState === 1 ? "default default-active" : "default"}>About</label></li>
                                    <li><label onClick={() => toggleTab(2)} className={toggleState === 2 ? "timeline timeline-active" : "timeline"}>Timeline</label></li>
                                </ul>
                            </nav>

                            <div className={toggleState === 1 ? "first-slide active" : "hide"}>
                                <div className="detail-field">
                                    <label className="userid">User Id</label>
                                    <p className="profession">102364597</p>
                                </div>
                                <div className="detail-field">
                                    <label className="userid">Name</label>
                                    <p className="profession">{playerData.name}</p>
                                </div>
                                <div className="detail-field">
                                    <label className="userid">Email</label>
                                    <p className="profession">osamahannan7@gmail.com</p>
                                </div>
                                <div className="detail-field">
                                    <label className="userid">Phone</label>
                                    <p className="profession">8181007105</p>
                                </div>
                                <div className="detail-field">
                                    <label className="userid">Profession</label>
                                    <p className="profession">cricketer</p>
                                </div>
                            </div>

                            <div className={toggleState === 2 ? "second-slide active" : "hide"}>

                                <div className="detail-field">
                                    <label className="userid">Experience</label>
                                    <p className="profession">Expert</p>
                                </div>
                                <div className="detail-field">
                                    <label className="userid">Hourly Rate</label>
                                    <p className="profession">10$/hr</p>
                                </div>
                                <div className="detail-field">
                                    <label className="userid">Total Projects</label>
                                    <p className="profession">16</p>
                                </div>
                                <div className="detail-field">
                                    <label className="userid">English Level</label>
                                    <p className="profession">Expert</p>
                                </div>
                                <div className="detail-field">
                                    <label className="userid">Availability</label>
                                    <p className="profession">6 Months</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </Fade>
        // </div>
    )
}

export default Modal

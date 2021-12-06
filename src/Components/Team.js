import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import osamapic from "../Assets/osama.svg";
import minhajpic from "../Assets/minhaj.svg";
import faizpic from "../Assets/Faiz1.svg";
import rashidpic from "../Assets/Rashid.svg";
import intzarpic from "../Assets/Intzar.svg";
import zainpic from "../Assets/Zain.svg";
import irfanpic from "../Assets/Irfan1.svg";
import dummypic from "../Assets/profile.svg";

const Team = () => {

    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    }, []);

    return (
        <div className="team">
            <div className="team-intro" data-aos="fade-up">
                <h1>Our Team</h1>
            </div>
            <div className="player-container">
                <div className="card-container" data-aos="flip-right">
                    <div className="player-card">
                        <div className="profile">
                            <img src={osamapic} alt="Osama" />
                        </div>
                        <span className="player-card-name">Osama Hannan</span>
                    </div>
                </div>
                <div className="card-container" data-aos="flip-right">
                    <div className="player-card">
                        <div className="profile">
                            <img src={minhajpic} alt="Minhaj" />
                        </div>
                        <span className="player-card-name">Minhaj Ahmad Khan</span>
                    </div>
                </div>
                <div className="card-container" data-aos="flip-left">
                    <div className="player-card">
                        <div className="profile">
                            <img src={faizpic} alt="Faiz" />
                        </div>
                        <span className="player-card-name">Mohammad Faiz</span>
                    </div>
                </div>
                <div className="card-container" data-aos="flip-right">
                    <div className="player-card">
                        <div className="profile">
                            <img src={rashidpic} alt="Rashid" />
                        </div>
                        <span className="player-card-name">Rashid</span>
                    </div>
                </div>
                <div className="card-container" data-aos="flip-right">
                    <div className="player-card">
                        <div className="profile">
                            <img src={intzarpic} alt="Intzar" />
                        </div>
                        <span className="player-card-name">Intzar Khan</span>
                    </div>
                </div>
                <div className="card-container" data-aos="flip-right">
                    <div className="player-card">
                        <div className="profile">
                            <img src={zainpic} alt="Zain" />
                        </div>
                        <span className="player-card-name">Zain Zaman Khan</span>
                    </div>
                </div>
                <div className="card-container" data-aos="flip-right">
                    <div className="player-card">
                        <div className="profile">
                            <img src={dummypic} alt="dummypic" />
                        </div>
                        <span className="player-card-name">Shahbaz Ahmad Khan</span>
                    </div>
                </div>
                <div className="card-container" data-aos="flip-left">
                    <div className="player-card">
                        <div className="profile">
                            <img src={dummypic} alt="dummypic" />
                        </div>
                        <span className="player-card-name">Asad Raiyan</span>
                    </div>
                </div>
                <div className="card-container" data-aos="flip-right">
                    <div className="player-card">
                        <div className="profile">
                            <img src={irfanpic} alt="Irfan" />
                        </div>
                        <span className="player-card-name">Irfan Khan</span>
                    </div>
                </div>
                <div className="card-container" data-aos="flip-right">
                    <div className="player-card">
                        <div className="profile">
                            <img src={dummypic} alt="dummypic" />
                        </div>
                        <span className="player-card-name">Sheebu</span>
                    </div>
                </div>
                <div className="card-container" data-aos="flip-right">
                    <div className="player-card">
                        <div className="profile">
                            <img src={dummypic} alt="dummypic" />
                        </div>
                        <span className="player-card-name">Imran Khan</span>
                    </div>
                </div>
                <div className="card-container" data-aos="flip-right">
                    <div className="player-card">
                        <div className="profile">
                            <img src={dummypic} alt="dummypic" />
                        </div>
                        <span className="player-card-name">Shareef</span>
                    </div>
                </div>
                <div className="card-container" data-aos="flip-left">
                    <div className="player-card">
                        <div className="profile">
                            <img src={dummypic} alt="dummypic" />
                        </div>
                        <span className="player-card-name">Atif Shaikh</span>
                    </div>
                </div>
                <div className="card-container" data-aos="flip-right">
                    <div className="player-card">
                        <div className="profile">
                            <img src={dummypic} alt="dummypic" />
                        </div>
                        <span className="player-card-name">Sajid</span>
                    </div>
                </div>
                <div className="card-container" data-aos="flip-right">
                    <div className="player-card">
                        <div className="profile">
                            <img src={dummypic} alt="dummypic" />
                        </div>
                        <span className="player-card-name">Atif Shaikh</span>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Team
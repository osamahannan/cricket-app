import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import winlogo from "../Assets/cricketlogo.png";
import loselogo from "../Assets/teamlogo.png";

const Contact = () => {

    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    }, []);


    return (
        <div className="home">
            <div className="welcome-box" data-aos="fade-up">
                <div className="bat-ball">
                    <h1>Cricket is the most wonderful entertainment in the world</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptas quidem voluptate, facere, beatae dolor .</p>
                    <button className="btn">View More</button>

                </div>
            </div>
            <div className="parent">
                <div className="match-container">
                    <h1>Last Match Result</h1>
                    <div className="result">
                        <div className="us">
                            <time> May 11, 2021 </time>
                            <div className="score">
                                <div className="win">
                                    <img src={winlogo} alt="winlogo" />
                                    <div className="win-score">
                                        <h2>162/5</h2>
                                        <span>17 over</span>
                                    </div>
                                </div>
                                <div className="lose">
                                    <div className="lose-score">
                                        <h2>150/7</h2>
                                        <span>20 over</span>
                                    </div>
                                    <img src={loselogo} alt="winlogo" />
                                </div>
                            </div>
                            <span>Annihilators Won by 5 wickets</span>
                        </div>
                        <div className="opponent">
                            <time> May 10, 2021 </time>
                            <div className="score">
                                <div className="win">
                                    <img src={loselogo} alt="winlogo" />
                                </div>
                                <div className="lose"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
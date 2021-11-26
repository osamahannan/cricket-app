import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import winlogo from "../Assets/cricketlogo.png";
import loselogo from "../Assets/teamlogo.png";
import loselogo2 from "../Assets/teamlogo2.png";
import loselogo3 from "../Assets/teamlogo3.png";

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
            <div className="parent" data-aos="fade-up">
                <div className="match-container">
                    <h1>Last Match Result</h1>
                    <div className="result">
                        <div className="last" data-aos="fade-right">
                            <time> May 11, 2021 </time>
                            <div className="score">
                                <div className="win">
                                    <img src={winlogo} alt="winlogo" />
                                    <div className="win-score">
                                        <h2>80/1</h2>
                                        <span>6.1 over</span>
                                    </div>
                                </div>
                                <div className="lose">
                                    <div className="lose-score">
                                        <h2>77/5</h2>
                                        <span>8 over</span>
                                    </div>
                                    <img src={loselogo} alt="winlogo" />
                                </div>
                            </div>
                            <span>Annihilators Won by 9 wickets</span>
                        </div>
                        <div className="second-last" data-aos="fade-left">
                            <time> May 11, 2021 </time>
                            <div className="score">
                                <div className="lose">
                                    <img src={loselogo3} alt="winlogo" />
                                    <div className="lose-score">
                                        <h2>71/2</h2>
                                        <span>6 over</span>
                                    </div>
                                </div>
                                <div className="win">
                                    <div className="win-score">
                                        <h2>70/5</h2>
                                        <span>8 over</span>
                                    </div>
                                    <img src={loselogo2} alt="winlogo" />
                                </div>
                            </div>
                            <span>Annihilators Won by 8 wickets</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
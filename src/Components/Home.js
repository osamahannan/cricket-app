import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

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
            <div className="match-container">
                <h1>Last Match Result</h1>
                <div className="result">
                    <div className="us">
                        <h1>Annihilators</h1>
                    </div>
                    <div className="opponent">
                    <h1>Opponent</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
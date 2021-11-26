import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import winlogo from "../Assets/teamlogo3.png";
import loselogo from "../Assets/teamlogo2.png";
import cricketbg from "../Assets/cricketbg.jpg";

const Contact = () => {

    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    }, []);


    return (
        <div className="home">

            <div className="welcome-box" data-aos="fade-up">
                <div className="bat-ball">
                    <h1>Cricket is the most wonderful entertainment in the world</h1>
                    <p>The fans can make you famous.<br/>
                        A contract can make you rich.<br/>
                        The press can make you a superstar.<br/>
                        But only love can make you a player.</p>
                    <a href="https://www.sportsfeelgoodstories.com/cricket-slogans-sayings-and-mottos/" ><button className="btn">View More</button></a>

                </div>
            </div>

            <div className="parent" data-aos="fade-up">
                <div className="match-container">
                    <h1>Last Match Result</h1>
                    <div className="result">
                        <div className="last" data-aos="fade-right">
                            <time> Nov 24, 2021 </time>
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
                            <time> Nov 21, 2021 </time>
                            <div className="score">
                                <div className="lose">
                                    <img src={winlogo} alt="winlogo" />
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
                                    <img src={loselogo} alt="winlogo" />
                                </div>
                            </div>
                            <span>Annihilators Won by 8 wickets</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section">
                <div className="about-container" data-aos="fade-up">
                    <div className="image_section">
                        <img src={cricketbg} alt="stadium background" />
                    </div>
                    <div className="about">
                        <h1>About Us</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years.</p>
                        <div><button className="btn">READ MORE</button></div>
                    </div>
                </div>
            </div>

            <div className="testimonial">
                <h1>Testimonials From Our Players</h1>
                <div className="player-content">
                    <div className="player1">
                        Minhaj Ahmed Khan
                    </div>
                    <div className="player2">
                        Osama Hannan
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
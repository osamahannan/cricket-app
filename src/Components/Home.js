import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { FaQuoteLeft } from "react-icons/fa";
import loselogo from "../Assets/teamlogo1.png";
import winlogo from "../Assets/teamlogo2.png";
import loselogo2 from "../Assets/teamlogo3.png";
import cricketbg from "../Assets/cricketbg.jpg";
import team2 from "../Assets/team2.png";
import team3 from "../Assets/team3.png";
import team4 from "../Assets/team4.png";
import team5 from "../Assets/team5.png";
import team6 from "../Assets/team6.png";
import team7 from "../Assets/team7.png";

const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    }, []);


    return (
        <div className="home">

            <div className="welcome-box" data-aos="fade-up">
                <div className="bat-ball">
                    <h1>Cricket is the most wonderful entertainment in the world</h1>
                    <p>The fans can make you famous.<br />
                        A contract can make you rich.<br />
                        The press can make you a superstar.<br />
                        But only love can make you a player.</p>
                    <a href="https://www.sportsfeelgoodstories.com/cricket-slogans-sayings-and-mottos/" target="_blank" rel="noreferrer" ><button className="btn">View More</button></a>

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
                                    <img src={loselogo2} alt="winlogo" />
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

            <div className="testimonial" data-aos="fade-up">
                <h1>Testimonials From Our Players</h1>
                <div className="player-content">
                    <div className="player1" data-aos="fade-right">
                        <FaQuoteLeft className="quote" />
                        <p>Thank you for letting me be a part of such a fantastic team! Being a captain for this team is much more than just work, it’s an unforgettable experience that will stay with me for the rest of my life.</p>
                        <div className="player-name">
                            <h3>Minhaj Ahmad Khan &nbsp;</h3><span>/ Captain</span>
                        </div>
                    </div>
                    <div className="player2" data-aos="fade-left">
                        <FaQuoteLeft className="quote" />
                        <p>Thank you for letting me be a part of such a fantastic team! Being a vice-captain for this team is much more than just work, it’s an unforgettable experience that will stay with me for the rest of my life.</p>
                        <div className="player-name">
                            <h3>Osama Hannan &nbsp;</h3><span>/ Vice Captain</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="opponent-teams" data-aos="fade-up">
                <h1>Our Opponent Teams</h1>
                <div className="logo-section">
                    <div className="column" data-aos="flip-right">
                        <div className="logos" >
                            <img src={loselogo} alt="team_logo 1" />
                            <h2>The Tyrants</h2>
                        </div>
                    </div>
                    <div className="column" data-aos="flip-right">
                        <div className="logos">
                            <img src={team2} alt="team_logo 2" />
                            <h2>The Supernovas</h2>
                        </div>
                    </div>
                    <div className="column" data-aos="flip-left">
                        <div className="logos">
                            <img src={team3} alt="team_logo 3" />
                            <h2>The Go Getters</h2>
                        </div>
                    </div>
                    <div className="column" data-aos="flip-left">
                        <div className="logos" >
                            <img src={team4} alt="team_logo 4" />
                            <h2>Batting Divas</h2>
                        </div>
                    </div>
                    <div className="column" data-aos="flip-right">
                        <div className="logos">
                            <img src={team7} alt="team_logo 5" />
                            <h2>UP Stars</h2>
                        </div>
                    </div>
                    <div className="column" data-aos="flip-right">
                        <div className="logos">
                            <img src={team5} alt="team_logo 6" />
                            <h2>The Guardians</h2>
                        </div>
                    </div>
                    <div className="column" data-aos="flip-left">
                        <div className="logos">
                            <img src={loselogo2} alt="team_logo 7" />
                            <h2>The Avengers</h2>
                        </div>
                    </div>
                    <div className="column" data-aos="flip-left">
                        <div className="logos">
                            <img src={team6} alt="team_logo 8" />
                            <h2>The Outsiders</h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
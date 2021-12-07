import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { players } from "../Helper/players"

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

                {players.map((player) => {
                    return (
                        <div className="card-container" data-aos="flip-right" key={player.id}>
                            <div className="player-card">
                                <div className="profile">
                                    <img src={player.url} alt="Profile Pic" />
                                </div>
                                <span className="player-card-name">{player.name}</span>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div >

    )
}

export default Team
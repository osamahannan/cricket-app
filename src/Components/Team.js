import React from 'react'
// import Aos from "aos";
// import "aos/dist/aos.css";
import  {Players}  from "./Players"
import dummypic from "../backgrounds/profile.svg";

const Team = () => {

    // useEffect(() => {
    //     Aos.init({ duration: 1000, once: true })
    // }, []);

    return (
        <div className="team">
            <div className="team-intro">
                <h1>Our Team</h1>
            </div>
            <div className="player-container">

                {Players.map((player) => {
                    return (
                        <div className="card-container" key={player.id}>
                            <div className="player-card">
                                <div className="profile">
                                    <img src={dummypic} alt="Profile Pic" />
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
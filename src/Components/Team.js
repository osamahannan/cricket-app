import React from 'react'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import { Players } from "./Players"

const Team = () => {

    return (
        <div className="team">
            <Fade up><div className="team-intro">
                <h1>Our Team</h1>
            </div></Fade>
            <div className="player-container">
                <div className="player-container2">

                    {Players.map((player) => {
                        return (
                            <Flip right><div className="card-container" key={player.id}>
                                <div className="player-card">
                                    <div className="profile">
                                        <img src={player.url} alt="Profile Pic" />
                                    </div>
                                    <span className="player-card-name">{player.name}</span>
                                </div>
                            </div></Flip>

                        )
                    })}

                </div>

            </div>
        </div >

    )
}

export default Team
import React, { useState } from 'react'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import { Players } from "./Players"
import Modal from "./Modal";
import { GiTennisBall } from "react-icons/gi";
import bat from "../backgrounds/bat.png";
import batball from "../backgrounds/batball.png";

const Team = ({ showModal, setShowModal }) => {

    const [playerData, setPlayerData] = useState({});

    return (
        <>
            <div className={showModal ? "team active-blur" : "team"}>
                <Fade up><div className="team-intro">
                    <h1>Our Team</h1>
                </div></Fade>
                <div className="player-container">
                    <div className="player-container2">

                        {Players.map((player) => {
                            return (
                                <Flip right><div className="card-container" key={player.id} onClick={() => { setShowModal(!showModal); setPlayerData(player) }}>
                                    <div className="player-card">
                                        <div className="profile">
                                            <img src={player.image} alt="Profile Pic" />
                                        </div>
                                        {(player.speciality === 'Bowler') ? <GiTennisBall className='ball' /> : (player.speciality === 'Batsman' ? <img src={bat} alt="Batsman" className='bat' /> : <img src={batball} alt="All Rounder" className='batball' />)}
                                        <span className="player-card-name">{player.name}</span>
                                    </div>
                                </div></Flip>

                            )
                        })}

                    </div>

                </div>
            </div >

            {showModal && <Modal showModal={showModal} setShowModal={setShowModal} playerData={playerData} />}

        </>


    )
}

export default Team
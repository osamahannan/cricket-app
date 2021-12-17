import React from 'react'
import { Players } from "./Players"
import Fade from 'react-reveal/Fade';

const Modal = ({ setShowModal }) => {
    return (
        // <div className='main-modal'>
        <Fade up>
            <div className="modal-container">
                <div className="image">
                    <div className="profile-info">
                        <img src={Players[2].url} alt="Profile Pic" />
                    </div>
                </div>
                <div className="modal-info">
                    <h1>All information of players is being displayed here!</h1>
                </div>

                <div>
                    <button className='btn' onClick={() => setShowModal(false)}>CANCEL</button>
                </div>

            </div>
        </Fade>
        // </div>
    )
}

export default Modal

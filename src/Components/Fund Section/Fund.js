import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { GiCoinflip } from "react-icons/gi";
import { BsCalendar2Date } from "react-icons/bs";
import { MdSportsCricket } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { IoTennisball } from "react-icons/io5";
import { IoTennisballOutline } from "react-icons/io5";
import { BiRupee } from "react-icons/bi";
import { GrScorecard } from "react-icons/gr";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import signpic from "./signup.png";
import Fade from 'react-reveal/Fade';
import "./fund.css"

const Fund = ({ setShowModal }) => {

    useEffect(() => {
        setShowModal(false);
    }, [setShowModal])

    // const navigate = useNavigate();

    const [user, setUser] = useState({
        team: "", date: "", toss: "", result: "", cost: "", opponent_score: "", opponent_over: "", annihilators_score: "", annihilators_over: ""
    });

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }

    // const PostData = async (e) => {
    //     e.preventDefault();

    //     const { name, email, phone, work, password, cpassword } = user;

    //     const res = await fetch("/register", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             name, email, phone, work, password, cpassword
    //         })
    //     });

    //     const data = await res.json();
    //     if (res.status === 409 || !data) {
    //         toast.error("Email already exists", {
    //             position:"top-center"
    //         });
    //     } 
    //     else if(res.status === 422 || !data) {
    //         toast.error("Please fill all the details", {
    //             position:"top-center"
    //         });
    //     } else {
    //         toast.success("Registration Successful", {
    //             position:"top-center",
    //             autoClose: 2000
    //         });
    //         setTimeout(() => {
    //             history.push('/login');
    //         }, 2000);
    //     }
    // }

    return (
        <>
            <Fade up>
                <div className="register">

                    <div className="register-container">
                        <h1>Score Card</h1>

                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="team">
                                    <AiOutlineTeam />
                                </label>
                                <input type="text" name="team" id="team" autoComplete="off"
                                    value={user.team}
                                    onChange={handleInputs}
                                    placeholder="Team Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="date">
                                    <BsCalendar2Date />
                                </label>
                                <input type="date" name="date" id="date" autoComplete="off"
                                    value={user.date}
                                    onChange={handleInputs}
                                    placeholder="Date" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="toss">
                                    <GiCoinflip />
                                </label>
                                <FormControl className='dropown-label'>
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={user.toss}
                                        label="Toss Result"
                                        onChange={handleInputs}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="form-group">
                                <label htmlFor="result">
                                    <MdSportsCricket />
                                </label>
                                <input type="text" name="result" id="result" autoComplete="off"
                                    value={user.result}
                                    onChange={handleInputs}
                                    placeholder="Match Result" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cost">
                                    <BiRupee />
                                </label>
                                <input type="number" name="cost" id="cost" autoComplete="off"
                                    value={user.cost}
                                    onChange={handleInputs}
                                    placeholder="Match Cost" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="opponent_score">
                                    <GrScorecard />
                                </label>
                                <input type="text" name="opponent_score" id="opponent_score" autoComplete="off"
                                    value={user.opponent_score}
                                    onChange={handleInputs}
                                    placeholder="Opponent's Score" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="opponent_over">
                                    <IoTennisball />
                                </label>
                                <input type="number" name="opponent_over" id="opponent_over" autoComplete="off"
                                    value={user.opponent_over}
                                    onChange={handleInputs}
                                    placeholder="Opponent's Over" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="annihilators_score">
                                    <GrScorecard />
                                </label>
                                <input type="text" name="annihilators_score" id="annihilators_score" autoComplete="off"
                                    value={user.annihilators_score}
                                    onChange={handleInputs}
                                    placeholder="Annihilator's Score" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="annihilators_over">
                                    <IoTennisballOutline />
                                </label>
                                <input type="number" name="annihilators_over" id="annihilators_over" autoComplete="off"
                                    value={user.annihilators_over}
                                    onChange={handleInputs}
                                    placeholder="Annihilator's over" />
                            </div>

                        </form>

                        <div className="button">
                            <button type="submit" name="signup" id="signup" className="btn" value="register" >Submit</button>
                        </div>

                    </div>

                    <Fade right>
                        <div className="signup-image">
                            <figure>
                                <img src={signpic} alt="signup-pic" className="signimage" />
                            </figure>
                            <div className="next-link">
                                <div>already a user ?</div>
                                <Link to="/" className="signup-link">Log In</Link>
                            </div>
                        </div>
                    </Fade>
                </div>
            </Fade>

            {/* <ToastContainer /> */}
        </>

    )
}

export default Fund
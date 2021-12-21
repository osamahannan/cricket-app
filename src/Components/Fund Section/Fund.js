import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { GiCoinflip } from "react-icons/gi";
import { BsCalendar2Date } from "react-icons/bs";
import { MdSportsCricket } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { IoTennisball } from "react-icons/io5";
import { IoTennisballOutline } from "react-icons/io5";
import { BiRupee } from "react-icons/bi";
import { GrScorecard } from "react-icons/gr";
import signpic from "./signup.png";
import Fade from 'react-reveal/Fade';
import "./fund.css"

const Fund = () => {

    // const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    });

    let name, value;
    const handleInputs = (e) => {
        // console.log(e);
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

                    <Fade left>
                        <div className="register-container">
                            <h1>Sign Up</h1>

                            <form method="POST" className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <AiOutlineTeam />
                                    </label>
                                    <input type="text" name="name" id="name" autoComplete="off"
                                        value={user.name}
                                        onChange={handleInputs}
                                        placeholder="Team Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <BsCalendar2Date />
                                    </label>
                                    <input type="date" name="name" id="name" autoComplete="off"
                                        value={user.name}
                                        onChange={handleInputs}
                                        placeholder="Date" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="work">
                                        <GiCoinflip />
                                    </label>
                                    <input type="text" name="work" id="work" autoComplete="off"
                                        value={user.work}
                                        onChange={handleInputs}
                                        placeholder="Toss Result" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <MdSportsCricket />
                                    </label>
                                    <input type="email" name="email" id="email" autoComplete="off"
                                        value={user.email}
                                        onChange={handleInputs}
                                        placeholder="Match Result" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">
                                        <BiRupee />
                                    </label>
                                    <input type="number" name="phone" id="phone" autoComplete="off"
                                        value={user.phone}
                                        onChange={handleInputs}
                                        placeholder="Match Cost" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">
                                        <GrScorecard />
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                        value={user.password}
                                        onChange={handleInputs}
                                        placeholder="Opponent's Score" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">
                                        <IoTennisball />
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                        value={user.password}
                                        onChange={handleInputs}
                                        placeholder="Opponent's Over" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                        <GrScorecard />
                                    </label>
                                    <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                                        value={user.cpassword}
                                        onChange={handleInputs}
                                        placeholder="Annihilator's Score" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                        <IoTennisballOutline />
                                    </label>
                                    <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                                        value={user.cpassword}
                                        onChange={handleInputs}
                                        placeholder="Annihilator's over" />
                                </div>

                            </form>

                            <div className="button">
                                <button type="submit" name="signup" id="signup" className="btn" value="register" >Register</button>
                            </div>

                        </div>
                    </Fade>
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
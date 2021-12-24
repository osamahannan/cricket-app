import React, { useState, useEffect } from 'react'
import { GiCoinflip } from "react-icons/gi";
import { BsCalendar2Date } from "react-icons/bs";
import { MdSportsCricket } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { IoTennisball } from "react-icons/io5";
import { IoTennisballOutline } from "react-icons/io5";
import { BiRupee } from "react-icons/bi";
import { GrScorecard } from "react-icons/gr";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import signpic from "./signup.png";
import Fade from 'react-reveal/Fade';
import "./fund.css"

const useStyles = makeStyles({
    root: {

        "min-width": 200,
        "& .MuiOutlinedInput-input": {
            display: "flex",
            alignItems: "center",
            color: "black",
            border: "unset",
            padding: "0px",
            height: "40px",
            paddingLeft: "10px",
            fontSize: "0.9rem"
        },
        "& .MuiInputLabel-root": {
            color: "grey",
            margin: "-10px 0 0 -8px",
            fontSize: "0.9rem"
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: "unset",
            borderRadius: "unset",
        }

    }
});

const Fund = ({ setShowModal }) => {

    const [scoreCard, setScoreCard] = useState(false);
    const [showMom, setShowMom] = useState(false);

    const classes = useStyles();

    // const theme = useTheme();

    // const styles = theme => ({
    //     select: {
    //         '&:before': {
    //             borderColor: "red",
    //         },
    //         '&:after': {
    //             borderColor: "black",
    //         }
    //     },
    //     icon: {
    //         fill: "yellow",
    //     },
    // });

    useEffect(() => {
        setShowModal(false);
    }, [setShowModal])

    // const navigate = useNavigate();

    const [user, setUser] = useState({
        teamName: "", date: "", tossResult: "", matchResult: "", matchCost: "", opponentScore: "", opponentOver: "", annihilatorScore: "", annihilatorOver: ""
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

            {(!scoreCard && !showMom) && (
                <div className="fund">
                    <h1>Our fund: 3500</h1>
                    <div className='button-section'>
                        <button className="btn edit-score" onClick={() => setScoreCard(!scoreCard)}>Edit Score</button>
                        <button className="btn edit-mom" onClick={() => setShowMom(!showMom)}>Edit Mom</button>
                    </div>
                </div>
            )}

            {scoreCard && (<Fade up>
                <div className="register">

                    <div className="register-container">
                        <h1>Score Card</h1>

                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="teamName">
                                    <AiOutlineTeam />
                                </label>
                                <input type="text" name="teamName" id="teamName" autoComplete="off"
                                    value={user.teamName}
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
                                <label htmlFor="tossResult">
                                    <GiCoinflip />
                                </label>
                                <TextField
                                    className={classes.root}
                                    value={user.tossResult}
                                    onChange={handleInputs}
                                    variant="outlined"
                                    label="Toss Result"
                                    name="tossResult"
                                    select
                                >
                                    <MenuItem value="Win">Win</MenuItem>
                                    <MenuItem value="Lose">Lose</MenuItem>
                                </TextField>
                            </div>
                            <div className="form-group">
                                <label htmlFor="matchResult">
                                    <MdSportsCricket />
                                </label>
                                <TextField
                                    className={classes.root}
                                    value={user.matchResult}
                                    onChange={handleInputs}
                                    variant="outlined"
                                    label="Match Result"
                                    name="matchResult"
                                    select
                                >
                                    <MenuItem value="Win">Win</MenuItem>
                                    <MenuItem value="Lose">Lose</MenuItem>
                                </TextField>
                            </div>
                            <div className="form-group">
                                <label htmlFor="matchCost">
                                    <BiRupee />
                                </label>
                                <input type="number" name="matchCost" id="matchCost" autoComplete="off"
                                    value={user.matchCost}
                                    onChange={handleInputs}
                                    placeholder="Match Cost" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="opponentScore">
                                    <GrScorecard />
                                </label>
                                <input type="text" name="opponentScore" id="opponentScore" autoComplete="off"
                                    value={user.opponentScore}
                                    onChange={handleInputs}
                                    placeholder="Opponent's Score" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="opponentOver">
                                    <IoTennisball />
                                </label>
                                <input type="number" name="opponentOver" id="opponentOver" autoComplete="off"
                                    value={user.opponentOver}
                                    onChange={handleInputs}
                                    placeholder="Opponent's Over" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="annihilatorScore">
                                    <GrScorecard />
                                </label>
                                <input type="text" name="annihilatorScore" id="annihilatorScore" autoComplete="off"
                                    value={user.annihilatorScore}
                                    onChange={handleInputs}
                                    placeholder="Annihilator's Score" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="annihilatorOver">
                                    <IoTennisballOutline />
                                </label>
                                <input type="number" name="annihilatorOver" id="annihilatorOver" autoComplete="off"
                                    value={user.annihilatorOver}
                                    onChange={handleInputs}
                                    placeholder="Annihilator's over" />
                            </div>

                        </form>

                        <div className="button">
                            <button type="submit" name="signup" id="signup" className="btn" value="submit" >Submit</button>
                            <button className="btn cancel" onClick={() => setScoreCard(!scoreCard)}>Cancel</button>
                        </div>

                    </div>

                    <Fade right>
                        <div className="signup-image">
                            <figure>
                                <img src={signpic} alt="signup-pic" className="signimage" />
                            </figure>
                            {/* <div className="Cancel-edit" onClick={() => setScoreCard(!scoreCard)}>
                                <div className="btn">Cancel</div>
                            </div> */}
                        </div>
                    </Fade>
                </div>
            </Fade>)}

            {showMom && (

                <div className="mom">
                    <h1>Edit section for Man of the Match</h1>
                    <div className="button-section">
                        <button className='btn'>Submit</button>
                        <button className="btn cancel" onClick={() => setShowMom(!showMom)}>Cancel</button>
                    </div>
                </div>

            )}

            {/* <ToastContainer /> */}
        </>

    )
}

export default Fund
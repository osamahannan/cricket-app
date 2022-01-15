import React, { useState, useEffect } from 'react'
import { Players } from "../Players";
import { GiCoinflip } from "react-icons/gi";
import { BsCalendar2Date } from "react-icons/bs";
import { MdSportsCricket } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { IoTennisball } from "react-icons/io5";
import { IoTennisballOutline } from "react-icons/io5";
import { BiRupee } from "react-icons/bi";
import { GrScorecard } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { MdOutlineSportsCricket } from "react-icons/md";
import { FaDiceSix } from "react-icons/fa";
import { FaDiceFour } from "react-icons/fa";
import { GiCannonBall } from "react-icons/gi";
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

    useEffect(() => {
        setShowModal(false);
    }, [setShowModal])

    // const navigate = useNavigate();

    const [user, setUser] = useState({
        teamName: "", date: "", tossResult: "", matchResult: "", matchCost: "", opponentScore: "", opponentOver: "", annihilatorScore: "", annihilatorOver: "", playerName: "", category: "", runScored: "", ballPlayed: "", sixes: "", fours: "", overBowled: "", runGiven: "", wicketTaken: "",
    });

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }

    const PostData = async (e) => {
        e.preventDefault();

        const { teamName, date, tossResult, matchResult, matchCost, opponentScore, opponentOver, annihilatorScore, annihilatorOver, playerName, category, runScored, ballPlayed, sixes, fours, overBowled, runGiven, wicketTaken } = user;

        const res = await fetch("https://cricket-annihilators.herokuapp.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                teamName, date, tossResult, matchResult, matchCost, opponentScore, opponentOver, annihilatorScore, annihilatorOver, playerName, category, runScored, ballPlayed, sixes, fours, overBowled, runGiven, wicketTaken
            })
        });

        const data = await res.json();
        if (res.status === 409 || !data) {
            // toast.error("Email already exists", {
            //     position: "top-center"
            // });
            console.log("error")
        }
        else if (res.status === 422 || !data) {
            // toast.error("Please fill all the details", {
            //     position: "top-center"
            // });
            console.log("error")
        } else {
            // toast.success("Registration Successful", {
            //     position: "top-center",
            //     autoClose: 2000
            // });
            console.log("detail submitted successfully");
            // setTimeout(() => {
            //     history.push('/login');
            // }, 2000);
        }
    }

    return (
        <>

            {(!scoreCard && !showMom) && (
                <div className="fund">
                    <h1>Our fund: 3945</h1>
                    <div className='button-section'>
                        <button className="btn edit-score" onClick={() => setScoreCard(!scoreCard)}>Update Score</button>
                        <button className="btn edit-mom" onClick={() => setShowMom(!showMom)}>Update Mom</button>
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
                            <button type="submit" name="signup" id="signup" className="btn" value="submit" onClick={PostData}>Submit</button>
                            <button className="btn cancel" onClick={() => setScoreCard(!scoreCard)}>Cancel</button>
                        </div>

                    </div>

                    <Fade right>
                        <div className="signup-image">
                            <figure>
                                <img src={signpic} alt="signup-pic" className="signimage" />
                            </figure>
                        </div>
                    </Fade>
                </div>
            </Fade>)}

            {showMom && (

                <Fade up>
                    <div className="register" id="mom">

                        <div className="register-container" id='mom-container'>
                            <h1>MOM Card</h1>

                            <form method="POST" className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="playerName">
                                        <IoPersonOutline />
                                    </label>
                                    <TextField
                                        className={classes.root}
                                        value={user.playerName}
                                        onChange={handleInputs}
                                        variant="outlined"
                                        label="Player Name"
                                        name="playerName"
                                        select
                                    >

                                        {Players.map((player) => {
                                            return (
                                                <MenuItem value={player.name}>{player.name}</MenuItem>
                                            )
                                        })}
                                    </TextField>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="category">
                                        <MdOutlineCategory />
                                    </label>
                                    <TextField
                                        className={classes.root}
                                        value={user.category}
                                        onChange={handleInputs}
                                        variant="outlined"
                                        label="Category"
                                        name="category"
                                        select
                                    >
                                        <MenuItem value="Batting">Batting</MenuItem>
                                        <MenuItem value="Bowling">Bowling</MenuItem>
                                    </TextField>
                                </div>

                                {(user.category === "Batting") && (
                                    <>
                                        <div className="form-group">
                                            <label htmlFor="runScored">
                                                <MdOutlineSportsCricket />
                                            </label>
                                            <input type="number" name="runScored" id="runScored" autoComplete="off"
                                                value={user.runScored}
                                                onChange={handleInputs}
                                                placeholder="Run Scored" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="ballPlayed">
                                                <IoTennisballOutline />
                                            </label>
                                            <input type="number" name="ballPlayed" id="ballPlayed" autoComplete="off"
                                                value={user.ballPlayed}
                                                onChange={handleInputs}
                                                placeholder="Balls Played" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="sixes">
                                                <FaDiceSix />
                                            </label>
                                            <input type="number" name="sixes" id="sixes" autoComplete="off"
                                                value={user.sixes}
                                                onChange={handleInputs}
                                                placeholder="Sixes" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="fours">
                                                <FaDiceFour />
                                            </label>
                                            <input type="number" name="fours" id="fours" autoComplete="off"
                                                value={user.fours}
                                                onChange={handleInputs}
                                                placeholder="Fours" />
                                        </div>
                                    </>
                                )}

                                {(user.category === "Bowling") && (
                                    <>
                                        <div className="form-group">
                                            <label htmlFor="overBowled">
                                                <IoTennisball />
                                            </label>
                                            <input type="number" name="overBowled" id="overBowled" autoComplete="off"
                                                value={user.overBowled}
                                                onChange={handleInputs}
                                                placeholder="Over" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="runGiven">
                                                <GrScorecard />
                                            </label>
                                            <input type="number" name="runGiven" id="runGiven" autoComplete="off"
                                                value={user.runGiven}
                                                onChange={handleInputs}
                                                placeholder="Run" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="wicketTaken">
                                                <GiCannonBall />
                                            </label>
                                            <input type="number" name="wicketTaken" id="wicketTaken" autoComplete="off"
                                                value={user.wicketTaken}
                                                onChange={handleInputs}
                                                placeholder="Wicket" />
                                        </div>

                                    </>
                                )}

                            </form>

                            <div className="button">
                                <button type="submit" name="signup" id="signup" className="btn" value="submit" >Submit</button>
                                <button className="btn cancel" onClick={() => setShowMom(!showMom)}>Cancel</button>
                            </div>

                        </div>

                    </div>
                </Fade>

            )}

            {/* <ToastContainer /> */}
        </>

    )
}

export default Fund
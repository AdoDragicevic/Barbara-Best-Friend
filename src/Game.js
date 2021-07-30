import React from "react";
import { Link } from "react-router-dom";
import Candidate from "./Candidate";
import candidates from "./candidates";
import "./Game.css";

function Game() {
    return(
        <div className="Game">
            <h1 className="Game__title">Bárbara's best friend</h1>
            <h6 className="Game__subtitle">Give 20 points to pick as BBF or -20 to forget</h6>
            <div className="Game__container">
                {candidates.map( c => <Candidate key={c.name} name={c.name} url={c.url.lg} /> )}
            </div>
            <div className="Game__vs"> VS. </div>
            <div className="Game__btns">
                <Link className="Game__btn Game__btn--room" to="/room">The Room <i className="fas fa-quote-right"></i> </Link>
                <Link className="Game__btn Game__btn--why" to="/why">Don't click! <i className="far fa-times-circle"></i> </Link>
            </div>
        </div>
    );
};

export default Game;
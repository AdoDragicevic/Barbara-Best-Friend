import React from "react";
import { Link } from "react-router-dom";
import Candidate from "./Candidate";
import "./Game.css";

const candidates = ["Ado", "Oriana"];

function Game() {
    return(
        <div className="Game">
            <h1 className="Game__title">Bárbara's best friend</h1>
            <div className="Game__container">
                {candidates.map( c => <Candidate key={c} name={c} url={`imgs/${c}.jpg`} /> )}
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
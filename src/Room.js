import React from "react";
import { Link } from "react-router-dom";
import theRoomQuotes from "./theRoomQuotes";
import "./Room.css";



function Room() {
    const randQuote = theRoomQuotes[Math.floor(Math.random() * theRoomQuotes.length)];
    return (
        <main className="Room">
            <div className="Room__bg-img"></div>
            <div className="Room__content">
                <h1 className="Room__title"> <em> {`"${randQuote}"`} </em> </h1>
                <div className="Room__btns">
                    <Link className="Room__btn" to="/">Return <i className="far fa-arrow-alt-circle-left"></i></Link>
                    <Link className="Room__btn Room__btn--more" to="/room">More <i className="fas fa-spinner"></i></Link>
                </div>
            </div>
        </main>
    )
};

export default Room;
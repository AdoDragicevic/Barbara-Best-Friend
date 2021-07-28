import React from "react";
import { Link } from "react-router-dom";
import ProfileBox from "./ProfileBox";
import candidates from "./candidates";
import "./About.css";


function About() {
    return (
        <div className="About">
            <ProfileBox candidates={candidates} />
            <div className="About__btns">
                <Link className="About__btn" to="/"> 
                    Return 
                    <i className="far fa-arrow-alt-circle-left"></i>
                </Link>
            </div>
        </div>
    );
};

export default About;
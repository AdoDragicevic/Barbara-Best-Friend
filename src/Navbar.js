import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <NavLink exact activeClassName="Navbar--select" to="/"> 
                    <i className="far fa-star"></i> 
                    Game
                </NavLink>
                <NavLink exact activeClassName="Navbar--select" to="/about">
                    <i className="far fa-user"></i>
                    About
                </NavLink>
            </div>
        );
    };
};

export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import camLogo from "../../assets/cam-logo.svg";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={camLogo} alt="Logo" className="nav-logo" />
                </Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Films</Link></li>
                <li><span>Séries</span></li>
                <li><span>Populaires</span></li>
            </ul>
        </nav>
    );
}

export default NavBar;

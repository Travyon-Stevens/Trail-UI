import React from "react";
import "./Navbar.css";
import TrailLogo2 from "../../assets/TrailLogo2.jpg";

function Navbar() {
    return(
        <nav className="nav">
          <img className="navbar-logo" src={TrailLogo2} alt="Trail logo"/>
          <button className="navbar-signin">Sign In</button>
          <button>Sign Up</button>
        </nav>
    );
}

export default Navbar
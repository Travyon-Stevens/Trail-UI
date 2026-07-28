import React from "react";
import "./Navbar.css";
import TrailLogo2 from "../../assets/TrailLogo2.jpg";

function Navbar() {
    return(
        <nav className="navbar">
          <img src={TrailLogo2}/>
          <button>Sign In</button>
          <button>Sign Up</button>
        </nav>
    );
}

export default Navbar
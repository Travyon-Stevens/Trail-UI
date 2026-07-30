import React from "react";
import "./HeroText.css";

function HeroText(){
    return (
        <div className="hero-text"> 
            <h1>
                The Financial Path 
                <br/>
                To Your Future
            </h1> 

            <p>
                Take control of your finances with a powerful budgeting tool designed
                designed to help you build better financial habits.
            </p>

            <button>
                Get Started
            </button>   
        </div>
    )
}

export default HeroText;
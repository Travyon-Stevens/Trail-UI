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
                Simple budgeting. Purpose driven.
                <br/>
                <div style={{ fontWeight: 300, marginTop:'1px' }}>
                    Trail assists you in keeping your finances well organized while providing you
                    a simple way to budget—giving you a peace of mind while ensuring you stay purpose driven.
                </div> 
            </p>

            

            <button>
                Get Started
            </button>   
        </div>
    )
}

export default HeroText;
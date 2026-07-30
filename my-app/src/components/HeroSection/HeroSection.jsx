import React from "react";
import "./HeroSection.css";
import HeroText from "../HeroText/HeroText";

function HeroSection() {
    
    return (
        <section className="hero">
            
            <div className="hero-left">
                <HeroText/>
            </div>
            
            <div className="hero-right">
                Budget Preview
            </div>
            
        </section>
    );

}

export default HeroSection;

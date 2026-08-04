import React from "react";
import "./HeroSection.css";
import HeroText from "../HeroText/HeroText";
import BudgetPreview from "../BudgetPreview/BudgetPreview";

function HeroSection() {
    
    return (
        <section className="hero">
            
            <div className="hero-left">
                <HeroText/>
            </div>
            
            <div className="hero-right">
                <BudgetPreview/>
            </div>
            
        </section>
    );

}

export default HeroSection;

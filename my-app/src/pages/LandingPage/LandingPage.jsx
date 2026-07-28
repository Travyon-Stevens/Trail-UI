import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection"
import Footer from "../../components/Footer/Footer"

function LandingPage() {
    return (
        <>
            <Navbar/>

            <main>
               <HeroSection/>
            </main>

            <Footer/>
        </>
    )
}

export default LandingPage;
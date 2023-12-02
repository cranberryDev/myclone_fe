import React from "react"
import "./home.css"
import BrainLogo  from "../../assets/back.svg"

function HomeComponent() {
    return (
        <>
            <div className="background">
                <img src={BrainLogo} alt="Brain Logo" />
            </div>
        </>
    )
}

export default HomeComponent
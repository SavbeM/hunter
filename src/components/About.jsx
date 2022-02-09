import React from "react";
import {WelcomeCarousel} from "./Carousel";
import "../styles/About.css"


export const About = (props) => {
    return (
        <div>
            <WelcomeCarousel/>
            <div className="welcome">
                <h1 className="welcomeTitle">WELCOME</h1>
                <div className="welcomeText">We believe the most efficient way to distribute a service is to start with
                    an API. The main requests on Hunter can be made using simple API calls
                    integrated wherever you need. Join thousands
                    of growing businesses that have already integrated Hunter’s API to find and verify professional
                    email addresses.
                </div>
            </div>
        </div>
    )
}
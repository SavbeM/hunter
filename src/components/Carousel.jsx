import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import search from "../assets/search.png"
import email from  "../assets/email.png"
import autor from "../assets/autor.png"


export const WelcomeCarousel  = (props) => {
    const sliderContent = [{photo: search, text: '', title: ""},{photo: email, text: '', title: ""},{photo: autor, text: '', title: ""}]
    return(
        <Carousel>
            { sliderContent.map(e=>
            <Carousel.Item style={{height: "800px"}}>
                <img
                    className="d-block w-100 h-800px"
                    src={e.photo}
                    alt="First slide"
                />
                <Carousel.Caption style={{paddingBottom: "80px", backgroundColor: "rgb(0,0,0,0.7)"}}>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>)}
        </Carousel>
    )
}
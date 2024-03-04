import React from "react";
import "./introduction.css";
import { PiArrowSquareRightFill } from "react-icons/pi";


function IntroductionSection(){
    return(
        <section className="introduction">
            <h1 className="welcome">
                Welcome to the dynamic form
            </h1>
            <h1>
                that you will do everything that you want
            </h1>
            <p>Hi! I'm Edsson Vega, I'm 25 years old and I like to make programms and develop with react.</p>
            <div className="buttons">
                <button className="get">
                    Get in touch
                </button>
                <button className="start">
                    Start to create<PiArrowSquareRightFill className="arrow"/>
                </button>
            </div>
        </section>
    )
}

export default IntroductionSection
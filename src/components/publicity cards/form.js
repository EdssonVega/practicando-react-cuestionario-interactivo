import React from "react";
import { useState } from "react";
import FirstStepSection from "./firstQuestion/firstStep";
import "./form.css";


function FormSection(){

    const [step,nextStep]= useState(1)

    const next = () => {
        return(
            nextStep(step+1)
        )
    }

    const previous = () => {
        return(
            nextStep(step-1)
        )
    }

    return(
        <section>
            <form className="form">
                <h1>
                 Fill the form
                </h1>
                <p>step {step} of 3</p>
                <FirstStepSection />
                <div className="stepButtons">
                    {step>1 && step<4 && (
                        <div onClick={previous} className="previous">
                            Previous step
                        </div>  
                    )}
                    {step>0 && step<3 &&( 
                        <div onClick={next} className="next">
                            Next step
                        </div>
                    )}
                </div>
            </form>
        </section>
    )
}

export default FormSection
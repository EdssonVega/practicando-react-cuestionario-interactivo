import React from "react";
import "./thirdStep.css";
import golden from "./images/golden.jpg"
import husky from "./images/husky.jpg"
import doberman from "./images/doberman.jpg"
import { useState } from "react";
import Options3 from "./options3";

const dogs=[
    {
        Id:1,
        tittle:"golden",
        Image:golden
    },
    {
        Id:2,
        tittle:"husky",
        Image:husky
    },
    {
        Id:3,
        tittle:"doberman",
        Image:doberman
    }
]

function ThirdStepSection(){
    return(
        <div className="thirdStep">
            <h1>
                Choose your favorite dog
            </h1>
            <h2>
                Select your favorite dog then click on the button "See results"
            </h2>
            <div className="contenedorOpciones3">
                {dogs.map((dog,index)=>{
                    <Options3 image={dogs.Image} tittle={dogs.tittle} key={index}/>
                })}
            </div>
        </div>
    )
}

export default ThirdStepSection
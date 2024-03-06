import React from "react";
import "./firstStep.css";
import Tm from "./images/twisted-metal-4.jpg"
import Sh from "./images/silent-hill-1.jpg"
import Cb from "./images/crash-bandicoot.jpg"
import Options from "./options";

const videogames =[
    {
        id:1,
        tittle:"twisted metal 4",
        image:Tm
    },
    {
        id:2,
        tittle:"silent hill",
        image:Sh 
    },
    {
        id:3,
        tittle:"crash bandicoot",
        image:Cb
    }
]

function FirstStepSection(){
    return(
        <div className="firstStep">
            <h1>
                Choose your favorite videogame
            </h1>
            <h2>
                Select your favorite videogame then click on the button "next step"
            </h2>
            <div className="contenedorOpciones1">
                {videogames.map((videogame,index)=>(
                    <Options videogame={videogame} key={index} />
                ))}
            </div>
        </div>
    )
}

export default FirstStepSection
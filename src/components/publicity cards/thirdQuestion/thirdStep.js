import React from "react";
import "./thirdStep.css";
import golden from "./images/golden.jpg"
import husky from "./images/husky.jpg"
import doberman from "./images/doberman.jpg"
import { useState } from "react";
import Options3 from "./options3";

const dogs=[
    {
        id:1,
        tittle:"golden",
        image:golden
    },
    {
        id:2,
        tittle:"husky",
        image:husky
    },
    {
        id:3,
        tittle:"doberman",
        image:doberman
    }
]

function ThirdStepSection({finish}){

    const [selectedCard, setselectedCard] = useState (null)

    const clickCard = (dog) => {
        setselectedCard(dog.id)
        localStorage.setItem("tittle",dog.tittle)
        localStorage.setItem("picture",dog.image)
        finish()
    }

    return(
        <div className="thirdStep">
            <h1>
                Choose your favorite dog
            </h1>
            <h2>
                Select your favorite dog then click on the button "See results"
            </h2>
            <div className="contenedorOpciones3">
                {dogs.map((dog,index)=>(
                    <Options3 dog={dog} key={index} clickCard={clickCard} selectedCard={selectedCard}/>
                ))}
            </div>
        </div>
    )
}

export default ThirdStepSection
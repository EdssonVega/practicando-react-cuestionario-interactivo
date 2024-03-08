import React from "react";
import "./secondStep.css"
import Options2 from "./options2";
import ferrari from "./images/ferrari.jpg"
import bmw from "./images/bmw.jpg"
import mclaren from "./images/mclaren.jpg"
import { useState } from "react";


const cars =[
    {
        id:1,
        tittle:"ferrari",
        image:ferrari
    },
    {
        id:2,
        tittle:"BMW",
        image:bmw 
    },
    {
        id:3,
        tittle:"mclaren",
        image:mclaren
    }
]


function SecondStepSection(){

    const [selectedCard, setselectedCard] = useState(null)

    const clickCard = (car) =>{
        setselectedCard(car.id)
        localStorage.setItem("tittle",car.tittle)
        localStorage.setItem("imagen",car.image)
    } 

    return(
        <div className="secondStep">
            <h1>
                Choose your favorite car
            </h1>
            <h2>
                Select your favorite car then click on the button "next step"
            </h2>
            <div className="contenedorOpciones2">
                {cars.map((car,index)=>(
                    <Options2 car={car} key={index} clickCard={clickCard} selectedCard={selectedCard} />
                ))}
            </div>
        </div>
    )
}

export default SecondStepSection
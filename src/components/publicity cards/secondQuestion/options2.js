import React from "react";
import "./options2.css";

function Options2({car,clickCard,selectedCard}){
    const {id, tittle, image} = car
    return(
        <div className={`optionContainer2 ${selectedCard===car.id ? "Selected" : ""}`} onClick={()=>clickCard(car)} key={id}>
            <img src={image} alt={tittle}/>
            <h2>{tittle}</h2>
        </div>
    )
}

export default Options2
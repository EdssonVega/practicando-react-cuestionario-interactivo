import React from "react";
import "./options2.css";

function Options2({car}){
    const {id, tittle, image} = car
    return(
        <div className="optionContainer">
            <img src={image}/>
            <h2>{tittle}</h2>
        </div>
    )
}

export default Options2
import React from "react";
import "./options.css";

function Options({videogame}){
    const {id, tittle, image} = videogame
    return(
        <div className="optionContainer">
            <img src={image}/>
            <h2>{tittle}</h2>
        </div>
    )
}

export default Options
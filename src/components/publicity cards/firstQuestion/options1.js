import React from "react";
import "./options1.css";

function Options1({videogame}){
    const {id, tittle, image} = videogame
    return(
        <div className="optionContainer">
            <img src={image}/>
            <h2>{tittle}</h2>
        </div>
    )
}

export default Options1
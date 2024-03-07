import React from "react";
import "./options1.css";

function Options1({videogame,clickCard,selectedCard}){
    const {id, tittle, image} = videogame
    return(
        <div className={`optionContainer ${selectedCard===videogame.id ? "Selected" : ""}`} onClick={()=>clickCard(videogame)} key={id}>
            <img src={image} alt={tittle}/>
            <h2>{tittle}</h2>
        </div>
    )
}

export default Options1
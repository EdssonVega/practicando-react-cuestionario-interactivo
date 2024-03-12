import React from "react";
import "./options3.css"

function Options3({dog,clickCard,selectedCard}){
    const {id,tittle,image} = dog
    return(
        <div className={`optionContainer3 ${selectedCard===dog.id?"Selected":""}`} onClick={()=>clickCard(dog)} key={id}>
            <img src={image} alt={tittle}/>
            <h2>{tittle}</h2>
        </div>
    )
}

export default Options3
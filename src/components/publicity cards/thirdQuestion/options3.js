import React from "react";
import "./options3.css"

function Options3({image,tittle}){
    return(
        <div className="optionContainer3">
            <img src={image} alt={tittle}/>
            <h2>{tittle}</h2>
        </div>
    )
}

export default Options3
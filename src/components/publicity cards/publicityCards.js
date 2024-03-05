import React from "react";
import "./publicityCards.css";


function PublicityCards({image,tittle,description}){
    return(
        <div className="Container">
            <img src={image}/>
            <h3>{tittle}</h3>
            <p>{description}</p>
            <button>
                Watch it!
            </button>
        </div>
    )
}

export default PublicityCards
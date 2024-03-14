import React from "react";

import "./viewResultsButton.css"

function ShowResultsButton({finishQuestions}){
    
    const funcionaYaPues = () =>{
        finishQuestions()
    }
    
    return(
        <div className="resultsButton" onClick={funcionaYaPues}>
            View results
        </div>
    )
}

export default ShowResultsButton
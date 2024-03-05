import React from "react";
import PublicityCards from "./publicity cards/publicityCards";
import AoT from "../images/aot.jpg"
import Brb from "../images/breaking-bad.jpg"
import Avat from "../images/avatar.jpg"
import "./publicity.css";


function PublicitySection (){
    return(
        <section className="publicitySection">
            <h1 className="publicity">Publicity</h1>
            <h2>Check some of the best series in the history</h2>
            <div className="cardContainer">
                <PublicityCards 
                    image={AoT}
                    tittle={"Attack on Titan"}
                    description={"the human race its about to dissapear!"}
                />
                <PublicityCards 
                    image={Brb}
                    tittle={"Breaking Bad"}
                    description={"Follow Walter White in his journey to evil"}
                />
                <PublicityCards 
                    image={Avat}
                    tittle={"Avatar: The last airbender"}
                    description={"Will the avatar be able to end the 100 years war?"}
                />
            </div>
        </section>
    )
}

export default PublicitySection
import React from 'react'
import "./Flags.css"
import flagBRA from "./flag-bra.png"
import flagUSA from "./flag-usa.png"

export default function Flags(){
    return(
        <div className="flags">
            <img src={flagBRA} alt="" className="flag" id="flag-bra" />
            <img src={flagUSA} alt="" className="flag" id="flag-usa" />
        </div>
    )
}

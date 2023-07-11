import React from "react";
import "./Logo.css"

export default function Logo({ ptbr }) {
    // console.log(lang)
    return(
        <div className="Logo">
            { ptbr=='pt' && <h4>meu logo</h4> }
            { ptbr=='en' && <h4>my logo</h4> }
        </div>
    )
}
import React from "react";
import "./Separator.css"

export default function Separator(props){
    return(
        <section className="separator-content">
            <p className="bigger">{props.title}</p>
            <p className="smaller">{props.title}</p>
        </section>
    )
}
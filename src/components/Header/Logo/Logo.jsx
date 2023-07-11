import React from "react";
import "./Logo.css"
import useState from 'react'

export default function Logo({ ptbr }) {
    
    let msgtxt = ''

    if(ptbr=='pt'){
        msgtxt = 'Aceitando sugestões de logotipo :)'
    }else {
        msgtxt = 'Accepting logo suggestions :)'
    }

    function showMessageBox(){
        alert(msgtxt)
    }

    return(
        <div className="logo" onClick = {showMessageBox} >
            { ptbr=='pt' && <h4>meu logo</h4> }
            { ptbr=='en' && <h4>my logo</h4> }
        </div>
    )
}
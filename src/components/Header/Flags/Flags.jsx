import React from "react";
import "./Flags.css";
import flagBRA from "./flag-bra.png";
import flagUSA from "./flag-usa.png";
import { useState } from "react";

export default function Flags({ ptbr , setPtbr }) {
  
   return (
    <div className="flags">
   
      <img
        src={flagBRA}
        alt=""
        className="flag"
        id="flag-bra"
        
        onClick={()=>setPtbr('pt')}
      />
      <img
        src={flagUSA}
        alt=""
        className="flag"
        id="flag-usa"
        onClick={()=>setPtbr('en')}
      />
    </div>
  );
}

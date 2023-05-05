import React from "react";
import "./Knowledges.css";
import Separator from "../Separator/Separator"

export default function Knowledges(){
    return(
        <div className="kl-content">

            <Separator title="Knowledges" />
            
            <div className="what-thumbs">
                <div className="thumb-block" id="know-front">
                    <img src={require("./html-icon.png")} alt="Front end developer"/>
                    <p>Frontend Developer</p>
                    <div className="knowledges-popup" id="know-front-popup">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Javascript</p>
                        <p>React JS</p>
                    </div>
                </div>
                <div className="thumb-block" id="know-social">
                    <img src={require("./social-media-icon.png")} alt="Social Media"/>
                    <p>Social Media</p>
                    <div className="knowledges-popup" id="know-social-popup">
                        <p>Photoshop</p>
                        <p>After Effects</p>
                        <p>Premiere</p>
                    </div>
                </div>
                <div className="thumb-block" id="know-dev">
                    <img src={require("./js-icon.png")} alt="Proger"/>
                    <p>Programmer</p>
                    <div className="knowledges-popup" id="know-dev-popup">
                        <p>Delphi</p>
                        <p>VBA</p>
                        <p>Javascript</p>
                        <p>React JS</p>
                    </div>
                </div>
        
            </div>
           
        </div>
    )
}
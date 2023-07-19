import React from "react";
import "./Knowledges.css";
import Separator from "../Separator/Separator";

export default function Knowledges({ ptbr }) {
  return (
    <div className="klContent">
      
      {ptbr == 'pt' && <Separator title="Conhecimentos" />}  
      {ptbr == 'en' && <Separator title="Knowledges" />}

      <div className="what-thumbs">
        <div className="thumb-block" id="know-front">
          <img src={require("./html-icon.png")} alt="Front end developer" />
          {ptbr == 'pt' && <p>Desenvolvedor Frontend</p>}
          {ptbr == 'en' && <p>Frontend Developer</p>}
          <div className="knowledges-popup" id="know-front-popup">
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>React JS</p>
          </div>
        </div>
        <div className="thumb-block" id="know-social">
          <img src={require("./social-media-icon.png")} alt="Social Media" />
          {ptbr == 'pt' && <p>Midias Socials</p>}
          {ptbr == 'en' && <p>Social Media</p>}
          <div className="knowledges-popup" id="know-social-popup">
            <p>Photoshop</p>
            <p>After Effects</p>
            <p>Premiere</p>
          </div>
        </div>
        <div className="thumb-block" id="know-dev">
          <img src={require("./js-icon.png")} alt="Proger" />
          {ptbr == 'pt' && <p>Programador</p>}
          {ptbr == 'en' && <p>Programmer</p>}
          <div className="knowledges-popup" id="know-dev-popup">
            <p>Delphi</p>
            <p>VBA</p>
            <p>Javascript</p>
            <p>React JS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

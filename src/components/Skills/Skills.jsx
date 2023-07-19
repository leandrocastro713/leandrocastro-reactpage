import React from "react";
import Separator from "../Separator/Separator";
import "./Skills.css";

export default function Skills({ ptbr }) {
  return (
    <section className="skillsContainer">
      <div className="skills-blocks">
        <div className="skills-img">
          <img src={require("./losango2.png")} alt="background" />
        </div>
        <div className="skills-names">
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>Photoshop</p>
          <p>After effects</p>
          <p>Premiere</p>
        </div>
        <div className="skills-gauges">
          <div className="gauge-background">
            <div className="percent s-html">
              <p>80%</p>
            </div>
          </div>
          <div className="gauge-background">
            <div className="percent s-css">
              <p>60%</p>
            </div>
          </div>
          <div className="gauge-background">
            <div className="percent s-js">
              <p>50%</p>
            </div>
          </div>
          <div className="gauge-background">
            <div className="percent s-photoshop">
              <p>80%</p>
            </div>
          </div>
          <div className="gauge-background">
            <div className="percent s-after">
              <p>70%</p>
            </div>
          </div>
          <div className="gauge-background">
            <div className="percent s-premiere">
              <p>50%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

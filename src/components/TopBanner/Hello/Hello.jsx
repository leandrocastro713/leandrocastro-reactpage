import React from "react";
import "./Hello.css";

export default function Hello() {
  return (
    <div className="hello">
      <h1>Hello</h1>
      <h2>
        I'm <br />
        Leandro <span>Castro</span>
      </h2>
      <div className="bar"></div>
      <h3>Frontend Developer</h3>
    </div>
  );
}

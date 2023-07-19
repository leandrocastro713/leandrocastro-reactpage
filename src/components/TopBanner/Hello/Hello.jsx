import React from "react";
import "./Hello.css";

export default function Hello({ ptbr }) {
  return (
    <div className="hello">
      {ptbr == "pt" && <h1>Olá</h1>}
      {ptbr == "en" && <h1>Hello</h1>}
      {ptbr == "pt" && (
        <h2>
          Sou <br />
          Leandro <span>Castro</span>
        </h2>
      )}
      {ptbr == "en" && (
        <h2>
          I'm <br />
          Leandro <span>Castro</span>
        </h2>
      )}

      <div className="bar"></div>
      {ptbr == "pt" && <h3>Desenvolvedor Frontend</h3>}
      {ptbr == "en" && <h3>Frontend Developer</h3>}
    </div>
  );
}

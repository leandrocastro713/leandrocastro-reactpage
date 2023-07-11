import React from "react";
import "./Menu.css";

export default function Menu({ ptbr }) {
  return (
    <>
      <ul className="menu-list">
        <a link="#" target="_blank">
          {ptbr == "pt" && <li>Conhecimentos</li>}
          {ptbr == "en" && <li>Knowledges</li>}
        </a>
        <a link="#" target="_blank">
          {ptbr == "pt" && <li>Habilidades</li>}
          {ptbr == "en" && <li>Skills</li>}
        </a>
        <a link="#" target="_blank">
          {ptbr == "pt" && <li>Sobre</li>}
          {ptbr == "en" && <li>About</li>}
        </a>
        <a link="#" target="_blank">
          {ptbr == "pt" && <li>Contato</li>}
          {ptbr == "en" && <li>Contact</li>}
        </a>
      </ul>
    </>
  );
}

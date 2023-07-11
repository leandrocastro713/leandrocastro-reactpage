import React from "react";
import "./Citar.css";

export default function Citar({ ptbr }) {
  return (
    <section className="content">
      {
        (ptbr == "pt" && (
          <p className="frase">
            "Quem trabalha com o que ama está sempre de férias."
          </p>
        ))
      }
      {
        (ptbr == "en" && (
          <p className="frase">
            "Those who work with what they love are always on vacation ."
          </p>
        ))
      }
      {
        (ptbr == "pt" && (
          <p className="autor">
            <i>Autor desconhecido</i>
          </p>
        ))
      }
      {
        (ptbr == "en" && (
          <p className="autor">
            <i>Unknown author</i>
          </p>
        ))
      }
    </section>
  );
}

import React from "react";

import "./Comentario.css";
import dadosComentarios from "./dadosComentarios";

export default function Comentario(props) {
  // function maiuscula(){
  //   return props.title.toUpperCase()
  // }
  function Comentarios() {
    return dadosComentarios.map((comentario) => {
      console.log(comentario);
      return (
        <>
          <div className="comentario">
            <h1 className="titulo">{comentario.titulo}</h1>
            <h3 className="subtitulo">{comentario.subtitulo}</h3>
            <p className="post">asçldkfasçlfkjaçslkjdfçasldkjfjdfç</p>
          </div>
        </>
      );
    });
  }

  return <>{Comentarios()}</>;
}

import React, { useState } from "react";
import "./RecentWorks.css";
import RecentThumbs from "./RecentThumbs/RecentThumbs.jsx"

export default function RecentWorks() {
  const [show, setShow] = useState(true);
  const [showMais, setShowMais] = useState(false);
  function maisClick() {
    setShow(!show);
    setShowMais(!showMais);
    console.log(show, showMais);
  }
  return (
    <section className="recent-works">
      {/*--------------------------------------- RECENT THUMBS */}
      {show && <RecentThumbs />}
      {/*--------------------------------------- MAIS X CONTAINER */}
      {showMais && (
        <div className="maisx-container">
          <a href="./img2/card-bayern-vs-barcelona.jpg" target="_blank">
            <img src={require("../img2/card-bayern-vs-barcelona.jpg")} alt="" />
          </a>
          <a href="./img2/card-bruno.jpg" target="_blank">
            <img src={require("../img2/card-bruno.jpg")} alt="" />
          </a>
          <a href="./img2/card-cleber.jpg" target="_blank">
            <img src={require("../img2/card-cleber.jpg")} alt="" />
          </a>
          <a href="./img2/card-imperio.jpg" target="_blank">
            <img src={require("../img2/card-imperio.jpg")} alt="" />
          </a>
          <a href="./img2/card-jerry.jpg" target="_blank">
            <img src={require("../img2/card-jerry.jpg")} alt="" />
          </a>
          <a href="./img2/card-lise.jpg" target="_blank">
            <img src={require("../img2/card-lise.jpg")} alt="" />
          </a>
          <a href="./img2/card-marilia.jpg" target="_blank">
            <img src={require("../img2/card-marilia.jpg")} alt="" />
          </a>
          <a href="./img2/card-real-vs-atletico.jpg" target="_blank">
            <img src={require("../img2/card-real-vs-atletico.jpg")} alt="" />
          </a>
          <a href="./img2/card-rizzi.jpg" target="_blank">
            <img src={require("../img2/card-rizzi.jpg")} alt="" />
          </a>
          <a href="./img2/cartao.jpg" target="_blank">
            <img src={require("../img2/cartao.jpg")} alt="" />
          </a>
          <a href="./img2/flyer-joyce.jpg" target="_blank">
            <img src={require("../img2/flyer-joyce.jpg")} alt="" />
          </a>
          <a href="./img2/flyer-stop-xis-calabresa.jpg" target="_blank">
            <img src={require("../img2/flyer-stop-xis-calabresa.jpg")} alt="" />
          </a>
        </div>
      )}
      {/*------------------------------------- BANNER MAIS CLICK  */}
      <div className="mais-link-banner" onClick={maisClick}>
        <p>{show === true ? "More >>>" : "<<< Less"}</p>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import "./RecentWorks.css";

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
      {show && (
        <div className="recent-thumbs">
          <div className="recent-thumbs-block">
            <img src={require("./thumb-bar1.jpg")} alt="" />
            <p>Social Media</p>
          </div>
          <div className="recent-thumbs-block">
            <img src={require("./thumb-bar2.jpg")} alt="" />
            <p>Social Media</p>
          </div>
          <div className="recent-thumbs-block">
            <img src={require("./thumb-bruno.jpg")} alt="" />
            <p>Social Media</p>
          </div>

          <div className="recent-thumbs-block">
            <img src={require("./thumb-center.jpg")} alt="" />
            <p>Social Media</p>
          </div>

          <div className="recent-thumbs-block">
            <img src={require("./thumb-giovanni.jpg")} alt="" />
            <p>Social Media</p>
          </div>

          <div className="recent-thumbs-block">
            <a href="../RecentWorks/thumb-joyce-cartão.jpg">
              <img
                src={require("../RecentWorks/thumb-joyce-cartão.jpg")}
                alt=""
              />
              <p>Social Media</p>
            </a>
          </div>

          <div className="recent-thumbs-block">
            <a
              href="https://joycesilvanocabeloslivres.vercel.app/"
              target="_blank"
            >
              <img src={require("./thumb-joyce.jpg")} alt="" />
              <p>Site</p>
            </a>
          </div>

          <div className="recent-thumbs-block">
            <img src={require("./thumb-stop.jpg")} alt="" />
            <p>Social Media</p>
          </div>
        </div>
      )}
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
            <img src="./img2/card-imperio.jpg" alt="" />
          </a>
          <a href="./img2/card-jerry.jpg" target="_blank">
            <img src="./img2/card-jerry.jpg" alt="" />
          </a>
          <a href="./img2/card-lise.jpg" target="_blank">
            <img src="./img2/card-lise.jpg" alt="" />
          </a>
          <a href="./img2/card-marilia.jpg" target="_blank">
            <img src="./img2/card-marilia.jpg" alt="" />
          </a>
          <a href="./img2/card-real-vs-atletico.jpg" target="_blank">
            <img src="./img2/card-real-vs-atletico.jpg" alt="" />
          </a>
          <a href="./img2/card-rizzi.jpg" target="_blank">
            <img src="./img2/card-rizzi.jpg" alt="" />
          </a>
          <a href="./img2/cartao.jpg" target="_blank">
            <img src="./img2/cartao.jpg" alt="" />
          </a>
          <a href="./img2/flyer-joyce.jpg" target="_blank">
            <img src="./img2/flyer-joyce.jpg" alt="" />
          </a>
          <a href="./img2/flyer-stop-xis-calabresa.jpg" Target="_blank">
            <img src="./img2/flyer-stop-xis-calabresa.jpg" alt="" />
          </a>
        </div>
      )}
      {/*------------------------------------- BANNER MAIS CLICK  */}
      <div className="mais-link-banner" onClick={maisClick}>
        <p>{show === true ? "Mais >>>" : "<<< Menos"}</p>
      </div>
    </section>
  );
}

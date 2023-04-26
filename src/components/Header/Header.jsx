import React from "react";
// import "./Header.css";

import DownloadImg from "../img/download-silver.png";
import flagBRA from "../img/flag-bra.png";
import flagUSA from "../img/flag-usa.png";

export default function Header() {
  return (
    <>
      <div className="header">
        
        <div className="logo">
          <h4>my logo</h4>
        </div>
        
        <div className="menu">
          <ul className="menu-list">
            <a link="#" target="_blank">
              <li>Knowledges</li>
            </a>
            <a link="#" target="_blank">
              <li>Skills</li>
            </a>
            <a link="#" target="_blank">
              <li>About</li>
            </a>
            <a link="#" target="_blank">
              <li>Contact</li>
            </a>
          </ul>
        </div>
        
        <div className="flags">
          <img src={flagBRA} alt="" className="flag" id="flag-bra" />
          <img src={flagUSA} alt="" className="flag" id="flag-usa" />
        </div>
        
        <div className="curriculum">
          <button className="download">
            Curriculum
            <img src={DownloadImg} />
          </button>
        </div>
      </div>


      <main className="top"> 
        
        <div className="hello">
            <h1>Hello</h1> 
            <h2>I'm <br/>Leandro <span>Castro</span></h2>
            <div className="bar"></div>
            <h3>Frontend Developer</h3>
        </div>

        <div className="pic">
            <img src={require('../img/losango-base.png')} />   
        </div>

        <div className="follow-aside">

            <div className="follow-text">
                <p>Follow me</p>
            </div>
            <div className="follow-bar">

            </div>
            <div className="follow-icons">
                <a href="http://facebook.com/leandrocastro713" 
                target="_blank">
                  <img src={require('../img/facebook-logo.png')}/>
                </a>
                <a href="https://www.instagram.com/urzzomidia"
                target="_blank">
                    <img src={require("../img/instagram-logo.png")} alt=""/>
                </a>
            </div>
        
        </div>
    
      </main>

      <div className="citar">
        <q className="citar-q">Quem trabalha com o que ama está       sempre de férias.</q>
        <p className="citar-i">Autor desconhecido.</p>
      </div>

    </>
  );
}

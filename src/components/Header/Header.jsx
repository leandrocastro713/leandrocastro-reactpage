import React from "react";
import "./Header.css";
import Citar from "./Citar/Citar.jsx"
import Logo from "./Logo/Logo.jsx"
import Menu from "./Menu/Menu.jsx"

import DownloadImg from "../img/download-silver.png";
import flagBRA from "../img/flag-bra.png";
import flagUSA from "../img/flag-usa.png";

export default function Header() {
  return (
    <>
      <div className="header">

        <Logo />
        <Menu />      

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

      <Citar />

      

    </>
  );
}

import React from "react";
import "./Header.css";
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
    </>
  );
}

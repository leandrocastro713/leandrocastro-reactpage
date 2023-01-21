import React from 'react'
import "./Header.css";
import DownloadImg from "../img/download-silver.png";

export default function Header(){
    return <>
    <div className="header">
        <div className="logo">
            <h4>meu logo</h4>
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
        <div className="curriculum">
            <button className="download">
                Curriculum
                <img src={DownloadImg} /> 
                
            </button>
        </div>
    </div>
    </>
} 
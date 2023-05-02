import React from 'react'
import "./TopBanner.css"

export default function TopBanner() {
    
    return(
    
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

    )

}

import React from "react"
import "./RecentWorks.css"

export default function RecentWorks(){
  return(
    <section className="recent-works">
      <div class="recent-thumbs">
        <div className="recent-thumbs-block">
          <img src={require("./thumb-bar1.jpg")} alt=""/>
          <p>Social Media</p>
        </div>
        <div className="recent-thumbs-block">
            <img src={require("./thumb-bar2.jpg")} alt=""/>
            <p>Social Media</p>
        </div>
        <div className="recent-thumbs-block">
            <img src={require("./thumb-bruno.jpg")} alt=""/>
            <p>Social Media</p>
        </div>
        <div className="recent-thumbs-block">
            <img src={require("./thumb-center.jpg")} alt=""/>
            <p>Social Media</p>
        </div>
        <div className="recent-thumbs-block">
            <img src={require("./thumb-giovanni.jpg")} alt=""/>
            <p>Social Media</p>
        </div>
        <div className="recent-thumbs-block">
            <img src={require("./thumb-joyce-cartão.jpg")} alt=""/>
            <p>Social Media</p>
        </div>
      
        <div className="recent-thumbs-block">
            <a href="https://joycesilvanocabeloslivres.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={require("./thumb-joyce.jpg")} alt=""/>
            <p>Site</p>
            </a>
        </div>
        <div className="recent-thumbs-block">
            <img src={require("./thumb-stop.jpg")} alt=""/>
            <p>Social Media</p>
        </div>
          
    </div>

    <a href="./mais.html" target="_blank">
        <p id = "mais">Mais ...</p>
    </a> 

    </section>

  )

}

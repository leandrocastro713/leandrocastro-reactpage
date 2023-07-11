import React from "react";
import "./RecentThumbs.css"

export default function RecentThumbs() {
  return (
    <div className="recent-thumbs">
      <div className="recent-thumbs-block">
        <img src={require("../thumb-bar1.jpg")} alt="" />
        <p>Social Media</p>
      </div>

      <div className="recent-thumbs-block">
        <img src={require("../thumb-bar2.jpg")} alt="" />
        <p>Social Media</p>
      </div>
      <div className="recent-thumbs-block">
        <img src={require("../thumb-bruno.jpg")} alt="" />
        <p>Social Media</p>
      </div>

      <div className="recent-thumbs-block">
        <img src={require("../thumb-center.jpg")} alt="" />
        <p>Social Media</p>
      </div>

      <div className="recent-thumbs-block">
        <img src={require("../thumb-giovanni.jpg")} alt="" />
        <p>Social Media</p>
      </div>

      <div className="recent-thumbs-block">
        <img src={require("../thumb-joyce-cartão.jpg")} alt="" />
        <p>Social Media</p>
      </div>

      <div className="recent-thumbs-block">
        <a href="https://joycesilvano-cabeloslivres.vercel.app/" target="_blank">
          <img src={require("../thumb-joyce.jpg")} alt="" />
          <p>Site</p>
        </a>
      </div>

      <div className="recent-thumbs-block">
        <img src={require("../thumb-stop.jpg")} alt="" />
        <p>Social Media</p>
      </div>
    </div>
  );
}

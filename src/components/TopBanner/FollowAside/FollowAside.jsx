import React from "react";
import "./FollowAside.css";

export default function FollowAside({ ptbr }) {
  return (
    <div className="follow-aside">
      <div className="follow-text" alt="Follow Me">
        {ptbr == 'pt' && <p>Siga me</p>}
        {ptbr == 'en' && <p>Follow me</p>}
      </div>

      <div className="follow-bar"></div>

      <div className="follow-icons">
        <a href="http://facebook.com/leandrocastro713" target="_blank">
          <img src={require("./facebook-logo.png")} alt="Icone do facebook" />
        </a>
        <a href="https://www.instagram.com/urzzomidia" target="_blank">
          <img src={require("./instagram-logo.png")} alt="Icone do instagram" />
        </a>
      </div>
    </div>
  );
}

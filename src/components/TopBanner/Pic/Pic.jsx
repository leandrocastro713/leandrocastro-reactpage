import React from "react";
import "./Pic.css";

export default function Pic() {
  return (
    <div className="pic">
      <img src={require("./losango-base.png")} />
    </div>
  );
}

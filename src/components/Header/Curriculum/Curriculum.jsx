import React from "react";
import "./Curriculum.css";
import DownloadImg from "./download-silver.png";

export default function Curriculum() {
  return (
    <div className="curriculum">
      <button className="download">
        Curriculum
        <img src={DownloadImg} />
      </button>
    </div>
  );
}

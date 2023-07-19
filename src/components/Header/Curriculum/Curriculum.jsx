import React from "react";
import "./Curriculum.css";
import DownloadImg from "./download-silver.png";
import { useState } from "react";
import { Link } from "react-scroll";

export default function Curriculum({ ptbr }) {

  return (
    <div className="curriculum">
      <a href={ptbr == 'pt' ? "./CurriculumPT.pdf" : "./CurriculumEN.pdf"} download target="_blank"> 
        <p className="download">
          Curriculum
          <img src={DownloadImg} />
        </p>
        </a>
    </div>
  );
}

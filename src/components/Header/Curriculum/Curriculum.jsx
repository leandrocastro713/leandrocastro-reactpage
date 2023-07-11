import React from "react";
import "./Curriculum.css";
import DownloadImg from "./download-silver.png";

export default function Curriculum( { ptbr } ) {

  let msgtxt = ''
  
  if(ptbr=='pt'){
    msgtxt='Ainda não implementado!'
  }else{
    msgtxt='Not implemented!'
  }

  function showMsg(){
    alert(msgtxt)
  }

  return (
    <div className="curriculum">
      <button className="download" onClick={showMsg}>
        Curriculum
        <img src={DownloadImg} />
      </button>
    </div>
  );
}

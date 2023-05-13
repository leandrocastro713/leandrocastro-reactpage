import React, { useState } from "react";
import "./RecentWorks.css";
import RecentThumbs from "./RecentThumbs/RecentThumbs.jsx"
import MaisXContainer from "./MaisXContainer/MaisXContainer";

export default function RecentWorks() {
  const [show, setShow] = useState(true);
  const [showMais, setShowMais] = useState(false);
  function maisClick() {
    setShow(!show);
    setShowMais(!showMais);
    console.log(show, showMais);
  }
  return (
    <section className="recent-works">
      {/*--------------------------------------- RECENT THUMBS */}
      {show && <RecentThumbs />}
      {/*--------------------------------------- MAIS X CONTAINER */}
      {showMais && <MaisXContainer />}
      {/*------------------------------------- BANNER MAIS CLICK  */}
      <div className="mais-link-banner" onClick={maisClick}>
        <p>{show === true ? "More >>>" : "<<< Less"}</p>
      </div>
    </section>
  );
}

import React from "react";
import "./TopBanner.css";
import Hello from "./Hello/Hello.jsx";
import Pic from "./Pic/Pic.jsx";
import FollowAside from "./FollowAside/FollowAside.jsx";

export default function TopBanner({ ptbr }) {
  return (
    <main className="top">
      <Hello ptbr = { ptbr }/>
      <Pic />
      <FollowAside ptbr = { ptbr } />
    </main>
  );
}

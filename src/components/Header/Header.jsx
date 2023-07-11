import React from "react";
import "./Header.css";
import Logo from "./Logo/Logo.jsx";
import Menu from "./Menu/Menu.jsx";
import Flags from "./Flags/Flags.jsx";
import Curriculum from "./Curriculum/Curriculum.jsx";
import { useState } from 'react'

export default function Header({ ptbr , setPtbr }) {

  console.log({ptbr})

  return (
    <div className="Header">
      {/* <p>{ptbr}</p> */}
      <Logo ptbr = { ptbr }/>
      <Menu ptbr = { ptbr }/>
      <Flags ptbr = { ptbr } setPtbr = { setPtbr }/>
      <Curriculum />
    </div>
  );
}

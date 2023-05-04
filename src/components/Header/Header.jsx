import React from "react"
import "./Header.css"
import Logo from "./Logo/Logo.jsx"
import Menu from "./Menu/Menu.jsx"
import Flags from "./Flags/Flags.jsx"
import Curriculum from "./Curriculum/Curriculum.jsx"

export default function Header() {
  return (
    <>
      <div className="Header">

        <Logo />
        <Menu />      
        <Flags />
        <Curriculum />
        
      </div> 
    </>
  );
}

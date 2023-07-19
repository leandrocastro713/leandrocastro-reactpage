import React from "react";
import "./Menu.css";
import hamburguer from "../../img/hamburger_icon.png";
import close from "../../img/close.png";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Menu({ ptbr }) {
  const [showMenu, setShowMenu] = useState(false);

  function clickButton(click_v) {
    if (click_v == "click_show") {
      setShowMenu(true);
      console.log(showMenu);
    }
    if (click_v == "click_close") {
      setShowMenu(false);
      console.log(showMenu);
    }
  }

  setInterval(() => {
    if (window.screen.width > 500) {
      setShowMenu(true);
    }
  }, 1000);

  function closeMobile() {
    console.log(window.screen.width);
    if (window.screen.width <= 500) {
      console.log("is mobile");
      setShowMenu(false);
    }
  }

  return (
    <>
      {showMenu && (
        <ul className="menu-list">
          <li >
            <Link onClick={ closeMobile }
              to='klContent' spy={true}
              smooth={true}
              offset={-40}
              duration={700}
              >
              {ptbr == "pt" && "Conhecimentos"}
              {ptbr == "en" && "Knowledges"}
            </Link>
          </li>

          <li >
            <Link onClick={ closeMobile }
              to='skillsContainer' spy={true}
              smooth={true}
              offset={-90}
              duration={700}
              >
              {ptbr == "pt" && "Habilidades"}
              {ptbr == "en" && "Skills"}
            </Link>
          </li>

          <li >
            <Link onClick={ closeMobile }
              to='recentWorks' spy={true}
              smooth={true}
              offset={-40}
              duration={700}
              >
              {ptbr == "pt" && "Trabalhos Recentes"}
              {ptbr == "en" && "Recent Works"}
            </Link>
          </li>
          
          <li >
            <Link onClick={ closeMobile }
              to='contact' spy={true}
              smooth={true}
              offset={-40}
              duration={700}
              >
              {ptbr == "pt" && "Contato"}
              {ptbr == "en" && "Contact"}
            </Link>
          </li>
         
        </ul>
      )}
      <div className="btn_menu">
        {!showMenu && (
          <img
            src={hamburguer}
            alt=""
            onClick={() => clickButton("click_show")}
          />
        )}
        {showMenu && (
          <img src={close} alt="" onClick={() => clickButton("click_close")} />
        )}
      </div>
    </>
  );
}

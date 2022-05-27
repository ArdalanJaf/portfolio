import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function Header() {
  const scrollPosition = useSelector((state) => state.scrollPosition);

  const navSelectStyle = () => {
    let navs = document.querySelectorAll(".nav");
    let sections = document.querySelectorAll(".section");
    for (let i = 0; i < sections.length; i++) {
      // current position relative to window. eg: 0 = at top.
      let secPositionTop = sections[i].getBoundingClientRect().top;
      let secPositionBot = sections[i].getBoundingClientRect().bottom;
      //height of element
      let secHeight = sections[i].offsetHeight;
      // height of viewscreen
      let windowHeight = window.innerHeight;
      let extra = windowHeight / 3;
      if (
        secPositionTop <= 0 + extra &&
        secPositionBot <= secHeight + extra &&
        secPositionBot >= 0 + extra
      ) {
        navs[i].classList.add("active");
      } else {
        navs[i].classList.remove("active");
      }
    }
  };

  useEffect(() => {
    navSelectStyle();
  }, [scrollPosition]);

  return (
    <nav>
      <a className="nav navAbout" href="#about">
        ABOUT
      </a>
      <a className="nav navProjects" href="#projects">
        PROJECTS
      </a>
      <a className="nav navContact" href="#contact">
        CONTACT
      </a>
    </nav>
  );
}

export default Header;

import React from "react";
import { useSelector } from "react-redux";
import { icons } from "../../config/icons";
import "./arrows.scss";

function Arrows() {
  const scrollPosition = useSelector((state) => state.scrollPosition);

  function scrollTo(id) {
    let targetAnchor = document.getElementById(id);
    targetAnchor.scrollIntoView();
  }

  return (
    <div
      className={
        scrollPosition.now < window.innerHeight * 0.1
          ? "arrows"
          : "arrows hideHeader"
      }
      onClick={() => scrollTo("projects")}
    >
      {icons.arrow}
    </div>
  );
}

export default Arrows;

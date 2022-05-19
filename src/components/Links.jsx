import React from "react";
import { icons } from "../config/icons";

function Links(props) {
  return (
    <div className="links">
      <a
        href=""
        target="_blank"
        rel="noreferrer"
        className={props.header ? "cv cvShort" : "cv"}
      >
        <div>{props.header ? "CV" : "RESUMÉ"}</div>
      </a>
      <a href="https://github.com/ArdalanJaf" target="_blank" rel="noreferrer">
        {icons.gitHub}
      </a>
      <a
        href="https://www.linkedin.com/in/ardalanjaf"
        target="_blank"
        rel="noreferrer"
      >
        {icons.linkedIn}
      </a>
      <a href="mailto:a.aljaf@gmail.com" target="_blank" rel="noreferrer">
        {icons.email}
      </a>
      {/* <div className="themeButton"></div> */}
    </div>
  );
}

export default Links;

//<a target="_blank" href="https://icons8.com/icon/32896/html-5">Html 5</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

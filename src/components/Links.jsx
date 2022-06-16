import React from "react";
import { icons } from "../config/icons";
import Tooltip from "./tooltip/Tooltip";
import pdf from "../assets/Ardalan Al-Jaf - Resume.pdf";

function Links(props) {
  return (
    <div className="links">
      <a
        href={pdf}
        target="_blank"
        rel="noreferrer"
        className={props.header ? "cv cvShort" : "cv"}
      >
        <span className="cvIcon">{props.header ? "CV" : "RESUME"}</span>
      </a>

      <a href="mailto:contact@ardalanjaf.com" target="_blank" rel="noreferrer">
        <Tooltip content="contact@ardalanjaf.com">{icons.email}</Tooltip>
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
    </div>
  );
}

export default Links;

//<a target="_blank" href="https://icons8.com/icon/32896/html-5">Html 5</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

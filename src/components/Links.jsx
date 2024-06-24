import React from "react";
import { icons } from "../config/icons";
import Tooltip from "./tooltip/Tooltip";
import Toggle from "./darkMode/Toggler";
import { useDarkMode } from "./darkMode/useDarkMode";
import { CV_URL } from "../config/assetUrls";


function Links({header}) {
  const [theme, themeToggler] = useDarkMode();
  return (
    <div className="links">
      <a
        href={CV_URL}
        target="_blank"
        rel="noreferrer"
        className={header ? "cv cvShort" : "cv"}
      >
        <span className="cvIcon">{header ? "CV" : "RESUME"}</span>
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
      <a href="mailto: contact@ardalanjaf.com">
        <Tooltip content="contact@ardalanjaf.com">{icons.email}</Tooltip>
      </a>
      <Toggle theme={theme} toggleTheme={themeToggler} />
    </div>
  );
}

export default Links;

//<a target="_blank" href="https://icons8.com/icon/32896/html-5">Html 5</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

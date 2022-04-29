import React from "react";
import { icons } from "../utils/icons";

function Links() {
  return (
    <div className="links">
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
    </div>
  );
}

export default Links;

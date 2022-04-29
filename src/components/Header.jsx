import React from "react";
import { icons } from "../utils/icons";

function Header() {
  return (
    <header>
      <a href="#">
        <h2>ARDALAN JAF</h2>
      </a>

      <div className="links">
        <a
          href="https://github.com/ArdalanJaf"
          target="_blank"
          rel="noreferrer"
        >
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
    </header>
  );
}

export default Header;

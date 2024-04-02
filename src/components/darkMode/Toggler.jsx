import React from "react";
import Tooltip from "../tooltip/Tooltip";
import { icons } from "../../config/icons";

const Toggle = ({ theme, toggleTheme }) => {
  return (
    // <Tooltip content={theme === "light" ? "dark mode" : "light mode"}>
    <button className="themeToggler" onClick={toggleTheme}>
      {theme !== "light" ? icons.theme.moon : icons.theme.sun}
    </button>
    // </Tooltip>
  );
};

export default Toggle;

// All code taken and modified from https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/

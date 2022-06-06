import React from "react";
// import { func, string } from "prop-types";
import styled from "styled-components";
import Tooltip from "../tooltip/Tooltip";

const Button = styled.button`
  background: ${({ theme }) => theme.toggleBackground};
  transition: all 0.3s ease-in-out;
  border: 0px solid ${({ theme }) => theme.toggleBorder};
`;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Tooltip content={theme === "light" ? "dark mode" : "light mode"}>
      <Button className="themeToggler" onClick={toggleTheme}></Button>
    </Tooltip>
  );
};

// Toggle.propTypes = {
//   theme: string.isRequired,
//   toggleTheme: func.isRequired,
// };
export default Toggle;

// All code taken and modified from https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/

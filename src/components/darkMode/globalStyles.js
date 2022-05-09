import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.30s ease-in-out;
  }

  .links a svg {
    fill: ${({ theme }) => theme.text};
    transition: all 0.30s ease-in-out;
  }

  .cv {
    color: ${({ theme }) => theme.body};
  }

  .cv div {
    background-color: ${({ theme }) => theme.text};
    transition: all 0.30s ease-in-out;
  }
  `;

// All code taken and modified from https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/

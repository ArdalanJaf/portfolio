import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    /* font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif; */
    transition: all 0.30s ease-in-out;
  }

  h3, h4 {
    color: ${({ theme }) => theme.highlight};
  }

  h3 a {
    color: ${({ theme }) => theme.highlight};
  }

  section h2 {
    border-color:  ${({ theme }) => theme.highlight}
  }

  .links a svg {
    fill: ${({ theme }) => theme.text};
  }

  .cv {
    color: ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.text};
  }

  header .headerContainer {
    background-color: ${({ theme }) => theme.body};
    border-color:  ${({ theme }) => theme.highlight};
    transition: background-color 0.30s ease-in-out;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  }

  header .headerContainer h2 {
    color: ${({ theme }) => theme.highlight};
  }

  header .headerContainer a {
    color: ${({ theme }) => theme.text};
  }

  header .headerContainer .cv {
    color: ${({ theme }) => theme.body};
   
  }

  header .headerContainer .cv {
    background-color: ${({ theme }) => theme.text};
    
  }


  .projectLinks svg {
    fill: ${({ theme }) => theme.text};
  }

   .projectLinks a {
    color: ${({ theme }) => theme.text};
  }

  .projectLinks a:hover svg {
    fill: ${({ theme }) => theme.highlight};
  }

  .projectLinks a:hover {
    color: ${({ theme }) => theme.highlight};
  }

  .projectLinks a.gitBackSVG svg {
    stroke: ${({ theme }) => theme.text};
    fill: none;
  }

  .projectLinks a.gitBackSVG:hover svg {
    stroke: ${({ theme }) => theme.highlight};
    fill: none;
  }


  button, .msgSentNotification p {
    color: ${({ theme }) => theme.body};
  }

  .themeToggler {
  background: ${({ theme }) => theme.text};
}

  .themeToggler svg {
    fill: ${({ theme }) => theme.toggleBorder};
  }

  .themeToggler:hover svg {

  }

  .links .cv:hover {
    background-color: ${({ theme }) => theme.highlight};
  }

  .links a svg:hover, .arrows svg  {
    fill: ${({ theme }) => theme.highlight};
  }

  nav .nav:hover, .nav.active {
    color: ${({ theme }) => theme.highlight};

  }

  .Tooltip-Tip {
    background-color: ${({ theme }) => theme.highlight};
    color: ${({ theme }) => theme.body};
  }

  .intro h1 span { 
    color: ${({ theme }) => theme.highlight};
  }

  // .projectImage:hover img {
  //   filter: drop-shadow(0 0 0.15rem ${({ theme }) => theme.highlight});
  //   transform: scale(1.005);
  // }
  
  
  .projectNotes a {
    color: ${({ theme }) => theme.highlight};
  }

  .aboutText p span {
    color: ${({ theme }) => theme.highlight};
  }

  .contactForm input, .contactForm textarea {
   border: 1px solid  ${({ theme }) => theme.inputBorder};
  }

  .contactForm input:focus, .contactForm textarea:focus {
    outline: 2px solid ${({ theme }) => theme.highlight};
  } 

  .submitButton {
    background-color: ${({ theme }) => theme.highlight};
  }

    `;

// All code taken and modified from https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/

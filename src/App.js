import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/darkMode/globalStyles";
import { lightTheme, darkTheme } from "./components/darkMode/themes";
import { useDarkMode } from "./components/darkMode/useDarkMode";
import Toggle from "./components/darkMode/Toggler";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    console.log(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="container">
          <Toggle theme={theme} toggleTheme={themeToggler} />

          {/* <Header /> */}
          {/* <Body /> */}
          <Intro />
          <Projects />
          <About />
          <Contact />
          {/* <Footer /> */}
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;

import "./normalize.css";
import "./App.scss";
import "./utils/animateElements/animateElements.css";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { animateOnScroll } from "./utils/animateElements/animateOnScroll";
// componenets
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// light/dark mode
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/darkMode/globalStyles";
import { lightTheme, darkTheme } from "./components/darkMode/themes";
import { useDarkMode } from "./components/darkMode/useDarkMode";
import Toggle from "./components/darkMode/Toggler";

function App() {
  const scrollPosition = useSelector((state) => state.scrollPosition);

  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    animateOnScroll();
  }, [scrollPosition]);

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={themeToggler} />
        {/* <Header /> */}
        <div className="container">
          <Intro />
          <Projects />
          <About />
          <Contact />
        </div>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;

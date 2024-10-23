import "./styles/normalize.css";
import "./styles/App.scss";
import "./utils/animateElements/animateElements.css";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { animateOnScroll } from "./utils/animateElements/animateOnScroll";
// components
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import About from "./components/About";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
// light/dark mode
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/darkMode/globalStyles";
import { lightTheme, darkTheme } from "./components/darkMode/themes";
import { useDarkMode } from "./components/darkMode/useDarkMode";
import Skills from "./components/Skills";

function App() {
  const scrollPosition = useSelector((state) => state.scrollPosition);

  const [theme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    animateOnScroll();
  }, [scrollPosition]);

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Header />
        <div className="container">
          <Intro />
          <Skills />
          <Projects />
          <About />
          {/* <Contact /> */}
        </div>
        {/* <Footer /> */}
      </>
    </ThemeProvider>
  );
}

export default App;

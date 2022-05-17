import "./App.scss";
import React from "react";
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
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Header />
        <div className="container">
          <Toggle theme={theme} toggleTheme={themeToggler} />

          {/* <Body /> */}
          <Intro />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;

import "./App.scss";

// componenets
import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
// react
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { types } from "./redux/types";
// light/dark mode
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/darkMode/globalStyles";
import { lightTheme, darkTheme } from "./components/darkMode/themes";
import { useDarkMode } from "./components/darkMode/useDarkMode";
import Toggle from "./components/darkMode/Toggler";

function App() {
  // const scrollPosition = useSelector((state) => state.scrollPosition);
  const dispatch = useDispatch();
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const handleScroll = () => {
    const position = window.pageYOffset;
    dispatch({
      type: types.SET_SCROLL_POSITION,
      payload: { position: position },
    });
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

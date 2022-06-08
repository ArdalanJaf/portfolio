import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { types } from "../../redux/types";

export const useDarkMode = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    dispatch({ type: types.SET_THEME, payload: { theme: mode } });
  };

  const themeToggler = () => {
    let links = Array.from(
      document.querySelectorAll(".intro .cv, .intro svg, .themeToggler")
    );
    links.forEach((link) => (link.style.transition = "all 0.3s ease-in-out"));

    theme === "light" ? setMode("dark") : setMode("light");
    setTimeout(() => {
      links.forEach((link) => (link.style.transition = "all 0.1s ease-in-out"));
    }, 300);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme &&
      dispatch({ type: types.SET_THEME, payload: { theme: localTheme } });
  }, []);
  return [theme, themeToggler];
};

// All code taken and modified from https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/

import { useEffect, useState } from "react";
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
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme &&
      dispatch({ type: types.SET_THEME, payload: { theme: localTheme } });
  }, []);
  return [theme, themeToggler];
};

// All code taken and modified from https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/

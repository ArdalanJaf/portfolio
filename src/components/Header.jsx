import React, { useEffect } from "react";
import Links from "./Links";
import { useSelector, useDispatch } from "react-redux";
import { types } from "../redux/types";

function Header() {
  const scrollPosition = useSelector((state) => state.scrollPosition);
  const dispatch = useDispatch();

  const handleScroll = () => {
    const position = window.pageYOffset;
    dispatch({
      type: types.SET_SCROLL_POSITION,
      payload: { position: position },
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={
        scrollPosition <= window.innerHeight * 0.46 ? "hideHeader" : ""
      }
    >
      <a href="#">
        <h2>ARDALAN JAF</h2>
      </a>

      <Links />
    </header>
  );
}

export default Header;

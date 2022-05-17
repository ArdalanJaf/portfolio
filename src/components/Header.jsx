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
      payload: { now: position },
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={
        scrollPosition.now < window.innerHeight * 0.9
          ? "hideHeader"
          : scrollPosition.now >= scrollPosition.prev
          ? "hideHeader"
          : ""
      }
    >
      <div className="headerContainer">
        <a href="www.ardalanjaf.com">
          <h2>ARDALAN</h2>
        </a>

        <Links header={true} />
      </div>
    </header>
  );
}

export default Header;

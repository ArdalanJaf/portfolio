import React, { useEffect } from "react";
import Links from "./Links";
import Nav from "./Nav";
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header>
      <div
        className={`headerContainer ${
          scrollPosition.now < window.innerHeight * 0.6
            ? "hideHeader"
            : scrollPosition.now > scrollPosition.prev
            ? "hideHeader"
            : ""
        }`}
      >
        <a href="https://www.ardalanjaf.com/">
          <h2>ARDALAN JAF</h2>
        </a>
        <Nav />
        {/* </div> */}
        <Links header={true} />
      </div>
    </header>
  );
}

export default Header;

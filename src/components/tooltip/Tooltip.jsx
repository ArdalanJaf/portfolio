import React, { useEffect, useState } from "react";
import "./tooltip.css";

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (hover === true) {
      timeout = setTimeout(() => {
        setActive(true);
      }, props.delay || 600);
    }
    return () => {
      clearTimeout(timeout);
      setActive(false);
    };
  }, [hover]);

  const showTip = () => {
    // timeout = setTimeout(() => {
    //   setActive(true);
    // }, props.delay || 400);
    setHover(true);
  };

  const hideTip = () => {
    // clearTimeout(timeout);
    // setActive(false);
    setHover(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {props.children}
      {active && (
        <div className={`Tooltip-Tip ${props.direction || "bottom"}`}>
          {/* Content */}
          {props.content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;

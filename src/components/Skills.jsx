import React from "react";
import { icons } from "../config/icons";

function Skills() {
  return (
    <div className="skills animateOnScroll fadeUp">
      {/* <h3>SKILLS</h3> */}
      <div className="skillsList">
        {Object.keys(icons.skills).map((skill) => {
          return icons.skills[skill];
        })}
      </div>
    </div>
  );
}

export default Skills;

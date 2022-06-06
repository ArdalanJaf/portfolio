import React from "react";
import { icons } from "../config/icons";
import Tooltip from "./tooltip/Tooltip";

function Skills() {
  return (
    <div className="skills animateOnScroll fadeUp">
      {/* <h3>SKILLS</h3> */}
      <div className="skillsList">
        {Object.keys(icons.skills).map((skill, index) => {
          return (
            <Tooltip content={skill} delay="0" key={index}>
              {icons.skills[skill]}
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;

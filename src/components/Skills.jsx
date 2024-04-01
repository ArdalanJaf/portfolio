import React from "react";
import { icons } from "../config/icons";
import Tooltip from "./tooltip/Tooltip";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>SKILLS</h2>
    <div className="animateOnScroll fadeUp skillsListsContainer">
      {Object.keys(icons.skills).map((skillGroupKey => {
        return (
          <div className="skillList">
                        <h4>{skillGroupKey}</h4>
          <div className="skillsListIcons">
          {Object.keys(icons.skills[skillGroupKey]).map((skill, index) => {
            return (
              <div>
              <Tooltip content={skill} delay="0" key={index}>
                {icons.skills[skillGroupKey][skill]}
              </Tooltip></div>
            );
          })}
        </div>          </div>

        )
      }))}
     
    </div>
     </section>
  );
}

export default Skills;

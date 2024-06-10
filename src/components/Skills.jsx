import React from "react";
import { icons } from "../config/icons";
import Tooltip from "./tooltip/Tooltip";

function Skills() {
  return (
    <section className="section skills" id="skills">
      <h2>SKILLS</h2>
    <div className="skillsListsContainer">
      {Object.keys(icons.skills).map((skillGroupKey => {
        return (
          <div className="skillList animateOnScroll fadeUp ">
                        <h3>{skillGroupKey}</h3>
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

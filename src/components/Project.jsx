import React from "react";
import { icons } from "../config/icons";

function Project(props) {
  const { project } = props;
  const image = require("../assets/" + project.image);

  return (
    <div className="project">
      <>
        <div className="projectImage animateOnScroll fadeUp">
          <img src={image} alt={project.name} />
          <a href={project.links.site}></a>
        </div>
        <div className="projectInfo animateOnScroll fadeUp">
          <h3>{project.name}</h3>

          <p>{project.notes}</p>
          <div className="projectLinks">
            <a href={project.links.git} className="gitFrontSVG">
              {icons.gitOctoCat}
            </a>
            {project.links.gitBack && (
              <a href={project.links.gitBack} className="gitBackSVG">
                {icons.gitOctoCat}
              </a>
            )}
          </div>
        </div>
      </>
    </div>
  );
}

export default Project;

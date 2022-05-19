import React from "react";

function Project(props) {
  const { project } = props;
  const image = require("../assets/" + project.image);

  return (
    <div className="project">
      <>
        <div className="projectImage animateOnScroll fadeUp">
          <img src={image} alt={project.name} />
        </div>
        <div className="projectInfo animateOnScroll fadeUp">
          <h3>{project.name}</h3>

          <p>{project.notes}</p>
          <div className="projectLinks">
            <a href={project.links.site}>SITE</a>
            <a href={project.links.git}>GIT</a>
            {project.links.gitBack && (
              <a href={project.links.gitBack}>GIT-BACK</a>
            )}
          </div>
        </div>
      </>
    </div>
  );
}

export default Project;

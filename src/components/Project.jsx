import React, { useState } from "react";
// import folder from "../static";
// import logo from "../static/findSparksIcon.svg";

function Project(props) {
  const { project } = props;
  // const [open, setOpen] = useState(true);
  // onClick={() => setOpen(!open)}
  const image = require("../assets/" + project.image);

  return (
    <div className="project">
      <>
        <div className="projectImage">
          <img
            src={image}
            alt="website"
            className={project.phone ? "phone" : ""}
          />
        </div>
        <div className="projectInfo">
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

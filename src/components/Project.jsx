import React, { useState } from "react";
import image from "../static/findSparks.png";
import logo from "../static/findSparksIcon.svg";

function Project(props) {
  const { project } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className="project" onClick={() => setOpen(!open)}>
      {!open && <img src={logo} alt="logo" />}

      {open && (
        <>
          <div className="projectImage">
            <img src={image} alt="website" />
          </div>
          <div className="projectInfo">
            <h3>{project.name}</h3>

            <p>{project.notes}</p>
            <a href={project.links.site}>SITE</a>
            <a href={project.links.git}>GIT</a>
            {project.links.gitBack && (
              <a href={project.links.gitBack}>GIT-BACK</a>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Project;

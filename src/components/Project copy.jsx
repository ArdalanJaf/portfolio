import React from "react";

function Project(props) {
  const { project } = props;

  return (
    <div className="project">
      <h3>{project.name}</h3>

      <div className="iframeWrap">
        <iframe src={project.links.site} title={project.name}></iframe>
      </div>

      <p>{project.notes}</p>

      <a href={project.links.site}>SITE</a>
      <a href={project.links.git}>GIT</a>
      <a href={project.links.gitBack}>GIT-BACK</a>
    </div>
  );
}

export default Project;

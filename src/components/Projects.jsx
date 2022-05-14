import React from "react";
import Project from "./Project";
import { projects } from "../config/projects";

function Projects() {
  return (
    <section className="projects">
      <h2>PROJECTS</h2>
      <div className="projectContainer">
        {projects.map((project, index) => {
          return <Project project={project} key={index} />;
        })}
      </div>
    </section>
  );
}

export default Projects;

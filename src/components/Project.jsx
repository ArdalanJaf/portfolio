import React from "react";
import { icons } from "../config/icons";
import Tooltip from "./tooltip/Tooltip";

function Project(props) {
  const { project } = props;
  const image = require("../assets/" + project.image);

  return (
    <div className="project">
      <>
        <div className="projectImage animateOnScroll fadeUp">
          <img src={image} alt={project.name} />
          {/* <a href={project.links.site} target="_blank" rel="noreferrer"></a> */}
        </div>

        <div className="projectInfo animateOnScroll fadeUp">
        <h3>{project.name}</h3>

          {project.notes}

          {/* <p className="tech">{project.tech}</p> */}
          {project.tech}

          <div className="projectLinks">
            <a
              href={project.links.git}
              target="_blank"
              rel="noreferrer"
              className="gitFrontSVG"
            >
             
              <Tooltip content="View front-end git repository">{icons.gitOctoCat}  Front</Tooltip>
            </a>
            {project.links.gitBack && (
              <a
                href={project.links.gitBack}
                target="_blank"
                rel="noreferrer"
                className="gitBackSVG"
              >
                
                <Tooltip content="View back-end git repository">
                  {icons.gitOctoCat} Back
                </Tooltip>
              </a>
            )}
            {project.links.site && (
                       <a
                       href={project.links.site}
                       target="_blank"
                       rel="noreferrer"
                       className="liveSiteSVG"
                     >
              <Tooltip content="View deployed site">
                       
                         {icons.liveSite} Site
                       </Tooltip>
                     </a>
            )}
          </div>
        </div>
      </>
    </div>
  );
}

export default Project;

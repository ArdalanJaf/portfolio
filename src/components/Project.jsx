import React from "react";

function Project() {
  const project = {
    name: "Nowness Homage",
    links: {
      git: "https://github.com/ArdalanJaf/homage-nowness",
      site: "https://homage-nowness.netlify.app/",
    },
    notes:
      "This main page homage-piece was done to test my CSS skills. Not this was done before I had much experience with javascript, so I had to think creatively to make certain functionality work (e.g. the pop-up banner at the top)",
  };

  return (
    <div className="project">
      <h3>{project.name}</h3>
      <div className="iframeWrap">
        <iframe src={project.links.site} title={project.name}></iframe>
      </div>
    </div>
  );
}

export default Project;

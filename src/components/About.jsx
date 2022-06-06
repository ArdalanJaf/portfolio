import React from "react";
import Skills from "./Skills";

function About() {
  const image = require("../assets/IMG_4566.jpg");

  return (
    <section className="section about" id="about">
      <h2>ABOUT</h2>
      <div className="flexContainer">
        <div className="aboutImage animateOnScroll fadeUp">
          <img src={image} alt="me!"></img>
        </div>
        <div className="aboutText animateOnScroll fadeUp">
          {/* 
          1.can you do the job?
          2.Will you be a good team player?
          3. how quickly can you learn/progress?  
          ttRPGs (nerdy), (social?), ()
          */}
          <p>
            Hello World! <br />
            <br></br>
            I'm Ardalan Al-Jaf, an <span>energetic</span> and{" "}
            <span>detail-orientated</span> software developer born and based in
            London.
          </p>
          <br></br>
          <p>
            I bring over a decade of diverse experience in <span>learning</span>
            , <span>team-work</span> and <span>problem-solving</span> from
            various fields to software-engineering.
          </p>
          <br></br>
          <p>
            Aside from coding, I enjoy <span>building with my hands</span>,{" "}
            <span>doodling</span>, grabbing{" "}
            <span>street-food with friends</span> and{" "}
            <span>table-top role playing games</span>.
          </p>
        </div>
      </div>
      <Skills />
    </section>
  );
}

export default About;

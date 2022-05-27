import React from "react";
import Interests from "./Interests";
import Skills from "./Skills";

function About() {
  return (
    <section className="section about" id="about">
      <h2>ABOUT</h2>
      <div className="flexContainer">
        <div className="aboutImage animateOnScroll fadeUp">
          <img
            src="data:image/jpeg;base64,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"
            alt="me!"
          ></img>
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
            I'm Ardalan Al-Jaf, an energetic and detail-orientated Full-Stack
            Web-Developer born and based in London.
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
          {/* <Interests /> */}
        </div>
      </div>
      <Skills />
    </section>
  );
}

export default About;

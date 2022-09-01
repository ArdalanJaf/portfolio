import React from "react";
import Skills from "./Skills";

function About() {
  const image = require("../assets/IMG_4566.png");

  return (
    <section className="section about" id="about">
      <h2>ABOUT</h2>
      <div className="flexContainer">
        <div className="aboutImage animateOnScroll fadeUp">
          <img src={image} alt="me!"></img>
        </div>
        <div className="aboutText animateOnScroll fadeUp">
          <p>
            Hello World! <br />
            <br></br>
            I'm Ardalan Al-Jaf, an <span>energetic</span> and{" "}
            <span>detail-orientated</span> software engineer born and raised in
            South-East London.
          </p>
          <br></br>
          <p>
            I'm a <span>commited</span> and <span>empathetic</span>{" "}
            collaborator, bringing over a decade of diverse experience in{" "}
            <span>learning</span>, <span>communication</span> and{" "}
            <span>problem-solving</span> to software-engineering.
          </p>
          <br></br>
          <p>
            Outside of coding, I enjoy creative pursuits, traveling, keeping
            physically active and meeting interesting people whilst exploring
            niche sub-cultures.
          </p>
        </div>
      </div>
      <Skills />
    </section>
  );
}

export default About;

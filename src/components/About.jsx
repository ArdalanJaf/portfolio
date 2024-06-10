import React from "react";

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
            I'm <span>Ardalan Al-Jaf</span>, a full-stack software engineer from London.
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
            Outside of coding, I enjoy traveling,
            exercise, drawing and building with my hands.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

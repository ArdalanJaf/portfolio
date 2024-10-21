import React from "react";
// import { ABOUT_IMG_URL } from "../config/assetUrls";

function About() {
  return (
    <section className="section about" id="about">
      <h2>ABOUT</h2>
      <div className="flexContainer">
        {/* <div className="aboutImage animateOnScroll fadeUp">
          <img src={ABOUT_IMG_URL} alt="portrait of Ardalan"/>
        </div> */}
        <div className="aboutText animateOnScroll fadeUp">
          <p>
            Hi! I'm a full-stack software engineer from London.
          </p>
          <br></br>
          <p>
            I'm a <span>commited</span>
            collaborator and <span>tenacious</span> problem-solver, bringing over a decade of diverse experience in{" "}
            <span>learning</span>, <span>communication</span> and{" "}a
            <span>goals-centered</span> approach to software-engineering.
          </p>
          <br></br>
          <p>
            Outside of coding, I enjoy traveling,
            exercise, drawing and a healthy amount of nerdy hobbies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

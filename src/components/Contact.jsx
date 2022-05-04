import React from "react";

function Contact() {
  return (
    <section className="contact">
      <h2>CONTACT</h2>
      <div className="flexContainer">
        <div className="contactText">
          {" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            ullam atque, quidem dolorem placeat et nemo. Tempora aperiam culpa
            deleniti maiores sit quam quasi beatae eos, soluta ea doloremque
            quisquam, suscipit voluptatem at perspiciatis officiis sequi. Quod,
            nihil. Eum, modi?
          </p>
        </div>
        <form className="contactForm">
          <input type="text" name="name" id="name" placeholder="YOUR NAME" />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="YOUR EMAIL"
          />
          <textarea name="message" id="message" rows="6" />
          <button type="submit" name="submit">
            GET IN TOUCH
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

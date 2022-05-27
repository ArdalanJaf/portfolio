import React from "react";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section className="section contact" id="contact">
      <h2>CONTACT</h2>
      <div className="flexContainer">
        <div className="contactText animateOnScroll fadeUp">
          {" "}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            ullam atque, quidem dolorem placeat et nemo. Tempora aperiam culpa
            deleniti maiores sit quam quasi beatae eos, soluta ea doloremque
            quisquam, suscipit voluptatem at perspiciatis officiis sequi. Quod,
            nihil. Eum, modi?
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;

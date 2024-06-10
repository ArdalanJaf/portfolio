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
            If you have any questions please send me a
            message and I will get back to you shortly.
            <br></br>     <br></br>
            Alternatively, email me directly: <br></br>     <br></br>
            <span>CONTACT@ARDALANJAF.COM</span>
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;

// CONTACT CONTENT
// ATTACH CV
// RE-UPLOAD FRONT

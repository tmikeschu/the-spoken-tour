import React from "react"
import ContactForm from "./ContactForm/ContactForm"

const Contact = () => (
  <article className="Contact">
    <h3>We would love to hear from you!</h3>
    <section>
      <p>
        Email us at{" "}
        <a
          href="mailto:thespokentour@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          thespokentour@gmail.com
        </a>
      </p>
      <p>
        Follow us on Instagram{" "}
        <a
          href="https://www.instagram.com/thespokentour/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @thespokentour
        </a>
      </p>
    </section>
    <ContactForm />
  </article>
)

export default Contact

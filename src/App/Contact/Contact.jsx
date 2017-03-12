import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm'
import '../App.css';

export default class Contact extends Component {
  render() {
    return (
      <article className="contact">
        <h3>We would love to hear from you!</h3>
        <section>
          <p>Email us at <a href="mailto:thespokentour@gmail.com" target="_blank">thespokentour@gmail.com</a></p>
          <p>Follow us on Instagram <a href="https://www.instagram.com/thespokentour/" target="_blank">@thespokentour</a></p>
        </section>
        <ContactForm />
      </article>
    );
  }
}


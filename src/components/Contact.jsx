import React, { Component } from 'react';
import '../stylesheets/App.css';

export default class Contact extends Component {
  render() {
    return (
      <article className="contact">
        <h3>We would love to hear from you!</h3>
        <p>Email us at <a href="mailto:thespokentour@gmail.com">thespokentour@gmail.com</a></p>
        <p>Follow us on Instagram <a href="https://www.instagram.com/thespokentour/">@thespokentour</a></p>
      </article>
    );
  }
}


import React, { Component } from 'react';
import '../stylesheets/App.css';

export default class Podcast extends Component {
  render() {
    return (
      <article className="podcast">
        <p>Coming soon!</p>
        <iframe width="100%" height="600" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/290948600&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
      </article>
    );
  }
}

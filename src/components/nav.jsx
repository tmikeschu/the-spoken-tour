import React, { Component } from 'react';
import '../stylesheets/App.css';

class Nav extends Component {
  render() {
    return (
      <article className="nav">
        <ul>
          <li><a href="#">The Trip</a></li>
          <li><a href="#">Podcast Episodes</a></li>
          <li><a href="#">Map</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </article>
    );
  }
}

export default Nav;

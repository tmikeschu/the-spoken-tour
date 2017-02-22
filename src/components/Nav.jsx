import React, { Component } from 'react';
import { Link } from 'react-router'
import '../stylesheets/App.css';

class Nav extends Component {
  render() {
    return (
      <article className="nav">
        <ul>
          <li><Link to="about">The Trip</Link></li>
          <li><Link to="instagram">Instagram</Link></li>
          <li><a href="#">Podcast Episodes</a></li>
          <li><a href="#">Map</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </article>
    );
  }
}

export default Nav;

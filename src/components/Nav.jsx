import React, { Component } from 'react';
import { Link } from 'react-router'
import '../stylesheets/App.css';

class Nav extends Component {
  render() {
    return (
      <article className="nav">
        <ul>
          {/*<li><a href="/about">The Trip</a></li>*/}
          <li><Link to="about">The Trip</Link></li>
          <li><a href="#">Podcast Episodes</a></li>
          <li><a href="map">Map</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </article>
    );
  }
}

export default Nav;

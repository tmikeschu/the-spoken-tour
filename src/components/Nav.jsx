import React, { Component } from 'react';
import { Link } from 'react-router'
import '../stylesheets/App.css';

export default class Nav extends Component {
  render() {
    return (
      <article className="nav">
        <ul>
          <li><Link to="about">The Trip</Link></li>
          <li><Link to="#">Podcast Episodes</Link></li>
          <li><Link to="map">Map</Link></li>
          <li><Link to="#">Contact</Link></li>
        </ul>
      </article>
    );
  }
}

import React, { Component } from 'react';
import NavLink from './NavLink'
import '../stylesheets/App.css';

export default class Nav extends Component {
  render() {
    return (
      <article className="nav">
        <ul>
          <li><NavLink to="about">The Trip</NavLink></li>
          <li><NavLink to="map">Map</NavLink></li>
          <li><NavLink to="instagram">Instagram</NavLink></li>
          <li><NavLink to="podcast">Podcast Episodes</NavLink></li>
          <li><NavLink to="contact">Contact</NavLink></li>
        </ul>
      </article>
    );
  }
}

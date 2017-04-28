import React, { Component } from 'react';
import NavLink from './NavLink/NavLink'
import '../App.css';

export default class Nav extends Component {
  render() {
    return (
      <article className="nav">
        <ul>
          <li><NavLink to="about">Trip</NavLink></li>
          <li><NavLink to="map">Map</NavLink></li>
          <li><NavLink to="instagram">Photos</NavLink></li>
          <li><NavLink to="podcast">Podcast</NavLink></li>
          <li><NavLink to="contact">Contact</NavLink></li>
          <li><NavLink to="support">Support</NavLink></li>
        </ul>
      </article>
    );
  }
}

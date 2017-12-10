import React from 'react'
import NavLink from './NavLink/NavLink'

const Nav = () => (
  <article className="nav">
    <ul>
      <li><NavLink to="about">Trip</NavLink></li>
      <li><NavLink to="map">Map</NavLink></li>
      <li><NavLink to="podcast">Podcast</NavLink></li>
      <li><NavLink to="contact">Contact</NavLink></li>
      <li><NavLink to="support">Support</NavLink></li>
    </ul>
  </article>
)

export default Nav


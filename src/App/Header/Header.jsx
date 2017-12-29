import React from 'react'
import { Link } from 'react-router-dom'
import logo from './wheel.svg'

const Header = () => (
  <article className="Header">
    <img src={logo} className="Header__logo" alt="logo" />
    <h3><Link to="/landing">The Spoken Tour</Link></h3>
  </article>
)

export default Header

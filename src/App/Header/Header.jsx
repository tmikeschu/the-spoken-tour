import React from 'react'
import {  Link } from 'react-router'
import logo from './wheel.svg'
import '../App.css'

const Header = () => (
  <article className="header">
    <img src={logo} className="header-logo" alt="logo" />
    <h3><Link to="/landing">The Spoken Tour</Link></h3>
  </article>
)

export default Header

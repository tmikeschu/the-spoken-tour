import React, { Component } from 'react';
import {  Link } from 'react-router'
import logo from '../wheel.svg';
import '../stylesheets/App.css';

export default class Header extends Component {
  render() {
    return (
      <article className="header">
        <img src={logo} className="header-logo" alt="logo" />
        <h3><Link to="/landing">The Spoken Tour</Link></h3>
      </article>
    );
  }
}

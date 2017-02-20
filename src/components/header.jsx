import React, { Component } from 'react';
import logo from '../wheel.svg';
import '../stylesheets/App.css';

class Header extends Component {
  render() {
    return (
      <article className="header">
        <img src={logo} className="header-logo" alt="logo" />
        <h2><a href="#">The Spoken Tour</a></h2>
        <img src={logo} className="header-logo" alt="logo" />
      </article>
    );
  }
}

export default Header;

import React, { Component } from 'react';
import { Link } from 'react-router';

// Styles
import '../stylesheets/App.css';

export default class Home extends Component {
  render() {
    return (
      <article className="home">
        <div className="content">
          <Link to="/about">Find out more...</Link>
        </div>
      </article>
    );
  }
}

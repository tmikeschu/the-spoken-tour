// Libraries
import React, { Component } from 'react';

// Components
import Header from './Header.jsx';
import Nav from './Nav.jsx';

//  Styles
import '../stylesheets/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <section className="header-nav">
          <div className="spacer"></div>
          <Header />
          <Nav />
        </section>
        { this.props.children }
      </div>
    );
  }
}

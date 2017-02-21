// Libraries
import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router'

// Components
import Header from './Header.jsx';
import Nav from './Nav.jsx';
import About from './About.jsx';

//  Styles
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Nav />
      </div>
    );
  }
}

export default App;

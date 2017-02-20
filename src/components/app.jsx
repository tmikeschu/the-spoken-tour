import React, { Component } from 'react';
import Header from './header.jsx';
import Nav from './nav.jsx';
import About from './about.jsx';
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Nav />
        <About />
      </div>
    );
  }
}

export default App;

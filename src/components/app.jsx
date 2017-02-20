import React, { Component } from 'react';
import Header from './header.jsx';
import Nav from './nav.jsx';
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

import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router'
import Header from './header.jsx';
import Nav from './nav.jsx';
import About from './about.jsx';
import Home from './home.jsx';
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Nav />
        <Router history={browserHistory}>
          <Route path="/" component={Home}>
            <Route path="about" component={About}/>
          </Route>
        </Router>,
      </div>
    );
  }
}

export default App;

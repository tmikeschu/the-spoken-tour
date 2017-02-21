// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

// Components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';

// Styles
import './stylesheets/App.css';

ReactDOM.render(
  // <App />,
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="main" component={App} />
    <Route path="about" component={About} />
  </Router>,
  document.getElementById('root')
);

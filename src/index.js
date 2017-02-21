// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

// Components
import App from './components/App';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import TripMap from './components/Map';

// Styles
import './stylesheets/App.css';

ReactDOM.render(
  // <App />,
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route component={App}>
      <Route path="about" component={About} />
      <Route path="map" component={TripMap} />
    </Route>
  </Router>,
  document.getElementById('root')
);

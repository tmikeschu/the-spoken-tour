// Libraries
import React from 'react';
import { Router, Route, browserHistory } from 'react-router'

// Components
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Instagram from './components/Instagram.jsx';
import EmbeddedMap from './components/EmbeddedMap.jsx';
import Contact from './components/Contact.jsx';
import Podcast from './components/Podcast.jsx';

// Styles
import './stylesheets/App.css';

// Routes
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route component={App}>
      <Route path="about" component={About} />
      <Route path="instagram" component={Instagram} />
      <Route path="map" component={EmbeddedMap} />
      <Route path="contact" component={Contact} />
      <Route path="podcast" component={Podcast} />
    </Route>
  </Router>
);

export default routes;

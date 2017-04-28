// Libraries
import React from 'react';
import { Router, Route, browserHistory } from 'react-router'

// Components
import App from './App/App.jsx';
import Home from './App/Home/Home.jsx';
import Landing from './App/Landing/Landing.jsx';
import About from './App/About/About.jsx';
import Instagram from './App/Instagram/Instagram.jsx';
import Map from './App/Map/Map.jsx';
import Contact from './App/Contact/Contact.jsx';
import Podcast from './App/Podcast/Podcast.jsx';
import Support from './App/Support/Support.jsx';

// Styles
import './App/App.css';

// Routes
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route component={App}>
      <Route path="landing" component={Landing} />
      <Route path="about" component={About} />
      <Route path="instagram" component={Instagram} />
      <Route path="map" component={Map} />
      <Route path="contact" component={Contact} />
      <Route path="podcast" component={Podcast} />
      <Route path="support" component={Support} />
    </Route>
  </Router>
);

export default routes;

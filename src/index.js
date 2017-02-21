// Libraries
import 'react';
import { render } from 'react-dom';

// Routes
import routes from './router.js'

// Styles
import './stylesheets/App.css';

// Config
import config from './config.js'
var google_key = config.GOOGLE_MAPS_KEY;

// Render
render(
  routes,
  document.getElementById('root')
);

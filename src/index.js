// Libraries
import 'react';
import { render } from 'react-dom';

// Routes
import routes from './router.js'

// Styles
import './stylesheets/App.css';

// Render
render(
  routes,
  document.getElementById('root')
);

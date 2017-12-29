// Libraries
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import spokenApp from "./Redux/reducers/index"

import App from './App/App.jsx'
import Home from './App/Home/Home.jsx'
import Landing from './App/Landing/Landing.jsx'
import About from './App/About/About.jsx'
import Map from './App/Map/MapContainer'
import Contact from './App/Contact/Contact.jsx'
import Podcast from './App/Podcast/Podcast.jsx'
import Support from './App/Support/Support.jsx'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store = createStore(
  spokenApp,
  devTools,
  applyMiddleware(thunk)
)

const routes = (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <App>
          <Route path="/landing" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/map" component={Map} />
          <Route path="/contact" component={Contact} />
          <Route path="/podcast" component={Podcast} />
          <Route path="/support" component={Support} />
        </App>
      </div>
    </Router>
  </Provider>
)

export default routes

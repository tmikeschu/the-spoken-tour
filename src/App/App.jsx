import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header/Header.jsx'
import Nav from './Nav/Nav.jsx'
import './App.css'

const App = ({ children }) => (
  <div className="container">
    <section className="header-nav">
      <div className="spacer"></div>
      <Header />
      <Nav />
    </section>
    { children }
  </div>
)

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App


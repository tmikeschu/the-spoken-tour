// Libraries
import React from 'react'

// Components
import Header from './Header/Header.jsx'
import Nav from './Nav/Nav.jsx'

//  Styles
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

export default App


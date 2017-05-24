import React from 'react'
import { Link } from 'react-router'

// Styles
import '../App.css'

const Home = () => (
  <article className="home">
    <img src="http://www.clipartbest.com/cliparts/7ca/6EB/7ca6EBkMi.png" alt="bicycle"/>
    <div className="content">
      <Link to="/landing">Pedal to our site!</Link>
    </div>
  </article>
)

export default Home


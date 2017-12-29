import React from 'react'
import { Link } from 'react-router-dom'
import mobileLogo from './spoken-logo-mobile.jpeg';
import logo from './spoken-logo.jpg';

const Home = () => (
  <article className="Home">
    <img className="Home__logo" src={logo} alt="spoken logo" hidden />
    <img className="Home__logo--mobile" src={mobileLogo} alt="spoken logo mobile" hidden/>
    <img className="Home__bike" src="http://www.clipartbest.com/cliparts/7ca/6EB/7ca6EBkMi.png" alt="bicycle"/>
    <div className="content">
      <Link to="/landing">Pedal to our site!</Link>
    </div>
  </article>
)

export default Home

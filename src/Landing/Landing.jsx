import React, { Component } from 'react';
import { Link } from 'react-router';
import contact from '../contact_logo.jpg';
import podcast from '../podcast_logo.jpg';
import map from '../map_logo.jpg';
import instagram from '../instagram_logo.jpg';
import '../stylesheets/App.css';

export default class Landing extends Component {
  render() {
    return (
      <section className="landing">
        <article>
          <Link to="map"><img src={map} alt="map"/></Link>
          <Link to="podcast"><img src={podcast} alt="podcast"/></Link>
          <Link to="contact"><img src={contact} alt="contact"/></Link>
          <Link to="instagram"><img src={instagram} alt="instagram"/></Link>
        </article>
      </section>
    )
  }
}

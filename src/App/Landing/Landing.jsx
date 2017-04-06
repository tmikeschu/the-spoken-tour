import React, { Component } from 'react';
import { Link } from 'react-router';
import contact from './contact_logo.png';
import podcast from './podcast_logo.png';
import map from './map_logo.png';
import instagram from './instagram_logo.png';
import '../App.css';

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

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
        <article className="logos">
          <Link to="map"><img src={map} alt="map"/></Link>
          <Link to="podcast"><img src={podcast} alt="podcast"/></Link>
          <Link to="contact"><img src={contact} alt="contact"/></Link>
          <Link to="instagram"><img src={instagram} alt="instagram"/></Link>
        </article>

        <article className="video">
          <iframe src="https://player.vimeo.com/video/211431209?byline=0&portrait=0" 
            width="640" height="360" frameborder="0" 
            webkitallowfullscreen mozallowfullscreen allowfullscreen
          >
          </iframe>
          <iframe src="https://player.vimeo.com/video/207747360?byline=0&portrait=0"
            width="640" height="360" frameborder="0" 
            webkitallowfullscreen mozallowfullscreen allowfullscreen>
          </iframe>
          <iframe src="https://player.vimeo.com/video/211432545?byline=0&portrait=0" 
            width="640" height="360" frameborder="0" 
            webkitallowfullscreen mozallowfullscreen allowfullscreen>
          </iframe>
        </article>
      </section>
    )
  }
}

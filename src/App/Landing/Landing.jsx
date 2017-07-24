import React from 'react'
import { Link } from 'react-router'
import contact from './contact_logo.png'
import podcast from './podcast_logo.png'
import map from './map_logo.png'
import instagram from './instagram_logo.png'

const Landing = () => (
  <section className="landing">
    <article className="logos">
      <Link to="map"><img src={map} alt="map"/></Link>
      <Link to="podcast"><img src={podcast} alt="podcast"/></Link>
      <Link to="contact"><img src={contact} alt="contact"/></Link>
      <Link to="instagram"><img src={instagram} alt="instagram"/></Link>
    </article>

    <article className="video">
      <a href="http://www.5280.com/2017/05/du-alumni-to-bike-from-denver-to-patagonia/" target="_blank" rel="noopener noreferrer">
        Recently featured in Denver's 5280!
      </a>
      <iframe title="Episode 1" src="https://player.vimeo.com/video/211431209?byline=0&portrait=0"
        width="640" height="360" frameBorder="0"
        webkitallowfullscreen mozallowfullscreen allowFullScreen>
      </iframe>
      <iframe title="Episode 2" src="https://player.vimeo.com/video/207747360?byline=0&portrait=0"
        width="640" height="360" frameBorder="0"
        webkitallowfullscreen mozallowfullscreen allowFullScreen>
      </iframe>
      <iframe title="Episode 3" src="https://player.vimeo.com/video/211432545?byline=0&portrait=0"
        width="640" height="360" frameBorder="0"
        webkitallowfullscreen mozallowfullscreen allowfullscreen>
      </iframe>
      <iframe title="Episode 4" src="https://player.vimeo.com/video/215738304?byline=0&portrait=0"
        width="640" height="360" frameBorder="0"
        webkitallowfullscreen mozallowfullscreen allowFullScreen>
      </iframe>
    </article>
  </section>
)

export default Landing


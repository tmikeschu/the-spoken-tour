import React, { Component } from 'react';
import '../stylesheets/App.css';


export default class EmbeddedMap extends Component {
  render() {
    return (
      <article className="embedded-map">
        <h3>The Route</h3>
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1MNLYaokz7yXKh23E79fRcGDv1_s"></iframe>
        <section>
          <article className="legend">
            <h4>Legend</h4>
            <ul>
              <li><span style={{color: "#A00"}}>◉</span> → That's Us!</li>
              <li><span style={{color: "#1267FF"}}>◉</span> → Planned Route</li>
            </ul>
          </article>
          <article className="info">
            <p>Have a suggestion? A secret spot? Couch for us to crash on?</p>
            <p><span>Let</span> <span>us</span> <span>know</span>!</p>
            <p>(Drop a pin on our map)</p>
            <p>↓</p>
          </article>
          <article className="pin-form">
            <h4>Drop a Pin</h4>
            <p>...coming soon!</p>
          </article>
        </section>
      </article>
    );
  }
}

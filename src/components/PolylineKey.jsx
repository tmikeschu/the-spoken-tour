import React, { Component } from 'react';
import '../stylesheets/App.css';

export default class PolylineKey extends Component {
  render() {
    return (
      <article className="polyline-key">
        <h4>Routes Key</h4>
        <ul>
          <li>Denver to Carlsbad</li>
          <li>Carlsbad to Costa Rica</li>
          <li>Costa Rica to Darien Gap</li>
          <li>Darien Gap to Cabo Froward</li>
        </ul>
      </article>
    );
  }
}

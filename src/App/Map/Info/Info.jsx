import React, { Component } from 'react';
import '../../App.css'

export default class Info extends Component {
  render() {
    return (
      <article className="info">
        <p>Have an amiga in Antigua?  A tía in Tijuana? Couch to crash on in Colombia? Bike shop in Bolivia?</p>
        <p><span>Let</span> <span>us</span> <span>know</span>!</p>
        <p>↓</p>
        <p style={{
          textAlign: "center",
          display: this.props.tabIndex === 0 ? "block" : "none"}}>(go to the suggestion map and click to drop a pin!)</p>
      </article>
    );
  }
}


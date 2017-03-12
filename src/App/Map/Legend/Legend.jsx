import React, { Component } from 'react';
import '../../App.css'

export default class Legend extends Component {
  render() {
    return (
      <article className="legend">
        <h4>Legend</h4>
        <ul>
          <li style={{display: this.props.tabIndex === 1 ? 'none' : 'block'}}><span style={{color: "#1267FF"}}>◉</span> → Planned Route</li>
          <li style={{display: this.props.tabIndex === 0 ? 'none' : 'block'}}><span><img src="http://maps.google.com/mapfiles/ms/icons/cycling.png" alt=""/></span> → That's Us!</li>
          <li style={{display: this.props.tabIndex === 0 ? 'none' : 'block'}}><span style={{color: "#FB7064"}}>◉</span> → Suggestions</li>
        </ul>
      </article>
    );
  }
}

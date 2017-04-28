import React, { Component } from 'react';
import '../../App.css'

export default class SuggestionInfo extends Component {
  render() {
    const categories = {
      "stay": "Place to stay",
      "checkout": "Cool spot",
      "avoid": "Avoid this place",
      "bike_shop": "Bike shop",
      "other": "Other",
    }

    return (
      <article className="suggestion-info">
        <h4>Suggestion Info</h4>
        <p style={{display: this.props.currentSuggestion ? "none" : "block"}}>(click an existing pin on the map)</p>
        <section className="text" style={{ display: this.props.suggestionInfoIsActive ? "initial" : "none" }}>
          <p><span>Label</span>: { this.props.currentSuggestion && this.props.currentSuggestion.label}</p>
          <p><span>Description</span>: { this.props.currentSuggestion && this.props.currentSuggestion.description}</p>
          <p><span>Category</span>: { this.props.currentSuggestion && categories[this.props.currentSuggestion.category]}</p>
        </section>
      </article>
    );
  }
}

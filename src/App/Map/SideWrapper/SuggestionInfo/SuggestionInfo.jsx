import React from 'react'
import PropTypes from 'prop-types'

const SuggestionInfo = ({ currentSuggestion, suggestionInfoIsActive }) => {
  const categories = {
    "stay": "Place to stay",
    "checkout": "Cool spot",
    "avoid": "Avoid this place",
    "bike_shop": "Bike shop",
    "other": "Other",
  }

  return (
    <article className="SuggestionInfo">
      <h4>Suggestion Info</h4>
      <p style={{display: suggestionInfoIsActive ? "none" : "block"}}>(click an existing pin on the map)</p>
      <section className="text" style={{ display: suggestionInfoIsActive ? "initial" : "none" }}>
        <p><span>Label</span>: { currentSuggestion.label }</p>
        <p><span>Description</span>: { currentSuggestion.description }</p>
        <p><span>Category</span>: {  categories[currentSuggestion.category] }</p>
      </section>
    </article>
  )
}

SuggestionInfo.propTypes = {
  currentSuggestion: PropTypes.object.isRequired,
  suggestionInfoIsActive: PropTypes.bool.isRequired,
}

export default SuggestionInfo


import React from 'react'
import PropTypes from 'prop-types'

const SuggestionInfo = props => {
  const { currentSuggestion, suggestionInfoIsActive } = props

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
      <p style={{display: currentSuggestion ? "none" : "block"}}>(click an existing pin on the map)</p>
      <section className="text" style={{ display: suggestionInfoIsActive ? "initial" : "none" }}>
        <p><span>Label</span>: { currentSuggestion && currentSuggestion.label}</p>
        <p><span>Description</span>: { currentSuggestion && currentSuggestion.description}</p>
        <p><span>Category</span>: { currentSuggestion && categories[currentSuggestion.category]}</p>
      </section>
    </article>
  )
}

SuggestionInfo.propTypes = {
  currentSuggestion: PropTypes.object,
  suggestionInfoIsActive: PropTypes.bool.isRequired,
}

export default SuggestionInfo

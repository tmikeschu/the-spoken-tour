import React from 'react'
import PropTypes from 'prop-types'
import SuggestionMap from '../SuggestionMap/SuggestionMap'

const SuggestionMapContainer = props => {
  const {
    suggestions,
    pinFilters,
    setSuggestion,
    suggestionPin,
    showSuggestionInfo,
    currentLocation,
    routePoints,
    actualPath
  } = props

  const filterPins = (categories, suggestions) => {
    if (categories.length === 0) { return suggestions }
    return suggestions.filter(suggestion => (
      categories.some(category => (
        suggestion.category.includes(category)
      ))
    ))
  }

  const suggestionsPins = filterPins(pinFilters, suggestions)
  const fullHeightAndWidth = { width: '100%', height: '100vh' }
  const mapCenter = {
    lat: -1.6246706849414423,
    lng: -85.56376812500002
  }
  const mapZoom = 3

  return (
    <div style={fullHeightAndWidth}>
      <SuggestionMap
        setSuggestion={setSuggestion}
        suggestionPin={suggestionPin}
        showSuggestionInfo={showSuggestionInfo}
        currentLocation={currentLocation}
        zoom={mapZoom}
        center={mapCenter}
        suggestions={suggestionsPins}
        routePoints={routePoints}
        actualPath={actualPath}
      />
    </div>
  )
}

SuggestionMapContainer.propTypes = {
  suggestionPin: PropTypes.object,
  pinFilters: PropTypes.array.isRequired,
  suggestions: PropTypes.array.isRequired,
  currentLocation: PropTypes.object.isRequired,
  routePoints: PropTypes.array.isRequired,
  actualPath: PropTypes.array.isRequired,
  showSuggestionInfo: PropTypes.func.isRequired,
  setSuggestion: PropTypes.func.isRequired
}

export default SuggestionMapContainer


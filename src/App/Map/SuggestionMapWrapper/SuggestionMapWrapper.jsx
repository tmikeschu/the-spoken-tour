import React from 'react'
import PropTypes from 'prop-types'
import SuggestionMap from './SuggestionMap/SuggestionMapContainer'

const SuggestionMapWrapper = props => {
  const {
    suggestions,
    showSuggestionInfo,
    routePoints,
    actualPath
  } = props

  const fullHeightAndWidth = { width: '100%', height: '100vh' }
  const mapCenter = {
    lat: -1.6246706849414423,
    lng: -85.56376812500002
  }
  const mapZoom = 3

  return (
    <div style={fullHeightAndWidth}>
      <SuggestionMap
        showSuggestionInfo={showSuggestionInfo}
        zoom={mapZoom}
        center={mapCenter}
        suggestions={suggestions}
        routePoints={routePoints}
        actualPath={actualPath}
      />
    </div>
  )
}

SuggestionMapWrapper.propTypes = {
  suggestions: PropTypes.array.isRequired,
  routePoints: PropTypes.array.isRequired,
  actualPath: PropTypes.array.isRequired,
  showSuggestionInfo: PropTypes.func.isRequired,
}

export default SuggestionMapWrapper


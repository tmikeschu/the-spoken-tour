import React from "react"
import PropTypes from "prop-types"
import SuggestionMap from "./SuggestionMap/SuggestionMapContainer"

const SuggestionMapWrapper = ({ suggestions, showSuggestionInfo }) => {
  const fullHeightAndWidth = { width: "100%", height: "100%" }

  return (
    <div style={fullHeightAndWidth}>
      <SuggestionMap
        showSuggestionInfo={showSuggestionInfo}
        suggestions={suggestions}
      />
    </div>
  )
}

SuggestionMapWrapper.propTypes = {
  suggestions: PropTypes.array.isRequired,
  showSuggestionInfo: PropTypes.func.isRequired,
}

export default SuggestionMapWrapper

import React, { Component } from "react"
import PropTypes from "prop-types"
import SuggestionMapWrapper from "./SuggestionMapWrapper/SuggestionMapWrapper"
import SideWrapper from "./SideWrapper/SideWrapper"
import APIService from "../APIService/APIService"
import _ from "lodash"

const service = new APIService("https://spoken-api.herokuapp.com")
const fetchActions = [
  "fetchSuggestions",
  "fetchCurrentLocation",
  "fetchRoutePoints",
  "fetchActualPath"
]

class Map extends Component {
  componentDidMount() {
    fetchActions.forEach(a => this.props.actions[a](service))
  }

  showSuggestionInfo = latLng => {
    const suggestion = this.props.suggestions.find(s =>
      this.coordinatesCloseEnough(s.location, latLng)
    )

    this.props.actions.addCurrentSuggestion(suggestion)
    this.props.actions.toggleSuggestionInfo(true)
  }

  coordinatesCloseEnough = (suggestion, event) => (
    this.elevenDecimalPlaces(suggestion.lat) === this.elevenDecimalPlaces(event.lat()) &&
      this.elevenDecimalPlaces(suggestion.lng) === this.elevenDecimalPlaces(event.lng())
  )

  elevenDecimalPlaces = number => ( parseFloat(parseFloat(number).toFixed(11)))

  filterPins = (filters, suggestions) => (
    suggestions.filter(s =>
      filters.length === 0 || filters.includes("") || filters.includes(s.category)
    )
  )

  render() {
    const categories = _.uniq(this.props.suggestions.map(s => s.category))
    const filteredSuggestions = this.filterPins(this.props.pinFilters, this.props.suggestions)

    const suggestionMapWrapper = (
      <article>
        <SuggestionMapWrapper
          showSuggestionInfo={this.showSuggestionInfo}
          suggestions={filteredSuggestions}
        />
      </article>
    )

    return (
      <article className="map">
        { suggestionMapWrapper }
        <SideWrapper categories={categories} />
      </article>
    )
  }
}

Map.propTypes = {
  actions: PropTypes.shape({
    fetchSuggestions: PropTypes.func.isRequired,
    fetchCurrentLocation: PropTypes.func.isRequired,
    fetchRoutePoints: PropTypes.func.isRequired,
    fetchActualPath: PropTypes.func.isRequired,
    addCurrentSuggestion: PropTypes.func.isRequired,
    toggleSuggestionInfo: PropTypes.func.isRequired
  }),
  suggestions: PropTypes.array.isRequired,
  pinFilters: PropTypes.array.isRequired
}

export default Map

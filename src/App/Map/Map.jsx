import React, { Component } from "react"
import PropTypes from "prop-types"
import * as R from "ramda"
import SuggestionMapWrapper from "./SuggestionMapWrapper/SuggestionMapWrapper"
import SideWrapper from "./SideWrapper/SideWrapper"
import {
  actualPath,
  currentLocation,
  routePins,
  suggestionPins,
} from "../../csvs"

const mapData = [
  {
    data: suggestionPins,
    action: "addSuggestions",
  },
  {
    data: currentLocation,
    action: "addCurrentLocation",
  },
  {
    data: routePins,
    action: "addRoutePoints",
  },
  {
    data: actualPath,
    action: "addActualPath",
  },
]

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sideVisible: false,
    }
  }

  hydrate = data => {
    data.forEach(({ action, data: d }) => {
      this.props.actions[action](d)
    })
  }

  componentDidMount() {
    this.hydrate(mapData)
  }

  showSuggestionInfo = latLng => {
    const suggestion = this.props.suggestions.find(s =>
      this.coordinatesCloseEnough(s.location, latLng),
    )

    this.props.actions.addCurrentSuggestion(suggestion)
    this.props.actions.toggleSuggestionInfo(true)
    this.toggleSideWrapper()
  }

  coordinatesCloseEnough = (suggestion, event) =>
    this.elevenDecimalPlaces(suggestion.lat) ===
      this.elevenDecimalPlaces(event.lat()) &&
    this.elevenDecimalPlaces(suggestion.lng) ===
      this.elevenDecimalPlaces(event.lng())

  elevenDecimalPlaces = number => parseFloat(parseFloat(number).toFixed(11))

  filterPins = (filters, suggestions) =>
    suggestions.filter(
      s => filters.includes("") || filters.includes(s.category),
    )

  toggleSideWrapper = () => {
    this.setState({
      sideVisible: !this.state.sideVisible,
    })
  }

  get sideClass() {
    return this.state.sideVisible ? "visible" : "hidden"
  }

  get helperClass() {
    return this.state.sideVisible ? "open" : "closed"
  }

  render() {
    const { suggestions, pinFilters } = this.props
    const categories = R.pipe(R.map(R.prop("category")), R.uniq)(suggestions)
    const filteredSuggestions = this.filterPins(pinFilters, suggestions)

    const suggestionMapWrapper = (
      <article className="SuggestionMap">
        <SuggestionMapWrapper
          showSuggestionInfo={this.showSuggestionInfo}
          suggestions={filteredSuggestions}
        />
      </article>
    )

    return (
      <article className="Map">
        {suggestionMapWrapper}

        <div
          className={`helper side ${this.helperClass}`}
          onClick={this.toggleSideWrapper}
          tabIndex="0"
          role="button"
        >
          <i className="material-icons">info</i>
        </div>

        <div className={`SideWrapper ${this.sideClass}`}>
          <SideWrapper categories={categories} sideClass={this.sideClass} />
        </div>
      </article>
    )
  }
}

Map.propTypes = {
  actions: PropTypes.shape({
    addSuggestions: PropTypes.func.isRequired,
    addCurrentLocation: PropTypes.func.isRequired,
    addRoutePoints: PropTypes.func.isRequired,
    addActualPath: PropTypes.func.isRequired,
    addCurrentSuggestion: PropTypes.func.isRequired,
    toggleSuggestionInfo: PropTypes.func.isRequired,
  }),
  suggestions: PropTypes.array.isRequired,
  pinFilters: PropTypes.array.isRequired,
}

export default Map

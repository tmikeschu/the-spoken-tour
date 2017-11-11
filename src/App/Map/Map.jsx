import React, { Component } from "react"
import PropTypes from "prop-types"
import SuggestionMapWrapper from "./SuggestionMapWrapper/SuggestionMapWrapper"
import SideWrapper from "./SideWrapper/SideWrapper"
import APIService from "../APIService/APIService"
import _ from "lodash"

const apiService = new APIService("https://spoken-api.herokuapp.com")

const requestsData = [
  {
    path: "/api/v1/suggestion_pins",
    action: "addSuggestions",
  },
  {
    path: "/api/v1/current_location",
    action: "addCurrentLocation",
  },
  {
    path: "/api/v1/route_pins",
    action: "addRoutePoints",
  },
  {
    path: "/api/v1/actual_path",
    action: "addActualPath"
  },
]

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sideVisible: false,
    }
  }

  getInitialData = (requests = requestsData, service = apiService) => {
    requests.forEach(async (request) => {
      const response = await service.get(request.path)
      this.props.actions[request.action](response.data)
    })
  }

  componentDidMount() {
    this.getInitialData()
  }

  showSuggestionInfo = latLng => {
    const suggestion = this.props.suggestions.find(s =>
      this.coordinatesCloseEnough(s.location, latLng)
    )

    this.props.actions.addCurrentSuggestion(suggestion)
    this.props.actions.toggleSuggestionInfo(true)
    this.toggleSideWrapper()
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

  toggleSideWrapper = () => {
    this.setState({
      sideVisible: !this.state.sideVisible
    })
  }

  get sideClass() {
    return this.state.sideVisible
      ? "visible" : "hidden"
  }

  get helperClass() {
    return this.state.sideVisible
      ? "open" : "closed"
  }

  scrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    })
  }

  render() {
    const categories = _.uniq(this.props.suggestions.map(s => s.category))
    const filteredSuggestions = this.filterPins(this.props.pinFilters, this.props.suggestions)

    const suggestionMapWrapper = (
      <article className="suggestion-map">
        <SuggestionMapWrapper
          showSuggestionInfo={this.showSuggestionInfo}
          suggestions={filteredSuggestions}
        />
      </article>
    )

    return (
      <article className="map">
        { suggestionMapWrapper }

        <div
          className="helper scroll"
          onClick={this.scrollTop}
        >
          <i className="material-icons">arrow_upward</i>
        </div>
        <div
          className={`helper side ${this.helperClass}`}
          onClick={this.toggleSideWrapper}
        >
          <i className="material-icons">info</i>
        </div>

        <SideWrapper categories={categories} sideClass={this.sideClass} />
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
    toggleSuggestionInfo: PropTypes.func.isRequired
  }),
  suggestions: PropTypes.array.isRequired,
  pinFilters: PropTypes.array.isRequired
}

export default Map

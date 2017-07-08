import React, { Component } from "react"
import SuggestionMapWrapper from "./SuggestionMapWrapper/SuggestionMapWrapper"
import SideWrapper from "./SideWrapper/SideWrapper"
import APIService from "../APIService/APIService"
import _ from "lodash"

const service = new APIService("https://spoken-api.herokuapp.com")

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actualPath: []
    }
  }

  componentDidMount() {
    this.props.actions.fetchSuggestions(service)
    this.props.actions.fetchCurrentLocation(service)
    this.props.actions.fetchRoutePoints(service)
    this.getActualPath()
  }

  getActualPath = async () => {
    await this.getApiObjects("api/v1/actual_path", "actualPath", service)
  }

  getApiObjects = async (path, state, service) => {
    const response = await service.get(path)
    this.setState({
      [state]: (response && response.data) || []
    })
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
          actualPath={this.state.actualPath}
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

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
      currentSuggestion: {},
      suggestionInfoIsActive: false,
      currentLocation: {date: "", location: {lat: "", lng: ""}},
      pinFilters: [],
      routePoints: [],
      actualPath: []
    }
  }

  componentDidMount() {
    this.props.actions.fetchSuggestions(service)
    this.getCurrentLocation()
    this.getRoutePoints()
    this.getActualPath()
  }

  getCurrentLocation = async () => {
    await this.getApiObjects("api/v1/current_location", "currentLocation", service)
  }

  getRoutePoints = async () => {
    await this.getApiObjects("api/v1/route_pins", "routePoints", service)
  }

  getActualPath = async () => {
    await this.getApiObjects("api/v1/actual_path", "actualPath", service)
  }

  getApiObjects = async (path, state, service) => {
    const response = await service.get(path)
    const safety = state === "currentLocation" ? {} : []
    this.setState({
      [state]: (response && response.data) || safety
    })
  }

  showSuggestionInfo = latLng => {
    const suggestion = this.props.suggestions.find(s =>
      this.coordinatesCloseEnough(s.location, latLng)
    )

    this.setState({ currentSuggestion: suggestion, suggestionInfoIsActive: true, })
  }

  coordinatesCloseEnough = (suggestion, event) => (
    this.elevenDecimalPlaces(suggestion.lat) === this.elevenDecimalPlaces(event.lat()) &&
      this.elevenDecimalPlaces(suggestion.lng) === this.elevenDecimalPlaces(event.lng())
  )

  elevenDecimalPlaces = number => ( parseFloat(parseFloat(number).toFixed(11)))

  setFilters = filters => {
    this.setState({
      pinFilters: filters
    })
  }

  filterPins = (filters, suggestions) => (
    suggestions.filter(s =>
      filters.length === 0 || filters.includes("") || filters.includes(s.category)
    )
  )

  render() {
    const categories = _.uniq(this.props.suggestions.map(s => s.category))
    const filteredSuggestions = this.filterPins(this.state.pinFilters, this.props.suggestions)

    const suggestionMapWrapper = (
      <article>
        <SuggestionMapWrapper
          showSuggestionInfo={this.showSuggestionInfo}
          suggestions={filteredSuggestions}
          currentLocation={this.state.currentLocation}
          routePoints={this.state.routePoints}
          actualPath={this.state.actualPath}
        />
      </article>
    )

    const sideWrapper = (
      <SideWrapper
        setFilters={this.setFilters}
        pinFilters={this.state.pinFilters}
        currentSuggestion={this.state.currentSuggestion}
        currentLocation={this.state.currentLocation}
        suggestionInfoIsActive={this.state.suggestionInfoIsActive}
        date={this.state.currentLocation.date}
        categories={categories}
      />
    )

    return (
      <article className="map">
        { suggestionMapWrapper }
        { sideWrapper }
      </article>
    )
  }
}

import React, { Component } from "react"
import SuggestionMapContainer from "./SuggestionMapContainer/SuggestionMapContainer"
import SideContainer from "./SideContainer/SideContainer"
import APIService from "../APIService/APIService"

const service = new APIService("https://spoken-api.herokuapp.com")

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestionPin: {},
      suggestions: [],
      currentSuggestion: null,
      suggestionInfoIsActive: false,
      currentLocation: {date: "", location: {lat: "", lng: ""}},
      pinFilters: [],
      routePoints: [],
      actualPath: []
    }
  }

  componentDidMount() {
    this.getSuggestions()
    this.getCurrentLocation()
    this.getRoutePoints()
    this.getActualPath()
  }

  getCurrentLocation = async () => {
    await this.getApiObjects("api/v1/current_location", "currentLocation", service)
  }

  getSuggestions = async () => {
    await this.getApiObjects("api/v1/suggestion_pins", "suggestions", service)
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
      [state]: response && response.data || safety
    })
  }

  setSuggestion = position => {
    this.setState({
      suggestionPin: position,
    })
  }

  showSuggestionInfo = latLng => {
    const suggestion = this.state.suggestions.find(s =>
      this.coordinatesCloseEnough(s.location, latLng)
    )

    this.setState({
      currentSuggestion: suggestion,
      suggestionInfoIsActive: true,
    })
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

  render() {
    const suggestionMapContainer = (
      <article>
        <SuggestionMapContainer
          setSuggestion={this.setSuggestion}
          showSuggestionInfo={this.showSuggestionInfo}
          suggestions={this.state.suggestions}
          currentLocation={this.state.currentLocation}
          suggestionPin={this.state.suggestionPin}
          pinFilters={this.state.pinFilters}
          routePoints={this.state.routePoints}
          actualPath={this.state.actualPath}
        />
      </article>
    )

    const sideContainer = (
      <SideContainer
        setFilters={this.setFilters}
        pinFilters={this.state.pinFilters}
        currentSuggestion={this.state.currentSuggestion}
        currentLocation={this.state.currentLocation}
        suggestionInfoIsActive={this.state.suggestionInfoIsActive}
        setSuggestion={this.setSuggestion}
        getSuggestions={this.getSuggestions}
        suggestionPin={this.state.suggestionPin}
        date={this.state.currentLocation.date}
        suggestions={this.state.suggestions}
      />
    )

    return (
      <article className="map">
        { suggestionMapContainer }
        { sideContainer }
      </article>
    )
  }
}

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
    await this.getApiObjects("api/v1/current_location", "currentLocation")
  }

  getSuggestions = async () => {
    await this.getApiObjects("api/v1/suggestion_pins", "suggestions")
  }

  getRoutePoints = async () => {
    await this.getApiObjects("api/v1/route_pins", "routePoints")
  }

  getActualPath = async () => {
    await this.getApiObjects("api/v1/actual_path", "actualPath")
  }

  getApiObjects = async (path, state) => {
    const response = await service.get(path)
    this.setState({
      [state]: response.data
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

  coordinatesCloseEnough = (s, e) => (
    this.elevenDecimalPlaces(s.lat) === this.elevenDecimalPlaces(e.lat()) &&
      this.elevenDecimalPlaces(s.lng) === this.elevenDecimalPlaces(e.lng())
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

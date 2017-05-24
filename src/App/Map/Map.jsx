import React, { Component } from "react"
import _ from "lodash"
import SuggestionForm from "./SuggestionForm/SuggestionForm"
import Legend from "./Legend/Legend"
import Info from "./Info/Info"
import SuggestionMapContainer from "./SuggestionMapContainer/SuggestionMapContainer"
import SuggestionInfo from "./SuggestionInfo/SuggestionInfo"
import Filters from "./Filters/Filters"
import APIService from "../APIService/APIService"
import "../App.css"

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
    this.setSuggestion = this.setSuggestion.bind(this)
    this.getSuggestions = this.getSuggestions.bind(this)
    this.getCurrentLocation = this.getCurrentLocation.bind(this)
    this.showSuggestionInfo = this.showSuggestionInfo.bind(this)
  }

  componentDidMount() {
    this.getSuggestions()
    this.getCurrentLocation()
    this.getRoutePoints()
    this.getActualPath()
  }

  async getCurrentLocation() {
    await this.getApiObjects("api/v1/current_location", "currentLocation")
  }

  async getSuggestions() {
    await this.getApiObjects("api/v1/suggestion_pins", "suggestions")
  }

  async getRoutePoints() {
    await this.getApiObjects("api/v1/route_pins", "routePoints")
  }

  async getActualPath() {
    await this.getApiObjects("api/v1/actual_path", "actualPath")
  }

  async getApiObjects(path, state) {
    const response = await service.get(path)
    this.setState({
      [state]: response.data
    })
  }

  setSuggestion(position) {
    this.setState({
      suggestionPin: position,
    })
  }

  showSuggestionInfo(latLng) {
    const suggestion = this.state.suggestions.find(s => {
      const suggestionLat = parseFloat(s.location.lat)
      const suggestionLng = parseFloat(s.location.lng)
      return suggestionLat === latLng.lat() && suggestionLng === latLng.lng()
    })
    this.setState({
      currentSuggestion: suggestion,
      suggestionInfoIsActive: true,
    })
  }

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

    const categories = _.uniq(this.state.suggestions.map(s => s.category))

    const legend = (
      <Legend 
        date={this.state.currentLocation.date} 
        categories={categories}
      />
    )

    const suggestionForm = (
      <SuggestionForm
        setSuggestion={this.setSuggestion}
        getSuggestions={this.getSuggestions}
        suggestionPin={this.state.suggestionPin}
      />
    )

    const suggestionInfo = (
      <SuggestionInfo
        currentSuggestion={this.state.currentSuggestion}
        suggestionInfoIsActive={this.state.suggestionInfoIsActive}
      />
    )


    const FiltersBox = (
      <Filters
        categories={categories}
        setFilters={this.setFilters}
        pinFilters={this.state.pinFilters}
      />
    )

    return (
      <article className="map">
        { suggestionMapContainer }
        <section>
          { legend }
          { suggestionInfo }
          { FiltersBox }
          <div>
            <Info />
            { suggestionForm }
          </div>
        </section>
      </article>
    )
  }
}

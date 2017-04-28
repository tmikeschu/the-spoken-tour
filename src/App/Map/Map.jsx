import React, { Component } from "react"
import _ from "lodash"
import SuggestionForm from "./SuggestionForm/SuggestionForm"
import Legend from "./Legend/Legend"
import Info from "./Info/Info"
import SuggestionMapContainer from "./SuggestionMapContainer/SuggestionMapContainer"
import SuggestionInfo from "./SuggestionInfo/SuggestionInfo"
import Checkbox from "./Checkbox/Checkbox"
import APIService from "../APIService/APIService"
import "../App.css"


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
      service: new APIService("https://spoken-api.herokuapp.com")
    }
    this.setSuggestion = this.setSuggestion.bind(this)
    this.getSuggestions = this.getSuggestions.bind(this)
    this.getCurrentLocation = this.getCurrentLocation.bind(this)
    this.showSuggestionInfo = this.showSuggestionInfo.bind(this)
    this.filterPins = this.filterPins.bind(this)
  }

  componentDidMount() {
    this.getSuggestions()
    this.getCurrentLocation()
    this.getRoutePoints()
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

  async getApiObjects(path, state) {
    const response = await this.state.service.get(path)
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

  filterPins(event) {
    const filter = event.target.value
    const checked = event.target.checked
    let pinFilters

    pinFilters = filter === "" && []
    pinFilters = (checked && this.state.pinFilters.concat(filter)) ||
      this.state.pinFilters.filter(f => f !== filter)

    this.setState({
      pinFilters: pinFilters
    })
  }

  render() {
    const suggestionMapContainer = (
      <SuggestionMapContainer
        setSuggestion={this.setSuggestion}
        showSuggestionInfo={this.showSuggestionInfo}
        suggestions={this.state.suggestions}
        currentLocation={this.state.currentLocation}
        suggestionPin={this.state.suggestionPin}
        pinFilters={this.state.pinFilters}
        routePoints={this.state.routePoints}
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

    const categories = _.uniq(this.state.suggestions.map(s => s.category))

    const checkboxes = ["", "DISPLAYNONE"]
      .concat(categories)
      .map((category, i) => {
        return(
          <Checkbox key={i} category={category} filterPins={this.filterPins} />
        )
      })

    return (
      <article className="map">
        <article>
          { suggestionMapContainer }
        </article>
        <section>
          <Legend 
            date={this.state.currentLocation.date} 
            categories={categories}
          />
          { suggestionInfo }
          <article 
            className="checkboxes"
          >
            <h4>Filter Suggestions</h4>
            <article>
              { checkboxes }
            </article>
          </article>
          <div>
            <Info />
            { suggestionForm }
          </div>
        </section>
      </article>
    )
  }
}

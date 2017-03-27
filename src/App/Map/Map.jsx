import React, { Component } from 'react';
import $ from 'jquery';
import SuggestionForm from './SuggestionForm/SuggestionForm'
import Legend from './Legend/Legend'
import Info from './Info/Info'
import MapTabs from './MapTabs/MapTabs';
import SuggestionInfo from './SuggestionInfo/SuggestionInfo';
import '../App.css';


export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestionPin: {},
      tabIndex: 0,
      suggestions: [],
      currentSuggestion: null,
      suggestionInfoIsActive: false,
      currentLocation: null,
    }
    this.setSuggestion = this.setSuggestion.bind(this)
    this.getSuggestions = this.getSuggestions.bind(this)
    this.getCurrentLocation = this.getCurrentLocation.bind(this)
    this.showSuggestionInfo = this.showSuggestionInfo.bind(this)
    this.handleTabClick = this.handleTabClick.bind(this)
  }

  componentDidMount() {
    this.getSuggestions();
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    this.getApiObjects("http://spoken-api.herokuapp.com/api/v1/current_location", "currentLocation")
  }

  getSuggestions() {
    this.getApiObjects("http://spoken-api.herokuapp.com/api/v1/suggestion_pins", "suggestions")
  }

  getApiObjects(url, state) {
    let self = this;
    $.ajax({
      url: url + "?api_key=" + process.env.REACT_APP_RAILS_KEY,
      method: "GET",
    }).done(function(response) {
      self.setState({
        [state]: response,
      })
    }).fail(function(error) {
      console.error("No");
    });
  }

  setSuggestion(position) {
    this.setState({
      suggestionPin: position,
      tabIndex: 1,
    })
  }

  showSuggestionInfo(latLng) {
    const suggestion = this.state.suggestions.find((s)=>{
      const suggestionLat = parseFloat(s.location.lat)
      const suggestionLng = parseFloat(s.location.lng)
      return suggestionLat === latLng.lat() && suggestionLng === latLng.lng()
    })
    this.setState({
      currentSuggestion: suggestion,
      suggestionInfoIsActive: true,
      tabIndex: 1,
    });
  }

  handleTabClick(tabIndex) {
    this.setState({
      tabIndex: tabIndex,
    });
  }

  render() {
    const mapTabs = (
      <MapTabs
        handleSelect={this.handleSelect}
        tabIndex={this.state.tabIndex}
        handleTabClick={this.handleTabClick}
        setSuggestion={this.setSuggestion}
        showSuggestionInfo={this.showSuggestionInfo}
        suggestions={this.state.suggestions}
        currentLocation={this.state.currentLocation}
        suggestionPin={this.state.suggestionPin}
      />
    );

    const suggestionForm = (
      <SuggestionForm
        tabIndex={this.state.tabIndex}
        setSuggestion={this.setSuggestion}
        getSuggestions={this.getSuggestions}
        suggestionPin={this.state.suggestionPin}
      />
    );

    const suggestionInfo = (
      <SuggestionInfo
        tabIndex={this.state.tabIndex}
        currentSuggestion={this.state.currentSuggestion}
        suggestionInfoIsActive={this.state.suggestionInfoIsActive}
      />
    );

    return (
      <article className="map">
        { mapTabs }
        <section>
          <Legend tabIndex={this.state.tabIndex} />
          <div>
            <Info tabIndex={this.state.tabIndex} />
            { suggestionForm }
          </div>
          { suggestionInfo }
        </section>
      </article>
    );
  }
}
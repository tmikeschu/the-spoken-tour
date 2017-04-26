import React, { Component } from 'react';
import $ from 'jquery';
import _ from 'lodash';
import SuggestionForm from './SuggestionForm/SuggestionForm'
import Legend from './Legend/Legend'
import Info from './Info/Info'
import MapTabs from './MapTabs/MapTabs';
import SuggestionInfo from './SuggestionInfo/SuggestionInfo';
import Checkbox from './Checkbox/Checkbox';
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
      currentLocation: {date: "", location: {lat: "", lng: ""}},
      pinFilters: [],
    }
    this.setSuggestion = this.setSuggestion.bind(this)
    this.getSuggestions = this.getSuggestions.bind(this)
    this.getCurrentLocation = this.getCurrentLocation.bind(this)
    this.showSuggestionInfo = this.showSuggestionInfo.bind(this)
    this.handleTabClick = this.handleTabClick.bind(this)
    this.filterPins = this.filterPins.bind(this)
  }

  componentDidMount() {
    this.getSuggestions();
    this.getCurrentLocation();
  }

  async getCurrentLocation() {
    await this.getApiObjects("http://spoken-api.herokuapp.com/api/v1/current_location", "currentLocation")
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

  filterPins(event) {
    const filter = event.target.value;
    const checked = event.target.checked;
    let pinFilters;

    pinFilters = filter === "" && [];
    pinFilters = (checked && this.state.pinFilters.concat(filter)) ||
      this.state.pinFilters.filter(f => f !== filter)

    this.setState({
      pinFilters: pinFilters
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
        pinFilters={this.state.pinFilters}
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

    const categories = _.uniq(this.state.suggestions.map(s => s.category));

    const checkboxes = ["", "DISPLAYNONE"]
      .concat(categories)
      .map((category, i) => {
        return(
          <Checkbox key={i} category={category} filterPins={this.filterPins} />
        );
      })

    return (
      <article className="map">
        { mapTabs }
        <section>
          <Legend 
            tabIndex={this.state.tabIndex} 
            date={this.state.currentLocation.date} 
            categories={categories}
          />
          { suggestionInfo }
          <article 
            className="checkboxes"
            style={{display: this.state.tabIndex === 0 ? 'none' : ''}}
          >
            <h4>Filter Suggestions</h4>
            <article>
              { checkboxes }
            </article>
          </article>
          <div>
            <Info tabIndex={this.state.tabIndex} />
            { suggestionForm }
          </div>
        </section>
      </article>
    );
  }
}

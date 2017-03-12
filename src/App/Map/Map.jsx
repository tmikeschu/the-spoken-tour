import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import $ from 'jquery';
import SuggestionMapContainer from './SuggestionMapContainer/SuggestionMapContainer'
import SuggestionForm from './SuggestionForm/SuggestionForm'
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
    const categories = {
      "stay": "Place to stay",
      "checkout": "Cool spot",
      "avoid": "Avoid this place",
      "bike_shop": "Bike shop",
      "other": "Other",
    }
    return (
      <article className="map">
        <Tabs
          onSelect={this.handleSelect}
          selectedIndex={this.state.tabIndex}
        >
          <TabList>
            <Tab onClick={() => this.handleTabClick(0)}>The Route</Tab>
            <Tab onClick={() => this.handleTabClick(1)}>Suggestions</Tab>
          </TabList>

          <TabPanel>
            <iframe frameBorder={0} scrolling="no" src="https://www.google.com/maps/d/u/0/embed?mid=1MNLYaokz7yXKh23E79fRcGDv1_s&ui=maps" allowFullScreen={false}></iframe>
          </TabPanel>
          <TabPanel>
            <SuggestionMapContainer
              setSuggestion={this.setSuggestion}
              showSuggestionInfo={this.showSuggestionInfo}
              suggestions={this.state.suggestions}
              currentLocation={this.state.currentLocation}
              suggestionPin={this.state.suggestionPin}/>
          </TabPanel>
        </Tabs>
        <section>
          <article className="legend">
            <h4>Legend</h4>
            <ul>
              <li style={{display: this.state.tabIndex === 1 ? 'none' : 'block'}}><span style={{color: "#1267FF"}}>◉</span> → Planned Route</li>
              <li style={{display: this.state.tabIndex === 0 ? 'none' : 'block'}}><span><img src="http://maps.google.com/mapfiles/ms/icons/cycling.png" alt=""/></span> → That's Us!</li>
              <li style={{display: this.state.tabIndex === 0 ? 'none' : 'block'}}><span style={{color: "#FB7064"}}>◉</span> → Suggestions</li>
            </ul>
          </article>
          <div>
            <article className="info">
              <p>Have an amiga in Antigua?  A tía in Tijuana? Couch to crash on in Colombia? Bike shop in Bolivia?</p>
              <p><span>Let</span> <span>us</span> <span>know</span>!</p>
              <p>↓</p>
              <p style={{
                textAlign: "center",
                display: this.state.tabIndex === 0 ? "block" : "none"}}>(go to the suggestion map and click to drop a pin!)</p>
            </article>
            <article className="pin-form" style={{display: this.state.tabIndex === 0 ? 'none' : 'block'}} >
              <h4>Drop a Pin</h4>
              <SuggestionForm
                setSuggestion={this.setSuggestion}
                getSuggestions={this.getSuggestions}
                suggestionPin={this.state.suggestionPin} />
            </article>
          </div>
          <article className="suggestion-info" style={{display: this.state.tabIndex === 0 ? "none" : "block"}}>
            <h4>Suggestion Info</h4>
            <p style={{display: this.state.currentSuggestion ? "none" : "block"}}>(click an existing pin on the suggestions map)</p>
            <section className="text" style={{ display: this.state.suggestionInfoIsActive ? "initial" : "none" }}>
              <p><span>Label</span>: { this.state.currentSuggestion && this.state.currentSuggestion.label}</p>
              <p><span>Description</span>: { this.state.currentSuggestion && this.state.currentSuggestion.description}</p>
              <p><span>Category</span>: { this.state.currentSuggestion && categories[this.state.currentSuggestion.category]}</p>
            </section>
          </article>
        </section>
      </article>
    );
  }
}

import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import $ from 'jquery';
import MapContainer from './MapContainer'
import SuggestionForm from './SuggestionForm'
import '../stylesheets/App.css';


export default class EmbeddedMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestionPin: {},
      tabIndex: 0,
      suggestions: [],
    }
    this.setSuggestion = this.setSuggestion.bind(this)
    this.showSuggestionInfo = this.showSuggestionInfo.bind(this)
  }

  componentDidMount() {
    var self = this;
    $.ajax({
      url: "http://spoken-api.herokuapp.com/api/v1/suggestion_pins?api_key="+process.env.REACT_APP_RAILS_KEY,
      method: "GET",
    }).done(function(response) {
      self.setState({
        suggestions: response,
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
    const suggestionInfo = "<p>" + suggestion.label +"</p>"
    $("form").after(suggestionInfo)
  }

  render() {
    return (
      <article className="embedded-map">
        <Tabs
          onSelect={this.handleSelect}
          selectedIndex={this.state.tabIndex}
        >
          <TabList>
            <Tab>The Route</Tab>
            <Tab>Suggestions</Tab>
          </TabList>

          <TabPanel>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1MNLYaokz7yXKh23E79fRcGDv1_s"></iframe>
          </TabPanel>
          <TabPanel>
            <MapContainer
              setSuggestion={this.setSuggestion}
              showSuggestionInfo={this.showSuggestionInfo}
              suggestions={this.state.suggestions}
              suggestionPin={this.state.suggestionPin}/>
          </TabPanel>
        </Tabs>
        <section>
          <article className="legend">
            <h4>Legend</h4>
            <ul>
              <li><span style={{color: "#A00"}}>◉</span> → That's Us!</li>
              <li><span style={{color: "#1267FF"}}>◉</span> → Planned Route</li>
            </ul>
          </article>
          <article className="info">
            <p>Have a suggestion? A secret spot? Couch for us to crash on?</p>
            <p><span>Let</span> <span>us</span> <span>know</span>!</p>
            <p>(Drop a pin on our map)</p>
            <p>↓</p>
          </article>
          <article className="pin-form">
            <h4>Drop a Pin</h4>
            <SuggestionForm
              setSuggestion={this.setSuggestion}
              suggestionPin={this.state.suggestionPin} />
          </article>
        </section>
      </article>
    );
  }
}

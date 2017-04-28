import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SuggestionMapContainer from '../SuggestionMapContainer/SuggestionMapContainer'
import '../../App.css';

export default class MapTabs extends Component {
  render() {
    return (
      <Tabs
        onSelect={this.props.handleSelect}
        selectedIndex={this.props.tabIndex}
      >
        <TabList>
          <Tab onClick={() => this.props.handleTabClick(0)}>The Route</Tab>
          <Tab onClick={() => this.props.handleTabClick(1)}>Suggestions</Tab>
        </TabList>

        <TabPanel>
          <iframe frameBorder={0} scrolling="no" src="https://www.google.com/maps/d/u/0/embed?mid=1MNLYaokz7yXKh23E79fRcGDv1_s&ui=maps" allowFullScreen={false}></iframe>
        </TabPanel>
        <TabPanel>
          <SuggestionMapContainer
            setSuggestion={this.props.setSuggestion}
            showSuggestionInfo={this.props.showSuggestionInfo}
            suggestions={this.props.suggestions}
            currentLocation={this.props.currentLocation}
            suggestionPin={this.props.suggestionPin}
            pinFilters={this.props.pinFilters}
            routePoints={this.props.routePoints}
          />
        </TabPanel>
      </Tabs>
    );
  }
}

import React, { Component } from 'react';

import SuggestionMap from '../SuggestionMap/SuggestionMap';

export default class SuggestionMapContainer extends Component {
  filterPins(categories, suggestions) {
    if (categories.length === 0) { return suggestions }
    return suggestions.filter(suggestion => {
      return categories.some(category => {
        return suggestion.category.includes(category); 
      })
    });
  }

  render() {
    const suggestions = this.filterPins(this.props.pinFilters, this.props.suggestions);
    const fullHeightAndWidth = { width: '100%', height: '100vh' };
    const mapCenter = {
      lat: -1.6246706849414423,
      lng: -85.56376812500002
    };
    const mapZoom = 3;

    return (
      <div style={fullHeightAndWidth}>
        <SuggestionMap
          setSuggestion={this.props.setSuggestion}
          suggestionPin={this.props.suggestionPin}
          showSuggestionInfo={this.props.showSuggestionInfo}
          currentLocation={this.props.currentLocation}
          zoom={mapZoom}
          center={mapCenter}
          suggestions={suggestions}
          routePoints={this.props.routePoints}
        />
      </div>
    )
  }
}

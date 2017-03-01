import React, { Component } from 'react';

import Map from './Map';

export default class MapContainer extends Component {
  render() {
    const fullHeightAndWidth = { width: '100%', height: '50em' };
    const mapCenter = {
      lat: -1.6246706849414423,
      lng: -85.56376812500002
    };
    const mapZoom = 3;

    return (
      <div style={fullHeightAndWidth}>
        <Map
          setSuggestion={this.props.setSuggestion}
          suggestionPin={this.props.suggestionPin}
          showSuggestionInfo={this.props.showSuggestionInfo}
          zoom={mapZoom}
          center={mapCenter}
          suggestions={this.props.suggestions}/>
      </div>
    )
  }
}

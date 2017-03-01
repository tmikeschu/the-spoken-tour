import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

export default class Map extends Component {
  render() {
    var suggestion = (<Marker
                     options={{draggable: true, clickable: true}}
                     animation={2}
                     position={this.props.suggestionPin}/>)

    const mapContainer = <div style={{ height: "100%", width: "100%" }} />
    const suggestionMarkers = this.props.suggestions.map((suggestion, i) => {
      const marker = {
        position: {
          lat: parseFloat(suggestion.location.lat),
          lng: parseFloat(suggestion.location.lng),
        },
      }
      return <Marker key={suggestion.id} {...marker} onClick={(props) => handleMarkerClick(props, this)} />
    })

    function handleMarkerClick(props, map) {
      map.props.showSuggestionInfo(props.latLng)
    }

    function handleClick(props, map) {
      const lat = props.latLng.lat();
      const lng = props.latLng.lng();
      const position = { lat: lat, lng: lng }
      map.props.setSuggestion(position)
    }

    return(
      <GoogleMapLoader
        containerElement={ mapContainer }
        googleMapElement={
          <GoogleMap
            defaultZoom={this.props.zoom}
            defaultCenter={this.props.center}
            onClick={(props) => handleClick(props, this)}
            options={{
              streetViewControl: true,
              myTypeControl: false,
            }}>
            { suggestionMarkers }
            { suggestion }
          </GoogleMap>
      } />
    );
  }
}

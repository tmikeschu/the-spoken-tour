import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

export default class Map extends Component {
  render() {
    var suggestion;
    if (this.props.suggestionPin.keys.length !== 0){
      suggestion = <Marker
                     options={{draggable: true}}
                     animation="bounce"
                     position={this.props.suggestionPin}/>
    }
    const mapContainer = <div style={{ height: "100%", width: "100%" }} />
    const markers = this.props.markers.map((pin, i) => {
      const marker = {
        position: {
          lat: pin.location.lat,
          lng: pin.location.lng
        }
      }
      return <Marker key={i} {...marker} />
    })

    function handleClick(props, map) {
      const lat = props.latLng.lat();
      const lng = props.latLng.lng();
      const position = { lat: lat, lng: lng }
      map.props.addSuggestion(position)
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
            { markers }
            { suggestion }
          </GoogleMap>
      } />
    );
  }
}

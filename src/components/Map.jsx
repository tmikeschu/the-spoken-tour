import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export default class Map extends Component {

  render() {
    const mapContainer = <div style={{ height: "100%", width: "100%" }} />

    return(
      <GoogleMapLoader
        containerElement={ mapContainer }
        googleMapElement={
          <GoogleMap
            defaultZoom={14}
            defaultCenter={{ lat: 39.733984, lng: -105.000536}}
            options={{ streetViewControl: false, myTypeControl: false }}
          />
      } />
    );
  }
}

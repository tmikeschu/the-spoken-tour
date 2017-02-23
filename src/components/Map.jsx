import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker, Polyline } from 'react-google-maps';

export default class Map extends Component {
  render() {
    const mapContainer = <div style={{ height: "90%", width: "75%" }} />
    const markers = this.props.markers.map((pin, i) => {
      const marker = {
        position: {
          lat: pin.location.lat,
          lng: pin.location.lng
        }
      }
      return <Marker key={i} {...marker} />
    })

    const polylinePts = this.props.polylinePoints.map((pin) => {
      return {
        lat: parseFloat(pin.location.lat),
        lng: parseFloat(pin.location.lng)
      }
    })
    const polyOptions = {
      geodsic: true,
      strokeColor: "#A00",
    }
    const polyline = <Polyline path={polylinePts} options={polyOptions} />

    return(
      <GoogleMapLoader
        containerElement={ mapContainer }
        googleMapElement={
          <GoogleMap
            defaultZoom={this.props.zoom}
            defaultCenter={this.props.center}
            options={{
              streetViewControl: false,
              myTypeControl: false,
            }}>
            { markers }
            { polyline }
          </GoogleMap>
      } />
    );
  }
}

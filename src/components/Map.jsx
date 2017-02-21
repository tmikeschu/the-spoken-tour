import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Map from 'google-maps-react'
import '../stylesheets/App.css';

class TripMap extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default TripMap;

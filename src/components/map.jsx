import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Map from 'google-maps-react'
import '../stylesheets/App.css';

ReactDOM.render(
  <Map google={this.props.google} zoom={14}>

    <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

    <InfoWindow onClose={this.onInfoWindowClose}>
        <div>
          <h1>{this.state.selectedPlace.name}</h1>
        </div>
    </InfoWindow>
  </Map>,
  document.getElementById('root')
);

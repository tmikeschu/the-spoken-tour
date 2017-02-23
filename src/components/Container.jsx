import React, { Component } from 'react';
import $ from 'jquery';

import Map from './Map';

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polylinePoints: [],
    }
  }

  componentDidMount() {
    var self = this;
    $.ajax({
      url: "http://spoken-api.herokuapp.com/api/v1/route_pins?api_key="+process.env.REACT_APP_RAILS_KEY,
      method: "GET",
    }).done(function(response) {
      self.setState({
        polylinePoints: response
      })
    }).fail(function(error) {
      console.error("No");
    });
  }


  render() {
    const fullHeightAndWidth = { width: '100vw', height: '100vh' };
    const mapCenter = {
      lat: -1.6246706849414423,
      lng: -85.56376812500002
    };
    const mapZoom = 3;

    const markers = [
      {
        location: {
          lat: 39.7392,
          lng: -104.9903
        }
      }
    ]

    return (
      <div style={fullHeightAndWidth}>
        <Map zoom={mapZoom} center={mapCenter} markers={markers} polylinePoints={this.state.polylinePoints}/>
      </div>
    )
  }
}

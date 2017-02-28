import React, { Component } from 'react';
import $ from 'jquery';

import Map from './Map';

export default class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    var self = this;
    $.ajax({
      url: ""+process.env.REACT_APP_RAILS_KEY,
      method: "GET",
    }).done(function(response) {
      self.setState({
        // state set
      })
    }).fail(function(error) {
      console.error("No");
    });
  }


  render() {
    const fullHeightAndWidth = { width: '100%', height: '50em' };
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
        <Map zoom={mapZoom} center={mapCenter} markers={markers} denverRoute={this.state.denverRoute}/>
      </div>
    )
  }
}

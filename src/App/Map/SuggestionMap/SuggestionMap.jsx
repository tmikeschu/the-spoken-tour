import React, { Component } from 'react';
import { GoogleMap, Marker, Polyline } from 'react-google-maps';
import { default as ScriptjsLoader } from "react-google-maps/lib/async/ScriptjsLoader";
import { categoryIcons } from '../category_data';
import loader from '../../../../public/loading.gif'

export default class SuggestionMap extends Component {
  categoryIcons() {
    return categoryIcons;
  }

  render() {
    const currentLatLng = {
      lat: parseFloat(this.props.currentLocation.location.lat),
      lng: parseFloat(this.props.currentLocation.location.lng),
    }

    const currentLocation = (
      <Marker position={currentLatLng}
        animation={2}
        icon={"http://maps.google.com/mapfiles/ms/icons/cycling.png"}
        options={{clickable: true}}/>
    )

    let suggestion;
    if (this.props.suggestionPin.lat !== undefined) {
      suggestion = (
        <Marker
          options={{ clickable: true}}
          position={this.props.suggestionPin}/>
      )
    }

    const mapContainer = <div style={{ height: "100%", width: "100%" }} />
    const suggestionMarkers = this.props.suggestions.map((suggestion, i) => {
      const marker = {
        position: {
          lat: parseFloat(suggestion.location.lat),
          lng: parseFloat(suggestion.location.lng),
        },
      }
      return (
        <Marker
          key={suggestion.id}
          icon={this.categoryIcons()[suggestion.category]}
          {...marker}
          onClick={(props) => handleMarkerClick(props, this)} />
      )
    }, this)

    function handleMarkerClick(props, map) {
      map.props.showSuggestionInfo(props.latLng)
    }

    function handleClick(props, map) {
      const lat = props.latLng.lat();
      const lng = props.latLng.lng();
      const position = { lat: lat, lng: lng }
      map.props.setSuggestion(position)
    }

    const coordinates = this.props.routePoints.map((point, i) => {
      return {
        lat: parseFloat(point.location.lat),
        lng: parseFloat(point.location.lng)
      }
    }, this)

    return(
      <ScriptjsLoader
        hostname={"maps.googleapis.com"}
        pathname={"/maps/api/js"}
        query={{ 
          key: process.env.REACT_APP_GOOGLE_KEY, 
          libraries: "geometry,drawing,visualization" 
        }}
        loadingElement={
          <div className="loader">
            <img src={loader} alt="loading" />
          </div>
        }
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
            { currentLocation }
            { suggestionMarkers }
            { suggestion }
            <Polyline 
              path={coordinates}
            />
          </GoogleMap>
      } />
    );
  }
}

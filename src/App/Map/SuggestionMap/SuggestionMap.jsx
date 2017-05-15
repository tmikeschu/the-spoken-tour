import React, { Component } from 'react'
import _ from 'lodash'
import { GoogleMap, Marker, Polyline } from 'react-google-maps'
import { default as ScriptjsLoader } from "react-google-maps/lib/async/ScriptjsLoader"
import { categoryIcons } from '../category_data'
import loader from '../../../../public/loading.gif'

export default class SuggestionMap extends Component {
  categoryIcons() {
    return categoryIcons
  }

  coordinatesFor(point) {
    return {
      position: {
        lat: parseFloat(point.location.lat),
        lng: parseFloat(point.location.lng),
      }
    }
  }

  render() {
    const currentLocation = (
      <Marker
        {...this.coordinatesFor(this.props.currentLocation)}
        animation={2}
        icon={this.categoryIcons()["cycling"]}
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
      const marker = this.coordinatesFor(suggestion)
       
      return (
        <Marker
          key={suggestion.id}
          icon={this.categoryIcons()[suggestion.category]}
          {...marker}
          onClick={(props) => handleMarkerClick(props, this)} />
      )
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

    const coordinates = this.props.routePoints.map((point, i) => {
      return {
        lat: parseFloat(point.location.lat),
        lng: parseFloat(point.location.lng)
      }
    })

    const actualPath = this.props.actualPath.map((point, i) => {
      return {
        lat: parseFloat(point.location.lat),
        lng: parseFloat(point.location.lng)
      }
    })

    const endsOfDayMarkers = this.props.actualPath
      .slice(0, this.props.actualPath.length - 1)
      .map((point, i) => {
        const marker = this.coordinatesFor(point)

        return (
          <Marker
            key={point.id}
            icon={this.categoryIcons()["endOfDay"]}
            {...marker}
          >
          </Marker>
        )
      })

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
            { endsOfDayMarkers }
            <Polyline 
              path={coordinates}
            />
            <Polyline 
              path={_.uniq(actualPath)}
              options={{strokeColor: "#f00"}}
            />
          </GoogleMap>
      } />
    );
  }
}

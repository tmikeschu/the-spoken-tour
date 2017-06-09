import React from "react"
import PropTypes from 'prop-types'
import { GoogleMap, Polyline } from "react-google-maps"
import { default as ScriptjsLoader } from "react-google-maps/lib/async/ScriptjsLoader"
import * as MarkerHelper from "./MarkerHelper/MarkerHelper"
import loader from "../../../public/loading.gif"

const SuggestionMap = props => {
  const { 
    suggestionPin,
    suggestions,
    currentLocation,
    zoom,
    center,
    routePoints,
    actualPath,
    showSuggestionInfo,
    setSuggestion
  } = props

  const mapContainer = <div style={{ height: "100%", width: "100%" }} />

  const handleMarkerClick = props => {
    showSuggestionInfo(props.latLng)
  }

  const handleClick = ({ latLng }) => {
    const lat = latLng.lat()
    const lng = latLng.lng()
    const position = { lat: lat, lng: lng }
    setSuggestion(position)
  }

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
          defaultZoom={zoom}
          defaultCenter={center}
          onClick={props => handleClick(props)}
          options={{
            streetViewControl: true,
            myTypeControl: false,
          }}>
          { MarkerHelper.currentLocationPin(currentLocation) }
          { MarkerHelper.suggestionMarkers(suggestions, handleMarkerClick) }
          { MarkerHelper.suggestion(suggestionPin) || null }
          { MarkerHelper.endsOfDayMarkers(actualPath) }
          <Polyline 
            path={MarkerHelper.lineCoordinates(routePoints)}
          />
          <Polyline 
            path={MarkerHelper.lineCoordinates(actualPath)}
            options={{strokeColor: "#f00"}}
          />
        </GoogleMap>
      } 
    />
  )
}

SuggestionMap.propTypes = {
  suggestionPin: PropTypes.object,
  suggestions: PropTypes.array.isRequired,
  currentLocation: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired,
  center: PropTypes.object.isRequired,
  routePoints: PropTypes.array.isRequired,
  actualPath: PropTypes.array.isRequired,
  showSuggestionInfo: PropTypes.func.isRequired,
  setSuggestion: PropTypes.func.isRequired
}

export default SuggestionMap


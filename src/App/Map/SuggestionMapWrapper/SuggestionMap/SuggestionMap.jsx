import React from "react"
import PropTypes from "prop-types"
import {
  withGoogleMap,
  GoogleMap,
  Polyline,
  withScriptjs,
} from "react-google-maps"
import { SearchBox } from "react-google-maps/lib/components/places/SearchBox"
import * as MarkerHelper from "./MarkerHelper/MarkerHelper"
import loader from "../../../public/loading.gif"

const AsyncGoogleMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      ref={props.actions.addMapRef}
      defaultZoom={props.zoom}
      defaultCenter={props.center}
      onClick={props.handleClick}
      options={{
        streetViewControl: true,
        myTypeControl: false,
      }}
    >
      <SearchBox
        ref={props.actions.addSearchBoxRef}
        controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
        onPlacesChanged={props.onPlacesChanged}
      >
        <input
          type="text"
          placeholder="Search and zoom"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `40%`,
            height: `32px`,
            marginTop: `10px`,
            padding: `0 12px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            textOverflow: `ellipsis`,
          }}
        />
      </SearchBox>
      {MarkerHelper.currentLocationPin(props.currentLocation)}
      {MarkerHelper.suggestionMarkers(
        props.suggestions,
        props.handleMarkerClick,
      )}
      {MarkerHelper.suggestion(props.suggestionPin) || null}
      {props.showFlags && MarkerHelper.endsOfDayMarkers(props.actualPath)}
      <Polyline path={MarkerHelper.lineCoordinates(props.routePoints)} />
      <Polyline
        path={MarkerHelper.lineCoordinates(props.actualPath)}
        options={{ strokeColor: "#f00" }}
      />
    </GoogleMap>
  )),
)

const SuggestionMap = props => {
  const { showSuggestionInfo } = props
  const { addSuggestionPin } = props.actions

  const mapContainer = <div style={{ height: "100%", width: "100%" }} />

  const handleMarkerClick = props => showSuggestionInfo(props.latLng)

  const handleClick = ({ latLng }) => {
    const lat = latLng.lat()
    const lng = latLng.lng()
    const position = { lat: lat, lng: lng }
    addSuggestionPin(position)
  }

  const onPlacesChanged = () => {
    const { searchBox, map } = props.refs
    const places = searchBox.getPlaces()
    const bounds = new window.google.maps.LatLngBounds()

    places.forEach(({ geometry: { viewport, location } }) => {
      if (viewport) {
        bounds.union(viewport)
      } else {
        bounds.extend(location)
      }
    })
    map.fitBounds(bounds)
  }

  const googleMapUrl =
    "https://maps.googleapis.com/maps/api/js?v=3.exp" +
    `&key=${process.env.REACT_APP_GOOGLE_KEY}` +
    "&libraries=geometry,drawing,places"

  return (
    <AsyncGoogleMap
      googleMapURL={googleMapUrl}
      loadingElement={
        <div className="loader">
          <img src={loader} alt="loading" />
        </div>
      }
      containerElement={mapContainer}
      mapElement={<div style={{ height: `100%` }} />}
      handleClick={handleClick}
      handleMarkerClick={handleMarkerClick}
      onPlacesChanged={onPlacesChanged}
      {...props}
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
  actions: PropTypes.shape({
    addSuggestionPin: PropTypes.func.isRequired,
  }),
}

export default SuggestionMap

import React from "react"
import { Marker } from "react-google-maps"
import { Category, categoryIcons } from "../../../category_data"

interface LatLngable {
  lat: number
  lng: number
}

interface Locationable {
  location: LatLngable
  id: number
  category: Category
}

interface Positionable {
  position: LatLngable
}

interface Labelable {
  text: string
  fontSize: string
}

const makeLabel = (text: string, fontSize: string = "32px"): Labelable => ({
  text,
  fontSize,
})

export const coordinatesFor = (point: Locationable): Positionable => {
  return {
    position: {
      lat: point.location?.lat ?? 0,
      lng: point.location?.lng ?? 0,
    },
  }
}

export const currentLocationPin = (
  currentLocation: Locationable,
): React.ReactElement => (
  <Marker
    {...coordinatesFor(currentLocation)}
    animation={2}
    icon="none"
    label={makeLabel(categoryIcons.cycling, "48px")}
    options={{ clickable: true }}
  />
)

export const suggestionMarkers = (
  suggestions: Locationable[],
  handler: Function,
): React.ReactElement[] =>
  suggestions.map((suggestion, i) => {
    const marker: Positionable = coordinatesFor(suggestion)

    return (
      <Marker
        key={suggestion.id}
        icon="none"
        label={makeLabel(categoryIcons[suggestion.category])}
        {...marker}
        onClick={props => handler(props)}
      />
    )
  })

export const lineCoordinates = (points: Locationable[]): LatLngable[] =>
  points.map(point => ({
    lat: point.location.lat,
    lng: point.location.lng,
  }))

export const endsOfDayMarkers = (
  actualPath: Locationable[],
): React.ReactElement[] =>
  actualPath.slice(0, actualPath.length - 1).map((point, i) => {
    const marker = coordinatesFor(point)

    return (
      <Marker
        key={point.id}
        icon="none"
        label={makeLabel(categoryIcons.endOfDay, "24px")}
        // fill="transparent"
        {...marker}
      />
    )
  })

export const suggestion = (
  suggestionPin: LatLngable,
): React.ReactElement | null =>
  suggestionPin.lat !== undefined ? (
    <Marker
      options={{ clickable: true }}
      position={suggestionPin}
      icon="none"
      label={makeLabel("📍")}
    />
  ) : null

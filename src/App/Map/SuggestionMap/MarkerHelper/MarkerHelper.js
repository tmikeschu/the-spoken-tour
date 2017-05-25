// @flow
import React from "react"
import { Marker } from "react-google-maps"
import { categoryIcons } from "../../category_data"

interface LatLngable {
  lat: number,
  lng: number
}

interface Locationable {
  location: LatLngable,
  id: number,
  category: string
}

interface Positionable {
  position: LatLngable
}

export const coordinatesFor = (point: Locationable): Positionable => {
  return {
    position: {
      lat: parseFloat(point.location.lat),
      lng: parseFloat(point.location.lng),
    }
  }
}

export const currentLocationPin = (currentLocation: Locationable): Marker => (
  <Marker
    {...coordinatesFor(currentLocation)}
    animation={2}
    icon={categoryIcons["cycling"]}
    options={{clickable: true}}
  />
)


export const suggestionMarkers = (suggestions: Locationable[], handler: Function): Marker[] => (
  suggestions.map((suggestion, i) => {
    const marker: Positionable = coordinatesFor(suggestion)

    return (
      <Marker
        key={suggestion.id}
        icon={categoryIcons[suggestion.category]}
        {...marker}
        onClick={(props) => handler(props)}
      />
    )
  })
)

export const lineCoordinates = (points: Locationable[]): LatLngable[] => (
  points.map(point => (
    {
      lat: parseFloat(point.location.lat),
      lng: parseFloat(point.location.lng)
    }
  ))
)

export const endsOfDayMarkers = (actualPath: Locationable[]): Marker[] => (
  actualPath.slice(0, actualPath.length - 1)
    .map((point, i) => {
      const marker = coordinatesFor(point)

      return (
        <Marker
          key={point.id}
          icon={categoryIcons["endOfDay"]}
          {...marker}
        >
        </Marker>
      )
    })
)

export const suggestion = (suggestionPin: LatLngable): Marker => (
  suggestionPin.lat !== undefined && (
    <Marker
      options={{ clickable: true}}
      position={suggestionPin}/>
  )
)


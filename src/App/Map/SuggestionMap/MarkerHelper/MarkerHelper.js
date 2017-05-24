import React from "react"
import { Marker } from "react-google-maps"
import { categoryIcons } from "../../category_data"

export const coordinatesFor = point => {
  return {
    position: {
      lat: parseFloat(point.location.lat),
      lng: parseFloat(point.location.lng),
    }
  }
}

export const currentLocationPin = currentLocation => (
  <Marker
    {...coordinatesFor(currentLocation)}
    animation={2}
    icon={categoryIcons["cycling"]}
    options={{clickable: true}}
  />
)


export const suggestionMarkers = (suggestions, handler) => (
  suggestions.map((suggestion, i) => {
    const marker = coordinatesFor(suggestion)

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

export const lineCoordinates = points => (
  points.map(point => (
    {
      lat: parseFloat(point.location.lat),
      lng: parseFloat(point.location.lng)
    }
  ))
)

export const endsOfDayMarkers = actualPath => (
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

export const suggestion = suggestionPin => (
  suggestionPin.lat !== undefined && (
    <Marker
      options={{ clickable: true}}
      position={suggestionPin}/>
  )
)


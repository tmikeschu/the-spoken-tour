import React, { Component } from "react"
import { Marker } from "react-google-maps"
import * as MarkerHelper from "./MarkerHelper"

describe("MarkerHelper", () => {
  const point = {
    location: {
      lat: "40.1",
      lng: "30.9",
    },
    category: "stay",
  }

  const point2 = {
    location: {
      lat: "41.0",
      lng: "20.9",
    },
  }

  const expectedPosition = {
    position: {
      lat: 40.1,
      lng: 30.9,
    },
  }

  describe("#coordinatesFor", () => {
    it("returns a position object with lat lng", () => {
      const coordinates = MarkerHelper.coordinatesFor(point)
      expect(coordinates).toMatchObject(expectedPosition)
    })
  })

  describe("#currentLocationPin", () => {
    it("returns a JSX marker", () => {
      const currentLocationPin = MarkerHelper.currentLocationPin(point)
      expect(currentLocationPin.type.displayName).toEqual("Marker")

      expect(currentLocationPin.props).toBeTruthy()
      expect(currentLocationPin).toMatchSnapshot()
    })
  })

  describe("#suggestionMarkers", () => {
    it("returns a collection of markers", () => {
      const suggestions = [point, point2]
      const handler = () => {}
      const markers = MarkerHelper.suggestionMarkers(suggestions, handler)
      const allMarkers = markers.every(m => m.type.displayName === "Marker")
      expect(allMarkers).toEqual(true)

      markers.forEach(marker => {
        expect(marker).toMatchSnapshot()
      })
    })
  })

  describe("#lineCoordinates", () => {
    it("returns a collection of latLng objects", () => {
      const points = [point, point2]
      const line = MarkerHelper.lineCoordinates(points)
      const allLatLng = line.every(c => c.lat && c.lng)
      expect(allLatLng).toBeTruthy()
      expect(line[0].lat).toEqual(40.1)
      expect(line[0].lng).toEqual(30.9)
    })
  })

  describe("#endsOfDayMarkers", () => {
    it("returns a collection of markers", () => {
      const points = [point, point2]
      const markers = MarkerHelper.endsOfDayMarkers(points)
      const allMarkers = markers.every(m => m.type.displayName === "Marker")
      expect(allMarkers).toEqual(true)

      markers.forEach(marker => {
        expect(marker).toMatchSnapshot()
      })
    })
  })

  describe("#suggestion", () => {
    it("returns a marker", () => {
      const suggestion = point.location
      const marker = MarkerHelper.suggestion(suggestion)
      expect(marker).toMatchSnapshot()
    })
  })
})

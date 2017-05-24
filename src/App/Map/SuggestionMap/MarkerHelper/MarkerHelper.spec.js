import React, { Component } from 'react'
import { Marker } from "react-google-maps"
import * as MarkerHelper from './MarkerHelper'

describe('MarkerHelper', () => {
  const point = {
    location: {
      lat: "40.1",
      lng: "30.9",
    }
  }

  const expectedPosition = {
    position: {
      lat: 40.1,
      lng: 30.9
    }
  }

  describe('#coordinatesFor', () => {
    it('returns a position object with lat lng', () => {
      const coordinates = MarkerHelper.coordinatesFor(point)
      expect(coordinates).toMatchObject(expectedPosition)
    })
  })

  describe('#currentLocationPin', () => {
    it('returns a JSX marker', () => {
      const currentLocationPin = MarkerHelper.currentLocationPin(point)
      expect(currentLocationPin.type.name).toEqual("Marker")

      expect(currentLocationPin.props).toBeTruthy
      const { position, icon, options, animation } = currentLocationPin.props
      expect(position).toEqual(expectedPosition["position"])
      expect(icon).toEqual("https://maps.google.com/mapfiles/ms/icons/cycling.png")
      expect(animation).toEqual(2)
      expect(options).toMatchObject({clickable: true})
    })
  })
})


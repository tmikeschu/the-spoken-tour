import React, { Component } from 'react'
import * as FilterHelper from './FilterHelper'

describe("FilterHelper methods", () => {
  describe("#filterPins", () => {
    describe("when checked is true", () => {
      it("returns a new array with the filter added", () => {
        const event = {
          target: {
            value: "stay",
            checked: true
          }
        }
        const currentFilters = ["places"]
        const expected = ["stay", "places"]

        expect(FilterHelper.filterPins(event, currentFilters))
          .toEqual(expect.arrayContaining(expected))
      })
    })

    describe("when checked is false", () => {
      it("returns  a new array with the filter removed", () => {
        const event = {
          target: {
            value: "places",
            checked: false
          }
        }
        const currentFilters = ["places", "stay"]
        const expected = ["stay"]

        expect(FilterHelper.filterPins(event, currentFilters))
          .toEqual(expect.arrayContaining(expected))
      })
    })
  })
})

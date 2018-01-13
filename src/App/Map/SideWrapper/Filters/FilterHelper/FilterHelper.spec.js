import React, { Component } from "react"
import * as FilterHelper from "./FilterHelper"

describe("FilterHelper methods", () => {
  describe("#filterPins", () => {
    const event = { target: { value: "stay" } }
    describe("If the event target value is in the currentFilters array", () => {
      it("returns an array without that target value", () => {
        const currentFilters = ["places", "stay"]
        const expected = ["places"]
        expect(FilterHelper.filterPins(event, currentFilters)).toMatchObject(
          expected,
        )
      })
    })

    describe("If the event target value is not in the currentFilters array", () => {
      it("returns an array with that target value", () => {
        const currentFilters = ["places"]
        const expected = ["places", "stay"]
        expect(FilterHelper.filterPins(event, currentFilters)).toMatchObject(
          expected,
        )
      })
    })
  })

  describe("#uncheck", () => {
    it("returns an array with a value removed", () => {
      const currentFilters = ["places", "stay"]
      const value = "stay"
      const expected = ["places"]
      expect(FilterHelper.uncheck(value, currentFilters)).toMatchObject(
        expected,
      )
    })
  })

  describe("#check", () => {
    describe("given DISPLAYNONE", () => {
      it("returns an array of only DISPLAYNONE", () => {
        const currentFilters = ["places", "stay"]
        const value = "DISPLAYNONE"
        const expected = ["DISPLAYNONE"]
        expect(FilterHelper.check(value, currentFilters)).toMatchObject(
          expected,
        )
      })
    })

    describe('given ""', () => {
      it('returns an array of only ""', () => {
        const currentFilters = ["places", "stay"]
        const value = ""
        const expected = [""]
        expect(FilterHelper.check(value, currentFilters)).toMatchObject(
          expected,
        )
      })
    })

    describe("given other values", () => {
      it("returns an array updated with that value", () => {
        const currentFilters = ["places"]
        const value = "stay"
        const expected = ["places", "stay"]
        expect(FilterHelper.check(value, currentFilters)).toMatchObject(
          expected,
        )
      })
    })
  })
})

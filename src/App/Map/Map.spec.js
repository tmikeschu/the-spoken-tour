import React from 'react'
import { shallow, mount } from 'enzyme'
import Map from './Map'

const suggestions = [
  {
    location: { lat: 10.0001, lng: 10.0001 },
    description: "sweet", label: "Place to stay", category: "stay"
  }
]

const props = {
  actions: { fetchSuggestions() {}},
  suggestions: suggestions
}

describe('<Map />', () => {
  it('renders the embedded map and side information', () => {
    const wrapper = shallow(<Map {...props} />)
    expect(wrapper.find('SuggestionMapContainer').length).toEqual(1)
    expect(wrapper.find('SideContainer').length).toEqual(1)
  })

  const map = shallow(<Map {...props} />).instance()
  const fetches = [
    "getCurrentLocation", "getRoutePoints", "getActualPath"
  ]

  describe("#componentDidMount", () => {
    it("calls four API GET requests", () => {
      fetches.forEach(f => {
        const restore = map[f]
        const mock = map[f] = jest.fn()
        map.componentDidMount()
        expect(mock).toHaveBeenCalled()

        map[f] = restore
      })
    })
  })

  describe("#get... methods", () => {
    it("all call #getApiObjects", async () => {
      const restore = map.getApiObjects
      const mock = map.getApiObjects = jest.fn()

      fetches.forEach((f, i) => {
        map[f]()
        expect(mock).toHaveBeenCalledTimes(i + 1)
      })

      map.getApiObjects = restore
    })
  })

  describe("#getApiObjects", () => {
    describe("currentLocation", () => {
      it("sets state for currentLocation", async () => {
        await map.getApiObjects("api/v1/current_location", "currentLocation", fakeService)
        expect(map.state.currentLocation).toMatchObject({ set: true })
      })

      it("sets an empty array if no response", async () => {
        await map.getApiObjects("api/v1/current_location", "currentLocation", badService)
        expect(map.state.currentLocation).toMatchObject({})
      })
    })

    describe("routePoints", () => {
      it("sets state for routePoints", async () => {
        await map.getApiObjects("api/v1/route_pins", "routePoints", fakeService)
        expect(map.state.routePoints).toMatchObject(["route points set!"])
      })

      it("sets an empty array if no response", async () => {
        await map.getApiObjects("api/v1/route_pins", "routePoints", badService)
        expect(map.state.routePoints).toMatchObject([])
      })
    })

    describe("actualPath", () => {
      it("sets state for actualPath", async () => {
        await map.getApiObjects("api/v1/actual_path", "actualPath", fakeService)
        expect(map.state.actualPath).toMatchObject(["actual path set!"])
      })

      it("sets an empty array if no response", async () => {
        await map.getApiObjects("api/v1/actual_path", "actualPath", badService)
        expect(map.state.actualPath).toMatchObject([])
      })
    })
  })

  describe("#setSuggestion", () => {
    it("updates suggestionPin state", () => {
      const position = { lat: 10, lng: 10 }
      expect(map.state.suggestionPin).toMatchObject({})
      map.setSuggestion(position)
      expect(map.state.suggestionPin).toMatchObject(position)
    })
  })

  describe("#showSuggestionInfo", () => {
    it("updates suggestionPin state", () => {
      expect(map.state.currentSuggestion).toBeNull()
      expect(map.state.suggestionInfoIsActive).toBeFalsy()

      map.showSuggestionInfo(latLng)

      expect(map.state.currentSuggestion).toMatchObject(suggestions[0])
      expect(map.state.suggestionInfoIsActive).toBeTruthy()
    })
  })

  describe("#coordinatesCloseEnough", () => {
    it("returns true if coordinates round to the same 11th decimal place", () => {
      expect(map.coordinatesCloseEnough(suggestions[0].location, latLng)).toBeTruthy()
    })

    it("returns false if coordinates don't round to the same 11th decimal place", () => {
      expect(map.coordinatesCloseEnough({ lat: 10.0002, lng: 10.0002 }, latLng)).toBeFalsy()
    })
  })

  describe("#elevenDecimalPlaces", () => {
    it("rounds a number with 4 decimal places to 11 decimal places", () => {
      expect(map.elevenDecimalPlaces(10.0234)).toEqual(10.02340000000)
    })

    it("rounds a number with 15 decimal places to 11 decimal places", () => {
      expect(map.elevenDecimalPlaces(10.023491829833019)).toEqual(10.02349182983)
    })

    it("brings a whole number to 11 decimal places", () => {
      expect(map.elevenDecimalPlaces(10)).toEqual(10.00000000000)
    })
  })

  describe("#setFilters", () => {
    it("updates state for pinFilters", () => {
      expect(map.state.pinFilters).toMatchObject([])
      map.setFilters(["stay"])
      expect(map.state.pinFilters).toMatchObject(["stay"])
    })
  })

  describe("#filterPins", () => {
    it("returns suggestions unfiltered if categories not supplied", () => {
      expect(map.filterPins([], suggestions)).toMatchObject(suggestions)
    })

    it("returns only suggestions matching filter", () => {
      const moreSuggestions = suggestions.concat({
        location: { lat: 10.0001, lng: 10.0001 },
        description: "sweet", label: "cool", category: "checkout"
      })
      expect(map.filterPins(["stay"], moreSuggestions)).toMatchObject(suggestions)
    })

    it("returns only suggestions matching multiple filters", () => {
      const addedLocation = {
        location: { lat: 10.0001, lng: 10.0001 },
        description: "sweet", label: "cool", category: "checkout"
      }
      const skippedLocation = {
        location: { lat: 10.0001, lng: 10.0001 },
        description: "sweet", label: "cool", category: "avoid"
      }
      const moreSuggestions = suggestions.concat(addedLocation).concat(skippedLocation)
      expect(map.filterPins(["stay", "checkout"], moreSuggestions))
        .toMatchObject(suggestions.concat(addedLocation))
    })

    it("returns no results if no suggestions match filter", () => {
      expect(map.filterPins(["checkout"], suggestions)).toMatchObject([])
    })
  })
})

const fakeService = {
  get(path) {
    return {
      status: 200,
      data: pathResponses[path]
    }
  }
}

const badService = { get() {} }

const pathResponses = {
  "api/v1/current_location": { set: true },
  "api/v1/suggestion_pins": ["suggestions set!"],
  "api/v1/route_pins": ["route points set!"],
  "api/v1/actual_path": ["actual path set!"]
}

const latLng = {
  lat() { return 10.000100000000000001 },
  lng() { return 10.000100000000000001 }
}


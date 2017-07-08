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
  actions: {
    fetchSuggestions () {},
    addSuggestionPin () {},
    addCurrentSuggestion () {},
    toggleSuggestionInfo () {},
    fetchCurrentLocation () {},
    addPinFilters () {},
    addRoutePoints () {},
    fetchRoutePoints () {},
    addActualPath () {},
    fetchActualPath () {}
  },
  suggestions: suggestions,
  suggestionPin: {},
  currentSuggestion: {},
  suggestionInfoIsActive: false,
  currentLocation: {},
  pinFilters: [],
  routePoints: [],
  actualPath: []
}

describe('<Map />', () => {
  it('renders the embedded map and side information', () => {
    const wrapper = shallow(<Map {...props} />)
    expect(wrapper.find('SuggestionMapWrapper').length).toEqual(1)
    expect(wrapper.find('SideWrapper').length).toEqual(1)
  })

  const map = shallow(<Map {...props} />).instance()

  describe("#componentDidMount", () => {
    it("calls four fetch actions", () => {
      const fetches = [
        "fetchSuggestions",
        "fetchCurrentLocation",
        "fetchRoutePoints",
        "fetchActualPath"
      ]

      fetches.forEach(f => {
        const restore = map.props.actions[f]
        const mock = map.props.actions[f] = jest.fn()
        map.componentDidMount()
        expect(mock).toHaveBeenCalled()
        map.props.actions[f] = restore
      })
    })

  })

  describe("#showSuggestionInfo", () => {
    it("calls the addCurrentSuggestion action", () => {
      const restore = map.props.actions.addCurrentSuggestion
      const mock = map.props.actions.addCurrentSuggestion = jest.fn()

      map.showSuggestionInfo(latLng)

      expect(mock).toHaveBeenCalled()
      map.props.actions.addCurrentSuggestion = restore
    })

    it("calls the toggleSuggestionInfo action", () => {
      const restore = map.props.actions.toggleSuggestionInfo
      const mock = map.props.actions.toggleSuggestionInfo = jest.fn()

      map.showSuggestionInfo(latLng)
      expect(mock).toHaveBeenCalled()

      map.props.actions.toggleSuggestionInfo = restore
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


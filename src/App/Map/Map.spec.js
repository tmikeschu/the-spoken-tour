import React from "react"
import { shallow } from "enzyme"
import Map from "./Map"

const suggestions = [
  {
    location: { lat: 10.0001, lng: 10.0001 },
    description: "sweet",
    label: "Place to stay",
    category: "stay",
  },
]

const props = {
  actions: {
    addSuggestions: jest.fn(),
    addCurrentSuggestion: jest.fn(),
    toggleSuggestionInfo: jest.fn(),
    addCurrentLocation: jest.fn(),
    addRoutePoints: jest.fn(),
    addActualPath: jest.fn(),
  },
  suggestions: suggestions,
  pinFilters: [],
}

describe("<Map />", () => {
  const wrapper = shallow(<Map {...props} />)
  const map = wrapper.instance()

  it("renders the embedded map and side information", () => {
    expect(wrapper.find("SuggestionMapWrapper").length).toEqual(1)
    expect(wrapper.find("SideWrapper").length).toEqual(1)
  })

  describe("#componentDidMount", () => {
    it("calls getInitialData", () => {
      const restore = map.getInitialData
      const mock = (map.getInitialData = jest.fn())

      map.componentDidMount()
      expect(mock).toHaveBeenCalled()
      map.getInitialData = restore
    })
  })

  describe("#getInitialData", () => {
    const requests = [
      {
        path: "/api/v1/suggestion_pins",
        action: "addSuggestions",
      },
      {
        path: "/api/v1/current_location",
        action: "addCurrentLocation",
      },
    ]

    const fakeService = {
      get: jest.fn().mockReturnValue({ data: "FAKE DATA" }),
    }

    it("calls requests for each a path", () => {
      map.getInitialData(requests, fakeService)
      requests.forEach(request => {
        expect(fakeService.get).toHaveBeenCalledWith(request.path)
      })
    })

    it("calls actions for each request", () => {
      requests.forEach(request => {
        const mock = map.props.actions[request.action]
        map.componentDidMount()
        expect(mock).toHaveBeenCalledWith("FAKE DATA")
      })
    })
  })

  describe("#showSuggestionInfo", () => {
    it("calls the addCurrentSuggestion action", () => {
      const restore = map.props.actions.addCurrentSuggestion
      const mock = (map.props.actions.addCurrentSuggestion = jest.fn())

      map.showSuggestionInfo(latLng)

      expect(mock).toHaveBeenCalled()
      map.props.actions.addCurrentSuggestion = restore
    })

    it("calls the toggleSuggestionInfo action", () => {
      const restore = map.props.actions.toggleSuggestionInfo
      const mock = (map.props.actions.toggleSuggestionInfo = jest.fn())

      map.showSuggestionInfo(latLng)
      expect(mock).toHaveBeenCalled()

      map.props.actions.toggleSuggestionInfo = restore
    })
  })

  describe("#coordinatesCloseEnough", () => {
    it("returns true if coordinates round to the same 11th decimal place", () => {
      expect(
        map.coordinatesCloseEnough(suggestions[0].location, latLng),
      ).toBeTruthy()
    })

    it("returns false if coordinates don't round to the same 11th decimal place", () => {
      expect(
        map.coordinatesCloseEnough({ lat: 10.0002, lng: 10.0002 }, latLng),
      ).toBeFalsy()
    })
  })

  describe("#elevenDecimalPlaces", () => {
    const { elevenDecimalPlaces } = map

    it("rounds a number with 4 decimal places to 11 decimal places", () => {
      expect(elevenDecimalPlaces(10.0234)).toEqual(10.0234)
    })

    it("rounds a number with 15 decimal places to 11 decimal places", () => {
      expect(elevenDecimalPlaces(10.023491829833019)).toEqual(10.02349182983)
    })

    it("brings a whole number to 11 decimal places", () => {
      expect(elevenDecimalPlaces(10)).toEqual(10.0)
    })
  })

  describe("#filterPins", () => {
    it("returns nothing for no categories", () => {
      expect(map.filterPins([], suggestions)).toMatchObject([])
    })

    it("returns only suggestions matching filter", () => {
      const moreSuggestions = suggestions.concat({
        location: { lat: 10.0001, lng: 10.0001 },
        description: "sweet",
        label: "cool",
        category: "checkout",
      })
      expect(map.filterPins(["stay"], moreSuggestions)).toMatchObject(
        suggestions,
      )
    })

    it("returns only suggestions matching multiple filters", () => {
      const addedLocation = {
        location: { lat: 10.0001, lng: 10.0001 },
        description: "sweet",
        label: "cool",
        category: "checkout",
      }
      const skippedLocation = {
        location: { lat: 10.0001, lng: 10.0001 },
        description: "sweet",
        label: "cool",
        category: "avoid",
      }
      const moreSuggestions = suggestions
        .concat(addedLocation)
        .concat(skippedLocation)
      expect(
        map.filterPins(["stay", "checkout"], moreSuggestions),
      ).toMatchObject(suggestions.concat(addedLocation))
    })

    it("returns no results if no suggestions match filter", () => {
      expect(map.filterPins(["checkout"], suggestions)).toMatchObject([])
    })
  })
})

const latLng = {
  lat() {
    return 10.000100000000000001
  },
  lng() {
    return 10.000100000000000001
  },
}

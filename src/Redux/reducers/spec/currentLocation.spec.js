import reducers from "../index"
import * as types from "../../types"

describe("Reducers#currentLocation", () => {
  it("returns initial state", () => {
    const expectedState = reducers(undefined, {})
    expect(expectedState).toMatchObject({
      map: {
        currentLocation: {}
      }
    })
  })

  it("returns initial state for unkown action types", () => {
    const expectedState = reducers(undefined, { type: "SOMETHING_ELSE" })
    expect(expectedState).toMatchObject({
      map: {
        currentLocation: {}
      }
    })
  })

  it("handles ADD_CURRENT_LOCATION", () => {
    const expectedState = reducers({}, {
      type: types.ADD_CURRENT_LOCATION,
      data: { lat: 0, lng: 0}
    })
    expect(expectedState).toMatchObject({
      map: {
        currentLocation: { lat: 0, lng: 0 }
      }
    })
  })
})

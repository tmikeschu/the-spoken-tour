import reducers from "../index.js"
import * as types from "../../types"

describe("Reducers#routePoints", () => {
  it("returns initial state", () => {
    const expectedState = reducers(undefined, {})
    expect(expectedState).toMatchObject({
      map: {
        routePoints: [],
      },
    })
  })

  it("returns initial state for unkown action types", () => {
    const expectedState = reducers(undefined, { type: "SOMETHING_ELSE" })
    expect(expectedState).toMatchObject({
      map: {
        routePoints: [],
      },
    })
  })

  it("handles ADD_ROUTE_POINTS", () => {
    const expectedState = reducers(
      {},
      {
        type: types.ADD_ROUTE_POINTS,
        data: [{ lat: 0, lng: 0 }],
      },
    )
    expect(expectedState).toMatchObject({
      map: {
        routePoints: [{ lat: 0, lng: 0 }],
      },
    })
  })
})

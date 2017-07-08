import reducers from "../index.js"
import * as types from "../../types"

describe("Reducers#actualPath", () => {
  it("returns initial state", () => {
    const expectedState = reducers(undefined, {})
    expect(expectedState).toMatchObject({
      map: {
        actualPath: []
      }
    })
  })

  it("returns initial state for unkown action types", () => {
    const expectedState = reducers(undefined, { type: "SOMETHING_ELSE" })
    expect(expectedState).toMatchObject({
      map: {
        actualPath: []
      }
    })
  })

  it("handles ADD_ACTUAL_PATH", () => {
    const expectedState = reducers({}, {
      type: types.ADD_ACTUAL_PATH,
      data: [ { lat: 0, lng: 0 } ] 
    })
    expect(expectedState).toMatchObject({
      map: {
        actualPath: [ { lat: 0, lng: 0 } ]
      }
    })
  })
})

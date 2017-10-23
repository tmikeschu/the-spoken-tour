import reducers from "../index.js"
import * as types from "../../types"

describe("Reducers#pinFilters", () => {
  it("returns initial state", () => {
    const expectedState = reducers(undefined, {})
    expect(expectedState).toMatchObject({
      map: {
        pinFilters: ["DISPLAYNONE"]
      }
    })
  })

  it("returns initial state for unkown action types", () => {
    const expectedState = reducers(undefined, { type: "SOMETHING_ELSE" })
    expect(expectedState).toMatchObject({
      map: {
        pinFilters: ["DISPLAYNONE"]
      }
    })
  })

  it("handles ADD_SUGGESTIONS", () => {
    const expectedState = reducers({}, { type: types.ADD_PIN_FILTERS, data: [ "stay" ] })
    expect(expectedState).toMatchObject({
      map: {
        pinFilters: [ "stay" ]
      }
    })
  })
})

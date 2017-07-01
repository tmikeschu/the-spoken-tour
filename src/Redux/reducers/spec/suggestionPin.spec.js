import reducers from "../index"
import * as types from "../../types"

describe("Reducers#suggestionPin", () => {
  it("returns initial state", () => {
    const expectedState = reducers(undefined, {})
    expect(expectedState).toMatchObject({
      suggestionPin: {}
    })
  })

  it("returns initial state for unkown action types", () => {
    const expectedState = reducers(undefined, { type: "SOMETHING_ELSE" })
    expect(expectedState).toMatchObject({
      suggestionPin: {}
    })
  })

  it("handles ADD_SUGGESTION_PIN", () => {
    const expectedState = reducers({}, {
      type: types.ADD_SUGGESTION_PIN,
      data: { lat: 0, lng: 0 }
    })
    expect(expectedState).toMatchObject({
      suggestionPin: { lat: 0, lng: 0 }
    })
  })
})

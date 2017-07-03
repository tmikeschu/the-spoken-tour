import reducers from "../index"
import * as types from "../../types"

describe("Reducers#currentSuggestion", () => {
  it("returns initial state", () => {
    const expectedState = reducers(undefined, {})
    expect(expectedState).toMatchObject({
      map: {
        currentSuggestion: {}
      }
    })
  })

  it("returns initial state for unkown action types", () => {
    const expectedState = reducers(undefined, { type: "SOMETHING_ELSE" })
    expect(expectedState).toMatchObject({
      map: {
        currentSuggestion: {}
      }
    })
  })

  it("handles ADD_CURRENT_SUGGESTION", () => {
    const expectedState = reducers({}, {
      type: types.ADD_CURRENT_SUGGESTION,
      data: { description: "YES" }
    })
    expect(expectedState).toMatchObject({
      map: {
        currentSuggestion: { description: "YES" }
      }
    })
  })
})

import reducers from "../index.js"
import * as types from "../../types"

describe("Reducers#suggestions", () => {
  it("returns initial state", () => {
    const expectedState = reducers(undefined, {})
    expect(expectedState).toMatchObject({
      photos: [],
      map: {
        suggestions: [],
        suggestionPin: {}
      }
    })
  })

  it("returns initial state for unkown action types", () => {
    const expectedState = reducers(undefined, { type: "SOMETHING_ELSE" })
    expect(expectedState).toMatchObject({
      photos: [],
      map: {
        suggestions: [],
        suggestionPin: {}
      }
    })
  })

  it("handles ADD_SUGGESTIONS", () => {
    const expectedState = reducers({}, { type: types.ADD_SUGGESTIONS, data: [ "suggestion1" ] })
    expect(expectedState).toMatchObject({
      photos: [],
      map: {
        suggestions: [ "suggestion1" ],
        suggestionPin: {}
      }
    })
  })
})

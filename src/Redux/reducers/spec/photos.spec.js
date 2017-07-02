import reducers from "../index"
import * as types from "../../types"

describe("Reducers#photos", () => {
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

  it("handles ADD_PHOTOS", () => {
    const expectedState = reducers({}, { type: types.ADD_PHOTOS, data: [ "photo1" ] })
    expect(expectedState).toMatchObject({
      photos: [ "photo1" ],
      map: {
        suggestions: [],
        suggestionPin: {}
      }
    })
  })
})


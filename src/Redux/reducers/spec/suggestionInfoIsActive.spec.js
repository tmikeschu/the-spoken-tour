import reducers from "../index"
import * as types from "../../types"

describe("Reducers#suggestionInfoIsActive", () => {
  it("returns initial state", () => {
    const expectedState = reducers(undefined, {})
    expect(expectedState).toMatchObject({
      map: {
        suggestionInfoIsActive: false
      }
    })
  })

  it("returns initial state for unkown action types", () => {
    const expectedState = reducers(undefined, { type: "SOMETHING_ELSE" })
    expect(expectedState).toMatchObject({
      map: {
        suggestionInfoIsActive: false
      }
    })
  })

  it("handles TOGGLE_SUGGESTION_INFO_IS_ACTIVE", () => {
    const expectedState = reducers({}, {
      type: types.TOGGLE_SUGGESTION_INFO_IS_ACTIVE,
      data: true
    })
    expect(expectedState).toMatchObject({
      map: {
        suggestionInfoIsActive: true
      }
    })
  })
})

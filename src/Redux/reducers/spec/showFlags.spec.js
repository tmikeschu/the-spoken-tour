import reducers from "../index.js"
import * as types from "../../types"

describe("Reducers#showFlags", () => {
  it("returns initial state", () => {
    const expectedState = reducers(undefined, {})
    expect(expectedState).toMatchObject({
      map: {
        showFlags: false,
      },
    })
  })

  it("returns initial state for unkown action types", () => {
    const expectedState = reducers(undefined, { type: "SOMETHING_ELSE" })
    expect(expectedState).toMatchObject({
      map: {
        showFlags: false,
      },
    })
  })

  it("handles TOGGLE_FLAGS", () => {
    const expectedState = reducers({}, { type: types.TOGGLE_FLAGS })
    expect(expectedState).toMatchObject({
      map: {
        showFlags: true,
      },
    })
  })
})

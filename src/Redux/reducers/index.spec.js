import reducers from "./index"
import * as types from "../types"

describe("Reducers", () => {
  describe("#photos", () => {
    it("returns initial state", () => {
      const expectedState = reducers(undefined, {})
      expect(expectedState).toMatchObject({
        photos: []
      })
    })

    it("returns initial state for unkown action types", () => {
      const expectedState = reducers(undefined, { type: "SOMETHING_ELSE" })
      expect(expectedState).toMatchObject({
        photos: []
      })
    })

    it("handles ADD_PHOTOS", () => {
      const expectedState = reducers({}, { type: types.ADD_PHOTOS, data: [ "photo1" ] })
      expect(expectedState).toMatchObject({
        photos: [ "photo1" ]
      })
    })
  })

  describe("#suggestions", () => {
    it("returns initial state", () => {
      const expectedState = reducers(undefined, {})
      expect(expectedState).toMatchObject({
        suggestions: []
      })
    })

    it("returns initial state for unkown action types", () => {
      const expectedState = reducers(undefined, { type: "SOMETHING_ELSE" })
      expect(expectedState).toMatchObject({
        suggestions: []
      })
    })

    it("handles ADD_PHOTOS", () => {
      const expectedState = reducers({}, { type: types.ADD_SUGGESTIONS, data: [ "suggestion1" ] })
      expect(expectedState).toMatchObject({
        suggestions: [ "suggestion1" ]
      })
    })
  })
})

import { actions } from "./actionsSpecHelper"

describe("Actions#suggestionPin", () => {
  const expectedAction = { type: "ADD_SUGGESTION_PIN", data: { lat: 0, lng: 0 } }

  describe("#addSuggestionPin", () => {
    it("returns an object with a type and data", () => {
      const result = actions.addSuggestionPin(expectedAction.data)
      expect(result).toMatchObject(expectedAction)
    })
  })
})


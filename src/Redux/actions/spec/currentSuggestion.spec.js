import { actions } from "./actionsSpecHelper"

describe("Actions#currentSuggestion", () => {
  const expectedAction = { type: "ADD_CURRENT_SUGGESTION", data: { description: "YES" } }

  describe("#addCurrentSuggestion", () => {
    it("returns an object with a type and data", () => {
      const result = actions.addCurrentSuggestion(expectedAction.data)
      expect(result).toMatchObject(expectedAction)
    })
  })
})


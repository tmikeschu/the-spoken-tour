import { actions, mockStore, fakeService, responses } from "./actionsSpecHelper"

describe("Actions#suggestions", () => {
  const expectedAction = { type: "ADD_SUGGESTIONS", data: [ "suggestion1", "suggestion2" ] }

  describe("#fetchSuggestions", () => {
    it("updates the action data", async () => {
      const store = mockStore({ suggestions: [] })
      await store.dispatch(actions.fetchSuggestions(fakeService))
      expect(store.getActions()).toMatchObject([expectedAction])
    })
  })

  describe("#addSuggestions", () => {
    it("returns an object with a type and data", () => {
      const result = actions.addSuggestions(fakeService.get("/api/v1/suggestion_pins").data)
      expect(result).toMatchObject(expectedAction)
    })
  })
})


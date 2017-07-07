import { actions, mockStore, fakeService, responses } from "./actionsSpecHelper"

describe("Actions#pinFilters", () => {
  const expectedAction = { type: "ADD_PIN_FILTERS", data: [ "stay", "cool" ] }

  describe("#addPinFilters", () => {
    it("updates the action data", async () => {
      const store = mockStore({ pinFilters: [] })
      await store.dispatch(actions.addPinFilters(["stay", "cool"]))
      expect(store.getActions()).toMatchObject([expectedAction])
    })
  })

  describe("#addPinFilters", () => {
    it("returns an object with a type and data", () => {
      const result = actions.addPinFilters(["stay", "cool"])
      expect(result).toMatchObject(expectedAction)
    })
  })
})


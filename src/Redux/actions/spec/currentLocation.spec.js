import { actions, mockStore, fakeService, responses } from "./actionsSpecHelper"

describe("Actions#currentLocation", () => {
  const expectedAction = { type: "ADD_CURRENT_LOCATION", data: { lat: 0, lng: 0} }

  describe("#fetchCurrentLocation", () => {
    it("updates the action data", async () => {
      const store = mockStore({ currentLocation: {} })
      await store.dispatch(actions.fetchCurrentLocation(fakeService))
      expect(store.getActions()).toMatchObject([expectedAction])
    })
  })

  describe("#addCurrentLocation", () => {
    it("returns an object with a type and data", () => {
      const result = actions.addCurrentLocation(expectedAction.data)
      expect(result).toMatchObject(expectedAction)
    })
  })
})


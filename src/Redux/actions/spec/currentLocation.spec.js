import { actions, mockStore, fakeService } from "./actionsSpecHelper"

describe("Actions#currentLocation", () => {
  const expectedAction = {
    type: "ADD_CURRENT_LOCATION",
    data: { lat: 0, lng: 0 },
  }

  describe("#addCurrentLocation", () => {
    it("returns an object with a type and data", () => {
      const result = actions.addCurrentLocation(expectedAction.data)
      expect(result).toMatchObject(expectedAction)
    })
  })
})

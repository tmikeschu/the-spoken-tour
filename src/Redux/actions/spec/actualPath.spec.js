import { actions, mockStore, fakeService, responses } from "./actionsSpecHelper"

describe("Actions#actualPath", () => {
  const data = [
    { lat: 0, lng: 0 },
    { lat: 1, lng: 1 }
  ]
  const expectedAction = { type: "ADD_ACTUAL_PATH", data }

  describe("#fetchActualPath", () => {
    it("updates the action data", async () => {
      const store = mockStore({ routePins: [] })
      await store.dispatch(actions.fetchActualPath(fakeService))
      expect(store.getActions()).toMatchObject([expectedAction])
    })
  })

  describe("#addActualPath", () => {
    it("returns an object with a type and data", () => {
      const result = actions.addActualPath(fakeService.get("/api/v1/actual_path").data)
      expect(result).toMatchObject(expectedAction)
    })
  })
})


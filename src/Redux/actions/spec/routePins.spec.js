import { actions, mockStore, fakeService, responses } from "./actionsSpecHelper"

describe("Actions#routePoints", () => {
  const data = [
    { lat: 0, lng: 0 },
    { lat: 1, lng: 1 }
  ]
  const expectedAction = { type: "ADD_ROUTE_POINTS", data }

  describe("#addRoutePoints", () => {
    it("returns an object with a type and data", () => {
      const result = actions.addRoutePoints(fakeService.get("/api/v1/route_pins").data)
      expect(result).toMatchObject(expectedAction)
    })
  })
})


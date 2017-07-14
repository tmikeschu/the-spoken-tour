import { actions, mockStore, fakeService } from "./actionsSpecHelper"

describe("Actions#photos", () => {
  const expectedAction = { type: "ADD_PHOTOS", data: ["photo1", "photo2"] }

  describe("#fetchPhotos", () => {
    it("updates the action data", async () => {
      const store = mockStore({ photos: [] })
      await store.dispatch(actions.fetchPhotos(fakeService))
      expect(store.getActions()).toMatchObject([expectedAction])
    })
  })

  describe("#addPhotos", () => {
    it("returns an object with a type and data", () => {
      const result = actions.addPhotos(fakeService.get("/api/v1/instagram_photos").data)
      expect(result).toMatchObject(expectedAction)
    })
  })
})


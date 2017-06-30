import * as actions from "./index"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import * as types from "../types"

const mockStore = configureMockStore([thunk])

const fakeService = {
  get(url) {
    return {
      status: 200,
      data: ["photo1", "photo2"]
    }
  }
}

describe("Actions", () => {
  describe("photos", () => {
    const expectedAction = { type: "ADD_PHOTOS", data: ["photo1", "photo2"] }
    describe("#fetchPhotos", () => {
      it("does something", async () => {
        const store = mockStore({ photos: [] })
        const it = await store.dispatch(actions.fetchPhotos(fakeService))
        expect(store.getActions()).toMatchObject([expectedAction])
      })
    })

    describe("#addPhotos", () => {
      it("returns an object with a type and data", () => {
        const result = actions.addPhotos(fakeService.get().data)
        expect(result).toMatchObject(expectedAction)  
      })
    })
  })
})


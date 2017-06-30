import * as actions from "./index"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import * as types from "../types"

const mockStore = configureMockStore([thunk])

const fakeService = {
  get (url) {
    return {
      status: 200,
      data: responses[url]
    }
  }
}

const responses = {
  "/api/v1/suggestion_pins": ["suggestion1", "suggestion2"],
  "/api/v1/instagram_photos": ["photo1", "photo2"],
}

describe("Actions", () => {
  describe("photos", () => {
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

  describe("suggestions", () => {
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
})


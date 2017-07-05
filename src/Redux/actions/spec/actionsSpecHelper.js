import * as actions from "../index"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"

export { actions }

export const mockStore = configureMockStore([thunk])

export const fakeService = {
  get (url) {
    return {
      status: 200,
      data: responses[url]
    }
  }
}

export const responses = {
  "/api/v1/suggestion_pins": ["suggestion1", "suggestion2"],
  "/api/v1/instagram_photos": ["photo1", "photo2"],
  "/api/v1/current_location": { lat: 0, lng: 0},
}


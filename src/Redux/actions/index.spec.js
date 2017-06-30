import * as actions from "./index"

describe("Actions", () => {
  describe("#fetchPhotos", () => {
    it("does something", () => {
      actions.fetchPhotos(fakeService)
    })
  })
})

const fakeService = {
  get(url) {
    return {
      status: 200,
      data: []
    }
  }
}

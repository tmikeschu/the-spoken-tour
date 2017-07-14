import { actions, mockStore } from "./actionsSpecHelper"

describe("Actions#toggleFlags", () => {
  const expectedAction = { type: "TOGGLE_FLAGS" }

  it("updates the action data", async () => {
    const store = mockStore({ showFlags: false })
    await store.dispatch(actions.toggleFlags())
    expect(store.getActions()).toMatchObject([expectedAction])
  })

  it("returns an object with a type and data", () => {
    const result = actions.toggleFlags()
    expect(result).toMatchObject(expectedAction)
  })
})



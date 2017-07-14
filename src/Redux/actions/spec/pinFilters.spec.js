import { actions, mockStore } from "./actionsSpecHelper"

describe("Actions#addPinFilters", () => {
  const expectedAction = { type: "ADD_PIN_FILTERS", data: [ "stay", "cool" ] }

  it("updates the action data", async () => {
    const store = mockStore({ pinFilters: [] })
    await store.dispatch(actions.addPinFilters(["stay", "cool"]))
    expect(store.getActions()).toMatchObject([expectedAction])
  })

  it("returns an object with a type and data", () => {
    const result = actions.addPinFilters(["stay", "cool"])
    expect(result).toMatchObject(expectedAction)
  })
})


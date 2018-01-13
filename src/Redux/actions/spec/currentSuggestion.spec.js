import { actions } from "./actionsSpecHelper"

describe("Actions#addCurrentSuggestion", () => {
  const expectedAction = {
    type: "ADD_CURRENT_SUGGESTION",
    data: { description: "YES" },
  }

  it("returns an object with a type and data", () => {
    const result = actions.addCurrentSuggestion(expectedAction.data)
    expect(result).toMatchObject(expectedAction)
  })
})

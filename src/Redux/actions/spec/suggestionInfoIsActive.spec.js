import { actions } from "./actionsSpecHelper"

describe("Actions#suggestionInfoIsActive", () => {
  const expectedAction = { type: "TOGGLE_SUGGESTION_INFO_IS_ACTIVE", data: true }

  it("returns an object with a type and data", () => {
    const result = actions.toggleSuggestionInfo(expectedAction.data)
    expect(result).toMatchObject(expectedAction)
  })
})


import React from "react"
import { shallow } from "enzyme"
import SuggestionInfo from "./SuggestionInfo"

describe("<SuggestionInfo />", () => {
  const props = {
    currentSuggestion: {},
    suggestionInfoIsActive: false
  }
  const wrapper = shallow(<SuggestionInfo {...props} />)

  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(wrapper.getNodes()).toMatchSnapshot()
    })
  })
})

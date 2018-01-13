import React from "react"
import { shallow } from "enzyme"
import SideWrapper from "./SideWrapper"

const props = {
  currentLocation: { date: "" },
  suggestionInfoIsActive: false,
  setFilters: function() {},
  pinFilters: [],
  categories: [],
  sideClass: "visible",
}

describe("<SideWrapper />", () => {
  const wrapper = shallow(<SideWrapper {...props} />)

  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})

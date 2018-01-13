import React from "react"
import { shallow } from "enzyme"
import Checkbox from "./Checkbox"
import { categoryLabels } from "../../../category_data"

describe("<Checkbox />", () => {
  const props = {
    category: "stay",
    filterPins: function() {},
    pinFilters: [],
  }
  const wrapper = shallow(<Checkbox {...props} />)

  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})

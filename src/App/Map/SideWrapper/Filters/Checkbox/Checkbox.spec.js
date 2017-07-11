import React from 'react'
import { shallow } from "enzyme"
import Checkbox from "./Checkbox"
import { categoryLabels } from '../../../category_data'

describe("<Checkbox />", () => {
  const props = {
    category: "stay",
    filterPins: function () {},
    pinFilters: []
  }
  const checkbox = shallow(<Checkbox {...props} />)

  it("renders without crashing", () => {
    expect(checkbox).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(checkbox.getNodes()).toMatchSnapshot()
    })
  })
})

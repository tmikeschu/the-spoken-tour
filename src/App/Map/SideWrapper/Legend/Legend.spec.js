import React from "react"
import { shallow } from "enzyme"
import Legend from "./Legend"
import Category from './Category/Category'
import { categoryIcons } from '../../category_data'

describe("<Legend />", () => {
  const wrapper = shallow(<Legend categories={["stay"]} date="TODAY" />)

  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})

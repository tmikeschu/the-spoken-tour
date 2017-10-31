import React from 'react'
import { shallow } from "enzyme"
import Category from "./Category"
import { categoryIcons, categoryLabels } from '../../../category_data'

describe("<Category />", () => {
  const wrapper = shallow(<Category category="stay" />)

  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})

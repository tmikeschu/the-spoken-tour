import React from 'react'
import { shallow } from "enzyme"
import Nav from "./Nav"

describe("<Nav />", () => {
  const wrapper = shallow(<Nav />)

  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})

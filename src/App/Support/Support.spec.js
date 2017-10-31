import React from "react"
import { shallow } from "enzyme"
import Support from "./Support"

describe("<Support />", () => {
  const wrapper = shallow(<Support />)

  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})

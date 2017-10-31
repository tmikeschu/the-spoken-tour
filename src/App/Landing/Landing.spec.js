import React from "react"
import { shallow } from "enzyme"
import Landing from "./Landing"

describe("<Landing />", () => {
  const wrapper = shallow(<Landing />)

  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})

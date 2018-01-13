import React from "react"
import About from "./About"

describe("<About />", () => {
  const wrapper = shallow(<About />)

  it("renders sections who, what, where, and why", () => {
    expect(wrapper).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })
})

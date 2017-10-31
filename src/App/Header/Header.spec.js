import React from "react"
import Header from "./Header"

describe("<Header />", () => {
  const wrapper = shallow(<Header />)

  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})


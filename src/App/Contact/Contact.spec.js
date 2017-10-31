import React from "react"
import Contact from "./Contact"

describe("<Contact />", () => {
  const wrapper = shallow(<Contact />)

  it("renders a contact page", () => {
    expect(wrapper).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})


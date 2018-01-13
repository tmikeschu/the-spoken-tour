import React, { Component } from "react"
import Home from "./Home"

describe("<Home />", () => {
  const wrapper = shallow(<Home />)

  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})

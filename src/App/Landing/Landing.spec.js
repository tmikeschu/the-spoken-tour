import React from "react"
import { shallow } from "enzyme"
import Landing from "./Landing"

describe("<Landing />", () => {
  const landing = shallow(<Landing />)

  it("renders without crashing", () => {
    expect(landing).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(landing.getNodes()).toMatchSnapshot()
    })
  })
})


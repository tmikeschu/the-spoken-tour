import React from "react"
import { shallow } from "enzyme"
import Info from "./Info"

describe("<Info />", () => {
  const wrapper = shallow(<Info />)

  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy()
  })

  it("renders content", () => {
    expect(wrapper).toMatchSnapshot()
  })
})

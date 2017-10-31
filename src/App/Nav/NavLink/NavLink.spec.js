import React from 'react'
import { shallow } from "enzyme"
import NavLink from "./NavLink"
import { Link } from 'react-router'

describe("<NavLink />", () => {
  const wrapper = shallow(<NavLink to="/" />)

  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})

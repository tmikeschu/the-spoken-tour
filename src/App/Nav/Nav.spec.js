import React from 'react'
import { shallow } from "enzyme"
import Nav from "./Nav"
import NavLink from './NavLink/NavLink'

describe("<Nav />", () => {
  const nav = shallow(<Nav />)

  it("renders without crashing", () => {
    expect(nav).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(nav.getNodes()).toMatchSnapshot()
    })
  })
})

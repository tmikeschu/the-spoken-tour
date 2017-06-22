import React from 'react'
import { shallow } from "enzyme"
import NavLink from "./NavLink"
import { Link } from 'react-router'

describe("<NavLink />", () => {
  const navLink = shallow(<NavLink to="/" />)

  it("renders without crashing", () => {
    expect(navLink).toBeTruthy()
  })

  it("renders the correct link", () => {
    expect(navLink.equals(
      <Link to="/" activeClassName="active" />
    )).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(navLink.getNodes()).toMatchSnapshot()
    })
  })
})

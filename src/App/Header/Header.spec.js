import React, { Component } from "react"
import { shallow } from "enzyme"
import Header from "./Header"
import { Link } from 'react-router'
import logo from './wheel.svg'

describe("<Header />", () => {
  const header = shallow(<Header />)

  it("renders without crashing", () => {
    expect(header).toBeTruthy()
  })

  it("renders the correct content", () => {
    expect(header.equals(
      <article className="header">
        <img src={logo} className="header-logo" alt="logo" />
        <h3><Link to="/landing">The Spoken Tour</Link></h3>
      </article>
    )).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(header.getNodes()).toMatchSnapshot()
    })
  })
})


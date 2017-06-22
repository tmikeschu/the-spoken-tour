import React from 'react'
import { shallow } from "enzyme"
import Nav from "./Nav"
import NavLink from './NavLink/NavLink'

describe("<Nav />", () => {
  const nav = shallow(<Nav />)

  it("renders without crashing", () => {
    expect(nav).toBeTruthy()
  })

  it("renders the correct content", () => {
    expect(nav.equals(
      <article className="nav">
        <ul>
          <li><NavLink to="about">Trip</NavLink></li>
          <li><NavLink to="map">Map</NavLink></li>
          <li><NavLink to="instagram">Photos</NavLink></li>
          <li><NavLink to="podcast">Podcast</NavLink></li>
          <li><NavLink to="contact">Contact</NavLink></li>
          <li><NavLink to="support">Support</NavLink></li>
        </ul>
      </article>
    )).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(nav.getNodes()).toMatchSnapshot()
    })
  })
})

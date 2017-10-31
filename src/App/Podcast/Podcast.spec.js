import React from 'react'
import { shallow } from "enzyme"
import Podcast from "./Podcast"
import { Link } from 'react-router'

describe("<Podcast />", () => {
  const wrapper = shallow(<Podcast />)

  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})

import React, { Component } from 'react'
import { Link } from 'react-router'
import { shallow, mount } from 'enzyme'
import Home from './Home'

describe('<Home />', () => {
  const home = shallow(<Home />)

  it ('renders without crashing', () => {
    expect(home).toBeTruthy()
  })

  it ('renders an image and a content div', () => {
    expect(home.equals(
      <article className="home">
        <img src="http://www.clipartbest.com/cliparts/7ca/6EB/7ca6EBkMi.png" alt="bicycle"/>
        <div className="content">
          <Link to="/landing">Pedal to our site!</Link>
        </div>
      </article>
    )).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(home.getNodes()).toMatchSnapshot()
    })
  }) 
})


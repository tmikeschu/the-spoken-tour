import React, { Component } from 'react'
import { shallow, mount } from 'enzyme'
import Instagram from './Instagram'

const fakeActions = {
  fetchPhotos() {}
}

const fakePhotos = ["AHH!", "YEAHH!"]

describe('<Instagram />', () => {
  const insta = shallow(<Instagram  actions={fakeActions} photos={fakePhotos} />)

  it('renders without crashing', () => {
    expect(insta).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(insta.getNodes()).toMatchSnapshot()
    })
  })

  it('renders a heading, a link, and photos', () => {
    expect(insta.find('h3').length).toEqual(1)
    expect(insta.find('section a').length).toEqual(1)
    expect(insta.find('.photos div').length).toEqual(2)
  })
})

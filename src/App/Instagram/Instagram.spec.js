import React, { Component } from 'react'
import { shallow } from 'enzyme'
import Instagram from './Instagram'

const fakeActions = {
  fetchPhotos() {}
}

const fakePhotos = ["AHH!", "YEAHH!"]

describe('<Instagram />', () => {
  const wrapper = shallow(<Instagram  actions={fakeActions} photos={fakePhotos} />)

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(wrapper.getNodes()).toMatchSnapshot()
    })
  })

  describe("componentDidMount", () => {
    it("calls the fetchPhotos action", () => {
      const instagram = wrapper.instance()
      const restore = instagram.props.actions.fetchPhotos
      const mock = instagram.props.actions.fetchPhotos = jest.fn()
      instagram.componentDidMount()
      expect(mock).toHaveBeenCalled()

      instagram.props.actions.fetchPhotos = restore
    })
  })

  it('renders a heading, a link, and photos', () => {
    expect(wrapper.find('h3').length).toEqual(1)
    expect(wrapper.find('section a').length).toEqual(1)
    expect(wrapper.find('.photos div').length).toEqual(2)
  })
})

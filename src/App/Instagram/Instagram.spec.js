import React, { Component } from 'react'
import { shallow, mount } from 'enzyme'
import Instagram from './Instagram'

const fakeResponse = {
  status: 201,
  data: ["AHH!", "YEAHH!"]
}

const fakeService = {
  get(url) {
    return fakeResponse
  }
}

describe('<Instagram />', () => {
  const insta = shallow(<Instagram />)

  it('renders without crashing', () => {
    expect(insta).toBeTruthy()
  })

  describe("snapshot", () => {
    it("is valid", () => {
      expect(insta.getNodes()).toMatchSnapshot()
    })
  })

  it('renders a heading, a link, and photos', () => {
    const photos = [{ image: '', caption: ''}]
    insta.setState({instagramPhotos: photos})

    expect(insta.find('h3').length).toEqual(1)
    expect(insta.find('section a').length).toEqual(1)
    expect(insta.find('.photos div').length).toEqual(1)
  })

  describe("#getPhotos", () => {
    it("is called upon mount", () => {
      const restore = Instagram.prototype.getPhotos
      const mock = Instagram.prototype.getPhotos = jest.fn()
      const insta = mount(<Instagram />)
      expect(mock).toHaveBeenCalled()

      Instagram.prototype.getPhotos = restore
    })

    it("it returns a response", async () => {
      const insta = shallow(<Instagram />).instance()
      const response = await insta.getPhotos(fakeService)

      expect(response).toMatchObject(fakeResponse)
    })

    it("calls #setPhotos", async () => {
      const insta = shallow(<Instagram />).instance()
      const spy = jest.spyOn(insta, "setPhotos")
      await insta.getPhotos(fakeService)

      expect(spy).toHaveBeenCalled()
      spy.mockRestore()
    })
  })

  describe("#setPhotos", () => {
    it("updates photo state", () => {
      const insta = shallow(<Instagram />).instance()
      expect(insta.state.instagramPhotos).toEqual([])

      insta.setPhotos(fakeResponse.data)

      expect(insta.state.instagramPhotos).toEqual(["AHH!", "YEAHH!"])
    })

    it("can take bad data", () => {
      const insta = shallow(<Instagram />).instance()
      expect(insta.state.instagramPhotos).toEqual([])

      insta.setPhotos(null)
      expect(insta.state.instagramPhotos).toEqual([])

      insta.setPhotos(undefined)
      expect(insta.state.instagramPhotos).toEqual([])
    })
  })
})

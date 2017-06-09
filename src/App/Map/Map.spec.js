import React from 'react'
import { shallow, mount } from 'enzyme'
import Map from './Map'

describe('<Map />', () => {
  it('renders the embedded map and side information', () => {
    const map = shallow(<Map />)
    expect(map.find('SuggestionMapContainer').length).toEqual(1)
    expect(map.find('SideContainer').length).toEqual(1)
  })
})


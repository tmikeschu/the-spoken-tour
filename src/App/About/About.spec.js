import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

describe('<About />', () => {
  it('renders sections who, what, where, and why', () => {
    const about = shallow(<About />);
    expect(about.find('section.who').length).toEqual(1);
    expect(about.find('section.what').length).toEqual(1);
    expect(about.find('section.where').length).toEqual(1);
    expect(about.find('section.why').length).toEqual(1);
    expect(about.find('section').length).toEqual(4)
  });
});

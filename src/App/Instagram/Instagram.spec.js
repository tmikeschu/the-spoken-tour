import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Instagram from './Instagram';

describe('<Instagram />', () => {
  it('renders without crashing', () => {
    const insta = shallow(<Instagram />);
    expect(insta).toBeTruthy();
  });
  

  it('renders a heading, a link, and photos', () => {
    const photos = [{ image: '', caption: ''}];
    const insta = shallow(<Instagram />);
    insta.setState({instagramPhotos: photos})

    expect(insta.find('h3').length).toEqual(1);
    expect(insta.find('section a').length).toEqual(1);
    expect(insta.find('.photos div').length).toEqual(1);
  });
});

import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  it('renders without crashing', () => {
    const header = shallow(<Header />);
    expect(header).toBeTruthy();
  });

  it('renders an image and a heading', () => {
    const header = shallow(<Header />);
    expect(header.find('.header').length).toEqual(1);
    expect(header.find('img').length).toEqual(1);
    expect(header.find('h3').length).toEqual(1);
  });
});

